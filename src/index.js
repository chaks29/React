import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class StateManagement extends React.Component {
  constructor () {
    super()
    this.state = {os : 'Windows'}
  }
  
  win = () => this.setState({os : 'Windows'})
  mac = () => this.setState({os : 'Mac'})
  lin = () => this.setState({os : 'Linux'})

  render () {
    return (
      <div>
        <h1>I am using {this.state.os} Operating System</h1>
        <button type='button' onClick={this.win}>Windows</button>
        <button type='button' onClick={this.mac}>Mac</button>
        <button type='button' onClick={this.lin}>Linux</button>
      </div>
    );  
  }
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StateManagement/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();