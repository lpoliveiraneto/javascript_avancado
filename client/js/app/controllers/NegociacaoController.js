class NegociacaoController {

    constructor(){
      
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }  

    adiciona(event) {
          event.preventDefault();

          //console.log(this._inputData.value);
          this._listaNegociacoes.adiciona(this._criaNegociacao());
          this._limpaFormulario();

          //this._listaNegociacoes.negociacoes.length = 0;
          //this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
          console.log(this._listaNegociacoes.negociacoes);

    }

    _criaNegociacao(){
      return  new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade,
        this._inputValor
      )
    }

    _limpaFormulario(){
      this._inputData.value = '';
      this._inputQuantidade.value = 1;
      this._inputValor.value = 0.0;

      this._inputData.focus();
    }
  }