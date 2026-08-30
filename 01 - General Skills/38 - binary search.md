## Descripción
Want to play a game? As you use more of the shell, you might be interested in how they work! Binary search is a classic algorithm used to quickly find an item in a sorted list. Can you find the flag? You'll have 1000 possibilities and only 10 guesses.

Cyber security often has a huge amount of data to look through - from logs, vulnerability reports, and forensics. Practicing the fundamentals manually might help you in the future when you have to write your own tools!

You can download the challenge files here:

- [challenge.zip](https://artifacts.picoctf.net/c_atlas/4/challenge.zip)
## Solución
Descargamos el archivo .zip
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c_titan/179/challenge.zip
```
Lo descomprimimos:
```
FireBoss478-academy@webshell:~$ unzip challenge.zip 
```
Nos cambiamos a la carpeta drop-in
 ```
 FireBoss478-academy@webshell:~$ cd drop-in
 ```
 Nos conectamos al servidor y jugamos el juego:
 ```
 FireBoss478-academy@webshell:~/home/ctf-player/drop-in$ ssh -p 57212 ctf-player@atlas.picoctf.net
ctf-player@atlas.picoctf.net's password: 
Permission denied, please try again.
ctf-player@atlas.picoctf.net's password: 
Welcome to the Binary Search Game!
I'm thinking of a number between 1 and 1000.
Enter your guess: 500
Higher! Try again.
Enter your guess: 750
Lower! Try again.
Enter your guess: 625
Higher! Try again.
Enter your guess: 700
Higher! Try again.
Enter your guess: 725
Lower! Try again.
Enter your guess: 710
Lower! Try again.
Enter your guess: 705
Lower! Try again.
Enter your guess: 703
Lower! Try again.
Enter your guess: 702
Congratulations! You guessed the correct number: 702
Here's your flag: picoCTF{g00d_gu355_ee8225d0}
Connection to atlas.picoctf.net closed.
 ```
Solución: 
picoCTF{g00d_gu355_ee8225d0}
## Notas adicionales
## Referencias