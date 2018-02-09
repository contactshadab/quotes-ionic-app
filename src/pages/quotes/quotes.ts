import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Quote } from '../../data/quote.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { FavoriteQuotes } from '../../services/favorite-quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quotesCategory: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private favQuotes: FavoriteQuotes) {

  }

  ngOnInit(){
    this.quotesCategory = this.navParams.data;
  }

  // ionViewDidLoad(){
  //   //If we use ionViewDidLoad to render some data to template, it will throw error
  //   //Template is parsed before ionViewDidLoad is called. We can skip the error by using elvis(?) operator in template
  //   console.log('ionViewDidLoad');
  //   this.quotesCategory = this.navParams.data;
  // }

  onClickFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add quote?',
      buttons: [{
        text: 'Yes, go ahead!',
        handler: () => {
          this.favQuotes.add(selectedQuote);
          console.log('Yes');
        }
      },
      {
        text: 'No, I changed my mind!',
        role: 'cancel',
        handler: () => {
          console.log('Cancelled');
        }
      }]
    })
    alert.present();
  }

  onClickUnfavorite(quote: Quote){
    this.favQuotes.delete(quote);
  }

  isFavorite(quote: Quote){
    return this.favQuotes.isFavorite(quote);
  }

}
