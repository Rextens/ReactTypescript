import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// user
// messages

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;