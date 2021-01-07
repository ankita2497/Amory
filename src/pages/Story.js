import React from 'react'
import owner_img from "../assets/owner_img.jpg"
import pillow_img1 from "../assets/pillow_img1.jpg"
import pillow_img2 from "../assets/pillow_img2.jpg"
import pillow_img3 from "../assets/pillow_img3.jpg"
import pillow_img4 from "../assets/pillow_img4.jpg"
import StoryImage from '../components/StoryImage'
import Card from "../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Creation from '../components/Creation'
import Footer from '../components/Footer'

function Story() {
    return (
        <>
            <section id="Story">
        <div className="main-content">
            <h2 className="heading">Our Story</h2>
            <div className="underline-2"></div>
            <div className="container">
                <h2 className="heading-2">Our goal is to inspire your space with beautifully hand crafted textiles that tell a unique story. Each piece carefully designed & ethically created using ancestral techniques celebrated across generations.</h2>
                <div className="Story-content">
                <div>
                    <h2 className="heading-2">MEET KAE </h2>
                    <img src={owner_img} alt="owner" />
                </div>
                <div className="Story-info">
                    <div className="underline"></div>
                    <p>I was designing and sewing doll clothes at 8 yrs old, entered my first quilt into the County Fair at 14 yrs old and spent the last 16 years sewing to my heart's content. Creating has become such an large part of who I am, and what makes me happy.
                        When I decided to launch Kaekoo Shop on 02/1/17 sharing my own, original, unique pillow designs it felt like a organic progression for my creating love affair. My passion is to always offer one of kind, beautifully designed textiles. Made by hand with the highest quality, with careful attention to every detail, so I am confident you will love each of your new Kaekoo Pillows in your home. I am so grateful for the chance to make for you. Thank you for supporting small business! <span className="heading-2" style={{display: "block"}}>XO</span></p>
                    </div>
                    </div>
            </div>
            <div className="Story-image">
            <StoryImage image={ pillow_img1}/>
            <StoryImage image={ pillow_img2}/>
            <StoryImage image={ pillow_img3}/>
            <StoryImage image={pillow_img4} />
            </div>
            <h2 className="heading">we believe in..</h2>
            <div className="Card">
            <Card title="Time" desc="From design exploration to each placed cut or pinned needle, we take our time creating something you are proud to put in your home. Proud To be that We Serve."/>
            <Card title="Values" desc="Honesty, hard work and being true to ones self is what drives me to continue creating unique products that my customers can trust in and that I can be proud to offer. " />
            <Card title="Connection" desc="None of this would be possible without YOU! Thank you. I want you to be 100% satisfied and will be able to answer any questions or concerns you might have. " />
            </div>
        </div>
            <Creation />
                <Footer />
                </section>
        </>
    )
}

export default Story
