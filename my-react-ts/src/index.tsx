import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyledPanel from "./StyledPanel";
import StateBasic from "./StateBasic";
import ListTemplate from "./ListTemplate";
import books from "./books"
import {Book} from "./Book";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/* 10-2-3 */
// root.render(
//     <React.StrictMode>
//         <h3>Styled JSXの基本</h3>
//         <StateBasic init={0} />
//     </React.StrictMode>
// )

/* 10-2-4 */
// root.render(
//     <React.StrictMode>
//         <StyledPanel>
//             <p>メンバー募集中！</p>
//             <p>ようこそ、WINGSプロジェクトへ！！</p>
//         </StyledPanel>
//     </React.StrictMode>
// )

/* 10-2-5 */
root.render(
    <React.StrictMode>
        <ListTemplate src={books}>
        {(elem: Book) => (
            <>
                <dt>
                    <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
                        {elem.title} ({elem.price}円)
                    </a>
                </dt>
                <dd>{elem.summary}</dd>
            </>
        )}
        </ListTemplate>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
