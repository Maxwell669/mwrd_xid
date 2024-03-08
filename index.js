const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('WuiMLQH3HP', uuidlib.v4());
	}

module.exports = generateId
