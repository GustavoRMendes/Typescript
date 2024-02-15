import { useState, KeyboardEvent } from 'react'
import * as Styled from './style'

type ComponentsProps = {
  onEnter: (taskName: string) => void
}
export default function  AddArea ({ onEnter } : ComponentsProps )  {

  const [inputText,setInputText] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleKeyUp = (e:KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  

  return (
    <>
      <Styled.Container>
        <div className="image">➕</div>
        <input
          type="text" 
          placeholder='Adicione uma Tarefa'
          value={inputText}
          onChange={(ev) => setInputText(ev.target.value)}
          onKeyUp={handleKeyUp}
        />
      </Styled.Container>
    </>
  )
}}
