const logomaker = require('kingamda-logomaker'); 

const textprome = (url,text1,text2) =>{
    return new Promise((resolve,reject)=>{
        logomaker.textpro(url,[`${text1}`,`${text2}`])
        .then(async (data) => { 
          try { 
              resolve({status:200,
                result:{ 
                  image_url:data,}})
          } catch(err) { 
              reject(err);  
          } 
    });
    })
}

module.exports = textprome