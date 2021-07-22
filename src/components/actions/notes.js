import { db } from "../../firebase/firebase-config"
import { loadNotes } from "../../helpers/loadNotes"
import { types } from "../../types/types"


export const startNewNote = () =>{
    return async(dispatch, getState) =>{
        const uid = getState().auth.uid
        console.log(uid)

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(activeNote(doc.id, newNote))
    }
}

export const activeNote = (id,notes) => ({
    type: types.noteActive,
    payload: {
        id,
        ...notes
    }
})

export const starLoadingNotes = (uid) =>{
    return async(dispatch) =>{
        const notes = await loadNotes(uid)
        dispatch(SetNotes(notes))
    }
}

export const SetNotes = (notes) => ({
    type: types.noteLoad,
    payload: notes
})

export const startSaveNote = (note) =>{
    return async(dispatch, getState) =>{
        const {uid} = getState().auth

        if(!note.url){
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
    }
}