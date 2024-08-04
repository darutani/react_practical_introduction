import {useState} from "react";

export default function FormRadio() {
    const [form, setForm] = useState({
        os: 'window',
    });
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const show = () => console.log(`好きな動物： ${form.os}`);
    return(
        <form>
            <fieldset>
                <legend>使用OS：</legend>
                <label htmlFor="os_win">Windows</label>
                <input id="os_win" name="os" type="radio" onChange={handleForm} value="windows" checked={form.os === 'windows'} /><br />
                <label htmlFor="os_mac">macOS</label>
                <input id="os_mac" name="os" type="radio" onChange={handleForm} value="macOS" checked={form.os === 'macOS'} /><br />
                <label htmlFor="os_lin">Linux</label>
                <input id="os_lin" name="os" type="radio" onChange={handleForm} value="linux" checked={form.os === 'linux'} />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}