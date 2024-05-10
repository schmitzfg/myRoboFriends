import React from 'react';
import '../index.css';

const Card = ({name, email, id}) => {
    return (
        <div className="card" >
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot image" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;