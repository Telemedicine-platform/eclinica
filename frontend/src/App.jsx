import { useState } from 'react'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Boas_vindas from './components/boas_vindas/boas_vindas'
import Recursos from './components/recursos_eClinica/recursos'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Boas_vindas />
      <Recursos />
      <Footer />
    </>
  )
}

export default App
