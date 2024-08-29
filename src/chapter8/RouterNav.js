import {NavLink, Outlet} from "react-router-dom";
import './RouterNav.css'

// const isCurrent = ({ isActive, isPending }) => isActive ? 'active' : '';

const isCurrent = ({ isActive }) => isActive ? {
    color: 'Red',
    fontWeight: 'bold',
} : {};

export default function RouterNav() {
    return (
        <>
            <ul>
                <li><NavLink Style={isCurrent}  to={"/"}>トップ</NavLink></li>
                <li><NavLink Style={isCurrent}  to={"/article"}>公開記事</NavLink></li>
                <li><NavLink Style={isCurrent}  to={"/about"}>このサイトについて</NavLink></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}
