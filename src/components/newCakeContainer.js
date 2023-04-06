import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake, buyCakes } from '../redux';

function HooksCakesContainer() {
    const [cakesToBuy, setCakesToBuy] = useState(1);
    const { numberOfCakes } = useSelector((state) => state.cake);
    const dispatch = useDispatch();

    return (
        <div>
            <input type='text' value={cakesToBuy} onChange={(element) => setCakesToBuy(element.target.value)} placeholder='How many cakes you want?'></input>
            <button onClick={() => dispatch(buyCakes(cakesToBuy))}>Buy</button>
        </div>
    );
}

export default HooksCakesContainer;