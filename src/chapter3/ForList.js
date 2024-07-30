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


export function ForList({ src }) {
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