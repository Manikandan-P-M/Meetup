import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

class App extends Component {
  state = {
    userName: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showErrorMsg: false,
  }

  changeName = userName => {
    this.setState({userName})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  updateRegister = () => {
    this.setState({isRegistered: true})
  }

  updateErrorMsg = () => {
    this.setState({showErrorMsg: true})
  }

  render() {
    const {userName, topic, isRegistered, showErrorMsg} = this.state
    return (
      <MeetupContext.Provider
        value={{
          userName,
          topic,
          isRegistered,
          showErrorMsg,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          updateRegister: this.updateRegister,
          updateErrorMsg: this.updateErrorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
