import cakeReducer from './cake/cakeReducer';
import { configureStore } from '@reduxjs/toolkit';
import icecreamReducer from './icecream/icecreamReducer';
import logger from 'redux-logger';
import userReducer from './user/userReducer';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        users: userReducer
    },
    middleware: [logger, thunk],
    devTools: true
});

export default store;
