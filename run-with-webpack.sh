#!/bin/bash

#!/usr/bin/env bash
set -e

#cd ../../bases/rccst

echo "Updating NPM dependencies and running WEB{ACK"
mkdir -p node_modules
./wpb.sh dev

echo "Starting client watcher"
shadow-cljs watch app

cd ../..
