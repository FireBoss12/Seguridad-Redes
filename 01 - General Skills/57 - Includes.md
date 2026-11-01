## DESCRIPCION
Can you get the flag? Go to this [website](http://chatelaine.cylabacademy.net:38322/) and see what you can discover.

1
Is there more code than what the inspector initially shows?

## SOLUCION

[](https://github.com/PabloValentinn/notas-hacking/blob/main/picoCTF/01%20-%20General%20Skills/57%20-%20Includes.md#solucion)

```

Revisé el HTML principal y encontré que la página carga dos archivos externos:

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

La primera parte de la bandera estaba en style.css:

curl -s http://xebec.cylabacademy.net:33567/style.css

academy{1nclu51v17y_1of2_

La segunda parte estaba en script.js:

curl -s http://xebec.cylabacademy.net:33567/script.js

f7w_2of2_64d6df37}

Concatené ambas partes:

academy{1nclu51v17y_1of2_f7w_2of2_64d6df37}
```

## NOTAS ADICIONALES

## REFERENCIAS