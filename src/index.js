import React, {Suspense} from 'react';
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
import EventMouse from "./chapter3/EventMouse";
import EventCompare from "./chapter3/EventCompare";
import EventError from "./chapter3/EventError";
import EventObj from "./chapter3/EventObj";
import EventPoint from "./chapter3/EventPoint";
import EventKey from "./chapter3/EventKey";
import EventArgs from "./chapter3/EventArgs";
import EventArgs2 from "./chapter3/EventArgs2";
import EventPropagation from "./chapter3/EventPropagation";
import EventOnce from "./chapter3/EventOnce";
import EventPassive from "./chapter3/EventPassive";

// chapter4
import StateForm from "./chapter4/StateForm";
import StateFormUc from "./chapter4/StateFormUc";
import FormTextarea from "./chapter4/FormTextarea";
import FormSelect from "./chapter4/FormSelect";
import FormList from "./chapter4/FormList";
import FormRadio from "./chapter4/FormRadio";
import FormCheck from "./chapter4/FormCheck";
import FormCheckMulti from "./chapter4/FormCheckMulti";
import FormFile from "./chapter4/FormFile";
import StateNest from "./chapter4/StateNest";
import StateNestImmer from "./chapter4/StateNestImmer";
import StateNestImmer2 from "./chapter4/StateNestImmer2";
import StateTodo from "./chapter4/StateTodo";
import FormBasic from "./chapter4/FormBasic";
import FormYup from "./chapter4/Formyup";
import FormJapan from "./chapter4/FormJapan";

//Chapter5
import LazyBasic from "./chapter5/LazyBasic";
import SuspenseSimple from "./chapter5/SuspenseSimple";
import SuspenseResult from "./chapter5/SuspenseResult";
import ProfileBasic from "./chapter5/ProfileBasic";
import StyledBasic from "./chapter5/StyledBasic";
import StyledCss from "./chapter5/StyledCss";
import StyledDynamic from "./chapter5/StyledDynamic";
import StyledComp from "./chapter5/StyledComp";
import MyButton, {MyStyledButton} from "./chapter5/StyledComp2";
import StyledCommon from "./chapter5/StyledCommon";
import GlobalStyle from './chapter5/StyledGlobal';
import StyledProps from "./chapter5/StyledProps";
import EmotionJsx from "./chapter5/EmotionJsx";
import EmotionComp from "./chapter5/EmotionComp";
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import PortalBasic from "./chapter5/PortalBasic";
import ErrorRoot from "./chapter5/ErrorRoot";
import ErrorRetryRoot from "./chapter5/ErrorRetryRoot";
import ErrorEventRoot from "./chapter5/ErrorEventRoot";

// Chapter6
import MaterialBasic from "./chapter6/MaterialBasic";
import MaterialDrawer from "./chapter6/MaterialDrawer";
import MaterialGrid from "./chapter6/MaterialGrid";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from './chapter6/theme.js'
import MaterialMode from "./chapter6/MaterialMode";
import FormMui from "./chapter6/FormMUI";
import QueryPre from "./chapter6/QueryPre";
import {QueryClient, QueryClientProvider} from "react-query";
import QueryBasic from "./chapter6/QueryBasic";
import {ErrorBoundary} from "react-error-boundary";
import QuerySuspense from "./chapter6/QuerySuspense";

//Chapter7
import StateEffect from "./chapter7/StateEffect";
import HookTimer from "./chapter7/HookTimer";
import HookEffect from "./chapter7/HookEffect";
import HookRefNg from "./chapter7/HookRefNg";
import HookRef from "./chapter7/HookRef";
import HookRefForward from "./chapter7/HookRefForward";



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

/* chapter3-2-7 */
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
// root.render(
//     <React.StrictMode>
//         <StateParent />
//     </React.StrictMode>
// )


/* 3-4-2 */
// root.render(
//     <React.StrictMode>
//         <EventMouse
//             alt='ロゴ画像'
//             beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
//             afterSrc="https://www.web-deli.com/image/home_chara.gif"
//         />
//     </React.StrictMode>
// )

/* 3-4-5 */
// root.render(
//     <EventCompare />
// )

/* 3-4-7 */
// root.render(
//     <React.StrictMode>
//         <EventError src='./image/wings.jpg' alt="サンプル画像" />
//     </React.StrictMode>
// )

/* 3-4-9 */
// root.render(
//     <React.StrictMode>
//         <EventObj />
//     </React.StrictMode>
// )

