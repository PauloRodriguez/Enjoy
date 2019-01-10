import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Timeline } from '../../model/timeline';
import { TimelineService } from '../../service/timeline.service';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  timeline : Timeline[];
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public timelineService : TimelineService,
              public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    this.timelineService.getTimeline()
    .subscribe(response => {
      this.timeline = response;
      console.log(this.timeline)
    });  }
  
    IrParaDetalhes(t : Timeline){
      this.navCtrl.push('DetalhesPage',{'timeline' : t});
    }

    match(){
      const alert = this.alertCtrl.create({
        title: 'Match Realizado!',
        subTitle: 'Seu match foi realizado com sucesso',
        buttons: ['OK']
      });
      alert.present();
    }

    dismatch(){
      const alert = this.alertCtrl.create({
        title: 'Match Rejeitado',
        subTitle: 'O match foi rejeitado com sucesso',
        buttons: ['OK']
      });
      alert.present();
    }
}
