import { Quote } from "../data/quote.interface";

export class FavoriteQuotes {
    private favQuotes: Quote[] = [];

    getAll(){
        return this.favQuotes.slice();
    }
    
    add(quote: Quote){
        this.favQuotes.push(quote);
        console.log(this.favQuotes);
    }

    delete(quote: Quote){
        const position = this.favQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        })
        this.favQuotes.splice(position, 1);
    }

    isFavorite(quote: Quote){
        return this.favQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        })
    }


}