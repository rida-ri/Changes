import React from 'react'
import {useSelector} from 'react-redux'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  const isLoggedin = useSelector(state => state.user.id)

  return (
    <div>
      {isLoggedin ? <Navbar /> : null}
      <Routes />
    </div>
  )
}

export default App
