import {useState} from "react";

export function StateBasic({init}) {
    const [count, setCount] = useState(init);
    console.log(`count is ${count}.`)

    const handleClick = () => setCount(count + 1);

    return (
        <div>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </div>
    )
}