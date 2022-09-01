import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import styled from "styled-components";

const FooterStyled = styled.footer``;
const BenefitContainerStyled = styled.div`
  padding: 30px 15px;
  background-color: #f7f7f7;
  display: flex;
  gap: 4rem;
  justify-content: center;

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
  padding: 40px 15px;
  background-color: #eee; 
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const LinkContainer = styled.div`

`;

const Footer = () => {
  return (
    <FooterStyled>
            <BenefitContainerStyled>
        <BenefitContent>
          <ForestOutlinedIcon />
          <span>Sustainable shopping</span>
        </BenefitContent>

        <BenefitContent>
          <LockOpenOutlinedIcon />
          <span>Safe payment options</span>
        </BenefitContent>

        <BenefitContent>
          <AutorenewOutlinedIcon />
          <span>Free returns</span>
        </BenefitContent>

        <BenefitContent>
          <BoltOutlinedIcon />
          <span>Lightning fast deliveries</span>
        </BenefitContent>
      </BenefitContainerStyled>

      <LinksContainer>
        <div>
          <h4>Contact</h4>
          <div>Skaraborgsvägen 3</div>
          <div>506 30 Borås</div>
          <div>support@tfcstore.dev</div>
          <div>+46 33-25 54 55</div>
        </div>
        <div>
          <h4>Follow us</h4>
          <div>Facebook</div>
          <div>Snapchat</div>
          <div>Instagram</div>
        </div>
        <div>
          <h4>Shopping</h4>
          <div>Kategori 1</div>
          <div>Kategori 2</div>
          <div>Kategori 3</div>
          <div>Kategori 4</div>
        </div>
        <div>
          <h4>Gift Card</h4>
          <div>
          <RedeemOutlinedIcon />
          <div>Give a gift card to someone!</div>
          </div>
        </div>
      </LinksContainer>

    </FooterStyled>
  );
}

export default Footer