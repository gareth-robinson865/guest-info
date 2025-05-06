
import './App.css'
import DrinksList from './components/DrinksList'
import Guestfoodchoice from './components/Guestfoodchoice'
import Guestlist from './components/Guestlist'
import Header from './components/Header'
import Songlist from './components/Songlist'

function App() {
  

  return (
    <>
      <h1>Vite + React</h1>
      <Header />
      <Guestlist />
      <Guestfoodchoice />
      <Songlist />
      <DrinksList />
    </>
  )
}

export default App
