function tabuada() {
    var num = document.getElementById("numero")
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        tab.innerHTML = ''
        let n = Number(numero.value)
        let contador = 1
        while(contador <= 10) {
            let item = document.createElement('option')//criando option dinamicamente
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tab${contador}` //adicionando value, é importante caso formos aprender outra linguagem, tipo PHP
            tab.appendChild(item)//adicionar elemento
            contador++
        }
    }
   
}


