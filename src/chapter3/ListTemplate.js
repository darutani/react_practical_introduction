import {render} from "@testing-library/react";
import React from "react";

// export default function ListTemplate({ src, children }) {
//     return (
//         <dl>
//             {
//                 src.map(elem => (
//                     <React.Fragment key={elem.isbn}>
//                         {children(elem)}
//                     </React.Fragment>
//                 ))
//             }
//         </dl>
//     )
// }

export default function ListTemplate({ src, render }) {
    return (
        <dl>
            {
                src.map(elem => (
                    <React.Fragment key={elem.isbn}>
                        {render(elem)}
                    </React.Fragment>
                ))
            }
        </dl>
    )
}