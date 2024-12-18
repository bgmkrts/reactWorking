import { useState } from 'react';
import {observer} from 'mobx-react'
import Count from './Count';

const App=observer((data)=>{
  console.log(data)
  const [state,setState]=useState("Begüm")
  return (
    <div>
      {state}
      <h1>Sayi:{data.store.count}</h1>
      <Count></Count>
      
      <button onClick={()=>{
             data.store.dec()
            }}>Tıkla ve sayı azalt </button>
                <button onClick={()=>{
             data.store.inc()
            }}>Tıkla ve sayı arttır </button>
    </div>
  )
})

export default App;
