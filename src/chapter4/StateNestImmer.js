import {useImmer} from "use-immer";

export default function StateNestImmer() {
    const [form, setForm] = useImmer({
        name: '山田花子',
        address: {
            prefecture: '東京都',
            city: '豊島区',
        }
    });

    const handleForm = e => {
        setForm(form => {
            form[e.target.name] = e.target.value;
        })
    };
    const handleFormNest = e => {
        setForm(form => {
            form.address[e.target.name] = e.target.value;
        })
    }

    const show = () => console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);

    return (
        <form>
            <label htmlFor="name">名前：</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleForm}/><br />
            <label htmlFor="prefecture">名前：</label>
            <input id="prefecture" name="prefecture" type="text" value={form.address.prefecture} onChange={handleFormNest}/><br />
            <label htmlFor="city">名前：</label>
            <input id="city" name="city" type="text" value={form.address.city} onChange={handleFormNest}/><br />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}