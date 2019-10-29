# cg-test
=========

## Final Product

!["Full Screen"](https://github.com/atagadtad/cg-test/blob/master/docs/Screen%20Shot%202019-10-29%20at%207.09.40%20PM%20(2).png?raw=true)
!["Mid-length"](https://github.com/atagadtad/cg-test/blob/master/docs/Screen%20Shot%202019-10-29%20at%207.10.43%20PM%20(2).png?raw=true)
!["Mobile View"](https://github.com/atagadtad/cg-test/blob/master/docs/Screen%20Shot%202019-10-29%20at%207.11.05%20PM%20(2).png?raw=true)


## Setup
- Create a database locally named homestead cg_test

- Download composer https://getcomposer.org/download/

- Pull Laravel/php project from git provider.

- Rename .env.example file to .env inside your project root and fill the database information. (windows wont let you do it, so you have to open your console cd your project root directory and run mv .env.example .env )

- Open the console and cd your project root directory

- Run composer install or php composer.phar install

- Run php artisan key:generate

- Run php artisan migrate

- Run php artisan db:seed to run seeders, if any.

- Run php artisan serve

- * install dependancies with composer install if needed
