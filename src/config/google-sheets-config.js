// Configuración para la conexión con Google Sheets
// Este archivo contiene la configuración para la API de Google Sheets

const googleConfig = {
    // Configuración básica de la API
    api: {
        version: 'v4',
        spreadsheetId: process.env.GOOGLE_SHEET_ID, // ID de la hoja de cálculo
        range: 'Data!A1:Z1000' // Rango predeterminado para lectura/escritura
    },
    
    // Configuración de autorización
    auth: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL
    }
};

module.exports = googleConfig;
