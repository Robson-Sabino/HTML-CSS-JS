function buscarCEP() {
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let localidade = obj.localidade;
        let uf = obj.uf;
        let estado = obj.estado;
        let regiao = obj.regiao;
        let ddd = obj.ddd;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Bairro: " + bairro + "<br> Cidade: " + localidade + "<br> Estado: " + estado + "/" + uf + "<br> Região: " + regiao + "<br> DDD: " + ddd;
    }
}
