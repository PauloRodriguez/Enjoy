import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') usuario;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
              public firebaseAuth : AngularFireAuth,
              public toastCtrl : ToastController) {

  }

  login(){
    this.firebaseAuth.auth.signInWithEmailAndPassword(
      this.usuario.value,
      this.password.value
    ).then( () => {
      console.log(this.firebaseAuth.auth.currentUser.email);
      this.exibirMensagem('Logado com sucesso');
    })
    .catch( (erro:any) => {
      //login sem sucesso  
      console.log();
      this.exibirMensagem('Logado sem sucesso');    
    });
  }

  exibirMensagem(mensagem : string){
    let toast = this.toastCtrl.create({
      duration : 4000, position: 'bottom'
    })
    toast.setMessage(mensagem);
    toast.present();
  }

  public cadastrarUsuario(){
    this.firebaseAuth.auth.createUserWithEmailAndPassword(this.usuario.value, this.password.value)
      .then(() => {
        this.exibirMensagem('Usuário criado com sucesso');
        this.usuario = this.firebaseAuth.auth.currentUser
      })
      .catch((erro: any) => {
        this.exibirMensagem(erro);
      });
  }
}
