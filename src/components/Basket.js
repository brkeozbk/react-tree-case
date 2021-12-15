
import React, { useState } from 'react';
import Apple from './apple';

export default function Basket() {

const [changeApple, setChangeApple] = useState(false)

const HandleClick = (index) =>{
    setChangeApple(true)
}
    return (
        <div>
            <Apple change={HandleClick}/>
            <img src="../../../public/images/basket.jpg"/>

        <img src="../../../public/images/apple.png" alt=""  className={`basketapple1 ${changeApple ? 'vBasketapple' : null }`}/>

        </div>
    )
}
