const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
// cross origin requests * The 2 above lines must remain together!

require('./config/mongoose.config');

// require('./routes/product.routes')(app);

app.use(express.json(), express.urlencoded({ extended: true}));
// uses json and url encoded

require('./routes/product.routes')(app);
// import routes export

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));