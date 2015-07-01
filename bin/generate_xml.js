#!/usr/bin/env node

"use strict";

var Omnivore = require('..');
var getMetadata = require('mapnik-omnivore').digest;

var usage = 'usage: generate-xml.js <filepath>';

var filepath = process.argv[2];

if (!filepath) {
   console.log(usage);
   process.exit(1);
}

getMetadata(filepath, function(err,metadata) {
    if (err) throw err;
    metadata.filepath = filepath;
    console.log(Omnivore.getXml(metadata));
});
