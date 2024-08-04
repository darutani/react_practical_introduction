import './EventPassive.css';
import {useRef, useEffect} from "react";

// export default function EventPassive() {
//     const handleWheel = e => e.preventDefault();
//     return (
//         <div onWheel={handleWheel} className="box">
//             例えばwheelイベントをハンドラーで...
//         </div>
//     );
// }

export default function EventPassive() {
    const handleWheel = e => e.preventDefault();
    const divRef = useRef(null);
    useEffect(() => {
        const div = divRef.current;
        div.addEventListener('wheel', handleWheel, { passive: false });
        return (() => {
            div.removeEventListener('wheel', handleWheel);
        });
    });
    return (
        <div ref={divRef} className="box">
            例えばwheelイベントをハンドラーで...
        </div>
    );
}