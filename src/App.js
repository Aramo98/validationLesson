import React from "react"
import { useState } from "react";
import SelectedImage from "./SelectedImage"
import "./App.css"
function App() {
const [firstName,setFirstName ] = useState("")
const [password,setPassword ] = useState("");
const [confirmPassword,setConfirmPassword] = useState("")
const [checked,setChecked] = useState(false)

const [error,setError] = useState(false)
const handleSubmit = (e)=>{
  e.preventDefault()
 if (firstName.length <= 0 || password.length <= 0 || confirmPassword.length <= 0) {
  setError(true)

 }

}
return(
<>

<form action="" onSubmit={handleSubmit}>
<div className="inputBox">
  <input type="text"  onChange={e => setFirstName(e.target.value)}/>
  {error && firstName.length  <=2 ? <label>FirnstName is invalid</label>:""}
</div>
<div className="inputBox">
  <input type="text" onChange={e => setPassword(e.target.value)}/>
  {error && password.length  <= 2? <label>password is invalid</label>:""}
</div>
<div className="inputBox">
  <input type="text" onChange={e => setConfirmPassword(e.target.value)}/>
  {error && confirmPassword ==="" ? <label>password is Required</label> :"" ||  confirmPassword !== password?<label>password does not Matched</label>:""}
</div>
<div className="checkBox">
{checked===false?"choose Your Gender": `You Chose ${checked} gender`}
<input type="radio" name="gender" value="Male"  onChange={e=>setChecked(e.target.value)}/> Male
<input type="radio" name="gender" value="Female"  onChange={e=>setChecked(e.target.value)}/> Female
</div>
<button>submit</button>
</form>
<SelectedImage />
</>
);
}

export default App;