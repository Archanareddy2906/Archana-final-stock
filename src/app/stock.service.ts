import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  
  constructor(private httpClientSymbol : HttpClient) { 
     }

   public get_symbol_info(symbol: any) { 
      return this.httpClientSymbol.get("https://finnhub.io/api/v1/quote?symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
    }
    public get_symbol(symbol: any) { 
      return this.httpClientSymbol.get("https://finnhub.io/api/v1/search?q="+symbol+"&symbol="+symbol+"&token=bu4f8kn48v6uehqi3cqg");
    }

   public getSentiment(symbol: string){
      return this.httpClientSymbol.get("https://finnhub.io/api/v1/stock/insider-sentiment?symbol=" + symbol+ "&token=bu4f8kn48v6uehqi3cqg&from=2022-09-01&to=2022-11-01"
      );
    }


    

}
