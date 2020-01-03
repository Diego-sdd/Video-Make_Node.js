const readline = require('readline-sync')
//Agrupa tudo
function start(){

    //usando a biblioteca readline-senc para efetuar o input do usuario

    const content = {}

    content.searchTerm = askAndReturnSearchterm()
    content.prefix = askandReturnPrefix()

    function askAndReturnSearchterm(){
        return readline.question('Type a Wikipedia seach term: ')
    }

    function askandReturnPrefix(){
        const prefixes = ['who is', 'Whats is', 'The history of'] 

        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option:' )

        const selectedPrefixtext = prefixes[selectedPrefixIndex]

        return selectedPrefixtext

    }

    console.log(content)
}

start()