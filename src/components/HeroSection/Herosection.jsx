import React from 'react';
import { HeroContainer, HeroBg, HeroLeftContainer, Image, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle.js';
import {Bio} from '../../data/constants.js';
import Typewriter from "typewriter-effect";
import HeroImg from '../../images/cv_photo.png';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation.jsx';


function Hero() {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi! My name is <br/>{Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.linkedin} target='_blank'>Check Linkedin</ResumeButton>
          </HeroLeftContainer>
            
          <HeroRightContainer>
            <Image src={HeroImg} alt='Hero img'/>
          </HeroRightContainer>

        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero
