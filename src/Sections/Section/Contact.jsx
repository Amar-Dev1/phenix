import '../sectionStyles/Contact.css'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <form >
        <input className='name' type="text" placeholder='Your Name*' />
        <input className='email' type="email" placeholder='Your Email*' />
        <input className='subject' type="text" placeholder='Subject' />
        <textarea placeholder='Message*'></textarea>
        <button className='main-button'>
          send a message
        </button>
      </form>

    </div>
  )
}

export default Contact
