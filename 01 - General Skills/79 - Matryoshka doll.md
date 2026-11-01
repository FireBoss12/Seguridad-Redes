## Descripción
Matryoshka dolls are a set of wooden dolls of decreasing size placed one inside another. What's the final one? Image: [dolls.jpg](https://challenge-files.cylabacademy.net/library/370b91d430bc7ec8382557bcd2fba17a0e4e8ff86df14476a40c9f4b91276fa8/dolls.jpg)

1.- Wait, you can hide files inside files? But how do you find them?

2.- Make sure to submit the flag as academy{XXXXX}

## Solución
```
sudo apt update && sudo apt install binwalk -y

WGET https://challenge-files.cylabacademy.net/library/370b91d430bc7ec8382557bcd2fba17a0e4e8ff86df14476a40c9f4b91276fa8/dolls.jpg

binwalk -e dolls.jpg cd _dolls.jpg.extracted/base_images/

binwalk -e 2_c.jpg cd _2_c.jpg.extracted/base_images/

binwalk -e 3_c.jpg cd _3_c.jpg.extracted/base_images/

binwalk -e 4_c.jpg cd _4_c.jpg.extracted/

cat flag.txt

academy{ZNTyvSDXRNO1d0xCkBRMhAoiafpCTvgW
```

## Notas Adicionales

## Referencias