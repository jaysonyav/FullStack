
import './App.css';
import Footer from './footer'

function App() {

  const data="hello"
  return (
    <div className="App">
      <Header greetngText={data}/>
      <Main greetngText={data}/>
      <Footer greetngText={data}/>
    </div>
  );
}


function Header(props){
  console.log(props.greetngText,'under hedaer');
  return(
    <h1 style={{color:"red",fontFamily:"cursive", backgroundColor:"teal", border:'2px solid black',boxShadow:'5px 5px 5px grey'}}>I am the header of this page</h1>
  )
}

function Main(props){
  return(
    <h2>I am the body of this page {props.greetngText}</h2>
  )
}




export default App;

let product1={name:'Iphone',year:2013}
