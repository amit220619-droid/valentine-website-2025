<!DOCTYPE html>
<html>
<head>
    <title>Be My Valentine, Ankita?</title>
    <style>
        body {
            background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fad0c4 100%);
            color: #6a0c6a;
            font-family: Arial;
            text-align: center;
            padding: 50px 20px;
            margin: 0;
        }
        h1 {
            font-size: 40px;
            color: #c71585;
            margin: 40px 0;
        }
        p {
            font-size: 24px;
            margin: 30px 0;
        }
        button {
            padding: 20px 40px;
            font-size: 20px;
            margin: 20px;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .yes {
            background: #ff6b9d;
            color: white;
        }
        .no {
            background: #ffeaa7;
            color: #6a0c6a;
            font-weight: bold;
        }
        .hearts {
            position: fixed;
            font-size: 30px;
            animation: float 5s infinite linear;
            pointer-events: none;
        }
        @keyframes float {
            0% { top: 100%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: -10%; opacity: 0; }
        }
    </style>
</head>
<body>
    <!-- Hearts -->
    <div class="hearts" style="left: 10%; animation-delay: 0s;">💖</div>
    <div class="hearts" style="left: 20%; animation-delay: 1s;">💕</div>
    <div class="hearts" style="left: 40%; animation-delay: 2s;">💗</div>
    <div class="hearts" style="left: 60%; animation-delay: 0.5s;">💝</div>
    <div class="hearts" style="left: 80%; animation-delay: 3s;">❤️</div>

    <h1>Will you be my Valentine, Ankita?</h1>
    <p>Let's make this day unforgettable! 🌹💕✨</p>
    <br><br>
    <button class="yes" onclick="yesResponse()">Yes, of course! 💕✨</button>
    <button class="no" id="noButton">No 😢</button>

    <script>
        let clicks = 0;
        const messages = [
            "Are you serious?", 
            "Don't break my heart!", 
            "Think again, please!", 
            "You know you want to!", 
            "Pretty please? 🥺"
        ];

        function yesResponse() {
            document.body.innerHTML = `
                <style>
                    body { 
                        background: linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3a5 100%);
                        color: #2d5016; padding: 50px 20px; margin: 0; text-align: center; 
                    }
                    h1 { font-size: 50px; color: #dc143c; margin: 40px 0; }
                    p { font-size: 28px; margin: 25px 0; }
                    .hearts { font-size: 35px; margin: 30px 0; }
                </style>
                <h1>🎉 YAY ANKITA! 🎉</h1>
                <p>I love you so much! ❤️💕</p>
                <div class="hearts">💖💕❤️💝💗💖💕❤️💝💗</div>
                <p>You're my forever Valentine! 💋✨</p>
            `;
        }

        function moveButton() {
            const btn = document.getElementById('noButton');
            btn.style.position = 'absolute';
            btn.style.left = (Math.random() * 400) + 'px';
            btn.style.top = (Math.random() * 400) + 'px';
        }

        function noClick() {
            clicks++;
            const btn = document.getElementById('noButton');
            if (clicks <= messages.length) {
                btn.innerHTML = messages[clicks-1];
            } else {
                alert("😍 Haha gotcha Ankita! It's a YES anyway! 💕");
                return;
            }
            setTimeout(moveButton, 200);
        }

        document.getElementById('noButton').onmouseover = moveButton;
        document.getElementById('noButton').onclick = noClick;
    </script>
</body>
</html>
