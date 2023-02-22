function App() {

    // JSX => JavaScript
  // React.createElement(
  //   "main",
  //   {id:'container',title:'main section'},

  //   React.createElement('p',{id:'para'},'This is paragraph')
  // )  

  
  return (
      <>

        <h1 className="important">Hello World</h1>
        <p>This is paragrph</p>

        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
      </>
    )
  
}

export default App;
