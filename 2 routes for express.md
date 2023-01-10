make a new file for route

import router= 		import {Router} from 'express'

define route = 		const route_name = Router();

use route = 		route_name.get('/xyz', callbackfunction);

export route = 		export default route_name;


in the server / express app file=>

import route=> 		import route_name from 'router_file_location'

use route => 		app.use('/route_base_path', route_name);
								 /\
 								  | this path will be addition to the router path, like in this case
								  	/route_base_path/xyz will be path where router is used.

