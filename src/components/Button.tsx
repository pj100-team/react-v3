import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {
    href: string;
  text: string;
}
const StyledButton = styled.button`
  text-align: center;
  padding: 30px;
  font-size: 32px;
`;

const Button = ({ href, text }: Props) => {
  const navigate = useNavigate();
  return <StyledButton onClick={() => navigate(href)}>{text}</StyledButton>;
};
export default Button;
