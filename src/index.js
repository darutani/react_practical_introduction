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
import StyledPanel from "./chapter3/StyledPanel";
import TitledPanel from "./chapter3/TitledPanel"
import ListTemplate from "./chapter3/ListTemplate";
import MyHello from "./chapter3/MyHello";
import {StateParent} from "./chapter3/StateParent";


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


/* 3-3-15 */
// root.render(
//     <React.StrictMode>
//         <MyHello />
//     </React.StrictMode>
// )


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
// root.render(
//     <React.StrictMode>
//         <SelectStyle mode='light' />
//     </React.StrictMode>
// )


/* chapter3-3-2 */
// root.render(
//     <React.StrictMode>
//         <StyledPanel>
//             <p>メンバー募集中！</p>
//             <p>ようこそ、WINGSプロジェクトへ！！</p>
//         </StyledPanel>
//     </React.StrictMode>
// )

/* chapter3-3-4 */
// root.render(
//     <React.StrictMode>
//         <TitledPanel
//             title={
//                 <p>メンバー募集中！</p>
//             }
//             body={
//                 <p>ようこそ、WINGSプロジェクトへ！！</p>
//             }
//         >
//         </TitledPanel>
//     </React.StrictMode>
// )

/* 3-3-7 */
// root.render(
//     <React.StrictMode>
//         <TitledPanel>
//             <p key="title">メンバー募集中！</p>
//             <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
//         </TitledPanel>
//     </React.StrictMode>
// )

/* 3-3-11 */
// root.render(
//     <React.StrictMode>
//         <ListTemplate src={books}>
//         {elem => (
//             <>
//                 <dt>
//                     <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
//                         {elem.title} ({elem.price}円)
//                     </a>
//                 </dt>
//                 <dd>{elem.summary}</dd>
//             </>
//         )}
//         </ListTemplate>
//     </React.StrictMode>
// )

/* 3-3-13 */
// root.render(
//     <React.StrictMode>
//         <ListTemplate src={books} render={ elem => (
//             <>
//                 <dt>
//                     <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
//                         {elem.title} ({elem.price}円)
//                     </a>
//                 </dt>
//                 <dd>{elem.summary}</dd>
//             </>
//         )} />
//     </React.StrictMode>
// )

/* 3-3-31 */
root.render(
    <React.StrictMode>
        <StateParent />
    </React.StrictMode>
)
