// Static Positive Affirmations App JavaScript
// This version works entirely in the browser without a backend

class StaticAffirmationApp {
    constructor() {
        this.counter = 0;
        this.isGenerating = false;
        this.affirmations = [
            "You are capable of amazing things.",
            "Your potential is limitless.",
            "You deserve happiness and success.",
            "Every challenge you face makes you stronger.",
            "You are worthy of love and respect.",
            "Your dreams are valid and achievable.",
            "You have the power to create positive change.",
            "You are enough, just as you are.",
            "Your unique perspective matters.",
            "You are resilient and can overcome anything.",
            "Today is full of possibilities for you.",
            "You attract positivity into your life.",
            "Your efforts are making a difference.",
            "You are growing and learning every day.",
            "You have so much to offer the world.",
            "Your kindness creates ripples of joy.",
            "You are exactly where you need to be.",
            "Your journey is beautiful and meaningful.",
            "You radiate confidence and positivity.",
            "You are creating a life you love.",
            "Your inner strength is incredible.",
            "You deserve all the good things coming your way.",
            "You are making progress, even when it doesn't feel like it.",
            "Your heart is full of wisdom and compassion.",
            "You are a force for good in this world.",
            "Your creativity knows no bounds.",
            "You inspire others by being yourself.",
            "You are brave enough to pursue your dreams.",
            "Your life has purpose and meaning.",
            "You are loved more than you know.",
            "You have the courage to face any challenge.",
            "Your positive energy lights up the room.",
            "You are becoming the person you're meant to be.",
            "You choose happiness and it chooses you back.",
            "Your possibilities are endless.",
            "You are a gift to the people around you.",
            "Your determination will lead you to success.",
            "You are worthy of all your dreams coming true.",
            "You bring joy wherever you go.",
            "Your spirit is unbreakable.",
            "You are creating beautiful memories every day.",
            "Your self-love grows stronger each day.",
            "You are exactly the right person for your life.",
            "Your positive mindset attracts wonderful opportunities.",
            "You are healing and growing in perfect timing.",
            "Your smile has the power to brighten someone's day.",
            "You are worthy of respect and admiration.",
            "Your future is bright and full of promise.",
            "You have everything within you to succeed.",
            "Your presence makes the world a better place.",
            "You are deserving of peace and happiness.",
            "Your talents are gifts to be shared.",
            "You are stronger than any obstacle in your path.",
            "Your heart is open to receiving abundance.",
            "You are writing a beautiful story with your life.",
            "Your wisdom comes from both joy and challenges.",
            "You are worthy of celebrating every small victory.",
            "Your authentic self is your greatest strength.",
            "You are creating positive change in the world.",
            "Your dreams are taking shape with each passing day.",
            "You are surrounded by love and support.",
            "Your inner light shines brightly for all to see.",
            "You are capable of turning dreams into reality.",
            "Your life is unfolding exactly as it should.",
            "You are worthy of infinite love and happiness.",
            "Your positive impact reaches further than you know.",
            "You are enough, you have enough, you do enough.",
            "Your journey is uniquely yours and perfectly timed.",
            "You are a masterpiece in progress.",
            "Your heart knows the way forward.",
            "You are worthy of your own love and acceptance.",
            "Your potential is waiting to be unleashed.",
            "You are creating a legacy of kindness and love.",
            "Your life is a beautiful adventure.",
            "You are deserving of rest and rejuvenation.",
            "Your spirit is free and full of possibility.",
            "You are worthy of pursuing what sets your soul on fire.",
            "Your growth is happening in perfect divine timing.",
            "You are a beacon of hope and inspiration.",
            "Your inner peace radiates outward to others.",
            "You are worthy of taking up space in this world.",
            "Your intuition guides you toward your highest good.",
            "You are creating a life that feels authentic to you.",
            "Your courage grows stronger with each brave step.",
            "You are worthy of forgiveness, especially from yourself.",
            "Your dreams are not too big; the world needs them.",
            "You are exactly who you need to be right now.",
            "Your love for yourself sets the standard for others.",
            "You are worthy of boundaries that protect your energy.",
            "Your life is a canvas, and you are the artist.",
            "You are growing into the person you've always been inside.",
            "Your worth is not determined by external validation.",
            "You are capable of learning and adapting to anything.",
            "Your heart is your compass to a fulfilling life.",
            "You are worthy of relationships that celebrate you.",
            "Your present moment is filled with infinite possibilities.",
            "You are the author of your own comeback story.",
            "Your self-compassion is a superpower.",
            "You are worthy of pursuing what makes you come alive.",
            "Your energy is precious and deserves to be protected.",
            "You are creating positive ripples in the universe.",
            "Your life has meaning beyond what you can imagine.",
            "You are worthy of speaking your truth with confidence.",
            "Your healing journey is sacred and important.",
            "You are enough, even on your most difficult days.",
            "Your dreams are valid regardless of what others think."
        ];
        this.init();
    }

