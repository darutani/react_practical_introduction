import {MyLink} from "./MyLink";
import {Outlet} from "react-router-dom";

export default function RouterCustom() {
    return (
        <>
            <ul>
                <li><MyLink to="/">トップ</MyLink></li>
                <li><MyLink to="/article">公開記事</MyLink></li>
                <li><MyLink to="/about">このサイトについて</MyLink></li>
            </ul>
            <ht />
            <Outlet />
        </>
    );
}
