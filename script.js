document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => menu.classList.add('hidden'));
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    document.querySelectorAll('.skill-card, .experience-card, .project-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
});
