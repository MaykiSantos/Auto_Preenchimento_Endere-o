var botao = document.querySelector('#button');
botao.addEventListener('click', function()
{
  var cep = document.querySelector('#campo-cep').value;
  cep = cep.replace('-','');
  var link = ('https://viacep.com.br/ws/' + cep + '/json');
  var reqEndereco = new XMLHttpRequest();
  reqEndereco.open('GET', link, true);
  reqEndereco.send();


      var erroCep = document.querySelector('#erro-cep');
  reqEndereco.onreadystatechange = function()
  {
    if ((reqEndereco.readyState == 4) && reqEndereco.status == 200)
    {
      erroCep.classList.add('erro-invizivel');
      var conteudo = JSON.parse(reqEndereco.responseText);
	  console.log(conteudo);
      var endereco = document.querySelector('#campo-endereco');
      var bairro = document.querySelector('#campo-bairo');
      var cidade = document.querySelector('#campo-cidade');
      var estado = document.querySelector('#campo-estado');
      endereco.value = conteudo.logradouro;
      bairro.value = conteudo.bairro;
      cidade.value = conteudo.localidade;
      estado.value = conteudo.uf;
    }else
    {
      erroCep.classList.remove('erro-invizivel');
      erroCep.classList.add('erro');
    }
  }
});
