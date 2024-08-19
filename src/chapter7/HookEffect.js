import {useEffect, useLayoutEffect, useState} from "react";

const sleep = delay => {
    const start = Date.now();
    while (true) {
        if (Date.now() - start > delay) { break; }
    }
};

export default function HookEffect({ init }) {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        sleep(2000);
        setCount(init);
    }, []);

    const handleClick = () => {
        setCount(c => c + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回、クリックされました。</p>
        </div>
    )
}