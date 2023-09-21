
// Definições básicas
let continuar = true
let dados = []// Dados do usuário


// Função para cadastro dos novos produtos
function cadastrar() {
	listar()
	
	let questao1 = prompt("Insira o Nome do abrigo:").toLowerCase()
    let questao2 = prompt("Insira a cidade do abrigo:").toLowerCase()
    let questao3 = prompt("Insira o endereço do abrigo").toLowerCase()
    let questao4 = Number(prompt("Insira a lotação maxima do abrigo"))
    
    const abrigos = {
        nome: questao1,
        cidade: questao2,
        endereco: questao3,
        lotacao: questao4,
    }
    
    dados.push(abrigos)

    console.log(dados)
}

// Função para listar os produtos cadastrados
function listar() {
    let lista =`
		LISTA DE ABRIGOS \n`
    for(let objeto of dados){
        let listaObjeto =`
	|INDICE: ${dados.indexOf(objeto)}
	|NOME DO ABRIGO: ${objeto.nome}
	|CIDADE EM QUE SE: ${objeto.cidade}
	|ENDEREÇO: ${objeto.endereco}
	|LOTAÇÃO MAXIMA: ${objeto.lotacao}

	<><><><><><><><><><><><><><><><>\n`

        lista = lista + listaObjeto
    }
    console.log(lista)
	
}

// Função para buscar um produto especifico
function buscar() {
	let abrigoEscolhido = prompt("Insira a cidade do abrigo:").toLowerCase()
	let lista =`
	    BUSCA DE ABRIGOS`
    for(let objeto of dados){
        let buscaObjeto =`
	|INDICE: ${dados.indexOf(objeto)}
	|NOME DO ABRIGO: ${objeto.nome}  
	|CIDADE EM QUE SE ENCONTRA: ${objeto.cidade}
	|ENDEREÇO: ${objeto.endereco}   
	|LOTAÇÃO MAXIMA: ${objeto.lotacao}

	<><><><><><><><><><><><><><><><>\n` 

	for(let propriedade in objeto){
			if (objeto[propriedade] === abrigoEscolhido) {
				lista += buscaObjeto
				break 
			}
		}
    
	}
	console.log(lista)
}

// Função para editar abrigo
function editarAbrigo() {
	const indice = parseInt(prompt('Digite o índice do abrigo a ser editado:'));
	if (indice >= 0 && indice < dados.length) {
	  const novoNome = prompt('Novo nome:');
	  const novaCidade = prompt('Nova cidade:');
	  const novoEndereco = prompt('Novo endereço:');
	  const novaLotacao = prompt('Novo número de lotação:');
	  dados[indice].nome = novoNome;
	  dados[indice].cidade = novaCidade;
	  dados[indice].endereco = novoEndereco;
	  dados[indice].lotacao = novaLotacao;
	  console.log('abrigo editado com sucesso.');
	} else {
	  console.log('Índice do abrigo inválido.');
	}
  }

// Função para excluir abrigo
function excluirAbrigo() {
	const indice = parseInt(prompt('Digite o índice do abrigo a ser excluído:'));
	if (indice >= 0 && indice < dados.length) {
	  dados.splice(dados, 1);
	  console.log('abrigo excluído com sucesso.');
	} else {
	  console.log('Índice do abrigo inválido.');
	}
  }

// Função para sair do programa/ fecha-lo
function sair() {
	continuar = false
	console.log("Até logo! Para reiniciar, atualize a aba do navegador ou aperte F5.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let perguntar  = "ABRIGOS TEMPORARIOS\n"
		perguntar += "-------------------------\n"
		perguntar += "Escolha uma opção:\n"
		perguntar += "1. Cadastrar Abrigo\n"
		perguntar += "2. lista dos Abrigos\n"
		perguntar += "3. Buscar Abrigos\n"
        perguntar += "4. Editar Abrigo\n"
		perguntar += "5. Excluir Abrigo\n"
		perguntar += "6. Sair"


	// Guardar resposta
	let resposta = Number(prompt(perguntar))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			editarAbrigo()
			break
		case 5:
			excluirAbrigo()
			break
		case 6:
			sair()
			break
}
}
