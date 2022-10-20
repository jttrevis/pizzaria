import React from 'react'


import { Localization } from '../Localization'
import { FormContainer } from './styles'
import { Footer } from "../Footer"




export const Form = () => {
  return (
    <>
    <FormContainer>

      <form>
        <label >Name</label>
        <input type="name" placeholder='Name'/>
        <label>Email</label>
        <input type="email" placeholder='Email'/>
        <label>Phone</label>
        <input type="phone" placeholder='Phone'/>
        <textarea placeholder='Message...' type="message" rows="10"/>
        <button>Send</button>

      </form>
      <div className='adress'>
          <h1>Send a Feedback</h1>
          <p>Postcode: XXX XXX</p>
          <p>City: XXXXXX</p>
          <p>Phone: XXX XXX XXXX</p>

      </div>

    </FormContainer>
    <div className='mapa'>
      <Localization/>
    </div>
    <Footer/>
    </>

  )
}
