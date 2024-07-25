import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">

        <div className="footer-top-left">
          <h3>Sign up to win a Kshs.1500 Gift Card!</h3>
          <p>Each month we give away a Kshs.1500 gift card to one lucky email <br /> subscriber</p>
        </div>

        <div className="footer-top-right">
          <input type="email" placeholder='Your Email'/>
          <button className='btn'>SIGN UP</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>All content and photography licensed by Ann Street Studio, inc.</p>
      </div>
    </div>
  )
}

export default Footer
