const tiktok = require('./lib/tiktok');
const tiktok2 = require('./lib/tiktok2');
const yts = require('./lib/yts');
const ytv = require('./lib/ytmp4');
const facebook = require('./lib/facebook');
const gimg = require('./lib/gimg');
const iplookup = require('./lib/iplookup');
const bin = require('./lib/binlookup');
const gituserinfo = require('./lib/github');
const removebg = require('./lib/removebg');
const base64encode = require('./lib/base64');
const translate = require('./lib/translate');
const textprome = require('./lib/textmaker/textprome');
const photooxy = require('./lib/textmaker/photooxy');
const ephoto = require('./lib/textmaker/ephoto360');
const yta = require('./lib/ytmp3');
const express = require('express');

const port = process.env.PORT || 3000;

const app = express(); 


/*
*-----------------------------------------------------------------------
*|                           TikTok Api                                |
*-----------------------------------------------------------------------
*/

app.get('api/tiktok', (req, res) => {
    if(!req.query.url){
            res.send('Enter Valid Url')
}
            tiktok(req.query.url)
                .then((data) => {
                     res.send(data);

            })
                  .catch((error) => {
                     res.send(error);

            })

});


/*
*------------------------------------------------------------------------
*|                           TikTok Api 2                                |
*------------------------------------------------------------------------
*/

app.get('api/tiktok2', (req, res) => {
        if(!req.query.url){
                res.send('Enter Valid Url')
    }
                tiktok2(req.query.url)
                    .then((data) => {
                         res.send(data);
    
                })
                      .catch((error) => {
                         res.send(error);
    
                })
    
    });

//page ekak nee kiyala penna 
// app.get('*', (req, res)=>{
//     res.send('page not found');
// });

//===================================================================

/*
*-----------------------------------------------------------------------
*|                      YouTube Search Api                             |
*-----------------------------------------------------------------------
*/

app.get('api/yts', (req, res) => {
    if(!req.query.q){
            res.send('Enter Valid Url') 
}
            yts(req.query.q)
                .then((data) => {
                     res.send(data);

            })
                  .catch((error) => {
                     res.send(error);

            })

});

/*
*-----------------------------------------------------------------------
*|                 FaceBook Video Downloader Api                        |
*-----------------------------------------------------------------------
*/  

app.get('api/fb', (req, res) => {
    if(!req.query.q){
            res.send('Enter Valid Url') 
}
            facebook(req.query.q)
            .then((data) => {
                 res.send(data);

        })
              .catch((error) => {
                 res.send(error);

        })


        });

/*
*------------------------------------------------------------------
*|                 Google Image Finder Api                        |
*------------------------------------------------------------------
*/  

app.get('api/gimg', (req, res) => {
    if(!req.query.q){
            res.send('Enter Valid Url') 
}
            gimg(req.query.q)
            .then((data) => {
                 res.send(data);

        })
              .catch((error) => {
                 res.send(error);

        })


        });

   
/*
*--------------------------------------------------------
*|                 Ip Lookup Api                        |
*--------------------------------------------------------
*/  

app.get('api/iplookup', (req, res) => {
    if(!req.query.ip){
            res.send('Enter Valid Url') 
}
            iplookup(req.query.ip)
            .then((data) => {
                 res.send(data);

        })
              .catch((error) => {
                 res.send(error);

        })


        }); 
        

/*
*--------------------------------------------------------------
*|                 GitHub User Info Api                        |
*--------------------------------------------------------------
*/  

app.get('api/github', (req, res) => {
        if(!req.query.username){
                res.send('Enter Valid Url') 
    }
    gituserinfo(req.query.username)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });         
        
/*
*----------------------------------------------------------
*|                 Bin Look Up Api                        |
*----------------------------------------------------------
*/  

app.get('api/bin', (req, res) => {
        if(!req.query.bin){
                res.send('Enter Valid Url') 
    }
    bin(req.query.bin)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });  

/*
*--------------------------------------------------------
*|                 Remove Bg Api                        |
*--------------------------------------------------------
*/  

app.get('api/removebg', (req, res) => {
        if(!req.query.url){
                res.send('Enter Valid Url') 
    }
    removebg(req.query.url)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });  
        
/*
*--------------------------------------------------------
*|                 Base64 Encode Api                        |
*--------------------------------------------------------
*/  

app.get('api/base64', (req, res) => {
        if(!req.query.q){
                res.send('Enter Valid Url') 
    }
    base64encode(req.query.q)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });    
            

/*
*--------------------------------------------------------
*|                 Google Translate API                       |
*--------------------------------------------------------
*/  

app.get('api/translate', (req, res) => {
        if(!req.query.text){
                res.send('Enter Required Parameter') 
    }
    translate(req.query.text,req.query.lang)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            }) 
    
    
            });                
        
/*
*--------------------------------------------------------
*|                 Ytmp3 API                       |
*--------------------------------------------------------
*/  

app.get('api/ytmp3', (req, res) => {
        if(!req.query.q){
                res.send('Enter Required Parameter') 
    }
    yta(req.query.q)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            }) 
    
    
            });  
            
            
/*
*-----------------------------------------------------------------------
*|                 YouTube Video Downloader Api                        |
*-----------------------------------------------------------------------
*/

app.get('api/ytmp4', (req, res) => {
        if(!req.query.q){
                res.send('Enter Valid Url') 
    }
                ytv(req.query.q)
                .then((data) => {
                     res.send(data);
    
            })
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });
            

/*
*---------------------------------------------------------
*|                 Textpro Me Api                        |
*---------------------------------------------------------
*/

app.get('api/textprome', (req, res) => {
        if(!req.query.url){
                res.send('Enter Valid Url') 
    }
                textprome(req.query.url,req.query.text,req.query.text2)
                .then((data) => {
                     res.send(data);
    
            }) 
                  .catch((error) => {
                     res.send(error);
    
            })
    
    
            });

// /*
// *-------------------------------------------------------
// *|                 Photooxy Api                        |
// *-------------------------------------------------------
// */

// app.get('/photooxy', (req, res) => {
//         if(!req.query.url){
//                 res.send('Enter Valid Url') 
//     }
//     photooxy(req.query.url,req.query.text,req.query.text2)
//                 .then((data) => {
//                      res.send(data);
    
//             })
//                   .catch((error) => {
//                      res.send(error);
    
//             })
    
    
//             }); 
            
// /*
// *---------------------------------------------------------
// *|                 Ephoto 360 Api                        |
// *---------------------------------------------------------
// */

// app.get('/ephoto', (req, res) => {
//         if(!req.query.url){
//                 res.send('Enter Valid Url') 
//     }
//     ephoto(req.query.url,req.query.text,req.query.text2)
//                 .then((data) => {
//                      res.send(data);
    
//             })
//                   .catch((error) => {
//                      res.send(error);
    
//             })
    
    
//             });             

app.listen(port,()=>console.log(`App Is listening on port ${port} https://localhost:${port}`)); 