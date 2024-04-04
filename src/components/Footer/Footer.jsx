import React from 'react';
import { 
  FooterContainer, 
  FooterLeftContainer, 
  FooterRightContainer, 
  FooterInnerContainer, 
  Title, 
  SubTitle,
  SocialMedia,
  SocialIconLink,
  SocialRights,
  CopyrightText
} from './Footer.js';
import {Bio} from '../../data/constants.js';
import { FaCopyright } from "react-icons/fa";
import { 
  SlSocialFacebook, 
  SlSocialInstagram, 
  SlSocialLinkedin, 
  SlSocialGithub 
} from "react-icons/sl";


function Footer() {
  return (
    <div id='footer'>
    <FooterContainer>

      <FooterInnerContainer>
        <FooterLeftContainer>
          <Title>About Me<br/>{Bio.name}</Title>
          <SubTitle>{Bio.description}</SubTitle>
        </FooterLeftContainer>

        <FooterRightContainer>
              <Title>
                Social Media
              </Title>
            <SocialMedia>
              <SocialIconLink href={Bio.facebook} target="_blank">
                Facebook <SlSocialFacebook />
              </SocialIconLink>

              <SocialIconLink href={Bio.instagram} target="_blank">
                Instagram <SlSocialInstagram />
              </SocialIconLink>
              
              <SocialIconLink href={Bio.linkedin} target="_blank">
                Linkedin <SlSocialLinkedin /> 
              </SocialIconLink>

              
              <SocialIconLink href={Bio.github} target="_blank">
                Github <SlSocialGithub />
              </SocialIconLink>
            </SocialMedia>
          </FooterRightContainer>
          
          <SocialRights>
            ILIADIS <CopyrightText><FaCopyright /></CopyrightText> {new Date().getFullYear()} All rights reserved.
          </SocialRights>
      </FooterInnerContainer>
    </FooterContainer>


  </div>
  )
}

export default Footer
