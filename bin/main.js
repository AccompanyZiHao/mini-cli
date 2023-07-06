#! /usr/bin/env node

const {program} = require('commander');
const myCommander = require('./../lib/core/commander');


myCommander(program);

program.parse(process.argv);
