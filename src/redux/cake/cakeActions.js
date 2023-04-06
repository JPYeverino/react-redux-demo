import { BUY_CAKE, BUY_CAKES } from "./cakeType"

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const buyCakes = (numberOfItems) => {
    return {
        type: BUY_CAKES,
        payload: numberOfItems
    }
}