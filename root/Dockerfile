#Initial Setup, Maintainer Flag
FROM python:3
LABEL AUTHOR Arthur Coll
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt update
RUN apt install -y \
gdal-bin \
libproj-dev \
binutils

COPY Pipfile /
COPY Pipfile.lock /
RUN pip install pipenv
RUN pipenv install --system

#Move App to /usr/src
RUN mkdir app
COPY . /app
WORKDIR /app

#Set WorkDir To Application
CMD gunicorn root.wsgi:application --workers 2 --bind :8000

# Start with  basic Ubuntu image
# FROM ubuntu:18.04

# # Install everything that you need except libraries specific to your Django project - these come later.
# RUN apt-get -y update && apt-get -y upgrade && \
#     apt-get -y install python3 python3-dev python3-setuptools python3-pip libgdal-dev nginx supervisor
# RUN pip3 install --upgrade pip setuptools wheel

# # Make a new direcctory on your target image and set it as your working dorectory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# ENV LC_ALL=en_US.utf-8
# ENV LANG=en_US.utf-8

# # COPY requirements.txt and RUN pip install BEFORE adding the rest of your code, this will cause Docker's caching mechanism
# # to prevent re-installing (all your) dependencies when you made a change a line or two in your app.
# COPY requirements.txt /usr/src/app
# RUN pip3 install -r requirements.txt

# # add (the rest of) our code
# COPY . /usr/src/app

# # Set up all the configfiles
# COPY nginx.conf /etc/nginx/sites-available/default
# COPY supervisor-app.conf /etc/supervisor/conf.d/

# # Expose the image's ports. We'll bind different host ports to these later
# EXPOSE 80
# EXPOSE 443

# # When a new container is created, we'll run supervisord to start uwsgi and nginx.
# CMD ["supervisord", "-n"]


# FROM python:3.6

# RUN apt-get update && \
#     apt-get install -y libgdal-dev && \
#     pip3 install uwsgi pipenv

# COPY . /opt/app

# WORKDIR /opt/app
# RUN pipenv install --system

# ENV DJANGO_ENV=prod
# ENV DOCKER_CONTAINER=1

# EXPOSE 8000

# CMD ["uwsgi", "--ini", "/opt/app/uwsgi.ini"]


# FROM tiangolo/meinheld-gunicorn:python3.7

# COPY . /app

# FROM twobulls/gunicorn-bootstrap
# RUN apt-get update && apt-get install -y libgdal-dev libpq-dev
# COPY . .
# RUN pip3 install -r requirements.txt
