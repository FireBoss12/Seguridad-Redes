## Descripción
I've hidden a flag in this file. Can you find it? [Forensics_is_fun.pptm](https://challenge-files.cylabacademy.net/library/ef35dfe613527d28fe872d94179b53bc1a0497ddecf57e51d160c910be3a8e8a/Forensics_is_fun.pptm)

## Solución
```
wget https://challenge-files.cylabacademy.net/library/ef35dfe613527d28fe872d94179b53bc1a0497ddecf57e51d160c910be3a8e8a/Forensics_is_fun.pptm

unzip Forensics_is_fun.pptm -d Forensics_is_fun

cd Forensics_is_fun

cd Forensics_is_fun

find . -type f | grep -i hidden

cat ppt/slideMasters/hidden

cat ppt/slideMasters/hidden | tr -d ' ' | base64 -d

academy{D1d_u_kn0w_ppts_r_z1p5}
```

## Notas Adicionales

## Referencias