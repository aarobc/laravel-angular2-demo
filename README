## Demo of a todo app using angular and laravel

I've created a docker environment so you don't have to mess around with configuration
instructions:
* install docker and docker-compose
* `docker-compose up -d`
* create the database: `docker-compose run --rm mysql -u root -psecret -e "create database demo"`
* dependencies: `docker-compose run --rm web composer install`
* create the tables: `docker-compose run --rm web php artisan migrate`
* dependencies: `docker-compose run --rm web npm install`
* webpack build: `docker-compose run --rm web npm run build`
* test api: `docker-compose run --rm vendor/bin/phpunit`

to stop:
`docker-compose stop`


