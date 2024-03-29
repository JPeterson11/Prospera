'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  homeController = require( './controllers/homeController' ),
  errorController = require( './controllers/errorController' );

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(
    express.urlencoded({
        extended: false
        })
    );
app.use(express.json());
//app.set( 'port', process.env.PORT || 3000 );

app.set( 'view engine', 'ejs' );
app.use( layouts );
app.use( express.static( 'public' ) );

app.get( '/', function( req, res )  {
  res.render( 'index' );
} );

app.get( '/courses', homeController.showCourses );
app.get( '/contact', homeController.showSignUp );
app.post( '/contact', homeController.postedContactForm );

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( PORT, HOST, () => {
  console.log( `Server running at http://localhost:${PORT}` );
} );
