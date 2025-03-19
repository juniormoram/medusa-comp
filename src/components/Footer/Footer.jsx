import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-footer">
      <div className="footer-sections">
        <div className="section-info">
          <h3>Medusa Company</h3>
          <div className="icons">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-spotify"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-soundcloud"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="section-info">
          <h5>Mail</h5>
          <div className="info">
            <a className="info" href="mailto:andy@gmail.com">
              Contact me: andy@gmail.com
            </a>
          </div>
          <div className="info">
            <a
              className="info"
              href="https://api.whatsapp.com/send?text=https://tupagina.com"
              target="_blank"
            >
              {" "}
              Share <i class="fa-solid fa-share"></i>
            </a>
          </div>
          <div className="info">
            <a
              className="info"
              href="https://api.whatsapp.com/send?text=https://tupagina.com"
              target="_blank"
            >
              Community <i class="fa-regular fa-comments"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
