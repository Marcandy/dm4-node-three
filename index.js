const express = require( "express" );
const { json } = require( "body-parser" );
const cors = require( "cors" );
const session = require( "express-session" );
const sessionConfig = require( "./config/sessionConfig" );
const app = express();
const port = 4000;

// app.use( cors() );
app.use( session( sessionConfig ) );
app.use( json() );
app.use( express.static( `${ __dirname }/public` ) );

require( "./features/books/bookRoutes" )( app );
// bookRoutes( app );
require( "./features/readingList/readingListRoutes" )( app );

app.listen( port, () => console.log( `Listening on ${ port }` ) );
