import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const { numberOfCakes } = useSelector((state) => state.cake);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Num of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </>
    );
}

export default HooksCakeContainer;