const canvas = document.getElementById("brainCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

function drawBrainShape() {
    ctx.beginPath();

    // Left hemisphere curve
    ctx.moveTo(100, 250);
    ctx.bezierCurveTo(50, 180, 50, 80, 150, 50); 

    // Top middle dip
    ctx.bezierCurveTo(250, 20, 350, 20, 350, 50); 

    // Right hemisphere curve
    ctx.bezierCurveTo(450, 80, 450, 180, 400, 250); 

    // Bottom curve connecting both hemispheres
    ctx.bezierCurveTo(380, 300, 250, 350, 120, 300);
    
    ctx.closePath();  // Close the brain shape
    ctx.clip();       // This ensures the animation stays **inside** the brain shape
}

const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const columns = Math.floor(canvas.width / 15);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "#red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = "15px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        ctx.fillText(text, i * 15, drops[i] * 15);

        if (drops[i] * 15 > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

drawBrainShape();  // Define brain shape first
setInterval(drawMatrix, 50);  // Apply Matrix effect inside brain
