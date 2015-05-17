#!/bin/sh

PASSWORD="0000"
CHOST="127.0.0.1"
PORT=80

vlc --http-host ${CHOST} --http-port ${PORT} --http-password ${PASSWORD}