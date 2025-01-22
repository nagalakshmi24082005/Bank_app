import React from 'react'
import { useState } from 'react';

const Info = (props) => {
    const {handleclick_1}=props;
   const [count,setcount]=useState(0);
   const[username,setusername]=useState("Nisha");
   const[user,setuser]=useState({name:"Nisha",age:20,branch:"CSE",year:2023})
   const handleclick=()=>setcount(count+1);
   const nameclick=()=>{
    username==='Nisha'?setusername("Nagalakshmi"):setusername("Nisha");
   };
   const updateusername=()=>{
    setuser({...user,name:"Nagalakshmi"})
   }
   const updateage=()=>{
    setuser({...user,age:25})
   }
   const updatebranch=()=>{
    setuser({...user,branch:"IT"})
   }
   const updateyear=()=>{
    setuser({...user,year:2027})
   }
  return (
    <div>
        <button onClick={handleclick}>{count}</button>
        <button onClick={nameclick}>{username}</button>
        <button onClick={handleclick_1}>click</button>
        <table>
        
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
            <td><button onClick={updateusername}>Update Name</button></td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
            <td><button onClick={updateage}>Update Age</button></td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>{user.branch}</td>
            <td><button onClick={updatebranch}>Update Branch</button></td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{user.year}</td>
            <td><button onClick={updateyear}>Update Year</button></td>
          </tr>
        
      </table>
    </div>
  )
}

export default Info