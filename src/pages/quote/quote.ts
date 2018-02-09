import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Quote } from '../../data/quote.interface';
import { FavoriteQuotes } from '../../services/favorite-quotes';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(private viewCtrl: ViewController, 
    private navParams: NavParams,
    private favQuotes: FavoriteQuotes) {
  }

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
 
  onClose(remove: boolean){
    this.viewCtrl.dismiss(remove);
  }

}
