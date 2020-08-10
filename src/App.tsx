import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { AppRootState } from "./store/rootReducer";
import { fetchApiResponse } from "./store/dummy/effects";

function App() {
    const { pokemon } = useSelector((state: AppRootState) => state.dummySlice);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchApiResponse());
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{pokemon ? pokemon.name : "No data"}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
