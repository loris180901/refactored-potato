export const fetchMarketData = async (symbol, timeframe) => {
  // في التطبيق الحقيقي، استبدل هذا باستدعاء API فعلي
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices = [];
      const ema9 = [];
      const ema21 = [];
      const labels = [];
      
      let basePrice = symbol === 'BTCUSD' ? 30000 : 
                     symbol === 'GOLD' ? 1800 : 100;
      
      for (let i = 0; i < 30; i++) {
        const price = basePrice + Math.sin(i/3) * (basePrice * 0.1) + Math.random() * (basePrice * 0.02);
        prices.push(price);
        ema9.push(price * 0.99 + Math.random() * price * 0.01);
        ema21.push(price * 0.98 + Math.random() * price * 0.02);
        labels.push(i+1);
      }
      
      resolve({
        prices,
        ema9,
        ema21,
        labels
      });
    }, 500);
  });
};
