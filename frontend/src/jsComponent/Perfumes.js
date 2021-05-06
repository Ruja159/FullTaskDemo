import { useState, useEffect } from 'react'
import PerfumesHtml from '../htmlComponent/PerfumesHtml';

const Perfumes = ({ handleCartItems, search }) => {

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

    return (
        <PerfumesHtml
            handleCartItems={handleCartItems}
            search={search}
            items={items}
        />
    )
}

export default Perfumes