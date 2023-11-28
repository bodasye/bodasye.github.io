// Archivo: js/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';

// Configuración de Firebase, reemplaza con tu propia configuración
const firebaseConfig = {
    apiKey: "AIzaSyA3ygTzsic9ZPVAmVthqQNC7oSV2PQNTVY",
    authDomain: "odasye-4a8b1.firebaseapp.com",
    //databaseURL: "https://TU_DOMINIO.firebaseio.com",
    projectId: "bodasye-4a8b1",
    storageBucket: "bodasye-4a8b1.appspot.com",
    messagingSenderId: "785266429758",
    appId: "1:785266429758:web:94f7cc912089d30bd4a66f"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener referencia a la base de datos de Firebase
const database = firebase.database();
const ref = database.ref('datos');

// Función para enviar datos a Firebase
function enviarDatos(name, email, guests, event, message) {
    const data = {
        name: name,
        email: email,
        guests: guests,
        event: event,
        message: message
    };

    // Enviar datos a Firebase
    ref.push(data)
        .then(() => {
            console.log('Datos enviados correctamente a Firebase');
        })
        .catch(error => {
            console.error('Error al enviar datos a Firebase:', error);
        });
}
