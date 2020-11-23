import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(),
    clave: new FormControl()
  });

  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  verificarLogin(values){
    console.log(values)
    this.loginService.signin(values.usuario,values.clave).subscribe(
      (res) => {
        console.log(res);
        this.evaluarRespuesta(res)
      })
    }
  
  evaluarRespuesta(res){
    if(res == "-1"){
      alert("El usuario no existe");
    }else if(res == "-2"){
      alert("La contraseña es incorrecta");
    }else{
      alert("Bienvenido");
      localStorage.setItem("usuario_activo",res);
      this.router.navigate(['/recordatorios']);
      this.router.navigate(['/mismascotas']);
    }  
  }
  
  cerrarSesion(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
