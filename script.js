// ==========================================
// SEÑAFÁCIL - LENGUA DE SEÑAS COLOMBIANA (LSC)
// Lógica de la aplicación web educativa
// ==========================================

// --- BANCO DE DATOS EXTENDIDO DE SEÑAS (LSC) ---
const wordsData = [
    // 👋 SALUDOS Y CORTESÍA
    {
        id: "hola",
        word: "Hola",
        category: "saludos",
        imagen: "img/hola.svg",
        explicacion: "Coloca la mano abierta con los dedos juntos cerca de la sien y haz un suave movimiento lateral.",
        ejemplo: "👋 ¡Hola! ¿Cómo estás?",
        icono: "👋",
        postura: "🖐️ Mano abierta"
    },
    {
        id: "gracias",
        word: "Gracias",
        category: "saludos",
        imagen: "img/gracias.svg",
        explicacion: "Toca levemente tu barbilla con la yema de los dedos de la mano dominante y luego muévela hacia adelante.",
        ejemplo: "🙏 ¡Muchas gracias por tu ayuda!",
        icono: "🙏",
        postura: "🖐️ Dedos en barbilla"
    },
    {
        id: "adios",
        word: "Adiós",
        category: "saludos",
        imagen: "img/hola.svg",
        explicacion: "Mueve los dedos abriendo y cerrando la mano o agitándola suavemente de lado a lado.",
        ejemplo: "👋 ¡Adiós, nos vemos mañana!",
        icono: "👋",
        postura: "🖐️ Movimiento de lado"
    },
    {
        id: "porfavor",
        word: "Por Favor",
        category: "saludos",
        imagen: "img/gracias.svg",
        explicacion: "Coloca la palma de la mano abierta sobre el pecho y realiza un movimiento circular suave.",
        ejemplo: "🤝 ¿Me prestas el lápiz, por favor?",
        icono: "🤝",
        postura: "✋ Palma en el pecho"
    },
    {
        id: "buenosdias",
        word: "Buenos Días",
        category: "saludos",
        imagen: "img/buenosdias.svg",
        explicacion: "Haz la seña de 'Bueno' (mano al pecho) y luego extiende el brazo simular el sol saliendo.",
        ejemplo: "☀️ ¡Buenos días a todos en clase!",
        icono: "☀️",
        postura: "☀️ Movimiento al frente"
    },
    {
        id: "denada",
        word: "De Nada",
        category: "saludos",
        imagen: "img/gracias.svg",
        explicacion: "Pasa el pulgar por debajo de la barbilla hacia adelante con un ligero movimiento de cabeza.",
        ejemplo: "😊 ¡Fue un placer ayudarte, de nada!",
        icono: "😊",
        postura: "👍 Pulgar en barbilla"
    },

    // 🔤 ABECEDARIO (DACTILOLOGÍA)
    {
        id: "a",
        word: "Letra A",
        category: "abecedario",
        imagen: "img/a.svg",
        explicacion: "Cierra el puño con el dedo pulgar apoyado a un lado descansando sobre el dedo índice.",
        ejemplo: "🔤 A de Agua, Amigo y Aprendizaje.",
        icono: "🅰️",
        postura: "✊ Puño con pulgar lateral"
    },
    {
        id: "b",
        word: "Letra B",
        category: "abecedario",
        imagen: "img/a.svg",
        explicacion: "Mano abierta con los cuatro dedos rectos hacia arriba y el pulgar doblado sobre la palma.",
        ejemplo: "🔤 B de Bien, Bonito y Banco.",
        icono: "🅱️",
        postura: "🖐️ 4 Dedos juntos hacia arriba"
    },
    {
        id: "c",
        word: "Letra C",
        category: "abecedario",
        imagen: "img/a.svg",
        explicacion: "Curva la mano formando una letra 'C' visible con el pulgar y los otros cuatro dedos.",
        ejemplo: "🔤 C de Colegio y Colombia.",
        icono: "©️",
        postura: "🌙 Mano en curva de C"
    },
    {
        id: "d",
        word: "Letra D",
        category: "abecedario",
        imagen: "img/d.svg",
        explicacion: "Levanta el dedo índice hacia arriba y forma un círculo con los demás dedos tocando el pulgar.",
        ejemplo: "🔤 D de Divertido y Día.",
        icono: "🔤",
        postura: "☝️ Índice vertical y círculo"
    },
    {
        id: "e",
        word: "Letra E",
        category: "abecedario",
        imagen: "img/a.svg",
        explicacion: "Encoge todos los dedos hacia la palma tocando levemente las yemas con el pulgar.",
        ejemplo: "🔤 E de Escuela y Empatía.",
        icono: "🔤",
        postura: "✊ Dedos encogidos"
    },
    {
        id: "l",
        word: "Letra L",
        category: "abecedario",
        imagen: "img/d.svg",
        explicacion: "Extiende el dedo índice hacia arriba y el pulgar hacia un lado formando una 'L'.",
        ejemplo: "🔤 L de Lengua de Señas.",
        icono: "🔤",
        postura: "👆 Forma de L"
    },

    // 🔢 NÚMEROS
    {
        id: "uno",
        word: "Número 1",
        category: "numeros",
        imagen: "img/1.svg",
        explicacion: "Levanta el dedo índice hacia arriba manteniendo los otros dedos cerrados en puño.",
        ejemplo: "🔢 Número uno.",
        icono: "1️⃣",
        postura: "☝️ 1 Dedo arriba"
    },
    {
        id: "dos",
        word: "Número 2",
        category: "numeros",
        imagen: "img/2.svg",
        explicacion: "Levanta los dedos índice y corazón en forma de 'V' manteniendo los demás cerrados.",
        ejemplo: "🔢 Número dos.",
        icono: "2️⃣",
        postura: "✌️ 2 Dedos en V"
    },
    {
        id: "tres",
        word: "Número 3",
        category: "numeros",
        imagen: "img/3.svg",
        explicacion: "Levanta el pulgar, índice y dedo medio mostrando tres dedos abiertos.",
        ejemplo: "🔢 Número tres.",
        icono: "3️⃣",
        postura: "🤟 3 Dedos levantados"
    },
    {
        id: "cuatro",
        word: "Número 4",
        category: "numeros",
        imagen: "img/4.svg",
        explicacion: "Levanta los cuatro dedos (índice, medio, anular y meñique) guardando el pulgar.",
        ejemplo: "🔢 Número cuatro.",
        icono: "4️⃣",
        postura: "🖐️ 4 Dedos arriba"
    },
    {
        id: "cinco",
        word: "Número 5",
        category: "numeros",
        imagen: "img/5.svg",
        explicacion: "Abre toda la mano mostrando los 5 dedos extendidos con la palma al frente.",
        ejemplo: "🔢 Número cinco.",
        icono: "5️⃣",
        postura: "🖐️ Mano totalmente abierta"
    },

    // 😊 EMOCIONES
    {
        id: "feliz",
        word: "Feliz",
        category: "emociones",
        imagen: "img/hola.svg",
        explicacion: "Coloca ambas manos sobre el pecho y muévelas hacia arriba repetidamente con una gran sonrisa.",
        ejemplo: "😊 ¡Hoy me siento muy feliz!",
        icono: "😊",
        postura: "🤲 Manos al pecho subiendo"
    },
    {
        id: "triste",
        word: "Triste",
        category: "emociones",
        imagen: "img/hola.svg",
        explicacion: "Pasa la mano frente al rostro bajándola lentamente mientras acompañas con expresión triste.",
        ejemplo: "😢 Expresa cuando necesitas consuelo.",
        icono: "😢",
        postura: "🖐️ Mano bajando frente al rostro"
    },
    {
        id: "amigo",
        word: "Amigo / Amor",
        category: "emociones",
        imagen: "img/gracias.svg",
        explicacion: "Cruza las manos dando palmaditas suaves sobre el pecho cerca del corazón.",
        ejemplo: "🤗 Tú eres mi mejor amigo.",
        icono: "🤗",
        postura: "🤝 Manos cruzadas en pecho"
    },
    {
        id: "enojado",
        word: "Enojado",
        category: "emociones",
        imagen: "img/hola.svg",
        explicacion: "Curva la mano en garra frente al rostro con gesto firme de molestia.",
        ejemplo: "😡 Expresa cuando algo no te gusta.",
        icono: "😡",
        postura: "🦅 Mano en garra cerca al rostro"
    },

    // 👨‍👩‍👧 FAMILIA
    {
        id: "familia",
        word: "Familia",
        category: "familia",
        imagen: "img/gracias.svg",
        explicacion: "Forma una 'F' con ambas manos y realiza un círculo uniendo los dedos en comunidad.",
        ejemplo: "👨‍👩‍👧‍👦 Mi familia me apoya.",
        icono: "👨‍👩‍👧",
        postura: "👨‍👩‍👧 Círculo con manos en F"
    },
    {
        id: "mama",
        word: "Mamá",
        category: "familia",
        imagen: "img/gracias.svg",
        explicacion: "Toca la barbilla dos veces con el pulgar de la mano abierta.",
        ejemplo: "❤️ Te quiero mucho, mamá.",
        icono: "👩",
        postura: "👍 Pulgar toca barbilla"
    },
    {
        id: "papa",
        word: "Papá",
        category: "familia",
        imagen: "img/gracias.svg",
        explicacion: "Toca la frente dos veces con el pulgar de la mano abierta.",
        ejemplo: "👨 Mi papá es muy comprensivo.",
        icono: "👨",
        postura: "👍 Pulgar toca frente"
    }
];

