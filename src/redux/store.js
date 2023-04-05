import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: cakeReducer
});

export default store;
