import React from "react";

export const users=[
    {
        username:"begüm",
        password:"1"
    },
    {
        username:"ceren",
        password:"2"
    }
]

function Login() {
  return (
//   <div>
//   <div>Login</div>
//   <div>Login</div>
// </div>
<div>
    <div>
    <p>Kullanıcı Adınız</p>
    <input type="text"></input>
    </div>

<div>
<p>Şifreniz</p>
<input type="text"></input>
</div>
   
    
    <buton>Giriş yap</buton>
</div>
  )
}
export default Login;
