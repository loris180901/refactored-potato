export const analyzeChartImage = async (imageFile) => {
  // في التطبيق الحقيقي، استخدم Tesseract.js أو OpenCV.js لتحليل الصورة
  return new Promise((resolve) => {
    setTimeout(() => {
      const patterns = [];
      if (Math.random() > 0.5) patterns.push("Hammer");
      if (Math.random() > 0.5) patterns.push("Engulfing");
      if (Math.random() > 0.5) patterns.push("Doji");
      
      resolve({
        signal: patterns.length > 0 ? (Math.random() > 0.5 ? "BUY" : "SELL") : "HOLD",
        confidence: 0.85 + Math.random() * 0.14,
        patterns: patterns.length > 0 ? patterns : ["لا توجد أنماط واضحة"]
      });
    }, 2000);
  });
};
