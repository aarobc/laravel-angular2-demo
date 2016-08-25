## Demo of a todo app using angular and laravel

I've created a docker environment so you don't have to mess around with configuration
instructions:
* copy example.env to config.env
* install docker and docker-compose
* build the image: `docker-compose build`
* start the environment: `docker-compose up -d`
* create the database: `docker-compose run --rm db mysql -u root -psecret -h db -e "create database demo"`
* create the tables: `docker-compose run --rm web php artisan migrate`
* seed the database: `docker-compose run --rm web php artisan db:seed`
* test api: `docker-compose run --rm web vendor/bin/phpunit`

to stop:
* `docker-compose stop`


