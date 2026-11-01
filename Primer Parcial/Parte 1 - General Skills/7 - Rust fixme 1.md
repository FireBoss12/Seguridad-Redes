## Descripción
Have you heard of Rust? Fix the syntax errors in this Rust file to print the flag!

Download the Rust code [here](https://challenge-files.cylabacademy.net/library/b9cfc84c442958b8ac848ddc0692bed9ef01a15877b8d37f36afbe68b5849acc/fixme1.tar.gz).


1.- Cargo is Rust's package manager and will make your life easier. See the getting started page [here](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html)

2.- [println!](https://doc.rust-lang.org/std/macro.println.html)

3.- Rust has some pretty great compiler error messages. Read them maybe?

## Solución
```
paco1234@ubuntu-paco:~$ wget https://challenge-files.cylabacademy.net/library/b9cfc84c442958b8ac848ddc0692bed9ef01a15877b8d37f36afbe68b5849acc/fixme1.tar.gz
--2026-09-30 20:18:00--  https://challenge-files.cylabacademy.net/library/b9cfc84c442958b8ac848ddc0692bed9ef01a15877b8d37f36afbe68b5849acc/fixme1.tar.gz
Resolving challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)... 13.226.187.40, 13.226.187.37, 13.226.187.22, ...
Connecting to challenge-files.cylabacademy.net (challenge-files.cylabacademy.net)|13.226.187.40|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1549 (1.5K) [application/octet-stream]
Saving to: ‘fixme1.tar.gz.1’

fixme1.tar.gz.1                                            100%[=======================================================================================================================================>]   1.51K  --.-KB/s    in 0s      

2026-09-30 20:18:00 (54.0 MB/s) - ‘fixme1.tar.gz.1’ saved [1549/1549]

                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ tar -xzf fixme1.tar.gz
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~$ cd fixme1 
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme1$ cargo run
    Updating crates.io index
  Downloaded either v1.13.0
  Downloaded xor_cryptor v1.2.3
  Downloaded crossbeam-utils v0.8.20
  Downloaded crossbeam-epoch v0.9.18
  Downloaded crossbeam-deque v0.8.5
  Downloaded rayon-core v1.12.1
  Downloaded rayon v1.10.0
  Downloaded 7 crates (379.2KiB) in 0.22s
   Compiling crossbeam-utils v0.8.20
   Compiling rayon-core v1.12.1
   Compiling either v1.13.0
   Compiling crossbeam-epoch v0.9.18
   Compiling crossbeam-deque v0.8.5
   Compiling rayon v1.10.0
   Compiling xor_cryptor v1.2.3
   Compiling rust_proj v0.1.0 (/home/paco1234/fixme1)
error: expected `;`, found keyword `let`
 --> src/main.rs:5:37
  |
5 |     let key = String::from("CSUCKS") // How do we end statements in Rust?
  |                                     ^ help: add `;` here
...
8 |     let hex_values = ["71", "35", "11", "73", "2f", "17", "53", "71", "01", "1c", "7e", "59", "63", "e1", "61", "25", "7f", "5a", "60", "50", "11", "38", "1f", "3a", "60", "e9", "62", "20", "0c", "e6", "50", "d3", "35"];
  |     --- unexpected token

error: argument never used
  --> src/main.rs:26:9
   |
25 |         ":?", // How do we print out a variable in the println function? 
   |         ---- formatting specifier missing
26 |         String::from_utf8_lossy(&decrypted_buffer)
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ argument never used
   |
help: format specifiers use curly braces, consider adding a format specifier
   |
25 |         ":?{}", // How do we print out a variable in the println function? 
   |            ++

error[E0425]: cannot find value `ret` in this scope
  --> src/main.rs:18:9
   |
18 |         ret; // How do we return in rust?
   |         ^^^
   |
help: a local variable with a similar name exists
   |
18 -         ret; // How do we return in rust?
18 +         res; // How do we return in rust?
   |

For more information about this error, try `rustc --explain E0425`.
error: could not compile `rust_proj` (bin "rust_proj") due to 3 previous errors
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme1$ nano src/main.rs
                                                                                                                                                                                                                                           
paco1234@ubuntu-paco:~/fixme1$ cargo run
   Compiling rust_proj v0.1.0 (/home/paco1234/fixme1)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.32s
     Running `target/debug/rust_proj`
academy{4r3_y0u_4_ru$t4c30n_n0w?}




academy{4r3_y0u_4_ru$t4c30n_n0w?}
```

## Notas Adicionales

## Referencias
- Ubuntu (entorno local adaptado)

## Flag personal

academy{4r3_y0u_4_ru$t4c30n_n0w?}
