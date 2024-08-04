import {useState} from "react";

export default function FormSelect() {
    const [form, setForm] = useState({
        animal: 'dog',
    });
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const show = () => console.log(`好きな動物： ${form.animal}`);
    return(
        <form>
            <select id="animal" name="animal" onChange={handleForm} value={form.animal}>
                <option value="dog">イヌ</option>
                <option value="cat">ネコ</option>
                <option value="hamster">ハムスター</option>
                <option value="rabbit">ウサギ</option>
            </select>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}