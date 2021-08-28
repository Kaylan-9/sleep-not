<?php

#...Código de criptográfia...
#......

class Crypt_{
    public function __construct(
        public string $key,
        public string $method="AES-256-CBC"
    ){
        $this->key=base64_encode($key);
        $this->method=$method;
        $this->iv=substr(hash('sha256', 1357920), 0, 16);
    }

    public function en($str){
        $str0=openssl_encrypt($str, $this->method, $this->key, 0, $this->iv);
        $str_final=str_replace('==', '', $str0);
        return $str_final;
    }

    public function de($str){
        $str0=$str.'==';
        $str_final=openssl_decrypt($str0, $this->method, $this->key, 0, $this->iv);
        return $str_final;
    }
}

