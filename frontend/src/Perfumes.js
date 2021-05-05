import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Perfumes = ({ handleCartItems, search, currency }) => {

    const [items, setItems] = useState([]);

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
                data = data.map(i => { return { ...i, defaultPrice: i.price } });
                setItems(data);
            });
    }, [])

    useEffect(() => {
        let reCalculatedItems = items.map(i => {
            switch (currency) {
                case "USD":
                    i.price *= 2;
                    break;
                default: //for EURO 
                    i.price = i.price / 2;
            }
            return { ...i, price: i.price };
        });
        console.log("REC", reCalculatedItems);
        setItems(reCalculatedItems);
    }, [currency])


    return (
        <div className="container mt-5 d-flex flex-wrap justify-content-between">
            {items.filter((val) => {
                if (search === "") {
                    return val
                } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                    return val
                }
                return ''
            }).map(item => {
                const { id, title, summary, photo, price } = item
                return <div key={id} className='card my-4 ' style={{ width: "31%" }}>
                    <Link to={{ pathname: "/eachperfume", state: { perfumeId: item.id } }}>
                        <div className="d-flex justify-content-center">
                            <img src={photo} alt="" className="perfume-img m-2" />
                        </div>
                    </Link>
                    <div className="price-holder position-absolute d-flex justify-content-center
                    align-items-center">
                        <h4 className="text-white">{price}{currency == "EUR" ? "€" : "$"}</h4>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">{title}</h4>
                        <p className="card-text card-text-hight text-justify p-1">{summary}</p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="buy-button" onClick={() => handleCartItems(item)}>Buy now</button>
                    </div>

                </div>
            })}

        </div>
    )
}

export default Perfumes