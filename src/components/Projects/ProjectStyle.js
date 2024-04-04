import styled from "styled-components";
import _default from "../../themes/default";

export const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 50px 0px;
`

export const Wrapper = styled.div `
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div `
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div `
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ToggleGroup = styled.div `
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Divider = styled.div `
    width: 1.5px;
    background-color : ${({theme}) => theme.primary};
`;

export const CardContainer = styled.div `
    display: flex;
    justify-content: center;
    align-item: center;
    flex-wrap: wrap;
    gap: 30px;
`;