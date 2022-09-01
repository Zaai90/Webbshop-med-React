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
    </FooterStyled>
  );
}

export default Footer