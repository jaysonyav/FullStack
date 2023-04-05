import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormUnControlled from './components/FormUnControlled';
import Navigation from './components/Navigation';

function App() {

  const [auth,setAuth]=useState(false)

  const login =()=>{
    setAuth(true)
  }
  return (
    <>
    <Navigation auth={auth}/>
    <div class="container">
      {/* <Form login={login}/> */}
      <FormUnControlled login={login}/>
    </div>
    </>
  );
}

export default App;
