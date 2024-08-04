import './EventPropagation.css';

// バブリングフェーズ順にイベントが発生
// export default function EventPropagation() {
//     const handleParent = () => alert('#paret run...');
//     const handleMy = () => alert('#my run...');
//     const handleChild = () => alert('#child run...');
//     return (
//         <div id="parent" onClick={handleParent}>
//             親要素
//             <div id="my" onClick={handleMy}>
//                 現在要素
//                 <a id="子要素" onClick={handleChild} href="https://wings.msn.to">
//                     子要素
//                 </a>
//             </div>
//         </div>
//     );
// }

// キャプチャフェーズ順にイベントを発生
// export default function EventPropagation() {
//     const handleParent = () => alert('#paret run...');
//     const handleMy = () => alert('#my run...');
//     const handleChild = () => alert('#child run...');
//     return (
//         <div id="parent" onClickCapture={handleParent}>
//             親要素
//             <div id="my" onClickCapture={handleMy}>
//                 現在要素
//                 <a id="子要素" onClickCapture={handleChild} href="https://wings.msn.to">
//                     子要素
//                 </a>
//             </div>
//         </div>
//     );
// }

// childでイベント伝播をストップ
// export default function EventPropagation() {
//     const handleParent = () => alert('#paret run...');
//     const handleMy = () => alert('#my run...');
//     const handleChild = e => {
//         e.stopPropagation();
//         alert('#child run...');
//     }
//     return (
//         <div id="parent" onClick={handleParent}>
//             親要素
//             <div id="my" onClick={handleMy}>
//                 現在要素
//                 <a id="子要素" onClick={handleChild} href="https://wings.msn.to">
//                     子要素
//                 </a>
//             </div>
//         </div>
//     );
// }

// 既定のイベントの動作をキャンセルする
export default function EventPropagation() {
    const handleParent = () => alert('#paret run...');
    const handleMy = () => alert('#my run...');
    const handleChild = e =>{
        e.preventDefault();
        alert('#child run...');
    }
    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="子要素" onClick={handleChild} href="https://wings.msn.to">
                    子要素
                </a>
            </div>
        </div>
    );
}