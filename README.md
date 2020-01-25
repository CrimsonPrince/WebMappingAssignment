[![Actions Status](https://github.com/crimsonprince/WebMappingAssignment/workflows/Deploy/badge.svg)](https://github.com/crimsonprince/WebMappingAssignment/actions)


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">WebMapping assignment</h3>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

Project designed for WebMapping Two Assignment



### Built With

* [Docker](https://www.docker.com/)




<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
```sh
Ensure you have the latest working Docker installation and the folder structure specified in the docker-compose
```


### Installation

1. Clone the WebMappingAssignment
```sh
git clone https://github.com/crimsonprince/WebMappingAssignment.git
```
2. Create Network
```sh
docker create network traefik
```
3. Deploy Traefik
```sh
docker-compose up -d
```
4. Deploy Frontend
```sh
cd frontend
docker-compose up -d
```
5. Create a .env file in the backend folder with the outlined Keys
```sh
DJANGO_SECRET_KEY:
DEBUG:
DJANGO_ALLOWED_HOSTS:
DATABASE_ENGINE:
DATABASE_NAME:
DATABASE_USERNAME:
DATABASE_PASSWORD:
DATABASE_HOST:
DATABASE_PORT:
```
5. Deploy Backend
```sh
docker-compose up -d
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - kingr4@protonmail.ch

Project Link: [https://github.com/crimsonprince/WebMappingAssignment](https://github.com/crimsonprince/WebMappingAssignment)


