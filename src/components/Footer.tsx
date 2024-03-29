import * as Icon from "@mui/icons-material/";
import styled from "styled-components";

const FooterStyled = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;
const BenefitContainerStyled = styled.div`
  padding: 30px 15px;
  background-color: #f7f7f7;
  display: flex;
  gap: 4rem;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  svg {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  span {
    text-align: center;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    span {
      font-size: 10px;
    }
  }
`;

const LinksContainer = styled.div`
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  display: grid;
  gap: 0.75rem 0;
  font-size: 10px;

  @media (min-width: 449px) {
    font-size: 12px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    width: fit-content;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;

const SocialsContent = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  border-top: 1px solid black;
  padding-top: 1rem;
`;

const LinksWrapper = styled.div`
  background-color: #eee;
`;

const GiftContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <BenefitContainerStyled>
        <BenefitContent>
          <Icon.ForestOutlined />
          <span>Sustainable shopping</span>
        </BenefitContent>

        <BenefitContent>
          <Icon.LockOpenOutlined />
          <span>Safe payment options</span>
        </BenefitContent>

        <BenefitContent>
          <Icon.AutorenewOutlined />
          <span>Free returns</span>
        </BenefitContent>

        <BenefitContent>
          <Icon.BoltOutlined />
          <span>Lightning fast deliveries</span>
        </BenefitContent>
      </BenefitContainerStyled>

      <BenefitContainerStyled>
        <SocialsContainer>
          <h4>Follow us</h4>
          <SocialsContent>
            <Icon.Facebook />
            <Icon.Instagram />
            <Icon.YouTube />
          </SocialsContent>
        </SocialsContainer>
      </BenefitContainerStyled>

      <LinksWrapper>
        <LinksContainer>
          <LinkContainer>
            <h4>Contact</h4>
            <div>Skaraborgsvägen 3</div>
            <div>506 30 Borås</div>
            <div>support@tfcstore.dev</div>
            <div>+46 33-25 54 55</div>
          </LinkContainer>
          <LinkContainer>
            <h4>Shopping</h4>
            <div>Kategori 1</div>
            <div>Kategori 2</div>
            <div>Kategori 3</div>
            <div>Kategori 4</div>
          </LinkContainer>
          <LinkContainer>
            <h4>Gift Card</h4>
            <GiftContainer>
              <Icon.RedeemOutlined />
              <div>Give a gift card to someone!</div>
            </GiftContainer>
          </LinkContainer>
        </LinksContainer>
      </LinksWrapper>
    </FooterStyled>
  );
};

export default Footer;
