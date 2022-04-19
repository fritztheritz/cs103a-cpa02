'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var savedMoviesSchema = Schema( {
  userId: ObjectId,
  movieId: ObjectId,
} );

module.exports = mongoose.model( 'SavedMovies', savedMoviesSchema );
