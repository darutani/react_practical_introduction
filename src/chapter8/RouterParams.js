import {Link, Outlet} from "react-router-dom";

export default function RouterParams() {
    return (
        <>
            <ul>
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/book/978-4-8156-1336-5">これから始めるVeu.js 3実践入門</Link></li>
                <li><Link to="/book/978-4-297-13288-0">改訂3版 JavaScript本格入門</Link></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}