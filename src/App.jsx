import React, { useState } from 'react'
import './App.css';

function App() {

  const [list, setList] = useState([
    { id: 0, title: "React를 배워보자" }
  ])

  const [title, setTitle] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const clickAddButtonHandler = () => {
    //id 랜덤값으로 자동 부여
    const newList = {
      id: list.length,
      title
    }

    setList([...list, newList])
    setTitle("")
  }


  return (
    <div className='wrap'>
      <div className='title-input'>
        <input
          value={title}
          onChange={titleChangeHandler}
          type="text"
          placeholder="제목을 입력하세요"
        />

        <button
          onClick={clickAddButtonHandler}
          className="write-button">
          추가하기
        </button>
      </div>

      <span>Todo List</span>

      <div className='list-container'>
        {list.map(item => {
          return (
            <div className='list-box'>
              {item.title}
            </div>
          )
        })}
      </div>

    </div>

  )
}

export default App