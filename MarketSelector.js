import React from 'react';

const marketOptions = {
  forex: ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD'],
  stocks: ['AAPL', 'TSLA', 'AMZN', 'GOOGL', 'META'],
  crypto: ['BTCUSD', 'ETHUSD', 'XRPUSD', 'SOLUSD', 'ADAUSD'],
  commodities: ['GOLD', 'SILVER', 'OIL']
};

const timeframes = ['1m', '5m', '15m', '30m', '1h', '4h', '1d'];

const MarketSelector = ({ 
  market, 
  symbol, 
  timeframe, 
  setMarket, 
  setSymbol, 
  setTimeframe 
}) => {
  return (
    <div className="market-selector">
      <select 
        value={market} 
        onChange={(e) => {
          setMarket(e.target.value);
          setSymbol(marketOptions[e.target.value][0]);
        }}
      >
        <option value="forex">فوركس</option>
        <option value="stocks">أسهم</option>
        <option value="crypto">عملات رقمية</option>
        <option value="commodities">سلع</option>
      </select>

      <select 
        value={symbol} 
        onChange={(e) => setSymbol(e.target.value)}
      >
        {marketOptions[market].map((sym) => (
          <option key={sym} value={sym}>{sym}</option>
        ))}
      </select>

      <select 
        value={timeframe} 
        onChange={(e) => setTimeframe(e.target.value)}
      >
        {timeframes.map((tf) => (
          <option key={tf} value={tf}>{tf}</option>
        ))}
      </select>
    </div>
  );
};

export default MarketSelector;
