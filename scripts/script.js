// Add smooth page transitions
document.querySelectorAll('a').forEach(link => {
    if (link.href && !link.hash) { // Exclude anchor links
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.body.classList.add('fade-out'); // Trigger fade-out animation
            setTimeout(() => {
                window.location.href = link.href; // Navigate after animation
            }, 500); // Match the duration of the fade-out animation
        });
    }
});

// Reset fade-out class when the page loads
window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create a starry background with moving stars
const starContainer = document.createElement("div");
starContainer.style.position = "fixed";
starContainer.style.top = "0";
starContainer.style.left = "0";
starContainer.style.width = "100%";
starContainer.style.height = "100%";
starContainer.style.zIndex = "1"; // Ensure stars are behind content
starContainer.style.overflow = "hidden";
document.body.appendChild(starContainer);

// Function to create stars
function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s, ${Math.random() * 10 + 5}s`;
    starContainer.appendChild(star);
}

// Create multiple stars
for (let i = 0; i < 200; i++) {
    createStar();
}