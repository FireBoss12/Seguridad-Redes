## Descripción
How to automate tasks to run at intervals on linux servers?

Use ssh to connect to this server:

`Server: saturn.picoctf.net Port: 52043 Username: picoplayer Password: pYkku7iMsS`
## Solución
Entrar al servidor
```
FireBoss478-academy@webshell:~$ ssh -p 58957 picoplayer@saturn.picoctf.net
```
Poner comando cat
```
picoplayer@challenge:~$ cat /etc/crontab
```
Solución:
picoCTF{Sch3DUL7NG_T45K3_L1NUX_7754e199}
## Notas adicionales
## Referencias