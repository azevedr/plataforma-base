// Ativar o item correto da sidebar baseado na URL atual

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar ul li a");
    const currentPage = window.location.pathname.split("/").pop(); 

    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
