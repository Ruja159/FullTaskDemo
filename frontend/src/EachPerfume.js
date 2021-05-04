import { useState, useEffect } from 'react'

const EachPerfume = (props) => {

    const id = props.location.state.perfumeId

    const [item,setItem] = useState({})


   

    useEffect(() => {   
            const url = `http://localhost:5000/api/articles/${id}`
    
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
                    setItem(data)
                });  
            
    },[id])
    console.log(item);
    console.log(id);
    return (
        <>
           <div>
           <img src={item.photo} alt="" />
               <h1>{item.title}</h1>
               <p>{item.summary}</p>
               <h3>{item.price}$</h3>
           </div>
        </>
    )
}

export default EachPerfume