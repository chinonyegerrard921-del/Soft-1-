// Basic interactivity: nav toggle, theme, copy code
(function(){
  const nav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  navToggle && navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  const initialTheme = saved || (prefersDark ? 'dark' : 'light');
  if(initialTheme === 'dark') document.documentElement.setAttribute('data-theme','dark');
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    if(next === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
  });

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // copy code button
  const copyBtn = document.getElementById('copy-code');
  if(copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      const code = document.getElementById('sample-code').innerText;
      try{
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied ✓';
        setTimeout(()=> copyBtn.textContent = 'Copy code', 2000);
      }catch(e){
        copyBtn.textContent = 'Copy failed';
        setTimeout(()=> copyBtn.textContent = 'Copy code', 2000);
      }
    });
  }
})();
