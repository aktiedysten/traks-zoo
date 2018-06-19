import React from 'react';
import { O } from 'traks/o';

/* This is your translations file. It is automatically updated by `traks update`
 * which parses and rewrites it, potentially adding new translations and
 * updating underscore-prefixed fields, to reflect changes in your main source.
 * To avoid nasty surprises you should follow these guidelines:
 *  - Everything before the export statement is rewritten as-is; you can add
 *    imports, functions and whatever you like here.
 *  - Everything inside the export statement, except for function bodies, is
 *    _rebuilt_. If you change anything here, then at best it will be overwritten
 *    by `traks update` (this includes writing comments), and at worst, it might
 *    cause `traks update` to consider the file corrupt, and thus refuse to
 *    update it.
 *  - One exception is hash-prefixed keys, e.g. "#comment"; you can add these
 *    before underscore-prefixed fields and they'll be preserved. You can use
 *    these for your own needs, e.g. commenting on translations.
 *  - Function bodies can be in block-statement form, or in expression form.
 *    That is, both these examples are valid (and equivalent):
 *       "en": () => {
 *           return <O>Hello world!</O>
 *       },
 *       "en": () => <O>Hello world!</O>,
 *    Also, `traks update` will not meddle with this once a translation is there,
 *    so you can convert between these two styles as you wish. New translations are
 *    added in expression form if they're one-liners.
 *  - It's a good idea to run `traks update` before you commit since it verifies
 *    that the file is valid, and it might change formatting and update
 *    underscore-prefixed fields.
 *
 * See also the import file (src/traks.js) for more info on usage.
 */

export default {
	"e8c2410dd77c": {
		"_new": true, // FIXME remove this line when translation is done
		"_refs": [
			"src/App.js:39",
		],
		"en": (count) => <O>You have {count} unread message(s)</O>,
		"da": (count) => <O>You have {count} unread message(s)</O>,
	},

	"cc4198384dca": {
		"_new": true, // FIXME remove this line when translation is done
		"_refs": [
			"src/App.js:48",
		],
		"en": () => <O>Simple translation</O>,
		"da": () => <O>Simple translation</O>,
	},

	"bb4a048e3afe": {
		"_new": true, // FIXME remove this line when translation is done
		"_refs": [
			"src/App.js:51",
		],
		"en": (Comment, name) => <O>Hello, {name}! <Comment>The name, {name}, is dynamic</Comment></O>,
		"da": (Comment, name) => <O>Hello, {name}! <Comment>The name, {name}, is dynamic</Comment></O>,
	},

	"3839d7d18601": {
		"_new": true, // FIXME remove this line when translation is done
		"_refs": [
			"src/App.js:58",
		],
		"en": () => <O>You can handle singular/plural cases in translation code</O>,
		"da": () => <O>You can handle singular/plural cases in translation code</O>,
	},

	"701a43e44be6": {
		"_new": true, // FIXME remove this line when translation is done
		"_context": "file",
		"_refs": [
			"src/App.js:61",
		],
		"en": () => <O>Save</O>,
		"da": () => <O>Save</O>,
	},

	"49ef2d15742d": {
		"_new": true, // FIXME remove this line when translation is done
		"_context": "money",
		"_refs": [
			"src/App.js:63",
		],
		"en": () => <O>Save</O>,
		"da": () => <O>Save</O>,
	},

	"7ce29ca93eb3": {
		"_new": true, // FIXME remove this line when translation is done
		"_context": "soccer",
		"_refs": [
			"src/App.js:65",
		],
		"en": () => <O>Save</O>,
		"da": () => <O>Save</O>,
	},

	"29beb7a14a14": {
		"_new": true, // FIXME remove this line when translation is done
		"_context": "jesus",
		"_refs": [
			"src/App.js:67",
		],
		"en": () => <O>Save</O>,
		"da": () => <O>Save</O>,
	},

	"58099e7e5b4e": {
		"_new": true, // FIXME remove this line when translation is done
		"_refs": [
			"src/App.js:70",
		],
		"en": () => {
			return (
				<O>
					<div>You</div>
					<div>can</div>
					<div>also</div>
					<div>have</div>
					<div>multiline</div>
					<div>translations</div>
				</O>
			);
		},
		"da": () => {
			return (
				<O>
					<div>You</div>
					<div>can</div>
					<div>also</div>
					<div>have</div>
					<div>multiline</div>
					<div>translations</div>
				</O>
			);
		},
	},
}
