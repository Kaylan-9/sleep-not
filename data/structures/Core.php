<?php

namespace MAIN\structures;

class Core{
    public function __construct(){
        $this->nspace='\\MAIN\\controllers\\';
        $this->dir='data/controllers/';
        $this->token='';
        $this->ctrlname='';
        $this->ctrl='';
        $this->action='';
    }

    public function get_path($ctrlname){
        return $this->dir.$ctrlname.".php";
    }

    public function init(){
        if(isset($_GET['path'])){
            $this->token=rtrim($_GET['path'], '/');
            $this->token=explode('/', $this->token);
            $this->ctrlname=array_shift($this->token);
            $this->ctrlname=ucfirst($this->ctrlname);
            if(file_exists($this->get_path($this->ctrlname))){
                $this->ctrlname=$this->nspace.$this->ctrlname;
                $this->ctrl=new $this->ctrlname();
                if(!empty($this->token)){
                    $this->action=array_shift($this->token);
                    if(method_exists($this->ctrl, $this->action)){$this->ctrl->{$this->action}(@$this->token);}
                }else{$this->ctrl->show_content();}
            }else{
                $this->ctrlname=$this->nspace.'Page404';
                $this->ctrl=new $this->ctrlname();
                $this->ctrl->show_content();
            }
        }else{
            $this->ctrlname=$this->nspace.'Home';
            $this->ctrl=new $this->ctrlname();
            $this->ctrl->show_content();
        }
    }
}