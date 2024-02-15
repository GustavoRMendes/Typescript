import { useState } from "react";
import * as Style from "./App.styles";
import  AddArea  from "./components/AddArea";
import ListItem from "./components/ListItem";
import { Item } from "./types/Item";
export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar Pão", isCompleted: false },
    { id: 2, name: "Comprar Bolo", isCompleted: false },
  ]);
  const handleAddTask = (taskName:string) => {
    const newList = [...list]
    newList.push ( {
      id: list.length + 1,
      name: taskName,
      isCompleted: false
    })
    setList(newList)
  }
  return (
    <>
      <Style.Container>
        <Style.Area>
          <Style.Header>Lista De Tarefas </Style.Header>
          <AddArea onEnter={handleAddTask}/>

          {list.map((item, index) => (
            <ListItem key={index} item={item}/>
          ))}
        </Style.Area>
      </Style.Container>
    </>
  );
}
