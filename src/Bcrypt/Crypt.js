/**
 * 
 * @author Paul
 * @import { Bcrypt } from "bcrypt-nodejs";
 * @constant axios
 * @constant querystring
 * @todo Compare 'const' vs 'import'
 */

import Bcrypt from 'bcrypt-nodejs';
const axios=require('axios');
const querystring = require('querystring')

class Crypt{

    /**@constructor constructor */

    constructor(){
        console.log('crypt');
    }

    //#region Methodes public
    /** 
     * @param {String} login name of user 
     * @param {String} pwd passeword of user
     * @returns Void
     */
    create(login,pwd){   
        pwd = Bcrypt.hashSync(pwd)
        console.log('pwd : '+pwd)
        var body = querystring.stringify({login : login, pwd : pwd})
        body = JSON.stringify(body)
        axios.post('http://localhost:4500/add',body)
        .then(function(res){
            console.log('success + res :' + res ); 
                  
        })
        .catch(function(err){
            console.log('erreur : ' + err)  
        })
        // .finally
    }
    /**
     * 
     * @param {String} login user name get connected
     * @param {String} pwd user password get connected
     * @returns {Object} axios 
     */
    getUser(login, pwd){
        return axios.get('http://localhost:4500/getuser/'+login+'&'+pwd)
    //       .then(function (response) {
    //         console.log(response.status);
    //         //TODO : affichage en fonction des status
    //         if(response.status !== 200){
    //             res = false;
    //             return false;
    //         }
    //             res = true;
    //             return true;
    //       })
    //       .catch(function (error) {
    //           console.log(error);
    //       })
    //     console.log(res2)
    // }
}

    //#******************* 
    //#endregion
    //#*******************    
}
/**
 * @exports class Crypt
 */
export default Crypt;