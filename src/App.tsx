import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AppRootState } from "./store/rootReducer";
import { fetchPokemon, toggleEvolved } from "./store/dummy/effects";

function App() {
    const { isEvolved, pokemon } = useSelector(
        (state: AppRootState) => state.dummySlice
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch, isEvolved]);

    const handleToggle = () => dispatch(toggleEvolved());

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{pokemon ? pokemon.name : "No data"}</p>
                <button onClick={handleToggle}>Toggle evolution state</button>
            </header>
        </div>
    );
}

export default App;
