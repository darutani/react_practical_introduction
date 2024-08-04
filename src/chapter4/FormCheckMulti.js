import {useState} from "react";

export default function FormCheckMulti() {
    const [form, setForm] = useState({
        animal: ['dog', 'hamster'],
    });
    const handleFormMulti = e => {
        const fa = form.animal;
        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            fa.splice(fa.indexOf(e.target.value), 1)
        }
        setForm({
            ...form,
            [e.target.name]: fa,
        })
    }
    const show = () => console.log(`好きな動物： ${form.animal}`);

    return(
        <form>
            <fieldset>
                <legend>好きな動物：</legend>
                <label htmlFor="animal_dog">イヌ</label>
                <input id="animal_dog" name="animal" type="checkbox" value="dog" onChange={handleFormMulti}
                       checked={form.animal.includes('dog')}/><br />
                <label htmlFor="animal_cat">ネコ</label>
                <input id="animal_cat" name="animal" type="checkbox" value="cat" onChange={handleFormMulti}
                       checked={form.animal.includes('cat')}/><br />
                <label htmlFor="animal_hamster">ハムスター</label>
                <input id="animal_hamster" name="animal" type="checkbox" value="hamster" onChange={handleFormMulti}
                       checked={form.animal.includes('hamster')}/><br />
                <label htmlFor="animal_rabbit">ウサギ</label>
                <input id="animal_rabbit" name="animal" type="checkbox" value="rabbit" onChange={handleFormMulti}
                       checked={form.animal.includes('rabbit')}/><br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}