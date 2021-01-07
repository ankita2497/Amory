import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import owner_img from "../assets/owner_img.jpg"
import Video from '../components/Video'
import Creation from '../components/Creation'
import Reviews from '../components/Reviews'
import Contact from "../components/Contact"
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <section id= "Home">
            <header>
             <div className="home-img">
                <Button />
            </div>
        </header>
            <h2 className="heading">One of a kind + Soulful <span> handcrafted Goods</span></h2>
            <Carousel />
            <div className="underline-2"></div>
            <div className=" owner">
                <img src={ owner_img  }  alt="person"/>
                <div>
                    <h2 className="heading-2">Meet Kalley</h2>
                    <p>Hi! I am the creator of Kaekoo Pillow Shop. Thank you for shopping small! I believe each home carries a reflection of those who live and love within it's walls. The pieces we put in our homes become a part of that story. As we work closely with artists from all over the globe and handcraft each pillow, we do with careful attention to every detail because we know the value of that unique touch in your home. </p>
                </div>
            </div>
            <div className="underline-2"></div>
            <h2 className="heading">See What's New</h2>
            <Video />
            <Creation />
            <h2 className="heading">What our customers are saying</h2>
                <Reviews />
            <Contact />
                <Footer />
                </section>
            </>
    )
}

export default Home
