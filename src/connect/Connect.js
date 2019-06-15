/**
 * @author Paul
 * @description : Gestion du formulaire gestion de la saisie et des requetes serveur
 * 
 * @import  React from 'react'
 * @import Home from '../home/Home'
 * @import Abcrypt from '../Bcrypt/crypt'
 * @import axios
 */
import React from 'react';
import Home from '../home/Home';
import Abcrypt from '../Bcrypt/Crypt';
var axios=require('axios');
/**
 * @class Connect affiche le form et envoie les request
 */
class Connect extends React.Component{
    /**
     * 
     * @param {Props} props 
     */
    constructor(props){
        super(props);
        this.state = {isLoggedIn : false, login : '' , pwd : ''};
        this.handleClick = this.handleClick.bind(this);
        this.loginchange  = this.loginchange.bind(this);
        this.pwdChange =  this.pwdChange.bind(this);
    }
    /**
     * 
     * @param {Object} event 
     */
    loginchange(event){
        this.setState({login : event.target.value})
    }
    /**
     * 
     * @param {Object} event 
     */
    pwdChange(event){
        this.setState({pwd : event.target.value})
    }
    /**
     * @param {Object} e
     */
    handleClick=(e)=> { 
        e.preventDefault();
        const login = this.state.login;
        const pwd = this.state.pwd
        const crypt = new Abcrypt();
        var isLoggedIn = this.state.isLoggedIn;
            
        console.log('action');

        axios = crypt.getUser(login,pwd)
            .then(function (response) {
            if(response.status !== 200){
                console.log('echec '+response.status)
                return true;   
            }else{
                console.log('succes 200')
                return true;
            } 
            })
            .catch(function (error) {
              console.log(error);
              return false;
            })


        setTimeout(() => {
            
            console.log(axios)
        if (axios !== true){
        console.log('true')
        }else{
            console.log('false')
        }
        
        }
        , 2000);
        
        this.setState({isLoggedIn: isLoggedIn});
    }



    /**
     * @description Methode de rendue
     */
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const login = this.state.login;
        const pwd = this.state.pwd;
        return(
            <Greeting isLoggedIn = {isLoggedIn} handleClick={this.handleClick } pwd = {pwd} login = {login} pwdChange = {this.pwdChange} loginchange = {this.loginchange}/>
        )
        
    }

}
/**
 * @param {Object} props Routage de la connexions 
 */
function Greeting(props) {
    const pwdChange = props.pwdChange;
    const login = props.login;
    const pwd = props.pwd;
    const isLoggedIn = props.isLoggedIn;
    const handleClick = props.handleClick;
    
    if (isLoggedIn) {
      return <Logok />;
    }else{
        return <Guestlog handleClick = {handleClick} pwd = {pwd} login = {login} loginchange = {props.loginchange} pwdChange = {pwdChange}/>;
    }
}
/**
 * 
 * @param {Object} props decrit les proprietes utile a la </home> page
 */
function Logok(props){
    console.log('Home page')
    return <Home />
}

function Guestlog(props ){
    return <div className = "container-fluid cont1">
                <div className = "row justify-content-center">
                    <form onSubmit = {props.handleClick}>
                        <div className="form-group">
                            <div className ="col-8">
                                <div>
                                    <label htmlFor ="login">Login</label>
                                    <input type="text" name="login" id="login" value= {props.login} onChange = {props.loginchange}></input>
                                </div>
                                <div>
                                    <label htmlFor ="pwd"> Password</label>
                                    <input type="text" name="pwd" id="pwd" value= {props.pwd} onChange = {props.pwdChange}></input>
                                </div>
                                <div className="btnconnect">
                                    <button  >Connect</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
}

export default Connect; 