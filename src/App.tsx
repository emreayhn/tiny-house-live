
import './App.css'
import CardTiny from './components/CardTiny'
import Header from './components/Header'
import CardCont from './components/CardCont'
import AboutSection from './components/AboutSection'

import ContactSection from './components/ContactSection'


function App() {

  return (
    <>
      <Header />
      <div id="products"><CardTiny /></div>
      <CardCont />
      <div id="about"><AboutSection /></div>
      <div id="contact"><ContactSection /></div>




    </>
  )
}

export default App

//. products