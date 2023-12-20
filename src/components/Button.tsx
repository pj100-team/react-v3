import styled from "styled-components";

interface Props {
  text: string;
}
const StyledButton = styled.button`
  text-align: center;
  padding: 30px ;
  font-size: 32px;
`;

const Button = ({ text }: Props) => <StyledButton>{text}</StyledButton>;
export default Button;
