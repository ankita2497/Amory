import React from 'react'
import Contact from "../components/Contact";
import Footer from '../components/Footer';

function ContactNav() {
    return (
        <section id="Contact">
        <div className="main-content">
            <Contact />
            <div className="Card">
                <h6><span>All pillow stock will be added</span>
                    <span>RESTOCK </span>
                        <span>-for alerts, don't forget to subscribe-</span></h6>
            </div>
                <Footer />
            </div>
            </section>
    )
}

export default ContactNav;
