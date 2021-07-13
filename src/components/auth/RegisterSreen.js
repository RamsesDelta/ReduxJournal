import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterSreen = () => {

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
            console.log('formulario correcto')
        }
        
    }

    const isFormValid = () =>{

        if(name.trim().length === 0){
            console.log('name is requiered')
            return false
        }

        return true
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            
            <form onSubmit={handleRegister}>
                
                <div className="auth__alert-error"> Hola mundo </div>

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
