

const App = ()=>{
  const arr = ["ajith","nirmal","billa","renga","basha"]
 /*
  const handleclick = (key,i)=>
  {
    console.log(i)
  }
  */
return (<>
<ol key="Relativelist"> Relative List
{
  arr.map((values,i)=>{
    return(<>
    <li key={"RelativeList"+ i+1} >{values}{i+1}</li>
    </>)
  })

}


</ol>
</>)


}

export default App;
