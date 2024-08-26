import {useDebugValue, useReducer} from "react";

export default function useCounter(init, step) {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'update' :
                    return { count: state.count + action.step };
                case 'reset' :
                    return { count: action.init };
                default :
                    return state;
            }
        },
        {
            count: init
        }
    );
    useDebugValue(state.count >= 10 ? '10Over' : '10Less');

    const handleUp = () => dispatch({ type: 'update', step: step });
    const handleDown = () => dispatch({ type: 'update', step: -step });
    const handleReset = () => dispatch({ type: 'reset', init: init });

    return [state, handleUp, handleDown, handleReset];
}