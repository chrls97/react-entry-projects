import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name' /> <br />
        <input type="email"  placeholder='Email Address'/><br />
        <textarea name="" id="" placeholder='Message'></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
