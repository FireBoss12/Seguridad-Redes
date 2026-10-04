## Descripción
Connect to this PostgreSQL server and find the flag! psql -h xebec.cylabacademy.net -p 34933 -U postgres pico
Password is postgres dale bro
## Solución
```
┌──(kali㉿kali)-[~]
└─$ psql -h chatelaine.cylabacademy.net -p 45252 -U postgres pico
Password for user postgres: 
psql (18.4 (Debian 18.4-1+b2), server 18.6 (Debian 18.6-1.pgdg13+2))
Type "help" for help.

pico=# \dt
          List of tables
 Schema | Name  | Type  |  Owner   
--------+-------+-------+----------
 public | flags | table | postgres
(1 row)

pico=# SELECT * FROM flags;
 id | firstname | lastname  |                address                 
----+-----------+-----------+----------------------------------------
  1 | Luke      | Skywalker | academy{L3arN_S0m3_5qL_t0d4Y_412c85d9}
  2 | Leia      | Organa    | Alderaan
  3 | Han       | Solo      | Corellia
(3 rows)

pico=# \q
```
Solución:
academy{L3arN_S0m3_5qL_t0d4Y_412c85d9}
## Notas adicionales

## Referencias
