       
 const toggleBtn = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        toggleBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            toggleBtn.classList.toggle('menu-open');
        });

        // Optional: highlight active link
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                link.style.color = '#fff'; // Or add a class to style it
                link.classList.add("before:scale-x-[1]", "before:origin-left");
            }
        });