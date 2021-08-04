import React from 'react'

const Image = ({imgSrc,code}) => {
    return (
        <div>
            <img src={imgSrc} alt={ code}/>
        </div>
    )
}

export default Image
