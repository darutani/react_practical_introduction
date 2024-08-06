import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

export default function FormBasic() {
    const schema = yup.object({
        name: yup
            .string()
            .label('名前')
            .required('${label}は必須入力です。')
            .max(20, '${label}は${max}文字以内で入力してください。'),
        gender: yup
            .string()
            .label('性別')
            .required('${label}は必須入力です。'),
        email: yup
            .string()
            .label('メールアドレス')
            .required('${label}は必須入力です。')
            .email('${label}の形式が不正です。'),
        memo: yup
            .string()
            .label('備考')
            .required('${label}は必須入力です。')
            .min(10, '${label}は${min}文字以上で入力してください。')
            .test('ng',
                ({ label }) => `${label}にNGワードが含まれています。`,
                value => {
                    const ngs = ['暴力', '死', 'グロ'];
                    for (const ng of ngs) {
                        if (value.includes(ng)) {
                            return '備考にNGワードが含まれています。';
                        }
                    }
                    return true;
                }
            ),
    })

    const defaultValues = {
        name: '名無権兵衛',
        email: 'admin@example.com',
        gender: 'male',
        memo: '',
    };

    const { register,
        handleSubmit,
        formState: { errors, isDirty, isValid, isSubmitting }
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const onsubmit = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                console.log(data);
            }, 4000);
        });
    };
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前：</label><br />
                <input id="name" name="name" type="text"
                       {...register('name')}
                />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor="gender">性別：</label><br/>
                <label>
                    <input id="gender" name="gender" type="radio" value="male"
                           {...register('gender')}
                    />男性
                </label>
                <label>
                    <input id="gender" name="gender" type="radio" value="female"
                           {...register('gender')}
                    />女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">メールアドレス：</label><br/>
                <input id="email" name="email" type="text"
                       {...register('email')}
                />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">備考：</label><br/>
                <textarea id="memo" name="memo"
                          {...register('memo')}
                />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit" disabled={! isDirty || ! isValid || isSubmitting}>送信</button>
                {isSubmitting && <div>...送信中...</div>}
            </div>
        </form>
    );
}