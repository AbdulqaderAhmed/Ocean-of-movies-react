import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './counterSlice/CounterSlice';

export const store = configureStore({
	reducer: {
		counter: CounterReducer
	}
});
