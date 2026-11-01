## DESCRIPCION
Can you login to this website? Try to login [here](http://chatelaine.cylabacademy.net:38911/).
## SOLUCION

```

Se ingresa al link de la pagina, y para poder resolver este reto, se debe colocar la palabra "admin' --" en username y en password cualquier otra. Al hacer eso me llevara a otra pagina que al hacer ctrl + u me revelara la bandera. 

academy{L00k5_l1k3_y0u_solv3d_it_d69457c6}

```

## NOTAS ADICIONALES
- La comilla simple (`'`) engaña a la base de datos para cerrar el campo de texto original de forma prematura. El doble guion (`--`) es la sintaxis para iniciar un comentario en SQLite; esto provoca que el servidor ignore todo el código SQL que sigue, anulando por completo la validación de la contraseña.

## REFERENCIAS
- Gemini IA