import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            const person = { name, email }
            setPeople((people) => {
                return [...people, person]
            })
            setName("")
            setEmail("")
        }
     }
    return (
        <div className="contact">
            <h2 className="heading">Subscribe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Join Now</button>
            </form>
            <h4>Sign up to be the first to know about restocks, promotions and receive
                 10% off your first purchase in the shop!</h4>
            <div className="underline-2"></div>
        </div>
    )
}

export default Contact
