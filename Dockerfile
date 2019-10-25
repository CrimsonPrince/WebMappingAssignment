#Initial Setup, Maintainer Flag
FROM python:3
LABEL AUTHOR Arthur Coll
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

#Move App to /usr/src
WORKDIR /usr/src/
COPY . .

#Install Dependencies with PipEnv and APT
RUN apt update
RUN apt install -y \
binutils \
libproj-dev \
gdal-bin
RUN pip install pipenv
RUN pipenv install --system

#Set WorkDir To Application
WORKDIR /usr/src/root/root
