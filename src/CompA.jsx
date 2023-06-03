import React, {useEffect, useState} from 'react'
import axios from "axios"


const CompA = () => {
    const[num,setNum]=useState();
    const[names,setNames]=useState();
    const[move,setMove]=useState();

    const getData = async () =>{
        const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      //  const data = await res.json();
        //console.log(res.data.name);
        setNames(res.data.name);
        setMove(res.data.moves.length);

    }
    
    useEffect(() => {
       
     getData();
    })
    
    

  return (
    <>
    <h1>You choose <span style = {{color: 'red'}}> {num} value </span></h1>
    <h1>My name is <span style = {{color: 'red'}}> {names}  </span></h1>
    <h1>I have  <span style = {{color: 'red'}}> {move} moves  </span></h1>
 
 

    <select value =  {num} onChange={(event) => {
        setNum(event.target.value);
    }}>
    
    <option value = '1'> 1 </option>
    <option value = '25'> 25 </option>
    <option value = '3'> 3 </option>
    <option value = '4'> 4 </option>
    <option value = '5'> 5 </option>
    </select>

    </>
  );
};

export default CompA