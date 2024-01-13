#!/bin/bash

APP_PORT=${PORT:-8000}


echo "Migrating database..."
/opt/venv/bin/python manage.py makemigrations --noinput
/opt/venv/bin/python manage.py migrate --noinput
echo "Database migrated"

echo "Creating superuser..."
/opt/venv/bin/python manage.py superuser || true
echo "Superuser created"

echo "Collecting static files..."
/opt/venv/bin/python manage.py collectstatic --noinput
echo "Static files collected"

echo "Starting server..."
/opt/venv/bin/gunicorn myapp.wsgi:application --bind "0.0.0.0:${APP_PORT}" --workers 4