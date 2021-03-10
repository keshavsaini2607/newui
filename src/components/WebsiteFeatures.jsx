import React from 'react'
import './WebsiteFeatures.css'
import card1 from '../assets/s.png'
import card2 from '../assets/img.png'
import card3 from '../assets/blog.png'
import card4 from '../assets/study.png'

const WebsiteFeatures = () => {
    return (
        <div className="websiteFeatures">
            <div className="feature__cards forward">
            <div className="card__photo ai-photo">
                <img src={card1} id="gallery__pic" alt="Card 1" />
            </div>
            <div className="content">
                <h1>AI is the future</h1>
                <p>
                In the world of videos, why stuck with the text. Let the AI make
                it easier for you. Convert your articles into engaging videos with
                just a couple of clicks and make your content more appealing.
                </p>
            </div>
            </div>
            <div className="feature__cards rev">
            <div className="card__photo">
                <img src={card2} id="gallery__pic" alt="Card 1" />
            </div>
            <div className="content">
                <h1>High quality pictures and videos</h1>
                <p>
                Choose from over million's of high resolution photos and clips
                from the inbuilt library of QuantaVid with AI recommended
                searches.
                </p>
            </div>
            </div>
            <div className="feature__cards forward">
            <div className="card__photo">
                <img src={card3} id="gallery__pic" alt="Card 1" />
            </div>
            <div className="content">
                <h1>Get your content in the top results</h1>
                <p>
                Bring more readers onboard with videos. Videos generate more
                traffic for your site, it helps in SEO and moreover, it leaves an
                ever-lasting impression in the minds of your viewers.
                </p>
            </div>
            </div>
            <div className="feature__cards rev">
            <div className="card__photo">
                <img src={card4} id="gallery__pic" alt="Card 1" />
            </div>
            <div className="content">
                <h1>Revolutionizing the way you learn</h1>
                <p>
                Educate the world with your videos. Video content is growing at
                the most rapid speed and is the future of education.
                </p>
            </div>
            </div>
        </div>
    )
}

export default WebsiteFeatures
