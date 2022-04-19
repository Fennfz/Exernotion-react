import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div clasNames="col-md-4 d-flex align-items-center">
            <span className="text-muted">&copy; 2021 Company, Inc</span>
          </div>
        </footer>
      </div>

    </section>

  )
}

export default Footer;