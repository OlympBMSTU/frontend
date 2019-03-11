phrase: 123456
domain: local.olymp.bmstu.ru

Сначала всё по инструкции:
https://www.akadia.com/services/ssh_test_certificate.html

openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt

Затем это:
openssl req \
    -key server.key \
    -x509 \
    -nodes \
    -new \
    -out local.olymp.bmstu.ru.crt \
    -subj /CN=local.olymp.bmstu.ru \
    -reqexts SAN \
    -extensions SAN \
    -config <(cat /System/Library/OpenSSL/openssl.cnf \
        <(printf '[SAN]\nsubjectAltName=DNS:local.olymp.bmstu.ru')) \
    -sha256 \
    -days 3650