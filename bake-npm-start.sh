#!/usr/bin/env bash
cd $(dirname $0)

if [ -z "$1" ] ; then
        echo "usage: $0 <lang>"
	exit 1
fi

lang=$1
shift
translations_file=$(realpath src/traks-translations.js)
TRAKS_BAKE_LANG=$lang TRAKS_TRANSLATIONS_FILE=$translations_file npm start $*
