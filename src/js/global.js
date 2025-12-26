/* --- global.js --- */

/* 1. Theme Configuration */
const themes = ["dark", "light", "midnight", "retro"];
const themeIcons = ["fa-moon", "fa-sun", "fa-star", "fa-terminal"];

function getCurrentThemeIndex() {
    const savedTheme = localStorage.getItem("theme");
    return themes.indexOf(savedTheme) !== -1 ? themes.indexOf(savedTheme) : 0;
}

function applyTheme(index) {
    const themeName = themes[index];
    const body = document.body;
    const toggleButtonIcon = document.querySelector(".mode-toggle i");
    
    body.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);

    if (toggleButtonIcon) {
        toggleButtonIcon.className = "fas"; 
        toggleButtonIcon.classList.add(themeIcons[index]);
    }
}

function toggleMode() {
    let currentIndex = getCurrentThemeIndex();
    let nextIndex = (currentIndex + 1) % themes.length;
    applyTheme(nextIndex);
}

/* 2. Highlight Active Link */
function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace('.html', '') || "index"; 

    document.querySelectorAll('.links a').forEach(link => {
        link.style.textDecoration = 'none';
        link.style.borderBottom = 'none';
    });

    const activeLink = document.querySelector(`a[href="${page}.html"]`) || document.querySelector(`a[href="index.html"]`);
    if (activeLink) activeLink.style.textDecoration = 'underline';
}

/* 3. Typewriter Effect */
const roles = ["Pilot ✈️", "Developer 💻", "Artist 🎨", "Scuba Diver 🤿"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const typeElement = document.querySelector(".typewriter-text");
    if (!typeElement) return;

    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typeElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }
    setTimeout(typeWriter, speed);
}

/* 4. Scroll Event Handlers */
function handleScrollEvents() {
    const items = document.querySelectorAll('.timeline-item');
    const triggerBottom = window.innerHeight * 0.8;

    items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < triggerBottom) item.classList.add('visible');
    });

    const btn = document.getElementById("back-to-top");
    if (btn) {
        if (window.scrollY > 300) btn.classList.add("show");
        else btn.classList.remove("show");
    }
}

/* 5. Dynamic Footer Injection */
function loadFooter() {
    if (document.querySelector("footer")) return;

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <ul class="social-icons">
            <li><a href="https://github.com/robfernan" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/robfernan/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.youtube.com/@MungDaal321" target="_blank"><i class="fab fa-youtube"></i></a></li>
            <li><a href="https://www.twitch.tv/mungdaal321" target="_blank"><i class="fab fa-twitch"></i></a></li>
        </ul>
        <p>© ${new Date().getFullYear()} Robert Fernandez. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}

/* 6. Project Filtering */
function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category) || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.project-item').forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || (itemCat && itemCat.includes(category))) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

/* 7. Easter Egg (Konami Code) */
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let currentSequence = [];

document.addEventListener('keydown', (e) => {
    currentSequence.push(e.key);
    if (currentSequence.length > secretCode.length) currentSequence.shift();

    if (JSON.stringify(currentSequence) === JSON.stringify(secretCode)) {
        alert("🎮 Secret Retro Mode Activated!");
        applyTheme(themes.indexOf("retro"));
    }
});

/* 8. Before/After Slider Logic */
function initComparisonSliders() {
    const sliders = document.querySelectorAll('.slider-input');
    sliders.forEach(slider => {
        slider.addEventListener('input', (e) => {
            const container = e.target.parentElement;
            const foregroundImg = container.querySelector('.img-foreground');
            const handle = container.querySelector('.slider-handle');
            const value = e.target.value;
            
            foregroundImg.style.width = `${value}%`;
            handle.style.left = `${value}%`;
        });
    });
}

/* 9. Lightbox Functions (For Art Page) */
function openLightbox(el) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const cap = document.getElementById('caption');
    if (lb && lbImg) {
        lb.style.display = 'block';
        lbImg.src = el.querySelector('img').src;
        cap.innerHTML = el.querySelector('img').alt;
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

/* 10. Initialization */
window.onload = () => {
    applyTheme(getCurrentThemeIndex());
    highlightActiveLink();
    loadFooter();
    typeWriter();
    initComparisonSliders();

    const topBtn = document.createElement("button");
    topBtn.id = "back-to-top";
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(topBtn);
    
    window.addEventListener('scroll', handleScrollEvents);
    handleScrollEvents();

    // Attach Lightbox Listeners (if elements exist)
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            // Close if clicking the background overlay
            if (e.target === lightbox) closeLightbox();
        });
        
        // Close button listener
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }
    }

    // Global Key Listener for Escape to close Lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeLightbox();
    });
};