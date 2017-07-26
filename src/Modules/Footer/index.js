import React, { Component } from 'react';
import './Footer.css';
import logo from './img/logo-dark.svg';
import tw from './img/ico-tw.svg';
import yt from './img/ico-yt.svg';
import li from './img/ico-linked.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="in">
          <div className="footer-about">
            <h1>
              <img src={logo} alt="ALKEMICS" />
            </h1>
            <p>
              Alkemics is an intuitive platform that helps retailers and brands
              manage, collaborate and share product data in one place
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-item">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="">Our story</a>
                </li>
                <li>
                  <a href="">Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-item">
              <h2>Product</h2>
              <ul>
                <li>
                  <a href="">For Retailers</a>
                </li>
                <li>
                  <a href="">For Brands</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-item">
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">API Docs</a>
                </li>
                <li>
                  <a href="">Webinars</a>
                </li>
                <li>
                  <a href="">Help Center</a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-item">
              <h2>Contact Us</h2>
              <ul className="social-list">
                <li>
                  <a href="" className="tw">
                    <img src={tw} alt="Twitter Alkemics" />
                  </a>
                </li>
                <li>
                  <a href="" className="linked">
                    <img src={li} alt="Linkedin Alkemics" />
                  </a>
                </li>
                <li>
                  <a href="" className="yt">
                    <img src={yt} alt="Youtube Alkemics" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
