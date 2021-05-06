import React from 'react'
import Perfumes from './Perfumes';
import GenderFiltered from './GenderFiltered'

const Content = ({ parfumeType, search, handleCartItems }) => {


    return (
        <>
            { parfumeType === "all" ? <Perfumes handleCartItems={handleCartItems} search={search} /> : <GenderFiltered type={parfumeType} search={search} handleCartItems={handleCartItems} />}
        </>

    )
}

export default Content;