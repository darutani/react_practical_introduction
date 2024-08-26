import {useDeferredValue, useState} from "react";

export default function HookDeferred() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    const handleChange = e => {
        setText(e.target.value);
        console.log(text, deferredText);
    }

    return (
        <>
            <input type="text" value={text} onChange={handleChange} />
            {[...Array(10000)].map((e, index) => <p key={index}>{deferredText}</p>)}
        </>
    );
}