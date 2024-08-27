import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACT</h2>
      <div className="contact-section">
        <h3>Customer service</h3>
        <p>
          <a href="mailto:orders@johnindakwa@gmail.co">johnindakwa@gmail.com</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Speaking engagements, brand collaborations or social media collaborations</h3>
        <p>Management, Digital Brand Architects</p>
        <p>
          Ballet Awkandy — <a href="mailto:Vanessa@thedigitalbrandarchitects.com">balletawkandy@gmail.com</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Literary Agents</h3>
        <p>The Tawi Company</p>
        <p>
          Seth Olee — <a href="mailto:sfishman@thegernertco.com">solee@gmail.com</a>
        </p>
        <p>
          Anna Wabuko— <a href="mailto:aworrall@thegernertco.com">annawabuko@gmail.com</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Press and Media Contacts</h3>
        <p>Simon &  Mitchelle</p>
        <p>
          John Kulundu — <a href="mailto:jessica.preeg@simonandschuster.com">johnkulundu@gmail.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
