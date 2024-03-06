

const MyComp = ({ data, setData,mini,maxi,step }) => {
  return (
      <input 
        type="range" 
        min={mini} 
        max={maxi} 
        step={step} 
        value={data} 
        className="w-full bg-gray-300 rounded-lg h-1 bg-primary"
        onChange={(e)=>setData(e.target.value)}
      />
  )
}

export default MyComp

