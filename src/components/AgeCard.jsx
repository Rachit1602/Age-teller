import React from 'react'
//components
import  Title from './Title';
import Forms from './Forms';
export default function AgeCard() {
  return (
    <div className="container">
        <Title classes={"title mb-1 text-light"} text="Input Your Birthday!"/>
        <Forms/>
    </div>
  )
}
