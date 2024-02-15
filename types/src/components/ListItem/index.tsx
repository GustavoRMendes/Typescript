import { useState } from 'react'
import type { Item } from '../../types/Item'
import * as Style from './style'
type ComponentsProp = {
  item: Item
}
export default function ListItem({item}:ComponentsProp) {
  const [isChecked,setIsChecked] = useState(item.isCompleted)
  return (
    <Style.Container isCompleted={isChecked} >
      <input
      type="checkbox"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label> {item.name} </label>
    </Style.Container>
  )
}
