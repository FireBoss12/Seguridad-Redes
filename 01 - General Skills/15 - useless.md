## Descripción
There's an interesting script in the user's home directory
## Solución
Nos conectamos al servidor:
```
ssh picoplayer@saturn.picoctf.net -p 65231
```
Desconocerá el servidor y nos preguntará si queremos conectarnos, le ponemos "yes":
```
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```
Vemos de qué tipo es el archivo
```
file
```
Ponemos el comando para ver el manual del archivo:
```
man useless 
```
Solución: 
picoCTF{us3l3ss_ch4ll3ng3_3xpl0it3d_5657}
## Notas adicionales
man - Te proporciona un manual de ayuda completo de un comando o ejecutable si es que lo hay
## Referencias
- El profe
