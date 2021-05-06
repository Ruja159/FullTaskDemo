import React, { useState } from 'react'
import Header from './Header';
import Content from './Content';

const Home = ({ loginHandler }) => {

    const [parfumeType, setParfumeType] = useState("all");
    const [search, setSearch] = useState('');
    let [sum, setSum] = useState(0)
    const [cartItems, setCartItems] = useState({
        numberOfItems: 0,
        items: []
    });

    const handleParfumeTypeChange = (value) => {
        setParfumeType(value);

    }

    const handleSearch = (keyWord) => {
        setSearch(keyWord);
    }

    const handleCartItems = (item) => {

        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id === item.id);
        if (oneItem === undefined) {
            items.push({ item: item, counter: 1 });
        } else {
            oneItem.counter = oneItem.counter + 1;
        }

        setCartItems({ numberOfItems: cartItems.numberOfItems + 1, items: items });


        setSum(calculateSum(items));
    }

    const handleParfumeAdd = (id) => {
        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id === id);

        if (oneItem !== undefined) {
            oneItem.counter++;
            setCartItems({ ...cartItems, numberOfItems: cartItems.numberOfItems + 1 });

            setSum(calculateSum(items));
        }
    }

    const handleParfumeRemove = (id) => {
        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id === id);

        if (oneItem !== undefined && oneItem.counter > 0) {
            oneItem.counter--;
            setCartItems({ ...cartItems, numberOfItems: cartItems.numberOfItems - 1 });
            setSum(calculateSum(items));
        }
    }

    const calculateSum = (selectedItems) => {
        const newPriceArray = selectedItems.map(i => {
            let genericPrice = i.item.defaultPrice * i.counter;
            return genericPrice;
        })


        const total = newPriceArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

        return total;
    }

    const handleRemovePerfumeCart = (id) => {
        let updatedParfumes = cartItems.items.filter(i => i.item.id !== id);
        let newNumberOfItems = 0;
        updatedParfumes.forEach(element => {
            newNumberOfItems += element.item.counter;
        });

        setCartItems({ ...cartItems, items: updatedParfumes, numberOfItems: newNumberOfItems });
        // setSum(updatedParfumes)
    }
    return (

        <>
            <Header
                loginHandler={loginHandler}
                handleParfumeTypeChange={handleParfumeTypeChange}
                handleSearch={handleSearch}
                cartItems={cartItems}
                sum={sum}
                handleParfumeAdd={handleParfumeAdd}
                handleParfumeRemove={handleParfumeRemove}
                handleRemovePerfumeCart={handleRemovePerfumeCart} />
            <Content parfumeType={parfumeType} search={search} handleCartItems={handleCartItems} />
        </>
    )
}

export default Home