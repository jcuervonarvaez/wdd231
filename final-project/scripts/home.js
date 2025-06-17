function getDaysDifference(lastVisit) {
    const now = new Date();
    const past = new Date(lastVisit);
    const diffTime = now - past;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const trialMessage = document.getElementById('trial-message');
const trialButton = document.getElementById('trial-button');
const lastVisitMsg = document.getElementById('last-visit-message');

const userData = JSON.parse(localStorage.getItem('tolojuUserData'));
const now = new Date().toISOString();

if (!userData) {
    // First-time visitor
    trialMessage.innerHTML = "Nice to meet you!<br>Let’s start a conversation.";
    trialButton.textContent = "Start your free trial";
    trialButton.addEventListener('click', () => {
        localStorage.setItem('tolojuUserData', JSON.stringify({
            code: crypto.randomUUID(),
            lastVisit: now
        }));
        window.location.href = '/contact.html';
    });
} else {
    // Returning visitor
    const daysAgo = getDaysDifference(userData.lastVisit);
    trialMessage.innerHTML = "Welcome back!<br>We’ve got special offers waiting for you.";
    trialButton.textContent = "Schedule your session";
    lastVisitMsg.textContent = daysAgo > 0
        ? `It’s been ${daysAgo} day${daysAgo > 1 ? 's' : ''} since your last visit.`
        : `Great to see you again so soon!`;

    trialButton.addEventListener('click', () => {
        localStorage.setItem('tolojuUserData', JSON.stringify({
            ...userData,
            lastVisit: now
        }));
        window.location.href = `./contact-us.html?code=${userData.code}`;
    });
}

async function loadFeatures() {
    try {
        const response = await fetch('./scripts/features-home.json');
        if (!response.ok) throw new Error('Failed to load features');

        const features = await response.json();
        const container = document.getElementById('features-right');
        container.innerHTML = '';

        features.forEach(feature => {
            const item = document.createElement('div');
            item.classList.add('feature-item');
            item.innerHTML = `
          <div class="icon-wrapper"></div>
          <div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
          </div>
        `;
            container.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading features:', error);
    }
}

// Load features on page load
loadFeatures();

async function loadFAQs() {
    try {
        const res = await fetch('./scripts/faq-data.json');
        if (!res.ok) throw new Error('Failed to fetch FAQ data');
        const faqs = await res.json();
        renderFAQs(faqs);
    } catch (error) {
        console.error('Error loading FAQs:', error);
    }
}

function renderFAQs(faqs) {
    const container = document.getElementById('faq-accordion');
    container.innerHTML = '';

    faqs.forEach(faq => {
        const item = document.createElement('div');
        item.className = 'faq-item';

        item.innerHTML = `
        <button class="faq-question">${faq.question}</button>
        <div class="faq-answer">
          <p>${faq.answer}</p>
        </div>
      `;

        container.appendChild(item);
    });


    /* JavaScript para el acordeón (puede ir en un archivo separado) */
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentNode;
            const answer = button.nextElementSibling;

            button.classList.toggle('active');
            answer.classList.toggle('show');

            // Cerrar otros items abiertos
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.querySelector('.faq-question').classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('show');
                }
            });
        });
    });
}

// Cargar FAQs al iniciar
loadFAQs();

function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
    // Abrir modal al hacer clic en los botones
    document.querySelectorAll('.service-link[data-modal-target]').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const modalId = button.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            openModal(modal);
        });
    });

    // Cerrar modal al hacer clic en el botón close
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
});
