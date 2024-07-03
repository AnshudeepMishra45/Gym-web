import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_e8juqma', 'template_arvsltm', form.current, 'YCufOA9YfQbzEYiwX' )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className="stroke-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className="stroke-text">WITH US?</span>
                </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail} >
                <input type="text" name="from_name" placeholder="Enter your email address" />
                <button className="btn btn-j">Join Now</button>
            </form>

        </div>
    </div>
  )
}

export default Join
