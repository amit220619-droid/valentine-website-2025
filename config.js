// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Ankita",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Questions and answers (ONLY Valentine question remains!)
    questions: {
        third: {
            text: "Will you be my Valentine? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // REMOVED: loveMessages section (love meter completely gone)

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
