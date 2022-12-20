let express = require('express');
let app = express();

app.get('/', function (_req: any, res: { send: (arg0: string) => void; }) {
  res.send('Hello World!');
});

app.get('/version', function (_req: any, res: { send: (arg0: string) => void; }) {
  res.send('version5');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});