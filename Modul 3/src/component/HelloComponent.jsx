import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    return <div>
        <h3>Form Login</h3>
        <form>
            <h2>Tugas Pertemuan Ketiga</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <label className="col-md-4"><b>Username</b></label>
                        <input className="col-md-8 form-control" type="text" placeholder="Masukkan Username" name="uname" required/>
                        <label className="col-md-4"><b>Password</b></label>
                        <input className="col-md-8 form-control" type="password" placeholder="Masukkan Password" name="psw" required/>            
                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/> Remember me
                    </div>
                </div>
            </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                </div>
        </form>
    </div>
}

export default HelloComponent;