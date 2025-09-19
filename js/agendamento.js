// Seleção de data
function setupCalendar() {
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        day.addEventListener('click', function() {
            // Remover seleção anterior
            days.forEach(d => d.classList.remove('selected'));
            // Selecionar este dia
            this.classList.add('selected');
        });
    });
}

// Seleção de horário
function setupTimeSelection() {
    const timeButtons = document.querySelectorAll('.select-btn');
    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover seleção anterior
            timeButtons.forEach(btn => {
                btn.textContent = 'Select';
                btn.classList.remove('selected');
            });
            // Selecionar este horário
            this.textContent = 'Selected';
            this.classList.add('selected');
        });
    });
}

// Validação do formulário
function validateForm() {
    const nextButton = document.querySelector('.next-btn');
    nextButton.addEventListener('click', function() {
        const selectedDay = document.querySelector('.day.selected');
        const selectedTime = document.querySelector('.select-btn.selected');
        const selectedIdType = document.querySelector('input[name="id-type"]:checked');
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        
        if (!selectedDay) {
            alert('Por favor, selecione uma data.');
            return;
        }
        
        if (!selectedTime) {
            alert('Por favor, selecione um horário.');
            return;
        }
        
        if (!selectedIdType) {
            alert('Por favor, selecione um tipo de identificação.');
            return;
        }
        
        if (!email || !phone) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        alert('Agendamento realizado com sucesso!');
        // Em uma implementação real, enviaria os dados para o servidor
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    setupCalendar();
    setupTimeSelection();
    validateForm();
});