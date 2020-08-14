# graphql_express_mongo_example

> Example project of restful service build in _Express.JS_, with associated _Postgres_ database and _Sequelize_ ORM.

> Project is mainly focused on creating reusable and stabile project folder structure, with separation of concerns, scalability and testability.

> Unit test made in _Jest_. For easier rapid development _Docker_ with _docker-compose_ was used. It allow to remove all local dependencies like, locally instaled database, etc.

---

### In project i use:

<p style="float: left">
<img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" alt="Node.js" width="64" style="display: inline">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHuh-8BFfWdwCgDF5a5vKQgAtsIf-bV435lA&usqp=CAU" alt="Express.js" width="64" style="display: inline">
<img src="https://cdn.freebiesupply.com/logos/large/2x/sequelize-logo-png-transparent.png" alt="Sequelize" width="64" style="display: inline">
<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="Postgres" width="64" style="display: inline">
<img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" alt="Jest" width="64" style="display: inline">
<img src="https://cdn.iconscout.com/icon/free/png-256/docker-226091.png" alt="Docker" width="64" style="display: inline">
</p>

---

### Build Setup

```bash
# clone repo
git clone https://github.com/sebastianluszczek/express_postgres_restful_example.git

# move directory
cd express_postgres_restful_example

# run docker compose
docker-compose up --build #--build only for first time run
```
