import app from './conf/config'
const PORT = app.get('port')

app.listen(PORT, function() {
  console.log('Express server listening on port ' + app.get('port'));
});

