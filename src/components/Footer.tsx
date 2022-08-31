import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material/";
import { Container } from "@mui/material";
import styled from "styled-components";

const FooterStyled = styled.footer`
  padding: 1rem;
  background-color: lightgray;
`;

const InformationContainer = styled.div`
  flex: 1;
  background-color: lightgray;
`;

const Logo = styled.div`
  font-size: 30px;
  margin-bottom: 0.5rem;
  letter-spacing: 1rem;
`;

const Description = styled.div`
  font-size: 16px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Link = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
`;
const SocialContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SocialIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;

  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    scale: 1.2;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Container maxWidth="lg">
        <InformationContainer>
          <Logo>TFC</Logo>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum repellendus beatae illo veniam? Quas, totam architecto, libero ex
            reprehenderit autem nostrum nulla assumenda repudiandae ab beatae inventore est ratione provident?
          </Description>
        </InformationContainer>

        <LinksContainer>
          <div>
            <Link>Home</Link>
            <Link>Store</Link>
            <Link>Categories</Link>
            <Link>Deals</Link>
          </div>
          <div>
            <Link>Cart</Link>
            <Link>Wishlist</Link>
            <Link>My Account</Link>
            <Link>Support</Link>
          </div>
        </LinksContainer>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
