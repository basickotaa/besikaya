var base64 = require('base-64');
var utf8 = require('utf8');
var axios = require("axios").default;

const base64encode = (text) =>{
    return new Promise((resolve, reject) =>{
        var bytes = utf8.encode(text);
        var encoded = base64.encode(bytes);

            resolve({result:{
                text: text,
                base64encode:encoded
                }})
        
        .catch(function(erro) {
            reject(erro);
        })

    })
}

module.exports = base64encode
 
