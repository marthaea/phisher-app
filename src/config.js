
// src/config.js

// Use a mock API URL if the actual backend isn't available
const MOCK_MODE = import.meta.env.VITE_MOCK_MODE === 'true';

export default {
  API_BASE_URL: import.meta.env.VITE_API_URL || 'https://phisher-backend-demo.herokuapp.com', 
  ENDPOINTS: {
    PREDICT: '/predict',
    SAMPLE: '/sample'
  },
  MOCK_MODE: MOCK_MODE
};
