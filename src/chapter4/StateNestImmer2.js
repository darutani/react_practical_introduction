import {useImmer} from "use-immer";

export default function StateNestImmer2() {
    const [form, setForm] = useImmer({
        name: '山田花子',
        address: {
            prefecture: '東京都',
            city: '豊島区',
        }
    });

    const handleNest = e => {
        const ns = e.target.name.split(".");
        setForm(form => {
            if (ns.length === 1) {
                form[e.target.name] = e.target.value;
            } else {
                form[ns[0]][ns[1]] = e.target.value
            }
        })
    };

    const show = () => console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);

    return (
        <form>
            <label htmlFor="name">名前：</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleNest}/><br />
            <label htmlFor="prefecture">住所（都道府県）：</label>
            <input id="prefecture" name="address.prefecture" type="text" value={form.address.prefecture} onChange={handleNest}/><br />
            <label htmlFor="city">住所（市町村）：</label>
            <input id="city" name="address.city" type="text" value={form.address.city} onChange={handleNest}/><br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}