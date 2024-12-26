document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', armazenarDados);
});

function armazenarDados() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('phone').value;
    var receberNewsletter = document.getElementById('newsletterCheckbox').checked;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Telefone:", telefone);
    console.log("Receber Newsletter:", receberNewsletter ? "Sim" : "Não");
}

document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
