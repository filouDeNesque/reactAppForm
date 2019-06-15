import React from 'react';
import Bcrypt from 'bcrypt-nodejs'

class Abcrypt extends React.Component{
    render(){
        return(
            <div>Vide{doit()}</div>
        )
    }
}

function doit(){
    var hash = Bcrypt.hashSync("bacon");
    var result = Bcrypt.compareSync("bacon", hash)
    console.log('result bcrypt :' + result)
}

export default Abcrypt;