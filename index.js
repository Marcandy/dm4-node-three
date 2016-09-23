const express = require( "express" );
const { json } = require( "body-parser" );
const cors = require( "cors" );
const app = express();
const port = 4000;

// app.use( cors() );
app.use( json() );
app.use( express.static( `${ __dirname }/public` ) );
console.log( __dirname );


app.listen( port, () => console.log( `Listening on ${ port }` ) );
