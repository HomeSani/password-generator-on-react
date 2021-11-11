import React from "react";

import style from "./App.module.css";
import Header from "./components/Header";
import Generator from "./components/Generator/Generator";

function App() {
    return (
        <div className={style.App}>
            <div className={style.content}>
                <Header />
                <Generator />
            </div>
        </div>
    );
}

export default App;
