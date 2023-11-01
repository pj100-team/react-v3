import { on } from 'events';
import styled from 'styled-components';

interface Props {
  name: string
  onClick: any;
  color: string
}

const Style = styled.p`
 color:${(props) => props.color};
`;

const Practice1 = (props: Props) => {

  console.log(props);
  return (
    <>
      <button onClick={props.onClick}>
        {props.name}</button>
      <Style color="red">aaa</Style>
    </>
  )
}

export default Practice1