import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <footer class="footer" id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h2>That's My Profile</h2>
          <p>rismanissa17@gmail.com</p>
        </div>
        <div class="footer__col">
          <p>Join For Updates</p>
          <form action="#">
            <input type="text" placeholder="Enter your email" />
            <button>Send</button>
          </form>
          <div class="footer__socials">
            <a href="#"><i class="ri-whatsapp-fill"></i></a>
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-instagram-fill"></i></a>
          </div>
        </div>
        <div class="footer__col">
          <h4>My Services</h4>
          <a href="#home">Home</a>
          <a href="#skill">Skill</a>
          <a href="#hobby">Hobby</a>
          <a href="#aboutme">About Me</a>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 Web Kharisma Khairun Nisa. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
