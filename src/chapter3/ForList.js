import React from "react";

// export function ForList({ src }) {
//     return (
//         <dl>
//             {
//                 src.map(elem => (
//                     <>
//                         <dt>
//                             <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
//                                 {elem.title} ({elem.price}円)
//                             </a>
//                         </dt>
//                         <dd>{elem.summary}</dd>
//                     </>
//                 ))
//             }
//         </dl>
//     );
// }


// export function ForList({ src }) {
//     return (
//         <dl>
//             {
//                 src.map(elem => (
//                     <React.Fragment key={elem.isbn}>
//                         <dt>
//                             <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
//                                 {elem.title} ({elem.price}円)
//                             </a>
//                         </dt>
//                         <dd>{elem.summary}</dd>
//                     </React.Fragment>
//                 ))
//             }
//         </dl>
//     );
// }


// export function ForList({ src }) {
//     const lowPrice = src.filter(src => src.price < 3500);
//     return (
//         <dl>
//             {
//                 lowPrice.map(elem => (
//                     <React.Fragment key={elem.isbn}>
//                         <dt>
//                             <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
//                                 {elem.title} ({elem.price}円)
//                             </a>
//                         </dt>
//                         <dd>{elem.summary}</dd>
//                     </React.Fragment>
//                 ))
//             }
//         </dl>
//     );
// }

export function ForList({ src }) {
    src.sort((m, n) => m.price < n.price);
    return (
        <dl>
            {
                src.map(elem => (
                    <React.Fragment key={elem.isbn}>
                        <dt>
                            <a href={`https;//wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
                                {elem.title} ({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}