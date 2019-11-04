#Initial Setup, Maintainer Flag
FROM python:3
LABEL AUTHOR Arthur Coll
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt update
RUN apt install -y \
gdal-bin \
libproj-dev \
gunicorn \
binutils

COPY ../Pipfile /
COPY ../Pipfile.lock /
RUN pip install pipenv
RUN pipenv install --system

#Move App to /usr/src
RUN mkdir app
COPY . /app
WORKDIR /app

#Set WorkDir To Application
CMD gunicorn root.wsgi:application --workers 2 --bind :8000