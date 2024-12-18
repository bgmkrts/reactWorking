import { storeWithObject } from "./StoreObject"
import { useEffect } from "react"
const App2=()=>{
    useEffect(()=>{
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        setTimeout(()=>{
            storeWithObject.addUser(Math.floor(Math.random()*100))

        },5000)


        


    },[])

    return(
     

        <div>
            App2
        </div>
    )

}
export default App2