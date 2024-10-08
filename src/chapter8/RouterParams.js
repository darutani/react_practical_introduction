import {NavLink, Outlet, useNavigation} from "react-router-dom";
import {useState} from "react";

export default function RouterParams() {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();

    return (
        <>
            <p>アクセス数：{count}</p>
            <ul>
                <li><NavLink to="/">トップ</NavLink></li>
                <li><NavLink to="/book/form">書籍登録フォーム</NavLink></li>
                <li><NavLink to="/books">書籍一覧</NavLink></li>
                <li><NavLink to="/book/978-4-8156-1336-5">これから始めるVeu.js 3実践入門</NavLink></li>
                <li><NavLink to="bookQuery?isbn=978-4-8156-1336-5">これからはじめるVue.js 3実践入門（クエリ版）</NavLink></li>
                <li><NavLink to="bookState" state="978-4-8156-1336-5">これからはじめるVue.js 3実践入門（state版）</NavLink></li>
                <li><NavLink to="/book/978-4-297-13288-0">改訂3版 JavaScript本格入門</NavLink></li>
                <li><NavLink to="/book" end>既定の書籍</NavLink></li>
                <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
                <li><NavLink to="/weather/Tokyo">東京の天気</NavLink></li>
                <li><NavLink to="/nothing/foo/bar">存在しないページ</NavLink></li>
            </ul>
            <hr />
            {/*<Outlet context={[count, setCount]} />*/}
            {
                navigation.state === 'loading'
                    ? <p>Loading...</p>
                    : <Outlet context={[count, setCount]} />
            }
        </>
    );
}