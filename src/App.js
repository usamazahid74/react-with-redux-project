import React from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import Header from "./layouts/header";

function App() {
  var mainconteiner = {
    backgroundColor: "lightgrey",
    textAlign: "center",
    padding: "10px",
  };
  return (
    <div className="container" style={mainconteiner}>
      <Header />
      <AddPost />
      <Posts />
    </div>
  );
}

export default App;
