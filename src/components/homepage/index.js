let isRecording = false;
let tokenCount = 10;

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? '' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showNotification(`Switched to ${newTheme || 'dark'} mode`, 'success');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        showNotification(`Navigated to ${page.charAt(0).toUpperCase() + page.slice(1)}`, 'success');
        
        // Add page transition effect
        document.querySelector('.main-content').style.transform = 'scale(0.95)';
        setTimeout(() => {
            document.querySelector('.main-content').style.transform = 'scale(1)';
        }, 150);
    });
});

// Search Functionality
function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
        showNotification(`Searching for: "${query}"`, 'success');
        // Add search animation
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.style.transform = 'translateY(-50%) scale(0.8)';
        setTimeout(() => {
            searchBtn.style.transform = 'translateY(-50%) scale(1)';
        }, 200);
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Voice Search
function toggleVoiceSearch() {
    const voiceBtn = document.querySelector('.voice-btn');
    isRecording = !isRecording;
    
    if (isRecording) {
        voiceBtn.classList.add('recording');
        voiceBtn.textContent = '🔴';
        showNotification('Voice recording started...', 'warning');
        
        // Simulate voice recording
        setTimeout(() => {
            toggleVoiceSearch();
            document.getElementById('searchInput').value = 'Voice search result';
        }, 3000);
    } else {
        voiceBtn.classList.remove('recording');
        voiceBtn.textContent = '🎤';
        showNotification('Voice recording stopped', 'success');
    }
}

// Quick Actions
function quickAction(action) {
    const actions = {
        ai: 'AI Assistant activated!',
        analytics: 'Loading analytics dashboard...',
        create: 'Creative tools opened!',
        connect: 'Connecting to community...'
    };
    
    showNotification(actions[action], 'success');
    
    // Add ripple effect
    event.currentTarget.style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.currentTarget.style.transform = 'scale(1)';
    }, 150);
}

// Token System
function showTokenInfo() {
    showNotification('Tokens are used for premium features. Earn more by completing tasks!', 'success');
}

// AI Assistant
function toggleAI() {
    showNotification('AI Assistant: How can I help you today?', 'success');
    const aiBtn = document.querySelector('.ai-btn');
    aiBtn.style.animation = 'none';
    setTimeout(() => {
        aiBtn.style.animation = 'pulse 2s infinite';
    }, 100);
}

// Logo Animation
function animateLogo() {
    const logo = document.querySelector('.logo');
    logo.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => {
        logo.style.transform = 'scale(1) rotate(0deg)';
    }, 500);
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Dynamic Token Updates
setInterval(() => {
    if (Math.random() > 0.8) { // 20% chance
        tokenCount += Math.floor(Math.random() * 3) + 1;
        document.getElementById('tokenCount').textContent = tokenCount;
        
        // Add glow effect
        const tokens = document.querySelector('.tokens');
        tokens.style.boxShadow = `0 0 20px var(--accent-glow)`;
        setTimeout(() => {
            tokens.style.boxShadow = 'none';
        }, 1000);
    }
}, 10000); // Every 10 seconds

// Parallax Effect for Floating Shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
    });
});

// Progressive Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        document.body.style.transition = 'all 0.5s ease';
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
    }, 100);
});

// Easter Egg - Konami Code
let konamiCode = [];
const targetCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > targetCode.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(targetCode)) {
        showNotification('🎉 Konami Code activated! You found the easter egg!', 'success');
        tokenCount += 100;
        document.getElementById('tokenCount').textContent = tokenCount;
        konamiCode = [];
    }
});