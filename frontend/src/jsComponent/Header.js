
import React from 'react';
import HeaderHtml from '../htmlComponent/HeaderHtml'
import { useHistory } from 'react-router-dom'



const Header = ({
    cartItems,
    sum,
    loginHandler,
    handleParfumeTypeChange,
    handleSearch,
    handleParfumeAdd,
    handleParfumeRemove,
    handleRemovePerfumeCart }) => {
    const history = useHistory();


    const handleLogOut = () => {
        loginHandler(false);
        localStorage.removeItem('token');
        history.push('/login');
    }

    const handleAbout = () => {
        history.push("/about")
    }
    const handleContact = () => {
        history.push("/contact")
    }



    return (
        <HeaderHtml
            cartItems={cartItems}
            sum={sum}
            handleParfumeTypeChange={handleParfumeTypeChange}
            handleSearch={handleSearch}
            handleParfumeAdd={handleParfumeAdd}
            handleParfumeRemove={handleParfumeRemove}
            handleRemovePerfumeCart={handleRemovePerfumeCart}
            handleLogOut={handleLogOut}
            handleAbout={handleAbout}
            handleContact={handleContact}
        />
    )


}

export default Header
