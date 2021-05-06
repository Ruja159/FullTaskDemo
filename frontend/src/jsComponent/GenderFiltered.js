import React, { useState, useEffect } from 'react'
import GenderFilteredHtml from '../htmlComponent/GenderFilteredHtml'

const GenderFiltered = ({ type, search, handleCartItems }) => {

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
                url = url + "";
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
    }, [type]);

    return (
        <GenderFilteredHtml
            menPerfume={menPerfume}
            search={search}
            handleCartItems={handleCartItems} />
    )
}

export default GenderFiltered;