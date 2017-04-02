'use strict';
/* eslint-env node */
import babel from 'rollup-plugin-babel';

const pkg = require( './package.json' );
const external = Object.keys( pkg.dependencies );
const now = new Date();
const year = now.getFullYear();

const banner = `/**!
 * Backbone Relational v${pkg.version} (${pkg.name})
 * ----------------------------------
 * (c) 2011-${year} Paul Uithol and contributors (https://github.com/PaulUithol/Backbone-relational/graphs/contributors)
 * Distributed under MIT license
 *
 * ${pkg.homepage}
 */\n`;

export default {
	entry: 'src/backbone-relational.js',
	plugins: [
		babel({
			babelrc: false,
			comments: false,
			presets: [
				[ 'es2015', { modules: false }]
			],
			plugins: [
				'external-helpers'
			]
		})
	],
	moduleName: 'BackboneRelational',
	sourceMap: true,
	targets: [
		{
			dest: pkg.main,
			format: 'umd'
		}
	],
  external: [ 'backbone', 'underscore', 'jquery' ],
  globals: {
    backbone: 'Backbone',
    underscore: '_',
    jquery: '$'
  },
	banner
};
