const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Página sobre el amor</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>El amor es hermoso</h1>');
  res.write('<p>El amor es un sentimiento maravilloso que une a las personas y hace que el mundo sea un lugar mejor.</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Servidor web en ejecución en el puerto ${port}`);
});
