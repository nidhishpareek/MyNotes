express-->

install-	npm install express
import-	import express from 'express'

use-	const app = express();

        app.use(express.json())     => middleware to convert json requests.

        app.listen(8080, ()=>{console.log('server runnning')})  => starting the server in listen mode, app.listen(port, callback function to log which we want on server run)

        app.get('/', (req, res)=>{                              => app.get( endpoint, callback); req = request, res= response
            
            res.send('outpur message');
        })

        app.post('/post', (req.res)=>{
            let body = req.body, let params = req.params;       =>extract data from the request.
            try{
                //calculations
                //if calculation succeeds.
                res.send('success message')
            }
            catch(error){
                res.status(404).send('error message', JSON.stringify(error));          => status(error_code).
            }
        })

        app.delete('/post/:id', callback function)              => try catch functions to delete, :id is dynamic and can be extracted with req.

        app.patch(....)
        
        app.all(.....)
    
         app.get('/*', (req, res)=>{ console.log('get request')}    => /* means for all the requests that has get request, and star denotes any variable used
