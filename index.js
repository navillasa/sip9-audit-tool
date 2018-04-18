#!/usr/bin/env node
'use strict';

const program = require('commander');

program
  .version('0.0.1')
	.command('command <req> [optional]','command description')
	.command('command2','command2 description')
	.command('command3','command3 description')
	// have to parse in new statement
	.parse(process.argv);
