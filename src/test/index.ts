import { App, ConfigBuilder } from 'lynx-framework';

const port = Number(process.env.PORT) || 3000;

let myConfig = new ConfigBuilder(__dirname, false).disableDB().build();

const app = new App(myConfig, []);

app.startServer(port);
