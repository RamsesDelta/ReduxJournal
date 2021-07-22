import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../actions/notes'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch()

    const {active:note} = useSelector(state => state.notes)

    const [formValues, handleInputChange,reset] = useForm(note)

    const {body,title,} = formValues

    const activeId = useRef(note.id)

    useEffect(() => {
       if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id
       }
    }, [note,reset])


    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues} ))
    }, [formValues,dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar/>
            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" name="title" className="notes__title-input" value={title} onChange={handleInputChange} />
                <textarea className="notes__textarea" placeholder="what happend today" name="body"  value={body} onChange={handleInputChange} ></textarea>
                {
                    (note.url) &&
                <div className="notes__image">
                    <img src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" alt="imagen" />
                </div>

                }
            </div>
        </div>
    )
}
