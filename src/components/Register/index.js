import MeetupContext from '../../context/MeetupContext'

import {
  RegisterContainer,
  Nav,
  RegisterContent,
  RegImg,
  FormContainer,
  FormHeading,
  Label,
  Input,
  Select,
  RegBtn,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        userName,
        topic,
        showErrorMsg,
        changeName,
        changeTopic,
        updateRegister,
        updateErrorMsg,
      } = value

      const submitForm = event => {
        event.preventDefault()
        if (userName !== '') {
          const {history} = props
          history.replace('/')
          updateRegister()
        } else {
          updateErrorMsg()
        }
      }

      const changeUserName = event => {
        changeName(event.target.value)
      }

      const changeTopics = event => {
        changeTopic(event.target.value)
      }

      return (
        <RegisterContainer>
          <Nav>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <RegisterContent>
            <RegImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <FormContainer onSubmit={submitForm}>
              <FormHeading>Let us join</FormHeading>
              <Label htmlFor="name">NAME</Label>
              <Input
                type="text"
                value={userName}
                id="name"
                placeholder="Your name"
                onChange={changeUserName}
              />
              <Label htmlFor="topic">TOPICS</Label>
              <Select value={topic} onChange={changeTopics}>
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </Select>
              <RegBtn type="submit">Register Now</RegBtn>
              {showErrorMsg ? (
                <ErrorMsg>Please enter your name</ErrorMsg>
              ) : null}
            </FormContainer>
          </RegisterContent>
        </RegisterContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
