// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        gsap.to(navbar, {
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.15)',
            duration: 0.5
        });
    } else {
        gsap.to(navbar, {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.5
        });
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                scrollTo: {
                    y: target.offsetTop - 80,
                    duration: 1,
                    ease: 'power2.inOut'
                }
            });
        }
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    // 英雄区动画
    gsap.from('.hero-content h1', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out'
    });
    gsap.from('.hero-content p', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: 'power3.out'
    });
    gsap.from('.btn-primary', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: 'power3.out'
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 核心技术部分动画
            if (entry.target.classList.contains('tech-item')) {
                gsap.from(entry.target, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            }
            // 解决方案部分动画
            if (entry.target.classList.contains('solution-item')) {
                gsap.from(entry.target, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
            // 新闻资讯部分动画
            if (entry.target.classList.contains('news-item')) {
                gsap.from(entry.target, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }
            // 关于我们部分动画
            if (entry.target.classList.contains('about-content')) {
                gsap.from(entry.target, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            }
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.tech-item, .solution-item, .news-item, .about-content').forEach(el => {
    observer.observe(el);
});

// 按钮悬停效果
const btnPrimary = document.querySelector('.btn-primary');
if (btnPrimary) {
    btnPrimary.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(0, 102, 204, 0.3)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    btnPrimary.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// 导航栏链接交互
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            color: '#0066cc',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            color: '#333',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// 页脚链接交互
const footerLinks = document.querySelectorAll('.footer-links a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        gsap.to(this, {
            color: '#fff',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    link.addEventListener('mouseleave', function() {
        gsap.to(this, {
            color: '#ccc',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// 核心技术项悬停效果
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// 解决方案项悬停效果
const solutionItems = document.querySelectorAll('.solution-item');
solutionItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -15,
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// 新闻项悬停效果
const newsItems = document.querySelectorAll('.news-item');
newsItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -8,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    item.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});