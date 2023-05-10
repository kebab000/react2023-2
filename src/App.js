import React from 'react';
import ReactDOM from 'react-dom';

function Hello(){
    return <h1>Hello, kebab00</h1>
}

const element = <Hello />;

ReactDOM.render(element, document.getElementById('root'));

export default Hello;

