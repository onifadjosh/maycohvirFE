import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, increaseCountWithNum } from "../redux/appSlice";

const Home = () => {
  const count = useSelector((state) => state.count);
  const students = useSelector((state) => state.students);
  const [num, setnum] = useState(0)

  let dispatch = useDispatch()
  return (
    <div>
      <input type="number" placeholder="type your number here" onChange={(e)=>setnum(e.target.value)}/>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increaseCount())}>Inc count</button>
      <button onClick={()=>dispatch(decreaseCount())}>Dec count</button>
      <button onClick={()=>dispatch(increaseCountWithNum(Number(num)))}>Inc count by {num}</button>
      This is my home page, welcome here



      {students.map((student, index)=>(
        <h1 key={index}>{index+1+". "+student}</h1>
      ))}
      



    </div>
  );
};

export default Home;
