<?php


class homeController extends Controller{
    
    public function index() {
        
        $dados = array();
        
        $user = new Usuarios();
        $dados['usuarios'] =  $user->get();
        
        
        
        $this->loadTemplate('home', $dados);
        
    }
    
}
