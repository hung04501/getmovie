
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var app = require('../app');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);

var server = app.listen(app.get('port'),server_ip_address, function() {
  console.log('Express server listening on port ' + server.address().port);
});
