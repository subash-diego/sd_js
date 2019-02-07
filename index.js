/**
* @var 
* @param index.js
* @uses [index.js used to include all files and libraries in one shot]
* @return includes all files
*/

if(typeof window.sd_js_config == 'object'){

	/* check is sd_js_config is available */

		if(typeof sd_js_config != 'object'){

			console.log("No Config files found");

			 window.stop();
		}

	/* check is jquery enabled */

		if (typeof jQuery == 'undefined') { 
			
			console.log("No jQuery is found");

			 window.stop();
		}else{

			window.sd_js_config.base_url = window.sd_js_config.hasOwnProperty('base_url') ? window.sd_js_config.base_url.replace(/\/+$/,'')+'/':'';

			if(window.sd_js_config.base_url!=''){
				
				$.getScript( window.sd_js_config.base_url+'boot.js', function() {});

			}else{

				console.log("ERROR::BASE_URL base url not found");
			}
		}
	
}else{
	console.log("ERROR::CONFIG config file is not loaded");
}


