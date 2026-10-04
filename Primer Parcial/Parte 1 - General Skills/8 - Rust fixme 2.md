## Descripción
The Rust saga continues? I ask you, can I borrow that, pleeeeeaaaasseeeee?

Download the Rust code [here](https://challenge-files.cylabacademy.net/library/048c73621a97b98cde18eae5a9495279f2396cb64c65235bb310e7ad26d726ac/fixme2.tar.gz).

1.- [https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)
## Solución
```
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/048c73621a97b98cde18eae5a9495279f2396cb64c65235bb310e7ad26d726ac/fixme2.tar.gz
--2026-09-30 20:36:13--  https://challenge-files.cylabacademy.net/library/048c73621a97b98cde18eae5a9495279f2396cb64c65235bb310e7ad26d726ac/fixme2.tar.gz
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.40, 13.226.187.37, 13.226.187.66, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.40|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1720 (1.7K) [application/octet-stream]
Saving to: ‘fixme2.tar.gz.1’

fixme2.tar.gz.1                                            100%[=======================================================================================================================================>]   1.68K  --.-KB/s    in 0s      

2026-09-30 20:36:13 (127 MB/s) - ‘fixme2.tar.gz.1’ saved [1720/1720]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ tar -xzf fixme2.tar.gz 
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls   
Desktop  Documents  Downloads  fixme2  fixme2.tar.gz  fixme2.tar.gz.1  LaboratorioSeguridad  Music  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ tar -xzf fixme2.tar.gz.1
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ ls
Desktop  Documents  Downloads  fixme2  fixme2.tar.gz  fixme2.tar.gz.1  LaboratorioSeguridad  Music  Pictures  Public  Templates  Videos
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ cd fixme2                   
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme2$ cargo run       
   Compiling rust_proj v0.1.0 (/home/paco1234/fixme2)
error[E0596]: cannot borrow `*borrowed_string` as mutable, as it is behind a `&` reference
 --> src/main.rs:9:5
  |
9 |     borrowed_string.push_str("PARTY FOUL! Here is your flag: ");
  |     ^^^^^^^^^^^^^^^ `borrowed_string` is a `&` reference, so it cannot be borrowed as mutable
  |
help: consider changing this to be a mutable reference
  |
3 | fn decrypt(encrypted_buffer:Vec<u8>, borrowed_string: &mut String){ // How do we pass values to a function that we want to change?
  |                                                        +++

error[E0596]: cannot borrow `*borrowed_string` as mutable, as it is behind a `&` reference
  --> src/main.rs:20:5
   |
20 |     borrowed_string.push_str(&String::from_utf8_lossy(&decrypted_buffer));
   |     ^^^^^^^^^^^^^^^ `borrowed_string` is a `&` reference, so it cannot be borrowed as mutable
   |
help: consider changing this to be a mutable reference
   |
 3 | fn decrypt(encrypted_buffer:Vec<u8>, borrowed_string: &mut String){ // How do we pass values to a function that we want to change?
   |                                                        +++

For more information about this error, try `rustc --explain E0596`.
error: could not compile `rust_proj` (bin "rust_proj") due to 2 previous errors
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme2$ nano src/main.rs 
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme2$ cargo run 
   Compiling rust_proj v0.1.0 (/home/paco1234/fixme2)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/rust_proj`
Using memory unsafe languages is a: PARTY FOUL! Here is your flag: academy{4r3_y0u_h4v1n5_fun_y31?}
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme2$ 


academy{4r3_y0u_h4v1n5_fun_y31?}

```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)

## Flag personal

academy{4r3_y0u_h4v1n5_fun_y31?}
