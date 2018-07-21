#!/bin/bash
python simple.py &
gunicorn --worker-class eventlet -w 1 server:app