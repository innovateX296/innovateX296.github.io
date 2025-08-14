
    // Theme toggle with localStorage
    const root = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const saved = localStorage.getItem('theme');
    if(saved === 'light'){ root.classList.add('light'); }
    themeBtn.addEventListener('click', () =>{
      root.classList.toggle('light');
      localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
    });

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', ()=>{
      const visible = mobileMenu.style.display !== 'none';
      mobileMenu.style.display = visible ? 'none' : 'block';
    });

    // Reveal on scroll
    const io = new IntersectionObserver((entries)=>{
      for(const e of entries){ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } }
    }, {threshold: .15});
    document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();
  