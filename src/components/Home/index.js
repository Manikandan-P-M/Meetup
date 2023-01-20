import {Link} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'

import {
  HomeContainer,
  Nav,
  HomeContent,
  Greetings,
  Desc,
  RegisterBtn,
  MeetImg,
  UserName,
  Topic,
} from './styledComponents'

const Home = props => {
  const changeRoute = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <MeetupContext.Consumer>
      {value => {
        const {userName, topic, isRegistered} = value
        return (
          <HomeContainer>
            <Nav>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
            </Nav>
            <HomeContent>
              {isRegistered ? (
                <>
                  <UserName>Hello {userName}</UserName>
                  <Topic>Welcome to {topic}</Topic>
                </>
              ) : (
                <>
                  <Greetings>Welcome to Meetup</Greetings>
                  <Desc>Please register for the topic</Desc>
                  <Link to="/register">
                    <RegisterBtn type="button" onClick={changeRoute}>
                      Register
                    </RegisterBtn>
                  </Link>
                </>
              )}
              <MeetImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContent>
          </HomeContainer>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home
