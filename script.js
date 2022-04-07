const calcOuput = document.getElementById('calculatorInput')

const key0 = document.getElementById('0')
key0.addEventListener('click', ()=> calcOuput.append(key0.textContent))

const key1 = document.getElementById('1')
key1.addEventListener('click', ()=> calcOuput.append(key1.textContent))

const key2 = document.getElementById('2')
key2.addEventListener('click', ()=> calcOuput.append(key2.textContent))

const key3 = document.getElementById('3')
key3.addEventListener('click', ()=> calcOuput.append(key3.textContent))

const key4 = document.getElementById('4')
key4.addEventListener('click', ()=> calcOuput.append(key4.textContent))

const key5 = document.getElementById('5')
key5.addEventListener('click', ()=> calcOuput.append(key5.textContent))

const key6 = document.getElementById('6')
key6.addEventListener('click', ()=> calcOuput.append(key6.textContent))

const key7 = document.getElementById('7')
key7.addEventListener('click', ()=> calcOuput.append(key7.textContent))

const key8 = document.getElementById('8')
key8.addEventListener('click', ()=> calcOuput.append(key8.textContent))

const key9 = document.getElementById('9')
key9.addEventListener('click', ()=> calcOuput.append(key9.textContent))

const multKey = document.getElementById('*')
multKey.addEventListener('click', ()=> calcOuput.append(multKey.textContent))

const divKey = document.getElementById('/')
divKey.addEventListener('click', ()=> calcOuput.append(divKey.textContent))

const subKey = document.getElementById('-')
subKey.addEventListener('click', ()=> calcOuput.append(subKey.textContent))

const addKey = document.getElementById('+')
addKey.addEventListener('click', ()=> calcOuput.append(addKey.textContent))

const decimal = document.getElementById('.')
decimal.addEventListener('click', ()=> calcOuput.append(decimal.textContent))
