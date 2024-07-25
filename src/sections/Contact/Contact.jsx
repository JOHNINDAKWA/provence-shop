import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>CONTACT</h2>
      <div className="contact-section">
        <h3>Customer service</h3>
        <p>
          <a href="mailto:orders@jamiebeck.co">orders@jamiebeck.co</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Speaking engagements, brand collaborations or social media collaborations</h3>
        <p>Management, Digital Brand Architects</p>
        <p>
          Vanessa Flaherty — <a href="mailto:Vanessa@thedigitalbrandarchitects.com">Vanessa@thedigitalbrandarchitects.com</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Literary Agents</h3>
        <p>The Gernert Company</p>
        <p>
          Seth Fishman — <a href="mailto:sfishman@thegernertco.com">sfishman@thegernertco.com</a>
        </p>
        <p>
          Anna Worrall — <a href="mailto:aworrall@thegernertco.com">aworrall@thegernertco.com</a>
        </p>
      </div>
      <hr />
      <div className="contact-section">
        <h3>Press and Media Contacts</h3>
        <p>Simon & Schuster</p>
        <p>
          Jessica Preeg — <a href="mailto:jessica.preeg@simonandschuster.com">jessica.preeg@simonandschuster.com</a>
        </p>
      </div>
    </div>
  )
}

export default Contact
