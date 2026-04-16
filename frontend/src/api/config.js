/**
 * Centralized API configuration for handling different environments.
 */
const getApiBaseUrl = () => {
    // Check if we are running in local development
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (isLocalhost) {
        // You can change this to local backend URL if running locally,
        // or keep using the remote backend even in development.
        return 'https://sb-1-eij5.onrender.com/api';
        // return 'http://localhost:5000/api'; 
    }
    
    // Production backend (Render)
    return 'https://sb-1-eij5.onrender.com/api';
};

export const API_BASE_URL = getApiBaseUrl();
