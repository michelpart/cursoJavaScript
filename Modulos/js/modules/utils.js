// export const maiorDeIdade = idade => idade > 17;

//  export const agrupaPorMaiorOuMenor = pessoas =>
//          pessoas.reduce((acumulado, valor) => 
//          {
//              const maiorOuMenor = valor.idade > 18 ? 'maiores' : 'menores';
//              acumulado[maiorOuMenor].push(valor);
//              return acumulado;
//          }, { maiores:[], menores:[] });

export function maiorDeIdade(idade) { return idade > 17 };

export function agrupaPorMaiorOuMenor(pessoas){
   return pessoas.reduce(function(acumulado, valor) {
        const maiorOuMenor = valor.idade > 18 ? 'maiores' : 'menores';
        acumulado[maiorOuMenor].push(valor);
        return acumulado;
    }, { maiores: [], menores: [] });
};