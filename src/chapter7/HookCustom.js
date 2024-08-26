import useCounter from "./UseCounter";

export default function HookCustom() {
    const [state, handleUp, handleDown, handleReset] = useCounter(0, 1);

    return (
        <>
            <button type="button" onClick={handleUp}>カウントアップ</button>
            <button type="button" onClick={handleDown}>カウントダウン</button>
            <button type="button" onClick={handleReset}>リセット</button>
            <p>{state.count}回、クリックされました</p>
        </>
    );
}