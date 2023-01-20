import {
  NotFoundCont,
  NotFoundImg,
  NotFoundHead,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => (
  <NotFoundCont>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHead>Page Not Found</NotFoundHead>
    <NotFoundDesc>
      We are sorry, the page you requested could not be found.
    </NotFoundDesc>
  </NotFoundCont>
)

export default NotFound
