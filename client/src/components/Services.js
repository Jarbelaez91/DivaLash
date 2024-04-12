import React from "react";
import Navbar from "./Navbar";
import "./service.css"
import { useHistory } from 'react-router-dom';


function Services() {


    const history = useHistory()
    const seeMore = () => {
        history.push("/classic-lash-extensions")
    }


    return (
        <div>
        <div>
            <Navbar/>
        <div className="service-page">
        </div>
        <div className="service-menu">
        <h1> Services Menu</h1>
        </div>

        <div className="lash-title">
            <h1> EYELASH EXTENSIONS</h1>
        </div>

      <div>
          <div className="services-cont">
    <div className="services-card">

            <h1>Classic Lash Extensions</h1>
                <div className="services-font">
            <p> Classic lash extensions are created with one individual synthetic mink or silk lash extension placed on 
                each of your natural lashes, creating a natural look. We customize each set 
                using different lengths, thickness and curls.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $120 Refill: $60</h4>
                </div>
                <button onClick={seeMore} className="services-btn">View Photos & Learn More →</button>

            </div>


            <div className="services-card">
            <h1>Hybrid Lash Extensions</h1>
            <div className="services-font">
            <p>Hybrid lashes are combined with Volume lashes and Classic lashes to create the perfect in-between set. This is a great 
                option for those that desire a little more volume than the Classic lashes. We customize each set 
                using different lengths, thickness and curls.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $130 Refill: $70</h4>
                </div>
    
                <button className="services-btn">View Photos & Learn More →</button>
            </div>

            <div className="services-card">
            <h1>Strip Lash Look Extensions</h1>
            <div className="services-font">
            <p>The ‘Strip Lash Look’ is a new styling technique that achieves a wispy effect 
                similar to strip lashes. The application is done with Volume lashes plus 
                a number of ‘spikes’ throughout the lash line to create 
                texture. We customize each set using different lengths, thickness and curls.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $180 Refill: $90</h4>
                </div>
                <button className="services-btn">View Photos & Learn More →</button>
            </div>

            <div className="services-card">
            <h1>Wet Look Lash Extensions</h1>
            <div className="services-font">
            <p>This look mimics the look of your lash extensions when you get them wet; creating 
                a spikier and more wispy effect. The Wet Lash Look appears similar to Classic Lash Extensions, 
                but they are thicker and bolder looking because of the wider appearance of the lash bundles. 
                There are certain lashes who are suitable for this look, a person with natural lashes that are moderate to full.
                If you are unsure feel free to text us a picture of your lashes for a quick consultation. 
                We wouldn’t recommend this look for someone with sparse lashes since sparse 
                lashes benefit most from volume fans that are fat and wide as opposed 
                to skinny and straight like the style demanded from this look.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $140 Refill: $65</h4>
                </div>
                <button className="services-btn">View Photos & Learn More →</button>
            </div>

            <div className="services-card">
            <h1>Volume Lash Extensions</h1>
            <div className="services-font">
            <p>Volume lash extensions involves applying 2-6 very fine lashes (2D - 6D) 
                to each one natural lash. Volume Extensions are lighter, fluffy and 
                give the client a full look. Volume lashes are perfect for clients who 
                don’t have a lot of lashes, have sparse lashes, bald spots or just want
                more of a dramatic look without having to use a thicker lash extension. 
                We customize each set using different lengths, thickness and curls.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $150 Refill: $80</h4>
                </div>
                <button className="services-btn">View Photos & Learn More →</button>
            </div>

            <div className="services-card">
            <h1>Mega Volume Extensions</h1>
            <div className="services-font">
            <p>Mega volume lash extensions are soft and super light. The thinnest 
                imaginable lashes! Beautiful 0.03 lashes the lightest weight possible 
                that are perfect for a Mega Volume look. These lashes are designed to 
                be very lightweight to make fans of 10-16D! This does not damage the 
                natural lash at all. A set made of these lashes is dramatic, soft, 
                wispy, giving intense density and blackness to the lashes. We 
                customize each set using different lengths, thickness and curls.</p>
                </div>
                <div className="price-font">
                <h4> Full Set: $170 Refill: $90</h4>
                </div>
                <button className="services-btn">View Photos & Learn More →</button>
            </div>

            <div className="services-card">
            <h1>Lash Removal</h1>
            <div className="services-font">
            <p>When you book for a lash removal a special lash removing cream is 
                used to gently remove all of the lash extensions without causing any 
                damage to your natural lashes. These specialized lash removing creams 
                insure all the lash adhesive is removed from your natural lashes. We 
                also include a lash bath using a special lash shampoo that thoroughly 
                cleans the lashes. Eyelash extensions should properly be removed by 
                a professional lash artist and the correct adhesive remover. Home 
                and self-removal of one’s eyelash extension is highly not recommended 
                and can result in harm, damage, or loss of eyelashes. In some cases, 
                improper removal can result in (but not limited to) undesired health 
                complications such as eye or eyelash damage or irritation.</p>
                </div>
                <div className="price-font">
                <h4> Lash Removal: $60</h4>
                </div>
                <button className="services-btn">View Photos & Learn More →</button>
            </div>


        </div>
</div>
        <div className="lash-lift-cont">
                    <div className="lift-title">
                        <h1>LASH LIFT & TINT</h1>
                    </div>

                    <div className="services-cont">
                        <div className="services-card">
                            <h1>Keratin Lash Lift & Tint</h1>
                            <div className="services-font">
                                <p>Our vegan, cruelty-free lash lift treatment is specifically formulated to lift and maintain hair elasticity by controlling its loss of humidity, preventing hair breakage. This formula can even be used on those with gaps or damaged lashes.</p>
                            </div>
                            <div className="price-font">
                                <h4>Keratin Lash Lift: $155</h4>
                            </div>
                            <button className="services-btn">View Photos & Learn More →</button>
                        </div>

                        <div className="services-card">
                            <h1>Mineral Boost Lash Lift & Tint</h1>
                            <div className="services-font">
                                <p>Our Mineral Boost Lash Lift has the exact same formula as our traditional keratin lash lift, except we are adding this exclusive mask. It extends the longevity of your lash lift for up to 3 weeks and provides maximum protection, strength, and hydration.</p>
                            </div>
                            <div class="price-font">
                                <h4>Mineral Boost Lash Lift & Tint: $170</h4>
                            </div>
                            <button className="services-btn">View Photos & Learn More →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;