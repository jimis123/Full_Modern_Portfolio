import styled from "styled-components";
import _default from "../../themes/default";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div `
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 30px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

`;

export const FooterInnerContainer = styled.div `

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const FooterLeftContainer = styled.div `
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterRightContainer = styled.div `
  width: 100%;
  order: 1;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 960px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  @media (max-width: 640px) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const SocialMedia = styled.section `
    text-align: center;
    display: flex;
    width: 100%;
    gap: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    margin-bottom: 15px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-item: center;
    max-width: 1200;
    margin: 40px auto 0 auto;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialIcon = styled(Link)
`
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.text_primary + 80};
    alighn-item: center;
    font-weight: bold;
    gap: 5px;
`;

export const SocialRights = styled.small `
color: #fff;
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);
margin-bottom: 25px;
margin-top: 40px;
font-size: 15px;
font-weight: bold;
text-align: center;


    @media (max-width: 960px) {
        text-align: center;
        font-size: 15px;
        margin-top: 15px;
  
      }
    
      @media (max-width: 640px) {
        margin-bottom: 10px;
        font-size: 10px;
      }
`;

export const SocialIcons = styled.div `
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 1240px;
`;

export const SocialIconLink = styled.a `
    font-size: 14px;
    justify-content: space-between;
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary + 80};

    transition: all 0.2s ease-in-out;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

  
    @media (max-width: 960px) {
      text-align: center;
      font-size: 18px;
      font-weight: bold;

    }
  
    @media (max-width: 640px) {
      font-size: 12px;
    }
`;


export const CopyrightText = styled.span `
    color: ${({ theme }) => theme.primary};
`;




export const Image = styled.img `
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div `
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: uppercase; 
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;


export const Span = styled.span `
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div `
  font-size: 12px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const ResumeButton = styled.a `
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;