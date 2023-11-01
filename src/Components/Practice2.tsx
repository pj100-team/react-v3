import React, { useState } from 'react'
import { Input } from './Input'


const Practice2 = () => {
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const handCheckChenge = () => {
        setIsChecked(!isChecked);
    }
  return (
    <>
  <Input handCheckChenge={handCheckChenge} isChecked={isChecked}/>
    </>
  )
}

export default Practice2