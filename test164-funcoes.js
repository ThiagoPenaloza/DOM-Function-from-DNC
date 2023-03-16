function gift (money, value) {
    if (money < value){
        return 'Não vai dar para comprar...'
    }else {
        return 'Você realmente precisa fazer essa compra?'
    }
}

let x= gift(100, 90)
console.log(x)