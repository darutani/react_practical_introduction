import {useState} from "react";

export default function FormTextarea() {
    const [form, setForm] = useState({
        comment: '様々なフォーム要素を・・・',
    });
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const show = () => console.log(`コメント： ${form.comment}`);
    return(
        <form>
            <textarea id="commetn" name="comment" onChange={handleForm} cols="30" rows="7" value={form.comment}></textarea><br  />
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}