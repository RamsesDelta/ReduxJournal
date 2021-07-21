import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoute = ({
    isAutheticated,
    component:Component,
    ...rest
}) => {

    
    
    return (
      <Route {...rest}
      component={ (props) =>(
        (isAutheticated)
            ? (<Redirect to="/" />)
            : (<Component {...props}/>)

      )}
      />
    )
}

PublicRoute.propTypes = {
    isAutheticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}