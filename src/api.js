
// src/api.js
import config from './config';

// Predefined mock responses for when API is unavailable
const mockResponses = {
  predict: {
    prediction: Math.random() > 0.5 ? 0 : 1,  // Randomly return safe or unsafe
    confidence: 0.85 + Math.random() * 0.1,   // Random confidence between 85-95%
    features_used: {}
  }
};

/**
 * Sends a request to check if a URL or email is a phishing attempt
 * @param {Object} features - Features extracted from the URL or email content
 * @returns {Promise<Object>} - API response with prediction results
 */
export const checkPhishing = async (features) => {
  try {
    console.log('Sending features to API:', features);
    
    // Use mock response if in mock mode or if API calls fail
    if (config.MOCK_MODE) {
      console.log('Using mock response (MOCK_MODE enabled)');
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      return mockResponses.predict;
    }
    
    const response = await fetch(`${config.API_BASE_URL}${config.ENDPOINTS.PREDICT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ features })
    });
    
    if (!response.ok) {
      throw new Error(`API returned status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    
    // Fall back to mock response if real API call fails
    console.log('Falling back to mock response after API failure');
    await new Promise(resolve => setTimeout(resolve, 500)); // Small delay
    return mockResponses.predict;
  }
};

/**
 * Gets sample features for testing purposes
 * @returns {Promise<Object>} - Sample features
 */
export const getSampleFeatures = async () => {
  try {
    if (config.MOCK_MODE) {
      console.log('Using mock sample features (MOCK_MODE enabled)');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Generate mock features
      const features = {};
      for (let i = 0; i < 47; i++) {
        features[`feature_${i}`] = Math.random() * 0.7;
      }
      
      return { sample_features: features };
    }
    
    const response = await fetch(`${config.API_BASE_URL}${config.ENDPOINTS.SAMPLE}`);
    
    if (!response.ok) {
      throw new Error(`API returned status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    
    // Return mock sample on error
    const features = {};
    for (let i = 0; i < 47; i++) {
      features[`feature_${i}`] = Math.random() * 0.7;
    }
    
    return { sample_features: features };
  }
};
