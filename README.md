# Como Configurar el Proyecto

Para comenzar con la puesta a punto de este proyecto de Laravle + Vue necesitamos tener ya instalado lo siguiente: 
- PHP
- Composer
- NodeJS
- Una BD, en mi caso, PostgreSQL

## Paso 1

Lo primero que debeso hacer es clonar el proyecto, ya sea descargandolo con Zip o mediante Git con este comando:

`git clone https://github.com/byLuisMoya/Secretos_FitnessKPI.git`

## Paso 2

Ahora tenemos que instalar las dependencias de Composer y NodeJS, para esto desde un terminal (ya sea CMD o desde el mismo VS) introducimos los siguientes comandos:

`composer install`
`npm install`

Recomiendo hacerlo en éste orden.

## Paso 3

Lo siguiente que debemos hacer es configurar el archivo `.env`
Para esto vamos a copiar el archivo `.env.example` y pegarlo en el mismo sitio con el nombre `.env`, ya que por defecto no nos lo crea. Una vez hecho configuramos los valores de conexion de la Base de Datos. Debería quedar algo así:

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/446e1b40-d972-4d3d-889e-c6aa892e07a6)

Hecho esto vamos a crear la base de datos con el MISMO nombre que hemos puesto en el archivo `.env`.

## Paso 4

Ahora tendremos que generar una clave para nuestra aplicación, esto es tan sencillo como volver al terminal que habíamos usado antes y escribir esto:

`php artisan key:generate`

Para comprobar que lo hemos hecho correctamente debriamos ver en el apartado "APP_KEY" del archivo `.env` contenido que antes no estaba.

## Paso 5

Ya queda menos, ahora toca ejecutar las migraciones necesarias para cargar las tablas que vamos a usar en nuestra base de datos. Estoy se haria tambien en el terminal que acabamos de usar usando este comando:

`php artisan migrate`

Si no sale ningun error va todo perfecto, en cambio, si da algun error diciendo "Could not find driver" o similar debemos modificar un archivo en la carpeta de instalación de PHP, este archivo concretamente es "PHP.ini" y debemos buscar la siguiente línea: `;extension=pdo_pgsql`.
Una vez encontrado simplemente le quitamos el ";" y guardamos el archivo. Ya nos debería dejar hacer el comando anterior sin problema.

## Paso 6

Este sería el ultimo paso, nos quedaria poner en marcha el servidor, para esto debemos abrir otro terminal en la misma carpeta del servidor, es decir, debemos tener dos terminales apuntando a la misma carpeta. Ahora en un terminal escribiremos: `php artisan serve` y en el otro: `npm run dev`.

Ahora nos vamos a cualquier navegador e introducimos esta dirección: `127.0.0.1:8000`.

Y ya por fín podríamos ver nuestro poryecto en marcha.

## Capturas sobre el proyecto

Voy a dejar algunas capturas sobre la vista del proyecto:

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/1081f332-7aa5-4a6d-a012-b89f909a487b)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/3bfbd24a-be6e-42ef-aea6-56affd1116b5)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/cccaf12d-2d50-494b-bdd3-3c3b6ba2ad27)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/6d45fdb6-923c-4129-af62-5ae835035b9a)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/ede4ffb9-ffd6-4b75-9ca1-f862672a9466)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/bfd722e7-d47a-4939-a44a-d943bf43c67f)

![image](https://github.com/byLuisMoya/Secretos_FitnessKPI/assets/86807831/4e81e89e-649d-4a12-a201-6e4e2b530118)


