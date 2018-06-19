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
}
