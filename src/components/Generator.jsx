import React from "react";
import style from "./Generator.module.css";

function Generator() {
    return (
        <div className={style.generator}>
            <input
                type="text"
                readOnly={true}
                placeholder="Click on button"
                value={"jqqiu313%!@^AS"}
            />
            <div className={style.options}>
                <div className={style.slider}>
                    <label>
                        Password length
                        <input type="range" min={6} max={100} />
                        <span>100</span>
                    </label>
                </div>
                <div className={style.checkers}>
                    <label>
                        Uppercase
                        <input type="checkbox" />
                    </label>
                    <label>
                        Lowercase
                        <input type="checkbox" />
                    </label>
                    <label>
                        Numbers
                        <input type="checkbox" />
                    </label>
                    <label>
                        Symbols
                        <input type="checkbox" />
                    </label>
                </div>
            </div>
            <button>Generate Password</button>
        </div>
    );
}

export default Generator;
