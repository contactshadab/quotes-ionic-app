import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import quotesLib from '../../data/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quotes = QuotesPage;

  quotesLibrary: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit(){
    this.quotesLibrary = quotesLib;
  }

}
