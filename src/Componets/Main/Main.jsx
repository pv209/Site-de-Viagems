import React, {useEffect} from 'react'
import './main.css'
import img1 from "../../Assets/img1.jpg"
import img2 from "../../Assets/img2.jpg"
import img3 from "../../Assets/img3.jpg"
import img4 from "../../Assets/img4.jpg"
import img5 from "../../Assets/img5.jpg"
import img6 from "../../Assets/img6.jpg"
import img7 from "../../Assets/img7.jpg"
import img8 from "../../Assets/img8.jpg"
import img9 from "../../Assets/img9.jpg"  

import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from "react-icons/hi"

import Aos from "aos"
import 'aos/dist/aos.css'

const data = [
  {
    id:1,
    imgsrc:img1,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'Cultural Relax',
    fees:'$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is know for the luxurious stays and adventurous activities',    
  },
  {
    id:2,
    imgsrc:img2,
    destTitle:'Machu Pichu',
    location:'Peru',
    grade:'Cultural Relax',
    fees:'$600',
    description:'Machu Picchu is made up of more than 150 buildings ranging from baths and houses to temples and sanctuaries. Many modern-day archaeologists now believe that Machu Picchu served as a royal estate for Inca emperors and nobles.Machu Picchu is made up of more than 150 buildings ranging from baths and houses to temples and sanctuaries. Many modern-day archaeologists now believe that Machu Picchu served as a royal estate for Inca emperors and nobles.',
  },
  {
    id:3,
    imgsrc:img3,
    destTitle:'Great Barrier Reef',
    location:'Australia',
    grade:'Cultural Relax',
    fees:'$700',
    description:'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
  },
  {
    id:4,
    imgsrc:img4,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'Cultural Relax',
    fees:'$800',
    description:'According to the world Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 million come to visit Cappadocia.This place is know for its luxurious stays and adventurous activities.'
  },
  {
    id:5,
    imgsrc:img5,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'Cultural Relax',
    fees:'$1100',
    description:'What is Guanajuato Known For? Guanajuato is known for its local hero, El Pípila, having underground tunnels, its silver mines, and of course, the many gorgeous colorful alleyways.'
  },
  {
    id:6,
    imgsrc:img6,
    destTitle:'Cinque Terre',
    location:'Italy',
    grade:'Cultural Relax',
    fees:'$840',
    description:'Stretching 15 km along the Italian Riviera coast between Levanto and La Spezia in northwestern Italy, Cinque Terre is a steep seaside landscape that humans have transformed with stone walled terraces for growing grape vines and olive trees. Agriculture and tourism drive the economy.'
  },
  {
    id:7,
    imgsrc:img7,
    destTitle:'Angkor Wat',
    location:'Cambodia',
    grade:'Cultural Relax',
    fees:'$790',
    description:'Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world.'
  },
  {
    id:8,
    imgsrc:img8,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'Cultural Relax',
    fees:'$900',
    description:'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.'
  },
  {
    id:9,
    imgsrc:img9,
    destTitle:'Bali Island',
    location:'Indonesia',
    grade:'Cultural Relax',
    fees:'$500',
    description:'Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers paradise!'
  },

]

const Main = () => {

  useEffect(() => {
    Aos.init({duration:2000})
},[])

  return (
    <section className="main container section">
      <div data-aos="fade-rigth"  className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{
            return(
              <div   data-aos="fade-up"  key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgsrc} alt={destTitle}/>
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                      <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                      </button>
                  </div>
              </div>
            )
          } )
        }
      </div>
    </section>
  )
}

export default Main