// --- BANCO DE PREGUNTAS DEL JUEGO ---
const quizQuestions = [
    {
        imagen: "img/hola.svg",
        correcta: "Hola",
        opciones: ["Hola", "Gracias", "Adiós", "Agua"],
        explicacion: "¡Correcto! La seña de 'Hola' se realiza moviendo la mano abierta al lado de la sien."
    },
    {
        imagen: "img/gracias.svg",
        correcta: "Gracias",
        opciones: ["Por Favor", "Gracias", "Comer", "Colegio"],
        explicacion: "¡Excelente! Tocamos levemente la barbilla y extendemos la mano hacia el frente para decir 'Gracias'."
    },
    {
        imagen: "img/agua.svg",
        correcta: "Agua",
        opciones: ["Leche", "Jugo", "Agua", "Comer"],
        explicacion: "¡Muy bien! Formamos la forma de 'W' cerca de la barbilla para representar 'Agua'."
    },
    {
        imagen: "img/a.svg",
        correcta: "Letra A",
        opciones: ["Letra B", "Letra A", "Número 1", "Feliz"],
        explicacion: "¡Así es! El puño cerrado con el pulgar a un lado es la seña de la Letra A."
    },
    {
        imagen: "img/buenosdias.svg",
        correcta: "Buenos Días",
        opciones: ["Buenas Noches", "Buenos Días", "Hola", "Adiós"],
        explicacion: "¡Genial! Buenos días combina la seña de bueno con el movimiento del sol al frente."
    },
    {
        imagen: "img/ayuda.svg",
        correcta: "Ayuda",
        opciones: ["Amigo", "Ayuda", "Profesor", "Gracias"],
        explicacion: "¡Perfecto! Apoyar un puño sobre la otra mano y subirlo significa solicitar o dar 'Ayuda'."
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let currentCategory = "todos";
let currentQuizIndex = 0;
let quizScore = 0;
let selectedSentenceWords = [];

// --- INICIALIZACIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderLearnCards();
    initQuiz();
    initSentenceBuilder();
    initSpeechSynthesis();
    initThemeToggle();
});

