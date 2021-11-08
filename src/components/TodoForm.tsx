import React, { useRef } from 'react'

interface TodoFormProps {onAdd(title: string): void}

export const TodoForm: React.FC <TodoFormProps>= props => {
 // const [title, setTitle]= useState<string>('')
  const ref = useRef<HTMLInputElement>(null)
//  const changeHandler=(event: React.ChangeEvent<HTMLInputElement>) => {
 //   setTitle(event.target.value)
 // }
  const keyPressHandler=(event: React.KeyboardEvent) => {
    if (event.key ==='Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value=''
 //     console.log(title)
 //     setTitle('')
    }
  }
  return (
    <div className="input-field mt2" >
      <input type="text"
      ref={ref}
//      onChange={changeHandler}
      onKeyPress={keyPressHandler}
//      value={title} 
      id="title" 
      placeholder="Введите название дела" />
      <label className="active" htmlFor="title" >
        Введите название дела
      </label>

    </div>
  )
}