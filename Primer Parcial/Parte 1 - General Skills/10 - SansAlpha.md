## Descripción
The Multiverse is within your grasp! Unfortunately, the server that contains the secrets of the multiverse is in a universe where keyboards only have numbers and (most) symbols. `ssh -p 31054 ctf-player@xebec.cylabacademy.net`

Use password: `13792798`


1.- Where can you get some letters?

## Solución
```
paco1234@ubuntu-paco:~$ ssh -p 31054 ctf-player@xebec.cylabacademy.net
ctf-player@xebec.cylabacademy.net's password: 
Welcome to Ubuntu 24.04.4 LTS (GNU/Linux 7.0.0-1013-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

This system has been minimized by removing packages and content that are
not required on a system that users do not log into.

To restore this content, you can run the 'unminimize' command.
Last login: Thu Oct  1 00:52:43 2026 from 127.0.0.1
SansAlpha$ ls
SansAlpha: Unknown character detected
SansAlpha$ ./*
\x1b[?2004h\x1b[?2004l
bash: ./blargh: Is a directory
\x1b[?2004h
SansAlpha$ ./*/*
\x1b[?2004l
bash: ./blargh/flag.txt: Permission denied
\x1b[?2004h
SansAlpha$ __=(/???/???/???)
\x1b[?2004l
\x1b[?2004h
SansAlpha$ ___=(/???/???/????)
\x1b[?2004l
\x1b[?2004h
SansAlpha$ ____=(/???/?????/???)
\x1b[?2004l
\x1b[?2004h
SansAlpha$ ${____:6:1}${__:1:1}
\x1b[?2004l
blargh  on-calastran.txt
\x1b[?2004h
SansAlpha$ _____=$(${____:6:1}${__:1:1})
\x1b[?2004l
\x1b[?2004h
SansAlpha$ ${_____:10:1}${_____:11:1}${___:6:1} */*
\x1b[?2004l
return 0 academy{7h15_mu171v3r53_15_m4dn355_0abcd64b}Alpha-9, a distinctive layer within the Calastran multiverse, stands as a
sanctuary realm offering individuals a rare opportunity for rebirth and
introspection. Positioned as a serene refuge between the higher and lower
Layers, Alpha-9 serves as a cosmic haven where beings can start anew,
unburdened by the complexities of their past lives. The realm is characterized
by ethereal landscapes and soothing energies that facilitate healing and
self-discovery. Quantum Resonance Wells, unique to Alpha-9, act as conduits for
individuals to reflect on their past experiences from a safe and contemplative
distance. Here, time flows differently, providing a respite for those seeking
solace and renewal. Residents of Alpha-9 find themselves surrounded by an
atmosphere of rejuvenation, encouraging personal growth and the exploration of
untapped potential. While the layer offers a haven for introspection, it is not
without its challenges, as individuals must confront their past and navigate
the delicate equilibrium between redemption and self-acceptance within this
tranquil cosmic retreat.
\x1b[?2004h
SansAlpha$  Connection to xebec.cylabacademy.net closed by remote host.
Connection to xebec.cylabacademy.net closed.




academy{7h15_mu171v3r53_15_m4dn355_0abcd64b}
```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)

## Flag personal

academy{7h15_mu171v3r53_15_m4dn355_0abcd64b}
