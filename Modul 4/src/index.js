import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import BlogPost from "./container/BlogPost/BlogPost"; 
//import HelloComponent from './component/HelloComponent';
//import StateFullComponent from './container/StateFullComponent';

// const HelloWord = () =>{
//     return <p>ini adalah arrow function</p>
// }
//class Greeting extends React.Component
//{
//    render(){
//        return <h1>hello, {this.props.name} </h1>;
//    }
//}

ReactDOM.render(<BlogPost />, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
