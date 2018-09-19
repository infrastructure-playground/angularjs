#!/bin/bash
ng build --watch --prod --build-optimizer && chmod u+x dist &
ng serve --host=0.0.0.0
