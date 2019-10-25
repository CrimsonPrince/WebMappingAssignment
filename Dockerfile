FROM python:3
LABEL AUTHOR Arthur Coll
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN apt update
RUN apt install -y \
binutils \
libproj-dev \
gdal-bin
RUN pip install pipenv
RUN pipenv install --system
WORKDIR /code/root
