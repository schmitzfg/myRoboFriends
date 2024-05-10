import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('NOOOO this is fake error')
    // }
    return(
        <div>
        {robots.map((user, i) => {
        return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
    })}
        </div>
    );
}

export default CardList;


// key={i}  - punem asta in caz cind stergem un robot React sa stie care anume este, 
// adica key