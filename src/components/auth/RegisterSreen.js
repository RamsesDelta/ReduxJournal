import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import {useDispatch, useSelector} from 'react-redux'
import { removeError, setError } from '../actions/ui'
import { startRegisterWithPasswordName } from '../actions/auth'

export const RegisterSreen = () => {

    const dispatch = useDispatch()

    const {msgError} = useSelector(state => state.ui)

    const [formValues, handleInputChange ] = useForm({
        name:'Hernando',
        email:'nando@gmail.com',
        password:'123456',
        password2:'123456'
    })

    const {name,email,password,password2} = formValues
 
    const handleRegister = (e) => {
        e.preventDefault()

        if(isFormValid()){
           dispatch(startRegisterWithPasswordName(email,password,name))
        }
        
    }

    const isFormValid = () =>{

        if(name.trim().length === 0){
            dispatch(setError('name is requiered'))
            return false
        }else if(!validator.isEmail(email)){
            dispatch(setError('invalid email'))
            return false
        }else if(password !== password2 || password.length <=5){
            dispatch(setError('error en las contraseñas'))
            return false
        }
        dispatch(removeError())
        return true
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn animate__faster">
                
               { msgError && (<div className="auth__alert-error"> {msgError}</div>)}

                <input className="auth__input" type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={handleInputChange}/>
                <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange}/>
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
                <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange}/>
                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Register
                </button>
                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
