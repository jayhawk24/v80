export interface PriceData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. adjusted close": string;
  "6. volume": string;
  "7. dividend amount": string;
  "8. split coefficient": string;
}

export interface TimeSeries {
  [date: string]: PriceData;
}

export interface StockMeta {
  "1. Information": string;
  "2. Symbol": string;
  "3. Last Refreshed": string;
  "4. Output Size": string;
  "5. Time Zone": string;
}

export interface SeriesData {
  x: Date;
  y: number[];
}

export interface Series {
  data: SeriesData[];
}

export interface TimeSeriesDailyAdjusted {
  "Meta Data": StockMeta;
  "Time Series (Daily)": TimeSeries;
}

export interface SearchSymbol {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

export interface SymbolSearchResult {
  bestMatches: SearchSymbol[];
}

export interface Quote {
  "01. symbol": string;
  "02. open": string;
  "03. high": string;
  "04. low": string;
  "05. price": string;
  "06. volume": string;
  "07. latest trading day": string;
  "08. previous close": string;
  "09. change": string;
  "10. change percent": string;
}

export interface QuoteResult {
  "Global Quote": Quote;
}
