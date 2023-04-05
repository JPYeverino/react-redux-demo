import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux";

function HookIcecreamContainer () {
    const { numberOfIcecreams} = useSelector((state) => state.icecream)
    const dispatch = useDispatch();
    
    return (
        <>
        <h2>Number of icecreams - {numberOfIcecreams}</h2>
        <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </>
    );
}

export default HookIcecreamContainer;