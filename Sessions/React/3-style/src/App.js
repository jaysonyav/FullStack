
import './App.css';
import Footer from './footer'
import Navigation from './navigation';
import './myStyle.scss'
import Parent from './common/Parent';

function App() {
  return (
    <div>
      <Parent/>
      <Navigation/>
      <Top />
      <Middle />
      <Bottom />
      <Footer />
    </div>
  );
}

function Top() {
  return (
    <h2
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "red",
        margin: "0px",
        color: "white",
        border: "1px solid black"
      }}
    >
      top
    </h2>
  );
}
function Middle() {
  return (
    <h2
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "blue",
        margin: "0px",
        color: "white",
        border: "1px solid black"
      }}
    >
      middle
    </h2>
  );
}
function Bottom() {
  return (
    <h2
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "green",
        margin: "0px",
        color: "white",
        border: "1px solid black"
      }}
    >
      bottom
    </h2>
  );
}

export default App;