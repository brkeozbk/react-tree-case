import { useState } from 'react'
import Tree from './Tree'
import react from 'react'


export default function Apple(props) {
     const [apple, setApple] = useState(false)
     const [apple1, setApple1] = useState(false)
     const [apple2, setApple2] = useState(false)


     const changedApples = () =>{
         setApple(true)
         setApple1(true)
         setApple2(true)


     }
    return (
        <div>
            <Tree fall={changedApples}/>
            <div className='container'>
            <img src={require ('../assets/src/apple.png')} className={`treeImg ${apple ? 'shake' : null }`}/>
            </div>
        </div>
    )
}
