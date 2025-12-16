import {categoryList} from "../../shared/model/category-list.ts";
import {Button} from "../../shared/Button.tsx";
import {useState} from "react";
import type { FormEvent } from "react";
import './ui/form.css'

const defaultValues = {
    heading: '',
    description: '',
    category: 'Инструменты'
,}



export const RequestForm = ({initialValues, descriptionButton = "Сохранить", onSubmit }: any) => {
    const [values, setValues] = useState({ ...defaultValues, ...initialValues });
    // console.log(values)

    const handleChange = (key: string, value: string) => {
        setValues((prev: any) => ({...prev, [key]: value}))
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit({
            heading: values.heading,
            description: values.description,
            category: values.category,
        })
    };

    return (
        <form className="form_group " onSubmit={handleSubmit}>
            <div>
                <label>
                    Заголовок
                    <input
                        type="input"
                        value={values.heading}
                        className="form_field"
                        onChange={(e) => handleChange('heading', e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Описание
                    <textarea
                        rows={4}
                        value={values.description}
                        className="form_field"
                        onChange={(e) => handleChange('description', e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Категория
                    <select
                        className="form_field"
                        value={values.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                    >
                        {categoryList.map((category) => (
                            <option className="form_option" >{category}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div>
                <Button >{descriptionButton}</Button>
            </div>

        </form>
    )
}