document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const xmark = document.getElementById('xmark');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburger && xmark && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            hamburger.classList.add('hidden');
            xmark.classList.remove('hidden');
        });

        xmark.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            hamburger.classList.remove('hidden');
            xmark.classList.add('hidden');
        });
    } else {
        console.error("ไม่พบองค์ประกอบที่จำเป็นอย่างน้อยหนึ่งรายการ (hamburger, xmark, mobile-menu)");
    }
});