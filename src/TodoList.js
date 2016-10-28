import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const renderItems = (items, onClickItem) => {
  return items.map((item, index) => (
    <TodoItem
      title={item.title}
      completed={item.completed}
      key={item.id}
      onClick={() => onClickItem(item.id)} />
  ))
}

const TodoList = ({items, onClick}) => (
  <ul className='todo-list'>
    {renderItems(items, onClick)}
  </ul>
)
TodoList.propTypes = {
  items: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default TodoList
