'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var movieSchema = Schema( {
    _id: ObjectId,
    Rank: Number,
    Title: String,
    Genre: String,
    Description: String,
    Director: String,
    Actors: String,
    Year: Number,
    Runtime: Number,
    Rating: Number,
    Votes: Number,
    Revenue: Number,
    Metascore: Number,
} );

module.exports = mongoose.model( 'Movie', movieSchema );
