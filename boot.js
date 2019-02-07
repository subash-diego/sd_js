/**
* @var 
* @param boot_loader
* @uses	[boot_loader is used to intial boot of all files in sd_js]
*/

function boot_loader(){

	/* basic config */

	var base_url = sd_js_config.hasOwnProperty("base_url") ? sd_js_config.base_url : "";
	var db_conf  = sd_js_config.hasOwnProperty("db_conf") ? sd_js_config.db_conf : "";

	/* Load all files and functions */

	/* - sd_js
			- app
				- config
				   	- config.js
				- controllers
					- base.js
					- controller.js
				- models
			- settings
				- core
				- helpers
				- libraries
	*/

	/* Case path system */

	if(base_url != ""){

		var sys_files = [
							{
								name : "config.js",
								path : base_url+'app/config/config.js'
							},
							{
								name : "controller.js",
								path : base_url+'app/controllers/controller.js'
							},
							{
								name : "base.js",
								path : base_url+'app/controllers/base.js'
							}
						];

		/* Load all base classes using loader*/

			if(sys_files.length){

				$.each(sys_files,function(key,value){

					var path = value.hasOwnProperty('path') ? value.path : '';

					if(path!=''){

						file_loader(path);
					}
				});
			}

			window.sd_js_config['sys_files'] = sys_files;

	}else{

		console.log("BASE_PATH::Cannot Load Core Files");
	}
}

/* Calling boot_loader */
boot_loader();

/**
* @var
* @param file_loader
* @uses [file_loader used to retrieve and include file in html page]
*/

function file_loader(path =''){

	$.getScript(path, function() {
		console.log("loaded "+path);
	});
}
