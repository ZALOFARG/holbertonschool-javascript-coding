const http = require('http');

const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.write(`${data.join('\n')}`);
        res.end();
      })
      .catch((error) => {
        res.write(error.message);
        res.end();
      });
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
