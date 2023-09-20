#!/bin/zsh
source ~/.zshrc
cd ../frontvue/
nvm use 16.14.2
npm run build
cd ../backend/
export FLASK_APP=main.py
python3 -m flask run
