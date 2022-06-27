const { fstat } = require('fs');
let http = require('http');
let fs = require('fs');
let url = require('url');
let EventEmitter = require('events');

let App = {
  start: function (port) {
    let emitter = new EventEmitter();
    let server = http
      .createServer((request, response) => {
        response.writeHead(200, {
          'Content-type': 'text/html; charset=utf-8',
        });
        if (request.url === '/') {
          emitter.emit('root', response);
        }
        response.end();
      })
      .listen(port);
    return emitter;
  },
};

let app = App.start(8080);
app.on('root', (response) => {
  response.write('Je suis a la racine aka');
});

// let server = http.createServer();
// console.log(server);

// server.on('request', (request, response) => {
//   response.writeHead(200);
//   //    {
//   //   'Content-type': 'text/html; charset=utf-8',
//   // };
//   // console.log(url.parse(request.url, true));
//   let query = url.parse(request.url, true).query
//   let name = query.name === undefined ? 'anonyme' : query.name

//   // query.name === undefined
//   //   ? response.end(`Hello anon`)
//   //   : response.end(`Bonjour ${query.name}`);

//     // console.log(request.url);
//     fs.readFile('index.html', (err, data) => {

//       if (err) {
//         response.writeHead(404, {
//           'Content-type': 'text/html; charset=utf-8',
//         });
//         response.end(`Ce fichier n'existe pas`);
//       }else {
//         response.writeHead(200, {
//           'Content-type': 'text/html; charset=utf-8'
//         })
//         data = data.replace('{{name }}', name)
//         response.end(data);

//       }
//     });
// });
// server.listen(8080);

// const EventEmitter = require('events');

// let monEcouteur = new EventEmitter();

// monEcouteur.on('jump', () => {
//   console.log('I did jumped');
// });

// monEcouteur.emit('jump');
