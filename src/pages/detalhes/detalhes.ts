import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimelineService } from '../../service/timeline.service';
import { Timeline } from '../../model/timeline';

/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {

  timeline : Timeline[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public timelineService : TimelineService) {
    this.timeline = this.navParams.get('timeline');
    console.log(this.timeline);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
