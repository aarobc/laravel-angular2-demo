FROM aarobc/laravel-base
ADD src/ /var/www/laravel
RUN composer install
RUN npm install
RUN npm run postinstall
RUN npm run build
RUN chmod -R 777 storage
