const readline = require('readline-sync')

const robots = {
    text: require('./robots/text.js')
}

//Agrupa tudo
async function start(){

    //usando a biblioteca readline-senc para efetuar o input do usuario

    const content = {}

    content.searchTerm = askAndReturnSearchterm()
    content.prefix = askandReturnPrefix()

    await robots.text(content) 

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