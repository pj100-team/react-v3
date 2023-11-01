import React from 'react'
import Practice1 from './Components/Practice1'
import styled from 'styled-components';
import Practice2 from './Components/Practice2'

const onClickName=()=>{
	console.log('きむら');
  };

  const Style = styled.p`
  color:${(props)=>props.color};
 `;


  const App = () => {
  return (
    <Practice2 />
    )
}

export default App