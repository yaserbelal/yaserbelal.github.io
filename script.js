document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target.getAttribute("href");
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    });
});
