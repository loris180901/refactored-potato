import React, { useState } from 'react';
import { analyzeChartImage } from '../services/imageService';

const ImageAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setImage(URL.createObjectURL(file));

    try {
      const result = await analyzeChartImage(file);
      setAnalysis(result);
    } catch (error) {
      console.error('Image analysis failed:', error);
      alert('فشل تحليل الصورة');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-analyzer">
      <h3>تحليل صورة الشارت</h3>
      
      <div className="upload-section">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload}
          disabled={loading}
        />
      </div>

      {loading && <div className="loading">جاري تحليل الصورة...</div>}

      {image && (
        <div className="image-preview">
          <img src={image} alt="الشارت المرفوع" />
        </div>
      )}

      {analysis && (
        <div className="analysis-result">
          <h4>نتائج التحليل:</h4>
          <div className="result-item">
            <span>الإشارة:</span>
            <span className={`signal ${analysis.signal.toLowerCase()}`}>
              {analysis.signal}
            </span>
          </div>
          <div className="result-item">
            <span>نسبة الثقة:</span>
            <span>{(analysis.confidence * 100).toFixed(1)}%</span>
          </div>
          <div className="result-item">
            <span>الأنماط المكتشفة:</span>
            <span>{analysis.patterns.join('، ')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
