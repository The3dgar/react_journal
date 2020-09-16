import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar/>
      <div className="notes__content">
        <input type="text" placeholder="Title" className="notes__title-input" autoComplete="off"/>
        <textarea placeholder="Today was..." className="notes__textarea"></textarea>
        <div className="notes__image">
          <img src="https://www.tom-archer.com/wp-content/uploads/2018/06/milford-sound-night-fine-art-photography-new-zealand.jpg" alt="land"/>
        </div>
      </div>
    </div>
  )
}
