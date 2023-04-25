


const express = require('express');
const app = express();
const port = 3000;

app.use(
  "/public",
  express.static(__dirname + "/public", {
    setHeaders: function (res, path, stat) {
      res.set("Content-Type", "text/*");
    },
  })
);

app.use(
  "/images",
  express.static(__dirname + "/images", {
    setHeaders: function (res, path, stat) {
      res.set("Content-Type", "image/*");
    },
  })
);


// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', __dirname + '/views');

// Define routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});