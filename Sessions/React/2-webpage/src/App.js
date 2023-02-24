
import Navigation from './Components/Navigation';
import Banner from './Components/Banner';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    
       <Navigation brand="My App" classes='navbar-dark bg-dark'/>
       <Banner/>
       <Services/>
       <Footer year='2023'/>
    
    </>
  );
}

export default App;
