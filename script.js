var item = [];
const lista = document.querySelector('#produtos');        //onde escreve o nome e valor do produto
const valorTotal = document.querySelector('#total');      //onde escreve o valor total

document.querySelector('#bt').addEventListener('click',()=>{

    let produto = document.querySelector('#item').value;        //nome do produto
    let valor = document.querySelector('#valor').value;         //valor do produto
    
    

    let inputText = document.querySelector('#item');        //para efeito vermelho quando nao preenchido
    let inputNumber = document.querySelector('#valor');     //para efeito vermelho quando nao preenchido

    let total = 0

    if(produto == '' && valor == ''){
        alert('Por favor, preencha os campos.');
        inputText.classList.add('faltaPreencher');
        inputNumber.classList.add('faltaPreencher');

    }
    else if(produto == ''){
        alert('Por favor, preencha o campo produto.');
        inputText.classList.add('faltaPreencher');
        inputNumber.classList.remove('faltaPreencher');
    }
    else if(valor == '' || valor == '+' || valor == '-'){
        alert('Por favor, preencha o campo valor corretamente.');
        inputNumber.classList.add('faltaPreencher');
        inputText.classList.remove('faltaPreencher');
    }
    else{
        inputText.classList.remove('faltaPreencher');
        inputNumber.classList.remove('faltaPreencher');
       

        item.push({                 //objeto recebendo push para acrescentar um novo nome e valor no array
            nome : produto,
            valor : valor
            })

        

        lista.innerHTML = '';       //zera a lista, pois da forma que eu fiz, a lista ficaria repetida


        item.map((val)=>{           //funcao map() mapeia uma array ou objeto
            lista.innerHTML += `
            <div class = "divproduto">     
                <h2>${val.nome}</h2>
            </div>
            <div class ="last">
                <h2>R$ ${val.valor}</h2>
            </div>
            `
            
            total += parseFloat(val.valor);     //acrescenta ao total o valor do valor desse valor

            valorTotal.innerHTML = `
            <div>
                <h2>Valor total:</h2>
            </div>
            <div class ="last">
                <h2>R$ ${total}</h2>
            </div>
            `
        })

        document.querySelector('#item').value = ''      //zera o valor do input apos pressionar o bt
        document.querySelector('#valor').value = ''     //zera o valor do input apos pressionar o bt
    }


    
})

document.querySelector('#apagar').addEventListener('click',()=>{
    item = [];
    lista.innerHTML = `
        <div>
            <h2>Produto</h2>
        </div>
        <div class="last">
            <h2>R$ 00.00</h2>
        </div>
    `;
    valorTotal.innerHTML= `
        <div>
            <h2>Valor total:</h2>
        </div>
        <div class="last"> 
            <h2>R$ 00.00</h2>
        </div>
    `

})


