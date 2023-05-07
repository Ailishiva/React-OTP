import React from 'react'
import { Provider } from 'react-redux'
import ContactForm from './ContactForm'
import store from './store'
import ContactList from './ContactList'
import ChartandMap from '../Map/ChartandMap'

function Contact() {
  return (
    <>
    <Provider store={store}>
    <div style={{background:"bisque"}}>
    <h1>Contact Management App</h1>
    <ContactForm />
    <ContactList />
    </div>
    </Provider>
    <ChartandMap/>
    </>

  )
}

export default Contact