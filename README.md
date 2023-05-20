# Events App

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

# Table of Contents:
* [Project Overview](#about-the-project)
* [Usage](#usage)

<br>
<br>

# About the Project
This app displays a table of user events with pagination & filtering abilities. It includes a React app, a NestJS server, and a Mongo database.
<br>
<br>

# Usage
You can run the project using one of the following methods:

1. ### Using docker-compose (recommended)
* Clone this repo by running `git clone https://github.com/NirK8/events-app.git`.
* `cd` into the directory of the cloned repo.
* [Install docker](https://www.docker.com/products/docker-desktop/)
* From the root directory of this repo, run `docker-compose up`. (**Note! build can take a couple of minutes**) 

2. ### Using npm & Docker
* Clone this repo by running `git clone https://github.com/NirK8/events-app.git`.
* `cd` into the directory of the cloned repo.
* From the root directory of this repo, run `npm install`
* In one terminal proccess, run the following command:   
```
docker network inspect events-app-network >/dev/null 2>&1 || \
    docker network create --driver bridge events-app-network &&
docker run  \
	--network events-app-network \
	-e MONGO_INITDB_ROOT_USERNAME=nir \
	-e MONGO_INITDB_ROOT_PASSWORD=nir \
	-e MONGO_INITDB_DATABASE=mydb \
	-p "27017:27017" \
	mongo
```
The command above will create a new docker network (if it doesn't exist) and then run a mongo container.

Then, continue as follows:
* Rename the `example.env` files at apps/server and apps/client to `.env`
* In a second terminal, run `npx nx serve server`
* In a third terminal, run `npx nx serve client`

You will be able to access the client app on [http://localhost:4200](http://localhost:4200)

If you encounter any issues while running the project, I will be available and happy to assist.

<br>
<br>

---
<br>


## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
