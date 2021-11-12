import React from 'react'
import CardItem from './Carditem';
import './Cards.css';
import Img1 from './images/img-1.jpg'
import Img2 from './images/img-2.jpg'


function Cards() {
    return (
        <div className="cards">
            <h2>About This Page</h2>
            <p>It's hard to design webpages according to clients requests so as a challenge or some experience to gather for future challenges
                ,i created this webpage.Hope who visit this page will like it. This webpage was created using HTML5, CSS, Javascript, React.js which is responsive mobile-first programming for both static and dynamically
loaded content.</p>
<h3>JavaScript : 49.5%</h3>
<h3>CSS : 41.5%</h3>
<h3> HTML : 9.0%</h3>


            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        img src={Img1} 
                        text="Start your Morning with Sun"
                        label="webpage"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        img src={Img2}
                        text="Dance with the waves of Bali"
                        label="webpage"
                        
                        
                        />
                    </ul>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Cards;
