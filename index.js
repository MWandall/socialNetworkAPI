const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

// {
// 	"username": "Yubaba",
// 	"email": "washiwish@email.com"
// }

// {
//   "username": "Chihiro",
//   "email": "spirited@email.com"
// }
// {
//   "username": "Kiki",
//   "email": "deliverywitch@email.com"
// }
// {
//   "username": "Totoro",
//   "email": "forestspirit@email.com"
// }
// {
//   "username": "Howl",
//   "email": "movingcastle@email.com"
// }