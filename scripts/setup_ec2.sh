#!/bin/bash
# Run this on your EC2 instance to install Node.js
sudo apt update
sudo apt install -y nodejs npm
git clone https://github.com/soniya-korla/disaster-alert-system.git
cd disaster-alert-system/backend
npm install
node app.js
