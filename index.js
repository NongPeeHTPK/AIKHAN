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
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarsfade');
    let scrollTimer;

    // เนื่องจากเราตั้งค่า opacity-0 และ invisible ใน HTML แล้ว จึงไม่ต้องเพิ่มโค้ดที่นี่อีก

    window.addEventListener('scroll', function () {
        // เมื่อเริ่มเลื่อน ให้แสดงแถบนำทาง
        navbar.classList.remove('opacity-0'); // ลบคลาสซ่อน
        navbar.classList.add('opacity-100');   // เพิ่มคลาสแสดง

        // ล้าง Timer เก่า ถ้ามีการเลื่อนต่อเนื่อง
        clearTimeout(scrollTimer);

        // ตั้งค่า Timer ใหม่: ถ้าไม่มีการเลื่อนเป็นเวลา 1.5 วินาที ให้ซ่อนแถบนำทาง
        scrollTimer = setTimeout(function () {
            navbar.classList.remove('opacity-100'); // ลบคลาสแสดง
            navbar.classList.add('opacity-0');   // เพิ่มคลาสซ่อน
        }, 1500); // 1500 มิลลิวินาที = 1.5 วินาที (ปรับได้ตามต้องการ)
    });
});
