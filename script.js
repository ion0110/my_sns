// ============================================
// ページ読み込み時のアニメーション
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // プロフィールカードのフェードインアニメーション
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '0';
        profileCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            profileCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 100);
    }

    // リンクボタンのスタッガードアニメーション
    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
});

// ============================================
// リンクボタンのクリックアニメーション
// ============================================

const linkButtons = document.querySelectorAll('.link-button');

linkButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // リップルエフェクトの作成
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        // アニメーション終了後にリップルを削除
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// リップルエフェクトのスタイルを動的に追加
const style = document.createElement('style');
style.textContent = `
    .link-button {
        overflow: hidden;
        position: relative;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// スムーズスクロール（必要に応じて）
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// パララックス効果（オプション）
// ============================================

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animateOrbs() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        orb.style.transform = `translate(${currentX * speed}px, ${currentY * speed}px)`;
    });
    
    requestAnimationFrame(animateOrbs);
}

animateOrbs();

// ============================================
// コンソールログ（開発者向け）
// ============================================

console.log('%c✨ SNSリンク集約ページ ✨', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cデザイン: ダークモード + グラスモーフィズム', 'font-size: 12px; color: #b0b0c0;');
console.log('%cフレームワーク: Vanilla JS', 'font-size: 12px; color: #b0b0c0;');
