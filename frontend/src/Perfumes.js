import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Perfumes = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const url = "http://localhost:5000/api/articles"

        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors'
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setItems(data)
            });
    }, [])

    return (
        <div class="container mt-5 d-flex flex-wrap justify-content-between">
            {items.map(item => {
                const { id, title, summary, photo, price } = item
                return <div key={id} className='card my-4' style={{ width: "31%" }}>
                    <Link to={{ pathname: "/eachperfume", state: { perfumeId: item.id } }}>
                        <div className="d-flex justify-content-center">
                            <img src={photo} alt="" className="perfume-img m-2" />

                        </div>
                    </Link>
                    <div className="price-holder position-absolute d-flex justify-content-center
                    align-items-center">
                        <h4 className="text-white">{price}$</h4>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">{title}</h4>
                        <p className="card-text card-text-hight text-justify p-1">{summary}</p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="buy-button">Buy now</button>
                    </div>

                </div>
            })}

        </div>)
}

export default Perfumes