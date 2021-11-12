import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Team.css';

import photo1 from '../../../assets/images/team/1.png'
import photo2 from '../../../assets/images/team/2.png'
import photo3 from '../../../assets/images/team/3.png'

const cards = [
  {
    img: photo1,
    post: 'CEO',
    name: 'Ian Harebottle',
    description: 'A veteran of the broader mining and gemstone industry. He has extensive operational experience in both mining and marketing and is highly regarded within the greater luxury sector, with a proud legacy of having been the CEO of both gemfields and tanzaniteone during their most successful years'
  },
  {
    img: photo2,
    post: 'CTO',
    name: 'Mikhail Kamenetsky',
    description: 'HPHT specialist with over 10 years of experience in the development and  management of production, as general manager, in both the public and private sector. In the project team, he is responsible for the development of production  using modern HPTP technology for the synthesis of diamonds'
  },
  {
    img: photo3,
    post: 'Creative Director',
    name: 'Alla Zomer',
    description: 'With over 15 years experience in wellness sector, during her carrier she established  hemp projects in Namibia and Europe for industrial and wellness uses. Bringing her  experience into the next level of personalize high end wellness care products'
  },
]

function Team() {


  return (
    <section className="team">
      {cards.map((item, i) => (
        <div className="team__card" key={`team__card${i}`}>
          <div className="team__card-image-container">
            <LazyLoadImage
              placeholderSrc={item.img}
              alt={item.name}
              effect="blur"
              src={item.img}
              className="team__card-image"
            />

          </div>
          <p className="team__card-post">{item.post}</p>
          <p className="team__card-name">{item.name}</p>
          <p className="team__card-description">{item.description}</p>
        </div>
      ))}

    </section>
  );
}

export default Team;
