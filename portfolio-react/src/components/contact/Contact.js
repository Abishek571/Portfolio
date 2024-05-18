import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiLogoMessenger } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact">

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        <div className="contact__options">

          <article className="contact__option">
            <HiOutlineMail />
            <h4> Email</h4>
            <h5>abishekuvs@gmail.com</h5>
            <a
              href="mailto:abisheks.it2021@citchennai.net"
              target="_blank" rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          
          <article className="contact__option">
            <BiLogoMessenger />
            <h4>Messenger</h4>
            <h5>Abishek S</h5>
            <a
              href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjc5OSSh4mCAxWLVQ8CHcVoDcgYABAAGgJ0Yg&gclid=CjwKCAjw7c2pBhAZEiwA88pOF3wfBgTbw_JtCjo60cj7Edb75Zx7ziiIBdldK-JUZXvIZrLKC6UA5BoCBZAQAvD_BwE&ohost=www.google.com&cid=CAESVOD2O_9wmWydHAvhRAQZS5jxOowEmRi8kKBfUVWfiENQZU28722FQBzg_r6XuVgoU2SlmZwRY64XefsOiwMV5_De_xjyAhTFZ1IyCQZNGXpEp2POgw&sig=AOD64_0ntETLQBWUF8da1zDFeA1h7pDSIQ&q&adurl&ved=2ahUKEwiS7t2Sh4mCAxVsqFYBHSrICiUQ0Qx6BAgJEAE"
              target="_blank" rel="noreferrer"
            >
              Chat With Me
            </a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp/>
            <h4> Whatsapp</h4>
            <h5>Abishek S</h5>
            <a href="mailto:abisheks.it2021@citchennai.net" target="_blank" rel="noreferrer"
>Chat with Me
            </a>
          </article>
          </div>
          <form action="">
            <input  type="text" name="name" placeholder="Your Full Name" required/>
            <input  type="email" name="email" placeholder="Your Full Email"  required/>
            <textarea  name="message" rows="7" placeholder="Your Message" required/>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        
      </div>
    </section>
  );
};

export default Contact;
