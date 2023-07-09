import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { SearchForm } from './pages/Home/components/SearchForm'
import { PostList } from './pages/Home/components/PostList'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header/>
      <Profile />
      <SearchForm />
      <PostList />
    </ThemeProvider>
  )
}

export default App
