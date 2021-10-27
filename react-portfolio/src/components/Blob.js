import React from "react"
import './Blob.scss'

function Blob(){
    const [blobClass, setBlobClass] = React.useState('');

    const handleUserKeyPress = React.useCallback(event => {
        if(event.keyCode === 38 && blobClass===''){
            event.preventDefault()
                setBlobClass('jump')
                setTimeout(()=> setBlobClass(''), 300)
        }
    }, [blobClass]);
    
    React.useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
    

    return <div id="blob" className={blobClass}></div>
}

export default Blob