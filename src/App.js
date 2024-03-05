import React, { useState } from 'react'
import './App.css';
import MyComp from './components/MyComp'
import TextArea from './components/textarea'

function App() {
  const [temperature,setTemperature] = useState(1);
  const [length,setLength] = useState(256);
  const [p,setP] = useState(1);
  const [frequency,setFrequency] = useState(0);
  const [presence,setPresence] = useState(0);

  return (
    <div className='flex flex-col'>
    <div className='flex flex-col justify-between w-full'>
    <div className='flex flex row justify-between w-full'>
      <h5>Temperature</h5>
      <h2>{temperature}</h2>
    </div>
    <MyComp data={temperature} setData={setTemperature} mini={0} 
        maxi={2} 
        step={0.01} />
    </div>
    <div className='flex flex-col justify-between w-full'>
    <div className='flex flex row justify-between w-full'>
      <h5>Maximum length</h5>
      <h2>{length}</h2>
    </div>
    <MyComp data={length} setData={setLength} mini={0} 
        maxi={4096} 
        step={1}   />
    </div>
    <div className='flex flex-col justify-between w-full'>
    <div className='flex flex row justify-between w-full'>
      <h5>Top P</h5>
      <h2>{p}</h2>
    </div>
    <MyComp data={p} setData={setP} mini={0} 
        maxi={2} 
        step={0.01}   />
    </div>
    <div className='flex flex-col justify-between w-full'>
    <div className='flex flex row justify-between w-full'>
      <h5>Frequency penalty</h5>
      <h2>{frequency}</h2>
    </div>
    <MyComp data={frequency} setData={setFrequency} mini={0} 
       maxi={2} 
       step={0.01}   />
    </div>
    <div className='flex flex-col justify-between w-full'>
    <div className='flex flex row justify-between w-full'>
      <h5>Presence penalty</h5>
      <h2>{presence}</h2>
    </div>
    <MyComp data={presence} setData={setPresence} mini={0} 
        maxi={2} 
        step={0.01}   />
    </div>
    </div>
  //  <TextArea />
  );
}

export default App;
