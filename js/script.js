// Navegação e interações básicas
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site UBS Caudemais carregado com sucesso!');
    
    // Adicionar efeitos de hover nos botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});