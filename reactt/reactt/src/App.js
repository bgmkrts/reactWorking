import "./App.css";
import Login from "./Login";
import { users } from "./Login";
import Product from "./Product";
import Container from "./Container";
import { useEffect, useState } from "react";

function App() {

  const [vize1,setVize1]=useState(0);
  const [vize2,setVize2]=useState(0);

  const ortalamaBul=()=>{
    const toplamSonuc=topla();
    yazdir(toplamSonuc);
  }
  
  const topla=()=>{
    const toplam=vize1+vize2;
    return toplam
  }
  console.log(users);
  let isimler = ["Begüm", "Emine", "Halime"];

  // let vize1 = 20;
  // let vize2 = 80;

  let sonuc = false;

  const productName = "Buzdolabı";

  const [firstName, setFirstname] = useState("Begum");
  const [lastName, setLastname] = useState("Karataş");

  useEffect(()=>{
    console.log("Her zaman çalışır")
  })

  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır")
  },[])

  useEffect(()=>{

    console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde")
  },[firstName])


  useEffect(()=>{

    console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde")
  },[lastName])


  const [userInfo, setUserInfo] = useState({
    username: "bkaratas",
    password: "45687",
  });

  const [show, setShow] = useState(false);

  const handleChange = () => {
    setFirstname("Sinem");
  };

  
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    setCount(count -1)
  }

  console.log("component render edildi")

  return (
    <div className="App">
      

      {show ? (
        <div>
          {userInfo.username} {userInfo.password}
        </div>
      ) : (
        "bilgileri gösterme"
      )}
      <div>
        <div>{firstName}</div>
        <div>
          <button onClick={handleChange}>ismi değiştir</button>
        </div>
      </div>
      <Container></Container>
      <p>Ortalama:{vize1 + vize2}/2</p>
      {sonuc ? <p>ehliyeti alabilirsiniz</p> : <p>ehliyet alamazsınız</p>}
      {/* {isimler.map((isim, index) => (
        <div key={index}>{isimler}</div>
      ))} */}
      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "yellow",
            border: "1px solid black",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}


      <Login></Login>
      <hr></hr>
      <Login></Login>

      <Product productName="Ayakkabı" price={3200}></Product>
      <hr></hr>
      <Product productName="Pantolon" price={4000}></Product>
      <hr></hr>
      <Product productName={productName} price={15000}></Product>
      <hr></hr>
      <Product></Product>

<div>{count}</div>

      <div> <button onClick={arttir}>Arttır</button> </div>
      <div> <button onClick={azalt}>Azalt</button> </div>

      <div><button onClick={()=>setFirstname("ceren") }>Adı değiştir</button></div>
      <div><button onClick={()=>setLastname("karakaş") }>soyismi değiştir</button></div>
    </div>
  );
}

export default App;
