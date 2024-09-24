document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll("#nome-usuario");
    spans.forEach(span => {
        span.textContent = "Michele";
    });
});
