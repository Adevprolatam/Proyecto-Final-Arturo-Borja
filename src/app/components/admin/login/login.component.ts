import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsuarioModel } from '../../../models/usuario.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel= new UsuarioModel();
  recordarme=false;
  
    constructor(private auth:AuthService,
                  private router:Router) { 
     
    }
  
    ngOnInit(){
      
      
    }
  login (form:NgForm){
    if (form.invalid){return;}
    Swal.fire({
      allowOutsideClick: false ,
      icon:'info',
      text: 'Espere por favor...'
    });
  
    Swal.showLoading();
  
    this.auth.login(this.usuario)
    .subscribe(resp =>{
    
      console.log(resp);
      Swal.close();

      this.router.navigateByUrl('/admin');
    
    }, (err)=>{
  
      console.log(err.error.error.message);
      Swal.fire({
        icon:'error',
        text: err.error.error.message
      });
  
    })
  }
  }
  
