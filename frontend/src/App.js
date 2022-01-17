import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// STYLE
import { Container } from 'react-bootstrap'
// SCREENS
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
