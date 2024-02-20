# Detalles de los proyectos

- Laravel 8.83.27
- PHP >= 7.4.33
- Postgresql 12

# Proyectos

Para realizar la verificación de la prueba tenica se deben seguir los siguientes pasos:

- Clonar el proyecto, ya sea con el comando git clone https://github.com/shelvinbb903/PruebaKonecta.git o usando una herramienta grafica GitHub

## Instrucciones de Ejecución proyecto backend

Para realizar la verificación de los puntos de la prueba tenica se deben seguir los siguientes pasos:

- Despues de clonar el repositorio, ejecutar el comando ```composer update``` dentro de la carpeta del proyecto.

- Cambiar la conexion a la base de datos en Postgresql en el archivo .env del proyecto. En este archivo se modifican las variables DB_HOST, DB_PORT, DB_DATABASE (`db_venta` fue el nombre asignado en la prueba), DB_USERNAME, DB_PASSWORD. Para la prueba tecnica se ha usado la herramiento pgAdmin y se administro la la base de datos con la herramiento DBeaver.

- Generar la base de datos en la herramienta a usar.  Dentro del proyecto se agregó el archivo sql **dump-db_venta-202402200530.sql** con la estructura y datos iniciales para verificar la prueba tecnica.

- Existe otra manera de generar la estructura de la base de datos. Se trata de las migraciones de Laravel. Primero se crea la base de datos db_venta en el administrador pgAdmin y despues se ejecuta el siguiente comando en la consola ```php artisan migrate```. Se debe tener en cuenta que para ejecutar dicho comando, la consola debe estar apuntando a la carpeta del proyecto, de lo contrario va a generar un error.

- Por último ejecutar el comando ```php artisan serve``` para en funcionamiento el proyecto de backend con las api rest a usar. Por defecto, la url del proyecto es `http://127.0.0.1:8000`. Si se cambia el puerto de ejecución, se debe cambiar también en el proyecto frontend en el archivo de configuracion de proxy.

- Dentro de la verificacion de los servicios API rest se utilizó la herramienta Postman, pero no es obligatorio su uso. Si se desea usar dicha herramienta, en el proyecto existe un archivo llamado **PruebaKonecta.postman_collection.json**, el cual contiene ejemplos para realizar la verificación de la prueba tecnica.

## Notas Adicionales

- Se debe verificar que las extensiones de postgresql esten activas en el archivo php.ini, de lo contrario va a generar un error al tratar de ejecutar las api rest. Las extensiones son las siguientes ```pdo_pgsql``` ```pgsql```

- Se agrego un archivo `Example.env.txt` como ejemplo para generar el archivo `.env` en el proyecto, ya que este archivo no se guarda por segurida en el repositorio.

# Instrucciones de Ejecución proyecto backend

- Angular 16.0.6
- Node 21.6.1

- Descargar e instalar node.js para ejecutar comandos npm
- Instalar Ionic CLI con el siguiente comando `npm install -g @angular/cli`
- Como el proyecto ya esta clonado al seguir los pasos anteriores, se accede a la carpeta con el comando `cd front-venta` desde una terminal de comandos.
- Instalar las dependencias de node usando el comando `npm install`. Si ocurre un error agregar la opcion --force
- Ejecutar comando `ng serve` para comenzar a realizar pruebas. Por defecto se usa la url `http://localhost:4200/`.

## Nota Adicional

- Dentro del proyecto de existe el archivo src/proxy.conf.json, el cual contiene la configuracion de proxy para evitar errores de cors y dar seguridad en la conexion al servicio rest. En este archivo esta la url donde estan los servicios rest. En las pruebas locales, normalmente se usa `http://127.0.0.1:8000`. Si se va a usar otra url, se debe cambiar la propiedad target.