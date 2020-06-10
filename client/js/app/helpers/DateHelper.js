
class DateHelper{

    constructor(){
        throw new Error('Esta Classe não pode ser instanciada');
    }

    static textoParaData(texto){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd'); 
            return new Date(...texto.split('-').map((item,indice) => item - indice % 2));   
       }
            /*
            (item, indice)=> item - indice % 2)

            function(item, indice){
              return item - indice % 2;
            })

            tem a mesma função só que reduzida
            ES2015 é conhecida como arrow functions
            
            */

   static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}