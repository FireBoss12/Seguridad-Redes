## Descripción
Don't power users get tired of making spelling mistakes in the shell? Not anymore! Enter Special, the Spell Checked Interface for Affecting Linux. Now, every word is properly spelled and capitalized... automatically and behind-the-scenes! Be the first to test Special in beta, and feel free to tell us all about how Special streamlines every development process that you face. When your co-workers see your amazing shell interface, just tell them: That's Special (TM)

Start your instance to see connection details.

`ssh -p 55032 [ctf-player@saturn.picoctf.net](mailto:ctf-player@saturn.picoctf.net)`

The password is `d8819d45`
## Solución
Entramos al servidor:
```
FireBoss478-academy@webshell:~$ ssh -p 55032 ctf-player@saturn.picoctf.net
```
Después ejecutamos este comando:
```
Special$ a | more blargh/*
```
Le damos Enter, y Enter de nuevo y nos mostrará la bandera
Solución:
picoCTF{5p311ch3ck_15_7h3_w0r57_0c61d335}
## Notas adicionales
- | more - Envía la salida de a al paginador ```more```
- blargh/* - Expande a los archivos dentro de blargh
## Referencias
- https://chatgpt.com/c/6a937f0b-0c04-83e8-b269-f07789c331c9
