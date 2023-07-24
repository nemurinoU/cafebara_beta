import 'dotenv/config';

import express from "express";
import exphbs from "express-handlebars";
import routes from './routes/routes.js';
import bodyParser   from 'body-parser';
import path         from 'path';
import db                       from './schemas/db.js';
import { fileURLToPath }        from 'url';
import { dirname, join }        from 'path';

const port = process.env.SERVER_PORT;

const app = express();

app.engine("hbs", exphbs.engine({extname: 'hbs', defaultLayout: 'main'}));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.static(`public`));
app.use ( '/uploads', express.static(path.join(dirname(fileURLToPath(import.meta.url)), 'uploads')));
app.use ( express.urlencoded({ extended: true }));
app.use ( bodyParser.urlencoded({ extended: true }));
app.use ( bodyParser.json() );
app.use(express.json());



app.use(`/`, routes);

db.connect();

app.listen(port, function () {
    console.log(`Server is running at:`);
    console.log(`http://localhost:` + port);
});
