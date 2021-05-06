import React from 'react'
import { Link } from 'react-router-dom'

const GenderFilteredHtml = ({ handleCartItems, search, menPerfume }) => {
    return (
        <>

            <div className="main-content container-xl d-flex flex-wrap  ">
                {menPerfume.filter((val) => {
                    if (search === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                    return ''
                }).map(item => {
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

                                    <h4>{price}$</h4>
                                    <button className="buy-button" onClick={() => handleCartItems(item)} >Buy now</button>

                                </div>
                            </div>
                        </div>

                    </div>
                })}
            </div>


        </>
    )
}

export default GenderFilteredHtml