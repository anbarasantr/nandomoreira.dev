import React from 'react'
import module from './form.module.styl'

const ContactForm = () => (
  <form name="contact" className={module.Form} method="POST" data-netlify>
    <div className={module.Form__group}>
      <label className={module.Form__label}>Your Name</label>
      <input type="text" name="name" className={module.Form__input} />
    </div>

    <div className={module.Form__group}>
      <label className={module.Form__label}>Your Email</label>
      <input type="email" name="email" className={module.Form__input} />
    </div>

    <div className={module.Form__group}>
      <label className={module.Form__label}>Your Role</label>
      <select name="role[]" className={module.Form__input}>
        <option value="leader">Leader</option>
        <option value="follower">Follower</option>
      </select>
    </div>

    <div className={module.Form__group}>
      <label className={module.Form__label}>Message</label>
      <textarea className={module.Form__input} name="message" />
    </div>

    <div className={module.Form__group}>
      <button type="submit" className={module.Form__button}>
        Send
      </button>
    </div>
  </form>
)

export default ContactForm
