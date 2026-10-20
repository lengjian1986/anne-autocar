(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-toggle').forEach((button, index) => {
    const menu = document.createElement('nav');
    menu.className = 'mobile-menu';
    menu.id = `mobile-menu-${index}`;
    menu.hidden = true;
    menu.setAttribute('aria-label', 'メインナビゲーション');
    [['index.html', 'ホーム'], ['services.html', 'サービス'], ['company.html', '会社案内']].forEach(([href, label]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      if (page === href) link.setAttribute('aria-current', 'page');
      menu.append(link);
    });
    const phone = document.createElement('a');
    phone.href = 'tel:09097106421';
    phone.className = 'phone';
    phone.textContent = 'TEL：090-9710-6421';
    menu.append(phone);
    button.setAttribute('aria-controls', menu.id);
    button.closest('header').append(menu);
    const close = () => { menu.hidden = true; button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'メニューを開く'); };
    button.addEventListener('click', () => {
      menu.hidden = !menu.hidden;
      button.setAttribute('aria-expanded', String(!menu.hidden));
      button.setAttribute('aria-label', menu.hidden ? 'メニューを開く' : 'メニューを閉じる');
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { close(); button.focus(); } });
    document.addEventListener('click', event => { if (!button.closest('header').contains(event.target)) close(); });
    window.matchMedia('(min-width:761px)').addEventListener('change', close);
  });
})();
