<?php

namespace MAIN\structures;

class Query extends Conn{
    public function __construct(){
        $this->query='';
        $this->data='';
    }

    public function get_content($call, $is_list=false){
        if(!is_array($this->get_con())){
            $this->query=$this->get_con()->query($call);
            if($is_list){
                $this->data=$this->query->fetchAll(\PDO::FETCH_COLUMN);
            }else{
                $this->data=$this->query->fetch(); 
            }
            return $this->data;
        }
    }
}
