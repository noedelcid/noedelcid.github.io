body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background: #f8f9fa;
    color: #333;
    min-height: 100vh;
    width: 100%; /* Asegura que el body use todo el ancho */
    box-sizing: border-box; /* Incluye padding y border en el tamaño del elemento */
}

header {
    background: linear-gradient(135deg, #0056b3, #003d80);
    color: white;
    padding: 40px 20px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
}

header h1 {
    font-size: 2em;
    margin: 0;
    font-weight: bold;
    text-align: center; /* Centra el texto horizontalmente */
}

header p {
    font-size: 1em;
    margin-top: 5px;
    opacity: 0.9;
    text-align: center; /* Centra el texto horizontalmente */
}

nav {
    background: #002855;
    padding: 15px;
    width: 100%;
    display: flex;
    justify-content: flex-end; /* Justifica los elementos a la derecha */
    align-items: center;
    position: relative;
    box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    position: absolute;
    right: 20px;
}

.menu {
    display: flex;
    gap: 10px; /* Reduce el espacio entre los botones */
    width: auto;
    justify-content: flex-end; /* Justifica los elementos a la derecha */
}

.menu a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 1em;
    transition: background 0.3s;
    cursor: pointer;
    display: inline-block;
}

.menu a:hover {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
}

main {
    margin-top: 40px;
    flex: 1;
    width: 100%; /* Asegura que el main use todo el ancho */
    box-sizing: border-box; /* Incluye padding y border en el tamaño del elemento */
}

section {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
    display: none;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.card {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 12px rgba(0,0,0,0.15);
    width: 100%;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.card h3 {
    text-align: center; /* Centra los títulos de las tarjetas */
}

.card p {
    text-align: center; /* Centra el contenido de las tarjetas */
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 18px rgba(0,0,0,0.2);
}

.fixed-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
}

.fixed-btn:hover {
    background: #0056b3;
}

footer {
    background: #002244;
    color: white;
    padding: 20px;
    font-size: 1em;
    margin-top: 40px;
    width: 100%;
    text-align: center; /* Centra el texto del footer */
    box-sizing: border-box; /* Asegura que el footer use todo el ancho */
}

.btn {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-top: 15px;
    font-weight: bold;
    transition: background 0.3s;
}

.btn:hover {
    background: #0056b3;
}

.active {
    display: block;
}

/* Responsive Styles */
@media (max-width: 600px) {
    .menu-toggle {
        display: block;
    }

    .menu {
        display: none;
        flex-direction: column;
        gap: 0;
    }

    .menu.active {
        display: flex;
    }

    .menu a {
        padding: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .container {
        flex-direction: column;
    }

    .card {
        width: 100%;
        margin-bottom: 20px;
    }

    .fixed-btn {
        bottom: 10px;
        right: 10px;
        padding: 10px 20px;
    }
}

@media (min-width: 601px) and (max-width: 1024px) {
    .container {
        flex-wrap: wrap;
    }

    .card {
        flex: 1 1 45%;
    }
}

@media (min-width: 1025px) {
    .container {
        flex-wrap: wrap;
    }

    .card {
        flex: 1 1 30%;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about'); // Asegura que la primera sección visible sea "Sobre Mí"
});
