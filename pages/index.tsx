import type { NextPage } from "next";

// useSelector is used to pull the value form the global store
// useDispatch is used to dispatch the action we created earlier
import { useSelector, useDispatch } from "react-redux";

// These are the actions which we are going to dispatch
// in order to manipulate the value in the global data layer
import { decrement, increment } from "../slices/counterSlice";

// Gives us the correct typings based on how we configured our slices
import { RootState } from "../app/store";

const Home: NextPage = () => {
  // We pull the value of count from the global store
  const count = useSelector((state: RootState) => state.counter.value);

  // Create a dispatch hook
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="p-2">The value of counter is {count}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-400 p-2 m-1 w-full"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 p-2 m-1 w-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
