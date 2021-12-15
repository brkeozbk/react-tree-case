import React from 'react'

export default function Button(props) { //Apple componentinde arrow function içinde yazılan kodu çağırdık
    return (
        <div>
            <button onClick={props.Apple}>Click</button> 
        </div>
    )
}
