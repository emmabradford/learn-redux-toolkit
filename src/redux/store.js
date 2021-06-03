import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';

export default configureStore ({
    reducer: {
        conter: counterReducer
    }
});