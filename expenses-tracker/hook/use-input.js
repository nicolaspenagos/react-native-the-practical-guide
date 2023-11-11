import { useState } from "react";
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const valueChangeHandler = (text) => {
        setValue(text);
    }
    return {
        value,
        valueChangeHandler
    }
}
export default useInput;