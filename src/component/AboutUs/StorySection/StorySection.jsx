import React from 'react'
import './StorySection.css'

const StorySection = () => {
  return (
    <section className="storySection">
      <div className="content">
        <div className="textContent">
          <h3 className="statistic">
            Women don't wear more than 70% of what's in their closet.
          </h3>
          <p className="story">
            In 2024, inspired by the overflowing wardrobes of friends and family, 
            the founders of Thrift & Thrive saw an opportunity to make a difference. 
            Many of these clothes, still in excellent condition, were left unworn 
            and eventually discarded. Recognizing the untapped potential of these 
            hidden treasures, we embarked on a mission to give pre-loved fashion 
            a second life.
          </p>
        </div>
        <img
          src="./asset/woman1.png"
          alt="Our journey in sustainable fashion"
          className="storyImage"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default StorySection