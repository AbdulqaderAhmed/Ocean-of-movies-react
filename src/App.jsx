import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './features/counterSlice/CounterSlice';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleIncrementBy = () => {
		dispatch(incrementBy(2));
	};

	return (
		<div className="App">
			<button onClick={handleIncrement}>+</button>
			<h1>{count}</h1>
			<button onClick={handleDecrement}>-</button>
			<h1>increment by 2</h1>
			<button onClick={handleIncrementBy}>2</button>
		</div>
	);
}

export default App;
