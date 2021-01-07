import React, { useState } from 'react'
import ReviewsData from "../data/ReviwesData";

function Reviews(props) {
    const [Reviews, setReviews] = useState(ReviewsData);
    return (
        <>
        <div className="reviews">
            {Reviews.map((reviewItem) => {
                const { id, image, name, review,link } = reviewItem;
                return (
                    <div key={id} className="reviews-content">
                        <img src={image}  alt="customers"/>
                        <h4>{name}</h4>
                        <p>{review}</p>
                        <a href="/" className="reviews-link">@{link}</a>
                        <h4 style={{color: "black"}}><i className="fa fa-quote-right"></i></h4>
                    </div>
                )
            })}
            </div>
            <div className="underline-2"></div>
            </>
    )
}

export default Reviews
