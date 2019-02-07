/**
* @var
* @param [config.js]
* @uses [config.js used to return configuration info]
*/

class config {



	/* Consgtruct */

	constructor() {

		//this.name = "subash";

		if(typeof window.sd_js_config == 'object'){

			var This = this;

			for (var prop in window.sd_js_config) {
			  if (window.sd_js_config.hasOwnProperty(prop)) {

			  	this[prop] = window.sd_js_config[prop];
			    
			  }
			}

		}else{

			console.log("BASE::CONFIGURATION IS MISSING");
		}
  	}

  	/**
  	* @var
  	* @param get_config
  	* @uses [get_config is to return all ]
  	*/

  	get_config(config_name = ''){

  		if(config_name!=''){

  			return typeof this[config_name] != 'undefined' ? this[config_name] :'';
  		}
  	}
}