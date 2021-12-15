import React, {useState} from 'react'
import Button from './Button';


export default function Tree() {
    const [Apple, setApple] = useState(false)

    const handleTree = () =>{
        setApple(true);
    }
    return (
        <div>
            <div className='container-tree'>
             <img src={require ('../assets/src/tree.png')} className={`treeImg ${Apple ? 'shake' : null }`}/>
             </div>
             <Button shake = {handleTree}/>
        </div>

        
    )
}
