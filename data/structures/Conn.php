<?php

namespace MAIN\structures;

abstract class Conn{
    protected const host='127.0.0.1';
    protected const name='dbloop';
    protected const user='root';
    protected const pass='admin';
    protected const options=array(
        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_CASE => \PDO::CASE_NATURAL,
        \PDO::ATTR_ORACLE_NULLS => \PDO::NULL_EMPTY_STRING
    );

    protected function get_con(){
        try{
            return new \PDO("mysql:host=".self::host.";dbname=".self::name, self::user, self::pass);
        }catch(\PDOException $e){
            return array(0 ,"Erro com a conexão do Banco:".$e->getMessage());
        }
    }
}


