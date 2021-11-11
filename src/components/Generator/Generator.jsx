import React from "react";

import style from "./Generator.module.css";
import Checkbox from "./Checkbox";

function Generator() {
    const [length, setLength] = React.useState(8);

    const checkboxes = ["Uppercase", "Lowercase", "Number", "Symbols"];

    const handleSlider = (event) => {
        setLength(event.target.value);
    };

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
                        <input
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            onChange={(event) => handleSlider(event)}
                        />
                        <span>{length}</span>
                    </label>
                </div>
                <div className={style.checkers}>
                    {checkboxes.map((checkbox) => (
                        <Checkbox key={checkbox} name={checkbox} />
                    ))}
                </div>
            </div>
            <button>Generate Password</button>
        </div>
    );
}

export default Generator;
