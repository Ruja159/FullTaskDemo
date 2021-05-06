import React from 'react'

import { Link } from 'react-router-dom'

const PerfumesHtml = ({ handleCartItems, search, items }) => {
    return (
        <>
            <div className="container-lg mt-5 d-flex flex-wrap justify-content-between">
                {items.filter((val) => {
                    if (search === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                    return ''
                }).map(item => {
                    const { id, title, summary, photo, price } = item
                    return <div key={id} className='card my-4 perfume-item' >
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
                            <button className="buy-button" onClick={() => handleCartItems(item)}>Buy now</button>
                        </div>

                    </div>
                })}

            </div>
        </>
    )
}

export default PerfumesHtml