const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const songs = require('./routes/api/songs');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Use Routes
app.use('/api/songs', songs);

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   app.use('/', express.static(path.join(__dirname, '/client/build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  console.log('Serving React App...');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
