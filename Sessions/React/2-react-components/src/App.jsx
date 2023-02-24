import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";

function App() {
    const CardText='Some Text'
  return (
    <>
      <Header
        title="My Project"
        css={{ backgroundColor: "green", padding: "5px" }}
      />
      <Card title='My Card' text={CardText}/>
      <Card title='My Card 2' text={CardText}/>
      <Card title='My Card 3' text={CardText}/>
      <Card title='My Card 4' text={CardText}/>
    </>
  );
}

export default App;
