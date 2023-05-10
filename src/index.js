import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props){
  return (
    <div>
      <div>{props.title1}</div>
      <div>{props.text1}</div>
      <div>{props.author1}</div>
      <div>{props.author2}</div>
    </div>
  )
}

const name = {
  name:"kebab00",
  text:"hello",
  author : {
    name:"baby",
    url:"naver.com"
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello title1={name.name} text1={name.text} author1={name.author.name} author2={name.author.url}/>)