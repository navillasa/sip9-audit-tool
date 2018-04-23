#!/usr/bin/env node
'use strict';

const Config = require('../lib/config');
const program = require('commander');
const Storage = require('storj-service-storage-models');
const complex = require('storj-complex');

program
  .version('0.0.1')
	.command('command <req> [optional]','command description')
	.option('-c, --config <path_to_config_file>', 'path to the config file');
	.option('-d, --datadir <path_to_datadir>', 'path to the data directory');
	.parse(process.argv);

const config = new Config(process.env.NODE_ENV || 'develop', program.config,
                            program.datadir);
const network = complex.createClient(config.complex);

const getShardsFromFarmer = function(contact) {
	const cursor = storage.models.Shard.find({
			'contracts.nodeID': contact.nodeID
	}).cursor();
}

cursor
  .on('error', handleCursorError)
  .on('data', handleCursorData)
  .on('end', handleCursorClose);

// Prints the error and continues processing cursor
function handleCursorError(err) {
    process.stderr.write(JSON.stringify({ error: err.message }));
    process.exit(1);
}

function getRetrievalToken([contact, contract], next) {
	getRetrievalPointer(meta.contact, contract, function(err, dcPointer) {
	if (err) {
			log.error(err.message);
			return done(null, false);
		}

		if (!dcPointer.token) {
			log.error('Failed to get a retrieval token from farmer');
			return done();
		}

		meta.pointer = {
			token: dcPointer.token,
			farmer: meta.contact
		};

		done(null, true);
	});
};
