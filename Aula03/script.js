console.log('Tudo certo até aqui!');

let docJSON = "Exemplo de string no formato diferente de JSON!";

try{

    const user = JSON.parse(docJSON);
    console.log(user);

}catch(error){
    console.error("Erro ao converter/parsear o arquivo!", error);
}
finally{
    console.log("Finalizando a conexão com o arquivo!")
}

let user;

try{
    let name = usuario.name;
    console.log(name);
}catch(error){
    console.error(error);
}

try{
    let result = 10/0;
    if(!isFinite(result)){
        throw new Error("O resultado da operação matemática não é finito!");
    }
}
catch(error){
    console.error(error);
}

function division_a_b(a,b){

    try{
        if(b == 0)throw new Error("Não se pode dividir por 0!");
        return(a/b)
    }
    catch(error){
        console.error("Erro ao dividir: ", error);
        return undefined;
    }

}

let result = division_a_b(10, 5);
console.log((result) ? result : "");

//Função pode ser chamada mesmo linhas antes dela ser declarada!
hello();

//Declarando função
function hello(){
    console.log("Olá, boa noite!")
}
console.log(hello);

//Função anônima
let goodbye = function(){
    console.log("Até a próxima!")
}

console.log(goodbye);
goodbye();

//Arrow function
let goodMorning = () => console.log("Olá, bom dia!");
goodMorning();

//Passando parâmetros para uma função anônima
let adiction = function (a, b){
    return a + b;
}

console.log(adiction(10, 20));

//Passando parâmetro para arrow function

let multiply = (a, b) => a * b;
console.log(multiply(10, 20));

//Um só parâmetro não é necessário parenteses!
let double = x => x*2;
console.log(double(50));

