# jwt-tutorial

> A Laravel and Vue.js project

## Build Setup - Backend

``` bash
# Install dependencies
composer install

# Setup your environment
cp .env.example .env
php artisan key:generate
php artisan jwt:generate

# Create and migrate the database
php artisan migrate --seed
```

## Build Setup - Frontend
``` bash
# The frontend is already compiled, but if you want to
# develop or recomple, follow those steps

# Go to the frontend directory
cd resources/frontend

# Install dependencies
npm install
bower install

# Build the single page application frontend
npm run build

# For development, change the API_LOCATION
# to your server.
# You can change the location in the config/dev.env.js file
npm run dev
```