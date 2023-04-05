import React from 'react';
import { useSelector } from 'react-redux';

function HooksCakeContainer() {
    const numberOfCakes = useSelector((state) => state.numberOfCakes);
    
    return (
        <>
            <h2>Num of cakes - {numberOfCakes}</h2>
            <button>Buy Cake</button>
        </>
    );
}

export default HooksCakeContainer;