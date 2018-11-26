const rest= require('rest')
var mime= require('rest/interceptor/mime')

export default rest.wrap(mime)