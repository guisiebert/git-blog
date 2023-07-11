import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faUserGroup, faBuilding, faCalendarDay, faChevronLeft, faComment, faArrowUpRightFromSquare, } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

// <FontAwesomeIcon icon={faEnvelope} />
// <FontAwesomeIcon icon={faGithub} />
// <FontAwesomeIcon icon={faBuilding} />
// <FontAwesomeIcon icon={faUserGroup} />
// <FontAwesomeIcon icon={faCalendarDay} />
// <FontAwesomeIcon icon={faChevronLeft} />
// <FontAwesomeIcon icon={faComment} />
// <FontAwesomeIcon icon={faArrowUpRightFromSquare} />