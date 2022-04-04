import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">
        <footer className="py-3 my-4 text-center" style={{background: "#edf0f4", color: "black"}}>
          <h4>Subscribe to Our Newsletter</h4>
          <p>
            "Get the latest product updates,company news and special offers delivered right to your inbox."
          </p>
          <div className="d-flex w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-outline-secondary btn btn-dark" type="button">Subscribe</button>
          </div>
          <p className="text-left text-muted">&copy; 2021 Company, Inc</p>
        </footer>
      </section>
    
    )
}

export default Footer;