document.addEventListener('DOMContentLoaded', function() {
    
    /* ========================= MENU MOBILE ========================= */
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    if (menuIcon && navLinks) {
        // Toggle (abre/fecha) o menu ao clicar no ícone
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active'); // Adiciona a classe que anima o ícone para 'X'
            navLinks.classList.toggle('active'); // Adiciona a classe que mostra o menu
        });

        // Fecha o menu ao clicar em qualquer um dos links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* ========================= CONTAGEM REGRESSIVA ========================= */
    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        // Data do evento
        const countdownDate = new Date("November 20, 2025 18:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "<h4>O grande dia chegou!</h4>";
                countdownElement.style.color = 'var(--texto-dourado-suave)';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const formatTime = (time) => time < 10 ? `0${time}` : time;

            document.getElementById("days").innerText = formatTime(days);
            document.getElementById("hours").innerText = formatTime(hours);
            document.getElementById("minutes").innerText = formatTime(minutes);
            document.getElementById("seconds").innerText = formatTime(seconds);
        };

        // Atualiza a cada 1 segundo
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }
});