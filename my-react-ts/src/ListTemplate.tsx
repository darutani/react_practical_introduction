import React, {ReactNode} from "react";
import {Book} from "./Book";

type ListTemplateProps = {
    src: Array<Book>,
    children: (b: Book) => ReactNode
};

export default function ListTemplate({ src, children }: ListTemplateProps) {
    return (
        <dl>
            {
                src.map(elem => (
                    <React.Fragment key={elem.isbn}>
                        {children(elem)}
                    </React.Fragment>
                ))
            }
        </dl>
    )
}