import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const GenderFiltered = ({ type }) => {

    const [menPerfume, setMenPerfume] = useState([]);

    useEffect(() => {
        let url = `http://localhost:5000/api/articles/type/`;

        switch (type) {
            case "man":
                url = url + "man";
                break;
            case "woman":
                url = url + "woman";
                break;
            default:
                url = url;
        }

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
                setMenPerfume(data);
            });


        return () => {
            console.log('cleanup');
        }
    }, [type]);

    // useEffect(() => {
    //     let reCalculatedItems = menPerfume.map(i => {
    //         switch (currency) {
    //             case "USD":
    //                 i.price *= 2;
    //                 break;
    //             default: //for EURO 
    //                 i.price = i.price / 2;
    //         }
    //         return {...i, price: i.price};
    //     });
    //     console.log("REC", reCalculatedItems);
    //     setMenPerfume(reCalculatedItems);
    // }, [currency]);


    return (
        <>

            <div className="container-xl d-flex flex-wrap  ">
                {menPerfume.map(item => {
                    const { id, title, summary, photo, price } = item
                    return <div key={id} id="gender-perfumes" className='col-sm-12 col-md-6 py-3' >
                        <div id="gender-perfumes-content" className="px-3 m-3 d-flex align-items-center shadow">
                            <div>
                                <Link to={{ pathname: "/eachperfume", state: { perfumeId: item.id } }}>
                                    <img src={photo} alt="" className="perfume-img m-2" />
                                </Link>
                            </div>
                            <div className="d-flex flex-column">
                                <div>
                                    <h4>{title}</h4>
                                    <p className="text-justify card-text-hight">{summary}</p>
                                </div>
                                <div className="d-flex justify-content-between">

                                    <h4>{price}</h4>
                                    <button className="buy-button">Buy now</button>

                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>


        </>
    )
}

export default GenderFiltered;