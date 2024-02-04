import React from 'react'

export default function AgeStats({date}) {
  const timeSince=()=>{
    let today= new Date().getTime();
    //console.log(today);
    let oDate=new Date(date).getTime();
    let difference=Math.abs(today-oDate);

    let days=Math.floor(difference/(1000*3600*24));
    let years=Math.floor(days/365);
    days-=years*365;
    let month=Math.floor(days/31);
    days-=month*31;
    console.log(days+" "+years+" "+month);
    //return `${difference} milliseconds`
    return `${years} years, ${month} months, and ${days} days`
  }
  //timeSince();
  return (
    <div className='fade2s age-stats text-light'>
      <h3>Date of Birth : {date}</h3>
      <h4>Congrats on {timeSince()}!</h4>
    </div>
  )
}
