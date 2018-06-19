import React from 'react';
import translations from './traks-translations';

var setup, module;
/* The Traks Babel-plugin replaces the "TRAKS_COMPILE_TIME_MAGICK_CONST__*"
 * string literals with true or false at compile time based on build mode set
 * via environment variables */
if ("TRAKS_COMPILE_TIME_MAGICK_CONST__IS_BAKED") {
	setup = require('traks/setup-baked');
	module = setup({
		translations,
		lang: "TRAKS_COMPILE_TIME_MAGICK_CONST__LANG",
		set_lang: (lang) => {
			console.log("TODO set lang", lang); // TODO handle your language change here for baked builds
		}
	});
} else {
	setup = require('traks/setup');

	/* When a translation is missing, it gets wrapped in this component. You can omit it if you want. */
	const TranslationMissing = function(props) {
		return <span style={{backgroundColor:"#f0f",color:"#ff0"}}>{props.children || null}</span>;
	}

	module = setup({
		translations,
		default_lang: "en",
		translation_missing_component: TranslationMissing,
	});
}

const { T, TraksProvider, TraksConsumer } = module;

/* exports explained:
 *   T: your translation React component, examples:
 *       <T>translate me</T>                                       (simple translation)
 *       <T>will you <i>translate me</i>?</T>                      (you're not limited to text strings)
 *       <T>You have {count} unread message(s)</T>                 ('count' gets captured and provided as a dependency in your translations file)
 *       <T>Hello, <World/></T>                                    ('World' gets captured and provided as a dependency in your translations file)
 *       <T context='file'>Save</T> <T context='people'>Save</T>   (use context to provide different translations for the same content)
 *       <T deps={[count]}>You have several messages</T>           (a way to pass additional dependencies)
 *      Rules to follow:
 *       - you cannot nest <T>-tags; no "<T>'s inside <T>'s"
 *       - you cannot have inline functions in JSX expressions:
 *            <T>{x=>x}</T> is forbidden
 *            but <T><input placeholder="my translated placeholder" onChange={on_change_fn}/></T> is fine!
 *       - <T> supports no attributes other than 'deps', 'context' and 'key' ('key' is React-specific)
 *      Otherwise, <T>-tags may be arbitrarily deep and complex, if you want rope to shoot yourself in the foot with :)
 *
 *   TraksProvider: wrap your entire application in this React-component (<T> will not work outside of it)
 *
 *   TraksConsumer: passes 'lang' and set_lang(lang) props to child
 *
 *   traks_set_lang(lang): globally sets language
 */
export { T, TraksProvider, TraksConsumer }
