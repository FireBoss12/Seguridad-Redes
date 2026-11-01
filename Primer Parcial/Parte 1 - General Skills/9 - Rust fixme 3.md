## Descripción
Have you heard of Rust? Fix the syntax errors in this Rust file to print the flag!

Download the Rust code [here](https://challenge-files.cylabacademy.net/library/6df8b7779faf29e53f515922041d99bc26381a332ca090c291ba20577ac7cf92/fixme3.tar.gz).


1.- Read the comments...darn it!

## Solución
```
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/6df8b7779faf29e53f515922041d99bc26381a332ca090c291ba20577ac7cf92/fixme3.tar.gz
--2026-09-30 20:44:12--  https://challenge-files.cylabacademy.net/library/6df8b7779faf29e53f515922041d99bc26381a332ca090c291ba20577ac7cf92/fixme3.tar.gz
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.22, 13.226.187.66, 13.226.187.37, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.22|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1915 (1.9K) [application/octet-stream]
Saving to: ‘fixme3.tar.gz.1’

fixme3.tar.gz.1                                            100%[=======================================================================================================================================>]   1.87K  --.-KB/s    in 0s      

2026-09-30 20:44:13 (64.7 MB/s) - ‘fixme3.tar.gz.1’ saved [1915/1915]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls
Desktop  Documents  Downloads  fixme3.tar.gz  fixme3.tar.gz.1  LaboratorioSeguridad  Music  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ tar -xzf fixme3.tar.gz  
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls
Desktop  Documents  Downloads  fixme3  fixme3.tar.gz  fixme3.tar.gz.1  LaboratorioSeguridad  Music  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ cd fixme3 
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme3$ nano src/main.rs 
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme3$ cargo run 
   Compiling crossbeam-utils v0.8.20
   Compiling rayon-core v1.12.1
   Compiling either v1.13.0
   Compiling crossbeam-epoch v0.9.18
   Compiling crossbeam-deque v0.8.5
   Compiling rayon v1.10.0
   Compiling xor_cryptor v1.2.3
   Compiling rust_proj v0.1.0 (/home/paco1234/fixme3)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 4.32s
     Running `target/debug/rust_proj`
Using memory unsafe languages is a: PARTY FOUL! Here is your flag: academy{n0w_y0uv3_f1x3d_1h3m_411}



academy{n0w_y0uv3_f1x3d_1h3m_411}
```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)

## Flag personal

academy{n0w_y0uv3_f1x3d_1h3m_411}
