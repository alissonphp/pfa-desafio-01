## Criando a network
```shell
docker network create pfa
```
## Subindo o banco
```shell
docker build -t alissonphp/pfa-mysql mysql/
```
```shell
docker run --network pfa -d --name pfa-mysql alissonphp/pfa-mysql:latest
```
Fazendo o seed no banco
```shell
docker exec -i pfa-mysql sh -c 'mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} < seed.sql'
```
## Subindo a api
```shell
docker build -t alissonphp/pfa-api node-api/
```
```shell
docker run --network pfa -d --name pfa-api -e DB_HOST=pfa-mysql -e DB_USER=fullcycle -e DB_DATABASE=desafio01 -e DB_PASSWORD=123456 alissonphp/pfa-api:latest
```

## Subindo o nginx

```shell
docker build -t alissonphp/pfa-nginx nginx/
```
```shell
docker run --name pfa-nginx -p 8080:80 --network pfa alissonphp/pfa-nginx:latest
```

## Acessando o serviço
[http://localhost:8080](http://localhost:8080)

p.s.: verificar disponibilidade da porta no host

Resposta esperada:

```javascript
{
   "modules":[
      {
         "id":7,
         "module":"Arquitetura e Projeto Pratico - Codeflix"
      },
      {
         "id":5,
         "module":"Autenticacao e Keycloak"
      },
      {
         "id":3,
         "module":"Comunicacao"
      },
      {
         "id":1,
         "module":"Docker"
      },
      {
         "id":6,
         "module":"Domain Drive Design e Arquitetura Hexagonal"
      },
      {
         "id":2,
         "module":"Fundamentos de Arquitetura de Software"
      },
      {
         "id":4,
         "module":"RabbitMQ"
      }
   ]
}

```
