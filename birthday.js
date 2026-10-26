// Birthday Letter

function openLetter() {

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

}


// Birthday Music

const song = document.getElementById("birthdaySong");

async function toggleMusic() {

    const button = document.getElementById("musicButton");

    if (song.paused) {

        try {

            await song.play();

            button.innerHTML = "⏸ Pause Birthday Song";

        } catch (error) {

            alert(
                "Song play nahi ho raha. " +
                "Check karo ki birthday-song.mp3 " +
                "same folder mein hai."
            );

        }

    } else {

        song.pause();

        button.innerHTML = "▶ Play Birthday Song";

    }

}


// Birthday Surprise

function showSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createHearts();

}


// Floating Hearts Animation

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = ["💜", "💖", "✨", "🎉"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.position = "fixed";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.top = "-30px";

        heart.style.fontSize = "25px";

        heart.style.zIndex = "999";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 3s linear, opacity 3s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                "translateY(110vh) rotate(360deg)";

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 3100);

    }

}


// Click on Photo to View Larger

document.querySelectorAll(".gallery img").forEach((photo) => {

    photo.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "#10051fee";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.padding = "20px";
        overlay.style.zIndex = "1000";

        const largeImage = document.createElement("img");

        largeImage.src = this.src;

        largeImage.style.maxWidth = "95%";
        largeImage.style.maxHeight = "85vh";
        largeImage.style.objectFit = "contain";
        largeImage.style.borderRadius = "15px";

        overlay.appendChild(largeImage);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});