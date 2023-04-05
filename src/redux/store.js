import cakeReducer from './cake/cakeReducer';
import { configureStore } from '@reduxjs/toolkit';
import icecreamReducer from './icecream/icecreamReducer';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    }
});

export default store;
