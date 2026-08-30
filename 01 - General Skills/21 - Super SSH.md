## Descripción
Using a Secure Shell (SSH) is going to be pretty important.
Can you `ssh` as `ctf-player` to `titan.picoctf.net` at port `54171` to get the flag?

You'll also need the password `6abf4a82`. If asked, accept the fingerprint with `yes`.

If your device doesn't have a shell, you can use: [](https://webshell.picoctf.org/)[https://webshell.picoctf.org](https://webshell.picoctf.org/)

If you're not sure what a shell is, check out our Primer: [](https://primer.picoctf.com/#_the_shell)[https://primer.picoctf.com/#_the_shell](https://primer.picoctf.com/#_the_shell)
## Solución
Primero nos conectamos al servidor con ssh 
```
FireBoss478-academy@webshell:~$ ssh -p 54171 ctf-player@titan.picoctf.net
```
Después ponemos 'yes' para asegurar la conexión y ponemos la contraseña que nos pusieron
```
ctf-player@titan.picoctf.net's password: 
Welcome ctf-player, here's your flag: picoCTF{s3cur3_c0nn3ct10n_65a7a106}
Connection to titan.picoctf.net closed.
```
Solución:
picoCTF{s3cur3_c0nn3ct10n_65a7a106}
## Notas adicionales
ssh - Sirve para conectarse de forma segura a otro servidor desde una terminal
-p - Es el puerto que se utilizará para la conexión SSH
## Referencias

