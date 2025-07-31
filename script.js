document.addEventListener('DOMContentLoaded', () => {
    const bonkButton = document.getElementById('bonkButton');
    const bonkSound = document.getElementById('bonkSound');
    const bonkGif = document.querySelector('.bonk-gif');
    const bonkTextSpan = document.getElementById('bonkText');

    if (bonkButton && bonkSound && bonkGif && bonkTextSpan) {
        bonkButton.addEventListener('click', () => {
            // "BONK" yazısına ezilme efekti ekle
            bonkTextSpan.classList.add('squish');
            setTimeout(() => {
                bonkTextSpan.classList.remove('squish');
            }, 500); // 0.5 saniye ezik kalsın

            bonkSound.currentTime = 0;
            bonkSound.play();

            // GIF'i göster ve rastgele pozisyon ata
            bonkGif.style.display = 'block';
            const gifX = Math.random() * (window.innerWidth - 300); // 300px gif genişliği
            const gifY = Math.random() * (window.innerHeight - 200); // 200px gif yüksekliği varsayımı
            bonkGif.style.left = `${gifX}px`;
            bonkGif.style.top = `${gifY}px`;


            // GIF'i bir süre sonra gizle
            setTimeout(() => {
                bonkGif.style.display = 'none';
            }, 1000); // 1 saniye sonra gizle

            // Ekranda "BONK!" yazısı oluştur
            const bonkText = document.createElement('div');
            bonkText.classList.add('bonk-text');
            bonkText.innerText = 'BONK!';
            document.body.appendChild(bonkText);

            // Rastgele pozisyon ata
            const x = Math.random() * (window.innerWidth - 150);
            const y = Math.random() * (window.innerHeight - 100);
            bonkText.style.left = `${x}px`;
            bonkText.style.top = `${y}px`;

            // Yazıyı bir süre sonra kaldır
            setTimeout(() => {
                bonkText.remove();
            }, 1000);
        });
    }
});