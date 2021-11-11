import React from "react";
import { checkbox } from "./Checkbox.module.css";

function Checkbox({ name }) {
    const [check, setCheck] = React.useState(false);

    return (
        <label className={checkbox}>
            {name}
            <input
                type="checkbox"
                checked={check}
                onChange={(event) => setCheck(!check)}
            />
        </label>
    );
}

export default Checkbox;
