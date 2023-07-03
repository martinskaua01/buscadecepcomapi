function searchCep() {
    var cepInput = document.getElementById('cep-input');
    var cep = cepInput.value.replace(/\D/g, '');
  
    if (cep) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            displayErrorMessage('CEP não encontrado.');
          } else {
            displayCepData(data);
          }
        })
        .catch(error => {
          console.error(error);
          displayErrorMessage('Erro ao buscar o CEP.');
        });
    } else {
      displayErrorMessage('Digite um CEP válido.');
    }
  }
  
  function displayCepData(data) {
    var result = document.getElementById('result');
    result.innerHTML = `
      <p>Bairro: ${data.bairro}</p>
      <p>Cidade: ${data.localidade}</p>
      <p>Estado: ${data.uf}</p>
      <p>País: ${data.pais}</p>
    `;
  }
  
  function displayErrorMessage(message) {
    var result = document.getElementById('result');
    result.innerHTML = `<p class="error">${message}</p>`;
  }
  
  function updateClock() {
    var clock = document.getElementById('clock');
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    clock.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  setInterval(updateClock, 1000);
  