#!/bin/sh


node ace migration:run --force

node ace db:seed name=admin email=maior.andrey@gmail.com password=12345678

node server.js