// Add a starry background effect
document.body.style.background = `
    radial-gradient(circle at 20% 20%, var(--galaxy-dark), var(--galaxy-black)),
    radial-gradient(circle at 80% 80%, var(--galaxy-purple), var(--galaxy-black))
`;

// Create a starry effect with random stars
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.backgroundColor = "white";
    star.style.borderRadius = "50%";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.boxShadow = `0 0 5px white, 0 0 10px white`;
    document.body.appendChild(star);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});