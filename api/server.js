const express = require( 'express' );
const helmet = require( 'helmet' );
const dishesRouter = require( '../dishes/dishes-router' );
const recipeRouter = require( '../dishes/recipes/recipe-router' );
const server = express();

server.use(helmet());
server.use(express.json());

//ENDPOINT
server.use( '/api/dishes' , dishesRouter );
server.use( '/api/recipe' , recipeRouter );

//SANITY CHECK
server.get( '/' , ( req, res ) => {
  res.status( 200 ).json({ hello: 'World!' });
});

module.exports = server;