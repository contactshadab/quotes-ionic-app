import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { FavoriteQuotes } from '../../services/favorite-quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(private favQuotes: FavoriteQuotes, 
    private modalCtrl: ModalController,
    private settingsService: SettingsService){
  }

  ionViewWillEnter(){
    this.quotes = this.favQuotes.getAll();
  }

  onClickQuote(quote: Quote){
    let modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onClickDelete(quote);
      }
    })
  }

  onClickDelete(quote: Quote){
    this.favQuotes.delete(quote);
    let position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })
    this.quotes.splice(position, 1);
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
