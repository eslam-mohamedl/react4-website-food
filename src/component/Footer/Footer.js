import React from 'react'
import './Footer.css';
 const Footer = () => {
  return (
    <section className="footer">
    <div className="content-footer text-center">
        <ul className="link">
            <li>Register</li>
            <li>Forum</li>
            <li>Affilliate</li>
            <li>FAQ</li>

        </ul>
        <ul className="soical">
            <li><i class="fa-brands fa-facebook"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
            <li><i class="fa-brands fa-youtube"></i></li>
            <li><i class="fa-brands fa-behance"></i></li>
            <li><i class="fa-brands fa-linkedin"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>

        </ul>
        <p>© 2021. Foodera. All rights reserved.</p>
    </div>
    </section>
  )
}
export default Footer;
