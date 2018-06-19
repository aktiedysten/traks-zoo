#!/usr/bin/env bash
cd $(dirname $0)
./node_modules/traks/bin/traks update --langs en,da $*
