import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const MensPerfume = (props) => {

    const type = props.location.state.type
    const [menPerfume, setMenPerfume] = useState([])

    useEffect(() => {
        const url = `http://localhost:5000/api/articles/type/man`

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
                setMenPerfume(data)
            });


        return () => {
            console.log('cleanup');
        }
    }, [])
    console.log(type)
    console.log(menPerfume);
    return (
        <>

            <Header />
            <div className="container d-flex flex-wrap ">
                {menPerfume.map(item => {
                    const { id, title, summary, photo, price } = item
                    return <div key={id} className='py-5 px-3 w-50 d-flex align-items-center'>
                        <div>
                            <Link to={{ pathname: "/eachperfume", state: { perfumeId: item.id } }}>
                                <img src={photo} alt="" className="perfume-img m-2" />
                            </Link>
                        </div>
                        <div className="d-flex flex-column">
                            <div>
                                <h4 className="text-center">{title}</h4>
                                <p className="text-justify">{summary}</p>
                            </div>
                            <div className="d-flex justify-content-between">

                                <h4>{price}$ </h4>
                                <button className="buy-button">Buy now</button>

                            </div>
                        </div>

                    </div>
                })}
            </div>


        </>
    )
}

export default MensPerfume