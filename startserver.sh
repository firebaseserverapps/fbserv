#!/bin/bash
python conv.py d
python simple.py &
gunicorn --worker-class eventlet -w 1 server:app