<?php

namespace MAIN\structures;

class Img extends Conn{
    public function __construct(){
        $this->img=array();
        $this->nome='';
        $this->tipo='';
        $this->size=0;
        $this->content='';
        $this->stmt='';
    }

    public function save0(){
        $this->img=$_FILES['myImg'];
        $this->nome=$this->img['name'];
        $this->tipo=$this->img['type'];
        $this->size=$this->img['size'];
        $this->content=file_get_contents($this->img['tmp_name']);
        if(!is_array($this->get_con())){
            $this->stmt=$this->get_con()->prepare('INSERT INTO img(nome, conteudo, tamanho, tipo) VALUES (:nome, :conteudo, :tamanho, :tipo)');
            $this->stmt->bindParam(':nome', $this->nome, \PDO::PARAM_STR);
            $this->stmt->bindParam(':conteudo', $this->content, \PDO::PARAM_LOB);
            $this->stmt->bindParam(':tipo', $this->tipo, \PDO::PARAM_STR);
            $this->stmt->bindParam(':tamanho', $this->size, \PDO::PARAM_INT);
            echo ($this->stmt->execute()) ? 'Foto cadastrada com sucesso' : $this->stmt->errorInfo();
        }
    }

    public function view0(int $id){
        $this->stmt=$this->get_con()->prepare('SELECT conteudo, tipo FROM img WHERE id = :id');
        $this->stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        if ($this->stmt->execute()){
            $this->foto=$this->stmt->fetchObject();
            if ($this->foto != null){
                header('Content-Type: '. $this->foto->tipo);
                echo $this->foto->conteudo;
            }
        }
    }
}


