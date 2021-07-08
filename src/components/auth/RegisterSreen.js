import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterSreen = () => {
    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form>
                <input className="auth__input" typ="text" placeholder="Name" name="name" autoComplete="off"/>
                <input className="auth__input" typ="text" placeholder="Email" name="email" autoComplete="off"/>
                <input className="auth__input" typ="password" placeholder="Password" name="password" />
                <input className="auth__input" typ="password" placeholder="Confirm password" name="password2" />
                <button type="submit" className="btn btn-primary btn-block mb-5"disabled={true}>
                    Register
                </button>
                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
