export default function lista(data) {
    return `<ul>
        ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join(' ')}
    </ul>`;
} 

// export const lista = data => {
//     return `<ul>
//         ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li>`).join(' ')}
//     </ul>`;
// } 

    