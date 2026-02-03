const CONFIG = {
    // Your Valentine's name 
    valentineName: "Ankita 💖",  // Added sparkle ✨

    // Enhanced title with Hindi touch
    pageTitle: "Ankita, Meri Valentine Banogi? 💝🌹",

    // More floating emojis including Indian elements
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '🌹', '💍'],  
        bears: ['🧸', '🐻', '🐘', '🦋'],  // Added Indian elephant & butterfly
        special: ['🌺', '💐', '🪔']       // Flowers & diya for desi vibe
    },

    // Enhanced questions with better responses
    questions: {
        first: {
            text: "Ankita, do you like me? 😍",
            yesBtn: "Haan ji! ❤️",      // Hindi "Yes"
            noBtn: "Nahi",              // Hindi "No"  
            secretAnswer: "Arre pagli, main toh pyaar karti hu! 😘💕"
        },
        second: {
            text: "Ankita, how much do you love me? 💖",
            startText: "Itnaaa! ➡️",    
            nextBtn: "Aur dikhao! 🌹"
        },
        third: {
            text: "Ankita, will you be my Valentine this year? 💍🌹",
            yesBtn: "Haan! Main teri Valentine! 💝",  
            noBtn: "No pe No click nahi hoga! 😜"  // Teasing message
        }
    },

    // Enhanced love meter messages
    loveMessages: {
        extreme: "Ankitaaaa! Itna pyaar? 🚀💥 Main pagal ho jaungi! 😍",
        high: "Toh infinity! Aur usse bhi aage! 🌌💖", 
        normal: "Bas yahi? Aur dikhao naa! 🥰"
    },

    // Better celebration messages
    celebration: {
        title: "YIPPPIIIEE! Ankita meri Valentine! 🎉💃🕺💖",
        message: "Ab milne aa jao! Bada sa hug + kiss waiting! 😘💝\nP.S. Surprise gift bhi hai! 🎁✨",
        emojis: "🎁💖🤗💋❤️💕🌹💍🎂🥳💃🕺"  // More celebration emojis
    },

    // 2026 trending romantic gradient (rose gold + blush)
    colors: {
        backgroundStart: "#f8b8d0",    // Soft blush pink
        backgroundEnd: "#ffccd5",      // Rose gold blush  
        buttonBackground: "#ff69b4",   // Hot pink (stands out)
        buttonHover: "#ff85c0",        // Lighter pink hover
        textColor: "#c71585"           // Medium violet red (readable)
    },

    // Enhanced animations 
    animations: {
        floatDuration: "12s",          // Slightly faster floating
        floatDistance: "60px",         // More side movement
        bounceSpeed: "0.4s",           // Faster bounce
        heartExplosionSize: 2.0        // Bigger celebration explosion
    },

    // Enhanced music settings
    music: {
        enabled: true,
        autoplay: false,               // Changed to false (browser policy)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎶 Romantic Music ON 🔊",
        stopText: "🔇 Music OFF", 
        volume: 0.4                    // Slightly lower volume
    },

    // 🔥 NEW FEATURES ADDED 🔥
    newFeatures: {
        // Playful NO button that runs away (viral feature!)
        noButtonMoves: true,
        // Confetti explosion on YES
        confettiEnabled: true,
        // Mobile-first optimizations
        mobileOptimized: true,
        // Auto heart rain after celebration
        heartRain: true
    }
};
