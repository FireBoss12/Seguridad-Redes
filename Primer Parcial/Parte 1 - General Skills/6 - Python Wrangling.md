## Descripción
Python scripts are invoked kind of like programs in the Terminal... Can you run [ende.py](https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/ende.py) using [password.txt](https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/password.txt) to get [flag.txt.en](https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/flag.txt.en)?


1.- Get the Python script accessible in your shell by entering the following command in the Terminal prompt: `$ wget` followed by a link to the script. The link can be copied from the details section.

2.- `$ man python`

## Solución
```
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/ende.py     
--2026-09-29 22:45:06--  https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/ende.py
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.40, 13.226.187.37, 13.226.187.22, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.40|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1328 (1.3K) [application/octet-stream]
Saving to: ‘ende.py’

ende.py                                                    100%[=======================================================================================================================================>]   1.30K  --.-KB/s    in 0s      

2026-09-29 22:45:06 (84.3 MB/s) - ‘ende.py’ saved [1328/1328]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/password.txt
--2026-09-29 22:45:14--  https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/password.txt
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.40, 13.226.187.66, 13.226.187.22, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.40|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 33 [application/octet-stream]
Saving to: ‘password.txt’

password.txt                                               100%[=======================================================================================================================================>]      33  --.-KB/s    in 0s      

2026-09-29 22:45:14 (2.73 MB/s) - ‘password.txt’ saved [33/33]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/flag.txt.en        
--2026-09-29 22:45:55--  https://challenge-files.cylabacademy.net/library/6d20533ced9029ce644ff2c2bcaaa8a7c95b46963bfde810a8d69484d1db4ccd/flag.txt.en
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.40, 13.226.187.22, 13.226.187.66, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.40|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 140 [application/octet-stream]
Saving to: ‘flag.txt.en’

flag.txt.en                                                100%[=======================================================================================================================================>]     140  --.-KB/s    in 0s      

2026-09-29 22:45:56 (12.3 MB/s) - ‘flag.txt.en’ saved [140/140]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls
Desktop  Documents  Downloads  ende.py  flag.txt.en  LaboratorioSeguridad  Music  password.txt  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ cat ende.py 

import sys
import base64
from cryptography.fernet import Fernet



usage_msg = "Usage: "+ sys.argv[0] +" (-e/-d) [file]"
help_msg = usage_msg + "\n" +\
        "Examples:\n" +\
        "  To decrypt a file named 'pole.txt', do: " +\
        "'$ python "+ sys.argv[0] +" -d pole.txt'\n"



if len(sys.argv) < 2 or len(sys.argv) > 4:
    print(usage_msg)
    sys.exit(1)



if sys.argv[1] == "-e":
    if len(sys.argv) < 4:
        sim_sala_bim = input("Please enter the password:")
    else:
        sim_sala_bim = sys.argv[3]

    ssb_b64 = base64.b64encode(sim_sala_bim.encode())
    c = Fernet(ssb_b64)

    with open(sys.argv[2], "rb") as f:
        data = f.read()
        data_c = c.encrypt(data)
        sys.stdout.write(data_c.decode())


elif sys.argv[1] == "-d":
    if len(sys.argv) < 4:
        sim_sala_bim = input("Please enter the password:")
    else:
        sim_sala_bim = sys.argv[3]

    ssb_b64 = base64.b64encode(sim_sala_bim.encode())
    c = Fernet(ssb_b64)

    with open(sys.argv[2], "r") as f:
        data = f.read()
        data_c = c.decrypt(data.encode())
        sys.stdout.buffer.write(data_c)


elif sys.argv[1] == "-h" or sys.argv[1] == "--help":
    print(help_msg)
    sys.exit(1)


else:
    print("Unrecognized first argument: "+ sys.argv[1])
    print("Please use '-e', '-d', or '-h'.")

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ python3 ende.py                                                            
Usage: ende.py (-e/-d) [file]
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ python3 ende.py
Usage: ende.py (-e/-d) [file]
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ python3 ende.py -d flag.txt.en
Please enter the password:^CTraceback (most recent call last):
  File "/home/paco1234/ende.py", line 39, in <module>
    sim_sala_bim = input("Please enter the password:")
KeyboardInterrupt

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls         
Desktop  Documents  Downloads  ende.py  flag.txt.en  LaboratorioSeguridad  Music  password.txt  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ cat password.txt 
563e47ddeaf84eca8b2a31201381a898
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ python3 ende.py -d flag.txt.en
Please enter the password:563e47ddeaf84eca8b2a31201381a898
academy{4p0110_1n_7h3_h0us3_d6af8f37}



academy{4p0110_1n_7h3_h0us3_d6af8f37}

```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)

## Flag personal

academy{4p0110_1n_7h3_h0us3_d6af8f37}
