'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var movieSchema = Schema( {
    rank: Number,
    title: String,
    genre: String,
    description: String,
    director: String,
    actors: String,
    year: Number,
    runtime: Number,
    rating: Number,
    votes: Number,
    revenue: Number,
    metascore: Number,
} );

module.exports = mongoose.model( 'Movie', movieSchema );
