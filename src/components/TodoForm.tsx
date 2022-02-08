import React, {useRef} from "react";


interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC<TodoFormProps> = props => {

    // Первый метод
    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }


    // Второй метод
    const ref = useRef<HTMLInputElement>(null)


    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(ref.current!.value)
            ref.current!.value = ""
            // console.log(title)
            // setTitle("")
        }
    }

    return (
        <div className="input-field mt2">
            <input 
            // onChange={changeHandler}
            // value={title} 
            ref={ref}
            type="text" 
            id="title" 
            placeholder="Введите название дела"
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Название дела</label>
        </div>
    )
}