import cakeReducer from './cake/cakeReducer';
import { configureStore } from '@reduxjs/toolkit';
import icecreamReducer from './icecream/icecreamReducer';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: [logger],
    devTools: true
});

export default store;
