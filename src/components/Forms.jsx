import React,{useState} from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';
import AgeStats from './AgeStats';
export default function Forms() {

    const [date,setDate]=useState("");
    const [showStats,setShowStats]=useState(false);

    const handleDateChange=(event)=>{
        setDate(event.target.value);
    }
    const changeBirthday=()=>{
        console.log(date);
        if(date!==""){
          setShowStats(true);
        }
        
    }
  return (
    <>
      <Form>
        <FormControl type='date' onChange={handleDateChange}></FormControl>
        {"    "}
        <Button onClick={changeBirthday}>Submit</Button>           
      </Form>
      {showStats && <AgeStats date={date}/>}
    </>
  )
}
