## Descripción
Using tabcomplete in the Terminal will add years to your life, esp. when dealing with long rambling directory structures and filenames.
## Solución
Descargamos el .zip
```
 wget https://challenge-files.picoctf.net/c_wily_courier/1d211441eced2214a10b0c2aacbf05d153aafcd6edc055f913cafcdb48a0b02b/Addadshashanammu.zip
```
Damos el filtro:
```
strings Addadshashanammu.zip | grep pico
```
Solución: picoCTF{l3v3l_up!_t4k3_4_r35t!_fc588427}
## Notas adicionales
cd Enter - Me lleva directo a la carpeta del usuario
cd - Regresa a una carpeta anterior
echo $HOME - me dice cual es la carpeta del usuario
## Referencias
