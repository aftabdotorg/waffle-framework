import Waffle from './lib';
const server = new Waffle();

server.get('/', (res) => {
  res.send('Welcome to Waffle!');
});

server.get('/about', (res) => {
  res.send('This is the About Page!');
});

server.get('/api', (res) => {
  res.json({
    name: 'Sherlock Holmes',
    occupation: 'Detective',
    city: 'London', 
  });
});

server.get('/blog', (res) => {
  res.html("blog");
});



server.start(3000, () => {
  console.log('Server running on port 3000');
});