    init() {
        // Get DOM elements
        this.generateBtn = document.getElementById('generate-btn');
        this.welcomeMessage = document.getElementById('welcome-message');
        this.affirmationDisplay = document.getElementById('affirmation-display');
        this.loadingState = document.getElementById('loading-state');
        this.affirmationText = document.getElementById('affirmation-text');
        this.btnText = document.getElementById('btn-text');
        this.counterElement = document.getElementById('affirmation-counter');

        // Bind events
        this.generateBtn.addEventListener('click', () => this.generateAffirmation());
        
        // Add keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                e.preventDefault();
                if (!this.isGenerating) {
                    this.generateAffirmation();
                }
            }
        });

        console.log('Static Affirmation App initialized successfully!');
    }

    async generateAffirmation() {
        if (this.isGenerating) return;

        this.isGenerating = true;
        this.showLoadingState();

        // Simulate a short delay for better UX (like an API call)
        setTimeout(() => {
            try {
                // Get random affirmation from local array
                const randomIndex = Math.floor(Math.random() * this.affirmations.length);
                const affirmation = this.affirmations[randomIndex];
                
                this.displayAffirmation(affirmation);
                this.updateCounter();
                this.updateButtonText();
            } catch (error) {
                console.error('Error generating affirmation:', error);
                this.showError('Something went wrong. Please try again.');
            } finally {
                this.isGenerating = false;
                this.hideLoadingState();
            }
        }, 800); // 800ms delay for realistic feel
    }

    showLoadingState() {
        // Disable button and show loading
        this.generateBtn.disabled = true;
        this.btnText.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Generating...';
        
        // Hide current content and show loading
        this.hideAllContent();
        this.loadingState.style.display = 'block';
        
        // Add subtle animation to loading state
        setTimeout(() => {
            this.loadingState.style.opacity = '1';
        }, 100);
    }

    hideLoadingState() {
        this.loadingState.style.display = 'none';
        this.generateBtn.disabled = false;
    }

    async displayAffirmation(affirmation) {
        return new Promise((resolve) => {
            // Hide all content first
            this.hideAllContent();
            
            // Set the affirmation text
            this.affirmationText.textContent = affirmation;
            
            console.log('Generated affirmation:', affirmation);
            
            // Show affirmation display with animation
            setTimeout(() => {
                this.affirmationDisplay.style.display = 'block';
                this.affirmationDisplay.style.opacity = '0';
                
                // Trigger animation
                setTimeout(() => {
                    this.affirmationDisplay.style.opacity = '1';
                    resolve();
                }, 100);
            }, 300);
        });
    }

    hideAllContent() {
        this.welcomeMessage.style.display = 'none';
        this.affirmationDisplay.style.display = 'none';
        this.loadingState.style.display = 'none';
        
        // Clear any error states
        const errorElement = document.getElementById('error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    updateCounter() {
        this.counter++;
        this.counterElement.textContent = this.counter;
        
        // Add a subtle animation to the counter
        this.counterElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.counterElement.style.transform = 'scale(1)';
        }, 200);
    }

    updateButtonText() {
        if (this.counter === 1) {
            this.btnText.innerHTML = '<i class="fas fa-magic me-2"></i>Generate Another One';
        } else {
            this.btnText.innerHTML = '<i class="fas fa-magic me-2"></i>Generate More Positivity';
        }
    }

    showError(message) {
        this.hideAllContent();
        
        // Create error display
        const errorHtml = `
            <div id="error-message" class="text-center">
                <i class="fas fa-exclamation-triangle text-warning mb-3" style="font-size: 2rem;"></i>
                <h4 class="text-light mb-3">Oops! Something went wrong</h4>
                <p class="text-secondary mb-0">${message}</p>
            </div>
        `;
        
        // Find the card body and add error message
        const cardBody = document.querySelector('.affirmation-card .card-body');
        cardBody.innerHTML = cardBody.innerHTML + errorHtml;
        
        // Reset button text
        this.btnText.innerHTML = '<i class="fas fa-redo me-2"></i>Try Again';
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StaticAffirmationApp();
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add floating hearts animation on successful affirmation
    window.createFloatingHearts = function() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💖';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.top = window.innerHeight + 'px';
                heart.style.fontSize = '20px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                heart.style.animation = 'floatUp 3s ease-out forwards';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 200);
        }
    };
    
    // Add CSS for floating hearts animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});