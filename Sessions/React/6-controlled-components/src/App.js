import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navigation from './components/Navigation';

function App() {

  const [auth,setAuth]=useState('')
  return (
    <>
    <Navigation auth={false}/>
    <div class="container">
      <Form/>
    </div>
    </>
  );
}

export default App;
