const fs = require('fs');

const users = [];

const userList = () => {
  return users.map(user => {
    return `<li>${user}</li>`;
  });
};

function reqHandler(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === '/users') {
    res.statusCode = 302;
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `<html><button><a href="/">Home</a></button><ul>${userList().join(
        ' '
      )}</ul></html>`
    );
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      users.push(user);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    return res.end();
  }
  res.write(
    '<html><h1>Welcome, please sign up</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></html>'
  );
  res.end();
}

module.exports = reqHandler;