// --- CAMBIO DE TEMA (MODO NOCTURNO / DE DÍA) ---
function initThemeToggle() {
    const themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        themeBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// --- NAVEGACIÓN ENTRE SECCIONES ---
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".app-section");

    navButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute("data-target");

            // Actualizar botones de navegación
            navButtons.forEach(b => b.classList.remove("active"));
            
            // Marcar activos todos los botones con data-target idéntico
            document.querySelectorAll(`.nav-link[data-target="${targetId}"]`).forEach(b => b.classList.add("active"));

            // Mostrar la sección correspondiente
            sections.forEach(sec => {
                if (sec.id === targetId) {
                    sec.classList.add("active-section");
                } else {
                    sec.classList.remove("active-section");
                }
            });

            // Scroll suave hacia arriba
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });

    // Filtros de categoría en la sección Aprender
    const categoryChips = document.querySelectorAll(".cat-chip");
    categoryChips.forEach(chip => {
        chip.addEventListener("click", () => {
            categoryChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentCategory = chip.getAttribute("data-category");
            renderLearnCards();
        });
    });

    // Buscador de señas
    const searchInput = document.getElementById("search-signs");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            renderLearnCards(query);
        });
    }
}

// --- RENDERIZADO DE TARJETAS (SECCIÓN APRENDER) ---
function renderLearnCards(searchQuery = "") {
    const grid = document.getElementById("signs-grid");
    if (!grid) return;

    grid.innerHTML = "";

    const filtered = wordsData.filter(item => {
        const matchesCategory = (currentCategory === "todos" || item.category === currentCategory);
        const matchesSearch = item.word.toLowerCase().includes(searchQuery) || item.explicacion.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3>No encontramos señas para esta búsqueda</h3>
                <p>Intenta seleccionar otra categoría o cambiar el término de búsqueda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "sign-card";
        const isCleanTextOnly = item.category === "emociones" || item.category === "familia";
        const topImageHtml = isCleanTextOnly ? '' : `
            <div class="card-image-wrapper">
                <img src="${item.imagen}" alt="Seña de ${item.word}" loading="lazy" onerror="this.onerror=null; this.src='img/hola.svg';">
                <span class="card-badge">${item.icono} ${getCategoryName(item.category)}</span>
            </div>
        `;
        card.innerHTML = `
            ${topImageHtml}
            <div class="card-body">
                <h3 class="card-title">${item.word}</h3>
                <div class="posture-pill"><strong>Postura:</strong> ${item.postura || 'Mano en LSC'}</div>
                <p class="card-description">${item.explicacion}</p>
                <div class="card-example"><strong>Ejemplo:</strong> ${item.ejemplo}</div>
                <div class="card-actions">
                    <button class="btn-audio" onclick="speakText('${item.word}')">
                        <span>🔊</span> Escuchar
                    </button>
                    <button class="btn-detail" onclick="openDetailModal('${item.id}')">
                        <span>🔍</span> Ver Seña
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getCategoryName(catKey) {
    const names = {
        saludos: "Saludos",
        abecedario: "Abecedario",
        numeros: "Números",
        emociones: "Emociones",
        familia: "Familia"
    };
    return names[catKey] || "General";
}

// --- LÓGICA DEL JUEGO "¿QUÉ SIGNIFICA ESTA SEÑA?" ---
function initQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    const quizCard = document.getElementById("quiz-card");
    const quizFinished = document.getElementById("quiz-finished");
    
    if (currentQuizIndex >= quizQuestions.length) {
        // Mostrar pantalla final
        if (quizCard) quizCard.classList.add("hidden");
        if (quizFinished) quizFinished.classList.remove("hidden");
        document.getElementById("final-score").textContent = quizScore;
        document.getElementById("total-questions").textContent = quizQuestions.length * 10;
        
        // Mensaje de felicitación
        const message = document.getElementById("final-message");
        if (message) {
            const maxPoints = quizQuestions.length * 10;
            if (quizScore === maxPoints) {
                message.textContent = "🏆 ¡Puntaje perfecto! Eres un maestro de la inclusión y la Lengua de Señas Colombiana.";
            } else if (quizScore >= maxPoints / 2) {
                message.textContent = "🌟 ¡Gran trabajo! Lograste una gran puntuación. ¡Sigue practicando!";
            } else {
                message.textContent = "💪 ¡Buen intento! Practica un poco más en la sección Aprender y vuelve a intentarlo.";
            }
        }
        return;
    }

    if (quizCard) quizCard.classList.remove("hidden");
    if (quizFinished) quizFinished.classList.add("hidden");

    const q = quizQuestions[currentQuizIndex];

    // Actualizar progreso
    document.getElementById("quiz-progress-text").textContent = `Pregunta ${currentQuizIndex + 1} de ${quizQuestions.length}`;
    document.getElementById("quiz-score-badge").textContent = `⭐ Puntos: ${quizScore}`;
    
    const progressPercent = ((currentQuizIndex + 1) / quizQuestions.length) * 100;
    document.getElementById("quiz-progress-fill").style.width = `${progressPercent}%`;

    // Cargar imagen
    const imgElem = document.getElementById("quiz-img");
    imgElem.src = q.imagen;
    imgElem.onerror = function() { this.src = "img/hola.svg"; };

    // Ocultar feedback previo
    const feedbackBox = document.getElementById("quiz-feedback");
    feedbackBox.className = "quiz-feedback hidden";

    // Opciones
    const optionsContainer = document.getElementById("quiz-options");
    optionsContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    q.opciones.forEach((op, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span> <span class="opt-text">${op}</span>`;
        btn.addEventListener("click", () => handleQuizAnswer(op, q, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selectedOption, questionObj, btnElement) {
    // Deshabilitar todos los botones
    const allBtns = document.querySelectorAll(".quiz-opt-btn");
    allBtns.forEach(b => b.disabled = true);

    const feedbackBox = document.getElementById("quiz-feedback");
    feedbackBox.classList.remove("hidden");

    if (selectedOption === questionObj.correcta) {
        quizScore += 10;
        btnElement.classList.add("correct-choice");
        feedbackBox.className = "quiz-feedback feedback-success";
        feedbackBox.innerHTML = `
            <div class="feedback-title">🎉 ¡Correcto! (+10 puntos)</div>
            <div class="feedback-desc">${questionObj.explicacion}</div>
            <button class="btn-next-q" onclick="nextQuestion()">Siguiente Pregunta ➡️</button>
        `;
        playSuccessSound();
    } else {
        btnElement.classList.add("wrong-choice");
        feedbackBox.className = "quiz-feedback feedback-error";
        feedbackBox.innerHTML = `
            <div class="feedback-title">❌ ¡Casi! La respuesta correcta era "${questionObj.correcta}"</div>
            <div class="feedback-desc">${questionObj.explicacion}</div>
            <button class="btn-next-q" onclick="nextQuestion()">Siguiente Pregunta ➡️</button>
        `;
    }

    document.getElementById("quiz-score-badge").textContent = `⭐ Puntos: ${quizScore}`;
}

function nextQuestion() {
    currentQuizIndex++;
    showQuizQuestion();
}

function restartGame() {
    initQuiz();
}

// --- CONSTRUYE UNA FRASE ---
function initSentenceBuilder() {
    const wordsPool = [
        { text: "YO", posture: "👈 Apuntar al pecho" },
        { text: "QUIERO", posture: "🤲 Manos hacia adentro" },
        { text: "HOLA", posture: "🖐️ Mano abierta en sien" },
        { text: "GRACIAS", posture: "🖐️ Dedos en barbilla" },
        { text: "AMIGO", posture: "🤝 Manos cruzadas" },
        { text: "FELIZ", posture: "🤲 Manos al pecho subiendo" },
        { text: "TRISTE", posture: "🖐️ Mano bajando rostro" },
        { text: "POR FAVOR", posture: "✋ Palma en el pecho" },
        { text: "BUENOS DÍAS", posture: "☀️ Movimiento al frente" },
        { text: "MAMÁ", posture: "👍 Pulgar toca barbilla" },
        { text: "PAPÁ", posture: "👍 Pulgar toca frente" }
    ];

    const chipsContainer = document.getElementById("words-pool");
    if (!chipsContainer) return;

    chipsContainer.innerHTML = "";

    wordsPool.forEach(w => {
        const chip = document.createElement("button");
        chip.className = "phrase-word-chip";
        chip.textContent = `+ ${w.text}`;
        chip.addEventListener("click", () => {
            selectedSentenceWords.push(w);
            updateSentenceDisplay();
        });
        chipsContainer.appendChild(chip);
    });

    updateSentenceDisplay();
}

function updateSentenceDisplay() {
    const textDisplay = document.getElementById("phrase-result-text");
    const visualSeq = document.getElementById("phrase-visual-seq");

    if (!textDisplay || !visualSeq) return;

    if (selectedSentenceWords.length === 0) {
        textDisplay.innerHTML = `<span class="placeholder-text">Haz clic en las palabras de abajo para armar tu frase...</span>`;
        visualSeq.innerHTML = `<div class="empty-phrase-msg">Aquí aparecerán las tarjetas de señas en secuencia</div>`;
        return;
    }

    // Texto de la frase
    const fullText = selectedSentenceWords.map(w => w.text).join(" + ");
    textDisplay.innerHTML = `<strong>Frase formada:</strong> ${fullText}`;

    // Secuencia visual
    visualSeq.innerHTML = "";
    selectedSentenceWords.forEach((item, idx) => {
        const seqCard = document.createElement("div");
        seqCard.className = "seq-card";
        seqCard.innerHTML = `
            <div class="seq-num">${idx + 1}</div>
            <div class="seq-posture-box">
                <span class="seq-posture-label">POSTURA:</span>
                <span class="seq-posture-text">${item.posture || 'Mano en LSC'}</span>
            </div>
            <span class="seq-word-title">${item.text}</span>
        `;
        visualSeq.appendChild(seqCard);
    });
}

function clearSentence() {
    selectedSentenceWords = [];
    updateSentenceDisplay();
}

function speakSentence() {
    if (selectedSentenceWords.length === 0) return;
    const phrase = selectedSentenceWords.map(w => w.text).join(" ");
    speakText(phrase);
}

// --- MODAL DE DETALLE DE SEÑA ---
function openDetailModal(wordId) {
    const item = wordsData.find(w => w.id === wordId);
    if (!item) return;

    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("modal-body-content");
    
    if (modal && content) {
        content.innerHTML = `
            <div class="modal-detail-grid">
                <div class="modal-img-col">
                    <img src="${item.imagen}" alt="${item.word}" onerror="this.src='img/hola.svg';">
                </div>
                <div class="modal-info-col">
                    <h2>${item.icono} ${item.word}</h2>
                    <span class="modal-cat-tag">Categoría: ${getCategoryName(item.category)}</span>
                    <hr style="margin: 10px 0; border: none; border-top: 1px solid #E2E8F0;">
                    <h4>Postura de las Manos:</h4>
                    <p style="font-weight: 600; color: #2563EB;">${item.postura || 'Mano en LSC'}</p>
                    <h4 style="margin-top: 10px;">Explicación del Movimiento:</h4>
                    <p>${item.explicacion}</p>
                    <h4 style="margin-top: 10px;">Ejemplo de Uso:</h4>
                    <p class="modal-example-box">${item.ejemplo}</p>
                    <button class="btn-modal-speech" onclick="speakText('${item.word}')">
                        🔊 Escuchar pronunciación
                    </button>
                </div>
            </div>
        `;
        modal.classList.remove("hidden");
    }
}

function closeModal() {
    const modal = document.getElementById("detail-modal");
    if (modal) modal.classList.add("hidden");
}

// --- SÍNTESIS DE VOZ (TEXT TO SPEECH EN ESPAÑOL) ---
function initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
        console.log("Síntesis de voz lista.");
    }
}

function speakText(text) {
    if (!('speechSynthesis' in window)) {
        alert("Tu navegador no soporta reproducción de audio de texto.");
        return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-CO";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// --- EFECTO DE SONIDO DE ÉXITO (SINTETIZADO EN JS) ---
function playSuccessSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);

        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
        // Ignorar si el audio está bloqueado
    }
}
