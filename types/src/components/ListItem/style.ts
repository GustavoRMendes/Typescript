import styled from 'styled-components'
type PropsContainer = {
  isCompleted: boolean
}
export const Container  =
 styled.div(({isCompleted} : PropsContainer) => (
  `
  padding: 10px;
  display: flex;
  background-color: #20212C;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  label{
    color: #CCC;
    text-decoration: ${isCompleted ? 'line-through' : 'initial'};
  }
`))