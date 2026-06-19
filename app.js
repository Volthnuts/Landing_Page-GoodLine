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

function initServicesAnimation() {
    const cards = document.querySelectorAll('.service-card');
    if (cards.length === 0) return;

    function resetCards() {
        cards.forEach(card => {
            card.classList.add('opacity-0', 'translate-y-16');
            card.classList.remove('opacity-100', 'translate-y-0');
        });
    }

    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-16');
                card.classList.add('opacity-100', 'translate-y-0');
            }, index * 300);
        });
    }

    const servicesSection = document.getElementById('services');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetCards();
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        animateCards();
                    });
                });
            } else {
                resetCards();
            }
        });
    }, { threshold: 0.1 });

    if (servicesSection) {
        observer.observe(servicesSection);
    }
}

// แก้ไขด้านล่างสุดของไฟล์ app.js เพื่อเรียกใช้ฟังก์ชันใหม่
document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();
    initSwiper();
    initServicesAnimation(); // เรียกใช้งานที่นี่
});