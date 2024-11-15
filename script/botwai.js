function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.visibility = chatBox.style.visibility === "visible" ? "hidden" : "visible";
}

function toggleChat() {
    const chatBox = document.getElementById("chat-box");

    if (chatBox.classList.contains('visible')) {
        chatBox.classList.add('hide');
        setTimeout(() => {
            chatBox.classList.remove('visible');
            chatBox.classList.remove('hide');
        }, 500);
    } else {
        chatBox.classList.add('visible');
        chatBox.classList.remove('hide');
    }
}

function clearChat() {
    const chatBody = document.querySelector(".chat-body");
    chatBody.innerHTML = `
        <div class="bot-message">
            <img src="./assets/botwai.png" alt="">
            <p>Oi! Sou BotWay🤖, o especialista de atendimento Newai. Como posso te ajudar hoje?</p>
        </div>
        <div id="faq-buttons">
            <h1>Perguntas frequentes:</h1>
            <button onclick="sendFAQ('produto', 'O que vocês vendem?')">O que vocês vendem?</button>
            <button onclick="sendFAQ('contato', 'Como entrar em contato?')">Como entrar em contato?</button>
            <button onclick="sendFAQ('planos', 'Quais são os planos?')">Quais são os planos?</button>
        </div>`;
}

function restartChat() {
    clearChat();
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const message = chatInput.value.trim().toLowerCase();
    const loadingIcon = document.getElementById("loading");

    if (message !== "") {
        displayMessage("Você", message, true);
        chatInput.value = "";

        loadingIcon.style.display = "block";

        setTimeout(() => {
            loadingIcon.style.display = "none";
            let botResponse = getBotResponse(message);
            displayMessage("BotWai", botResponse);
        }, 2000);
    }
    onChatMessageSent();
}

function getBotResponse(message) {
    if (message.includes("planos") || message.includes("preço") || message.includes("preco") || message.includes("custos") || message.includes("assinatura")) {
        return `<p>Oferecemos os Planos Basic, Premium e Diamond. Saiba mais em nossa aba de <a href="planos.html">Planos</a></li><style>a{text-decoration: none;color: #0066cc;}</style></p>`;
    }
    if (message.includes("horário") || message.includes("horario") || message.includes("atendimento") || message.includes("disponível") || message.includes("disponivel")) {
        return `<p>Nosso time trabalha 24/7 com o suporte, atendendo voce quando e onde quiser! Saiba mais em nossa aba de <a href="suporte.html">Suporte</a></li><style>a{text-decoration: none;color: #0066cc;}</style></p>`;
    }
    if (message.includes("empresa") || message.includes("sobre") || message.includes("história") || message.includes("historia") || message.includes("fundadores")) {
        return `<p>A Neway é uma empresa focada em inovação e tecnologia. Nossa missão é integrar marketing com inteligência artificial para revolucionar o mercado! Saiba mais em nossa aba de <a href="sobre.html">Sobre</a></li><style>a{text-decoration: none;color: #0066cc;}</style></p>`;
    }
    if (message.includes("falar com alguém") || message.includes("falar com alguem") || message.includes("contato") || message.includes("equipe") || message.includes("representante") || message.includes("ajuda") || message.includes("problema") || message.includes("suporte") || message.includes("erro")) {
        return `<p>Para entrar em contato com nossa equipe de Suporte, você pode acessar através da página de <a href="suporte.html">Suporte</a></li><style>a{text-decoration: none;color: #0066cc;}</style> da Neway. Alternativamente, você pode enviar um e-mail para suporte@newai.com , e a equipe de suporte irá ajudá-lo.</p>`;
    }
    if (message.includes("privacidade") || message.includes("politica") || message.includes("política") || message.includes("segurança") || message.includes("dados") || message.includes("informações")) {
        return `<p>Levamos sua privacidade a sério. Saiba mais sobre como protegemos seus dados em nossa <a href="./pdf/politica de privacidade.pdf" style="text-decoration: none; color: #0066cc;">Política de Privacidade</a>.</p>`;
    }
    return "Esta é uma resposta automática. Em breve alguém da nossa equipe te responderá.";
}


function onChatMessageSent() {
    document.getElementById("faq-buttons").style.display = "none";
}

function displayMessage(sender, text, isUser = false) {
    const chatBody = document.getElementById("chat-body");
    const messageElement = document.createElement("div");

    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    const userIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" id="person">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z" stroke="#ccc" ></path>
        </svg>`;
    messageElement.innerHTML = `
        ${!isUser ? '<img src="./assets/botwai.png" alt="">' : userIcon}
        <p>${text}</p>
    `;

    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}


function sendFAQ(type, question) {
    const chatBody = document.getElementById("chat-body");

    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" id="person">
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z" stroke="#ccc" ></path>
        </svg><p>${question}</p>`;
    chatBody.appendChild(userMessage);

    hideFAQAndShowLoading();

    setTimeout(() => {
        const loading = document.getElementById("loading");
        loading.style.display = "none";
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");

        if (type === 'produto') {
            botMessage.innerHTML = `<img src="./assets/botwai.png" alt=""><p>A Neway oferece soluções inovadoras que integram marketing e inteligência artificial para melhorar o desempenho e a presença digital das empresas. Trabalhamos com tecnologias de ponta para transformar dados em insights estratégicos e indiretos. Saiba mais em nossa aba de <a href="produto.html">Produto</a></li><style>a{text-decoration: none;color: #0066cc;}</style></p>`;
        } else if (type === 'contato') {
            botMessage.innerHTML = `<img src="./assets/botwai.png" alt=""><p>Para entrar em contato com nossa equipe de Suporte, você pode acessar através da página de <a href="suporte.html">Suporte</a></li><style>a{text-decoration: none;color: #0066cc;}</style> da Neway. Alternativamente, você pode enviar um e-mail para suporte@newai.com , e a equipe de suporte irá ajudá-lo.</p>`;
        } else if (type === 'planos') {
            botMessage.innerHTML = `<img src="./assets/botwai.png" alt=""><p>Oferecemos os Planos Basic, Premium e Diamond. Saiba mais em nossa aba de <a href="planos.html">Planos</a></li><style>a{text-decoration: none;color: #0066cc;}</style></p>`;
        }
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 2000);
}

function hideFAQAndShowLoading() {
    const faqButtons = document.getElementById("faq-buttons");
    const loading = document.getElementById("loading");

    faqButtons.style.display = "none";
    loading.style.display = "block";
}

function showPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}








