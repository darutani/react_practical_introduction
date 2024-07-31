import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// chapter3
import {EventBasic} from "./chapter3/EventBasic";
import {StateBasic} from "./chapter3/StateBasic";
import {ForList} from "./chapter3/ForList";
import {books} from "./chapter3/books";
import {ForNest} from "./chapter3/ForNest";
import SelectStyle from "./chapter3/SelectStyle";


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// setInterval(() => {
//     root.render(
//         <p>現在時刻：{(new Date()).toLocaleString()}</p>
//     );
// }, 1000)


/* chapter3-1-3 */
// root.render(
//     <React.StrictMode>
//         <EventBasic type="date" />
//     </React.StrictMode>
//     )


/* chapter3-1-4 */
// root.render(
//     <React.StrictMode>
//         <StateBasic init={0} />
//     </React.StrictMode>
// )


/* chapter3-2-1 */
// root.render(
//     <React.StrictMode>
//         <ForList src={books} />
//     </React.StrictMode>
// )

/* cahpter3-2-7 */
// root.render(
//     <React.StrictMode>
//         <ForNest src={books} />
//     </React.StrictMode>
// )

/* chapter3-2-18 */
root.render(
    <React.StrictMode>
        <SelectStyle mode='light' />
    </React.StrictMode>
)