/* 3-4-12 */
// root.render(
//     <React.StrictMode>
//         <EventPoint />
//     </React.StrictMode>
// )

/* 3-4-14 */
// root.render(
//     <React.StrictMode>
//         <EventKey />
//     </React.StrictMode>
// )

/* 3-4-16 */
// root.render(
//     <React.StrictMode>
//         <EventArgs />
//     </React.StrictMode>
// )

/* 3-4-18 */
// root.render(
//     <React.StrictMode>
//         <EventArgs2 />
//     </React.StrictMode>
// )

/* 3-4-21 */
// root.render(
//     <React.StrictMode>
//         <EventPropagation />
//     </React.StrictMode>
// )

/* 3-4-23 */
// root.render(
//     <React.StrictMode>
//         <EventOnce />
//     </React.StrictMode>
// )

/* 3-4-23 */
// root.render(
//     <React.StrictMode>
//         <EventPassive />
//     </React.StrictMode>
// )

/* 4-1-2 */
// root.render(
//     <React.StrictMode>
//         <StateForm />
//     </React.StrictMode>
// )

/* 4-1-2 */
// root.render(
//     <React.StrictMode>
//         <StateFormUc />
//     </React.StrictMode>
// )

/* 4-1-6 */
// root.render(
//     <React.StrictMode>
//         <FormTextarea />
//     </React.StrictMode>
// )

/* 4-1-8 */
// root.render(
//     <React.StrictMode>
//         <FormSelect />
//     </React.StrictMode>
// )

/* 4-1-10 */
// root.render(
//     <React.StrictMode>
//         <FormList />
//     </React.StrictMode>
// )

/* 4-1-12 */
// root.render(
//     <React.StrictMode>
//         <FormRadio />
//     </React.StrictMode>
// )

/* 4-1-12 */
// root.render(
//     <React.StrictMode>
//         <FormCheck />
//     </React.StrictMode>
// )

/* 4-1-14 */
// root.render(
//     <React.StrictMode>
//         <FormCheckMulti />
//     </React.StrictMode>
// )

/* 4-1-16 */
// root.render(
//     <React.StrictMode>
//         <FormFile />
//     </React.StrictMode>
// )

/* 4-2-2 */
// root.render(
//     <React.StrictMode>
//         <StateNest />
//     </React.StrictMode>
// )

/* 4-2-2 */
// root.render(
//     <React.StrictMode>
//         <StateNestImmer />
//     </React.StrictMode>
// )

/* 4-2-2 */
// root.render(
//     <React.StrictMode>
//         <StateNestImmer2 />
//     </React.StrictMode>
// )

/* 4-2-2 */
// root.render(
//     <React.StrictMode>
//         <StateTodo />
//     </React.StrictMode>
// )

/* 4-3-2 */
// root.render(
//     <React.StrictMode>
//         <FormBasic />
//     </React.StrictMode>
// )

/* 4-3-7 */
// root.render(
//     <React.StrictMode>
//         <FormYup />
//     </React.StrictMode>
// )

/* 4-3-14 */
// root.render(
//     <React.StrictMode>
//         <FormJapan />
//     </React.StrictMode>
// )

/* 5-1-2 */
// root.render(
//     <React.StrictMode>
//         <LazyBasic />
//     </React.StrictMode>
// )

/* 5-1-7 */
// root.render(
//     <React.StrictMode>
//         <SuspenseSimple />
//     </React.StrictMode>
// )

/* 5-1-12 */
// root.render(
//     <React.StrictMode>
//         <SuspenseResult />
//     </React.StrictMode>
// )

/* 5-1-15 */
// root.render(
//     <React.StrictMode>
//         <ProfileBasic />
//     </React.StrictMode>
// )

/* 5-2-5 */
// root.render(
//     <React.StrictMode>
//         <h3>Styled JSXの基本</h3>
//         <StyledBasic />
//     </React.StrictMode>
// )

/* 5-2-8*/
// root.render(
//     <React.StrictMode>
//         <h3>Styled JSXの基本</h3>
//         <StyledCss />
//     </React.StrictMode>
// )

/* 5-2-12*/
// root.render(
//     <React.StrictMode>
//         <StyledDynamic theme={{
//             radius: true,
//             color: 'royalblue',
//         }} />
//     </React.StrictMode>
// )

/* 5-2-14 */
// root.render(
//     <React.StrictMode>
//         <StyledComp />
//     </React.StrictMode>
// )

