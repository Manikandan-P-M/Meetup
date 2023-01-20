import React from 'react'

const MeetupContext = React.createContext({
  userName: '',
  topic: 'Arts and Culture',
  isRegistered: false,
  showErrorMsg: false,
  changeName: () => {},
  changeTopic: () => {},
  updateRegister: () => {},
  updateErrorMsg: () => {},
})

export default MeetupContext
