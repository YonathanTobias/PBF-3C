import React from 'react';
import logo from './logo.svg';
import PP from './PP.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Biodata(){
  return(
          <center>
          <div>
          <img src={PP} alt="logo" className="roundedCircle"/>
          </div>
          <br/>
          <br/>
          <div>
            <h3>Nama   : Yonathan Tobias B</h3>
            <h3>Alamat : JL. Tlogo Indah 4/65</h3>
          </div>
          </center>
  )
}

export default Biodata;
