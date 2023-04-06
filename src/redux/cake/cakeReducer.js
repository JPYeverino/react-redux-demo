import { BUY_CAKE, BUY_CAKES } from "./cakeType";

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case BUY_CAKES:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        default: return state
    }
}

export default cakeReducer;