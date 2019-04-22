import React from 'react';
import './index.css';

export default () => {
  return (
    <div>
      <div className="container">
        <h1 className="brand"><span>Acme</span> Web Design</h1>
        <div className="wrapper animated bounceInLeft">
            <div className="company-info">
                <h3>Acme Web Design</h3>
                <ul>
                    <li><i className="fa fa-road"></i> 44 Something Street</li>
                    <li><i className="fa fa-phone"></i> (323) 555-5555</li>
                    <li><i className="fa fa-envelope"></i> test@acme.test</li>
                </ul>
            </div>
            <div className="contact">
                <h3>Email Us</h3>
                <form>
                    <p>
                        <label>Name</label>
                        <input type="text" name="name">
                    </p>
                    <p>
                        <label>Company</label>
                        <input type="text" name="company">
                    </p>
                    <p>
                        <label>Email Address</label>
                        <input type="email" name="email">
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="text" name="phone">
                    </p>
                    <p className="full">
                        <label>Message</label>
                        <textarea name="message" rows="5"></textarea>
                    </p>
                    <p className="full">
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    </div>

    </div>
  )
}

