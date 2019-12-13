#! /usr/bin/env sh
set -e
set -v
echo "Startup Script"

echo "Creating Migrations"
python manage.py makemigrations --noinput --run-syncdb
echo "Applying Migrations"
python manage.py migrate
# Start Supervisor, with Nginx and uWSGI
exec /usr/bin/supervisord -n
