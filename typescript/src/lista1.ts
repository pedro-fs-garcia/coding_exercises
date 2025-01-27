import readline from 'readline';

function getInput(prompt: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(prompt, (answer: string) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function one() {
    const n1 = await getInput("Digite um número inteiro: "); // Aguarda o primeiro input
    const n2 = await getInput("Digite outro número inteiro: "); // Aguarda o segundo input

    const sum = Number(n1) + Number(n2); // Converte para número e calcula a soma
    console.log(`A soma é: ${sum}`);
}


function two(){
    return null
}

one()