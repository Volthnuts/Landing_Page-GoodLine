// ฟังก์ชันจัดการระบบเมนูมือถือ (Hamburger Menu)
function initHamburgerMenu() {
    console.log(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const menuBtn = document.getElementById('menu-btn');
    const menuLinks = document.getElementById('menu-links');

    if (menuBtn && menuLinks) {
        // เมื่อคลิกปุ่มแฮมเบอร์เกอร์ ให้สลับคลาสเปิด-ปิดแผงเมนู
        menuBtn.addEventListener('click', () => {
            menuLinks.classList.toggle('hidden');
            menuLinks.classList.toggle('flex');
        });

        // เมื่อคลิกลิงก์เมนูย่อยด้านใน ให้สั่งพับแผงซ่อนกลับไปอัตโนมัติ
        const links = menuLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuLinks.classList.add('hidden');
                menuLinks.classList.remove('flex');
            });
        });
    }
}

// ฟังก์ชันจัดการระบบสไลด์ภาพเลื่อน (Swiper Slide)
function initSwiper() {
    const swiperCheck = document.querySelector('.mySwiper');
    
    if (swiperCheck) {
        new Swiper(".mySwiper", {
            loop: true,         // วนลูปรูปภาพกลับมาอันแรกเมื่อสไลด์จนสุด
            speed: 1000,        // ความเร็วในการสไลด์เปลี่ยนรูป (1 วินาที)
            autoplay: {
                delay: 4000,    // สไลด์รูปอัตโนมัติทุกๆ 4 วินาที
                disableOnInteraction: false, // เมาส์คลิกแล้ว ระบบออโต้ยังทำงานต่อ
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true, // เปิดให้คลิกที่จุดกลมๆ ด้านล่างได้
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        // console.log("🎡 ระบบสไลด์ Swiper เริ่มทำงานสมบูรณ์แบบ!");
    } else {
        // console.warn("⚠️ ไม่พบโครงสร้างสไลด์ .mySwiper บนหน้าเว็บนี้");
    }
}

// รอให้เบราว์เซอร์อ่านโครงสร้าง Static HTML ทั้งหมดเสร็จสิ้นก่อน ค่อยปลุกให้สคริปต์ทำงาน
document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();
    initSwiper();
});