/* 5-2-16 */
// root.render(
//     <React.StrictMode>
//         <MyButton>ボタン</MyButton>
//         <MyStyledButton>ボタン</MyStyledButton>
//     </React.StrictMode>
// )

/* 5-2-19 */
// root.render(
//     <React.StrictMode>
//         <StyledCommon />
//     </React.StrictMode>
// )

/* 5-2-21 */
// root.render(
//     <React.StrictMode>
//         <GlobalStyle />
//         <StyledCommon />
//     </React.StrictMode>
// )

/* 5-2-23 */
// root.render(
//     <React.StrictMode>
//         <StyledProps />
//     </React.StrictMode>
// )

/* 5-2-25 */
// root.render(
//     <React.StrictMode>
//         <EmotionJsx />
//     </React.StrictMode>
// )

/* 5-2-27 */
// root.render(
//     <React.StrictMode>
//         <EmotionComp />
//     </React.StrictMode>
// )

/* 5-2-28 */
// const global = css`
//     body {
//         background-color: yellow;
//     }
// `;
//
// root.render(
//     <React.StrictMode>
//         <Global styles={global} />
//         <EmotionJsx />
//     </React.StrictMode>
// )

/* 5-3-3 */
// root.render(
//     <React.StrictMode>
//         <div id="dialog"></div>
//         <PortalBasic />
//     </React.StrictMode>
// )

/* 5-3-6 */
// root.render(
//     <React.StrictMode>
//         <ErrorRoot />
//     </React.StrictMode>
// )

/* 5-3-9 */
// root.render(
//     <React.StrictMode>
//         <ErrorRetryRoot />
//     </React.StrictMode>
// )

/* 5-3-9 */
// root.render(
//     <React.StrictMode>
//         <ErrorEventRoot />
//     </React.StrictMode>
// )

/* 6-1-2 */
// root.render(
//     <React.StrictMode>
//         <MaterialBasic />
//     </React.StrictMode>
// )

/* 6-1-5 */
// root.render(
//     <React.StrictMode>
//         <MaterialDrawer />
//     </React.StrictMode>
// )

/* 6-1-6 */
// root.render(
//     <React.StrictMode>
//         <MaterialGrid />
//     </React.StrictMode>
// )

/* 6-1-10 */
// root.render(
//     <React.StrictMode>
//         <ThemeProvider theme={theme}>
//             <CssBaseline />
//             <MaterialBasic />
//         </ThemeProvider>
//     </React.StrictMode>
// )

/* 6-1-12 */
// root.render(
//     <React.StrictMode>
//         <MaterialMode />
//     </React.StrictMode>
// )

/* 6-1-15 */
// root.render(
//     <React.StrictMode>
//         <FormMui />
//     </React.StrictMode>
// )

/* 6-3-2 */
// root.render(
//     <React.StrictMode>
//         <QueryPre />
//     </React.StrictMode>
// )

/* 6-3-4 */
// const cli = new QueryClient();
// root.render(
//     <React.StrictMode>
//         <QueryClientProvider client={cli}>
//             <QueryBasic />
//         </QueryClientProvider>
//     </React.StrictMode>
// )

/* 6-3-6 */
// const cli = new QueryClient({
//     defaultOptions: {
//         queries: {
//             suspense: true,
//         }
//     }
// });
//
// root.render(
//     <React.StrictMode>
//         <Suspense fallback={<p>Loading...</p>}>
//             <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
//                 <QueryClientProvider client={cli}>
//                     <QuerySuspense />
//                 </QueryClientProvider>
//             </ErrorBoundary>
//         </Suspense>
//     </React.StrictMode>
// )

/* 7-1-2 */
// root.render(
//     <React.StrictMode>
//         <StateEffect init={0} />
//     </React.StrictMode>
// )

/* 7-1-5 */
// root.render(
//     <React.StrictMode>
//         <HookTimer init={10} />
//     </React.StrictMode>
// )

/* 7-1-7 */
// root.render(
//     <React.StrictMode>
//         <HookEffect init={10} />
//     </React.StrictMode>
// )

/* 7-2-2 */
// root.render(
//     <React.StrictMode>
//         <HookRefNg />
//     </React.StrictMode>
// )

/* 7-2-4 */
// root.render(
//     <React.StrictMode>
//         <HookRef />
//     </React.StrictMode>
// )

/* 7-2-7 */
root.render(
    <React.StrictMode>
        <HookRefForward />
    </React.StrictMode>
)
