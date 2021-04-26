## Rodando o container da api
```shell
docker run --network desafio01 -d --name node-api -e DB_HOST=mysql-desafio01 -e DB_USER=fullcycle -e DB_DATABASE=desafio01 -e DB_PASSWORD=123456 alissonphp/node-api:latest
```
docker run --name mysql-desafio01 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_USER=fullcycle -e MYSQL_PASSWORD=123456 -e MYSQL_DATABASE=desafio01 -d mysql:5.6
docker exec -i mysql-desafio01 sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < ./mysql/seed.sql


docker run --name nginx-desafio -p 8080:80 --network desafio01 alissonphp/nginx-desafio:latest