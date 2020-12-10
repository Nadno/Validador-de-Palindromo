<h1>Validador de Palíndromos</h1>
<p>A página possui um estilo simples pois o foco era criar um código que verifique se a palavra ou frase passada é um palíndromo ou não.</p>
</br>

<p>O código primeiro adiciona uma ação ao clique do botão criado em HTML, e então passa pela função <em>isPalindromo</em>, que retorna uma comparação entre a string normal, e uma string invertida.</p>
<img src="/readme/1-2.png">
</br>

<p>A segunda função <em>invalidValue</em> retorna verdadeiro para valores indesejados, e então passa para <em>getNormalizedString</em>, que retira pontuações e acentos, para que seja possível fazer uma comparação entre as strings.</p>
<img src="/readme/3-4.png">

<p>A próxima função retorna a string passada de trás para frente, primeiro transformando a string em um array com o método <em>split</em>, e inverte as letras do array com o <em>reverse</em>, e por último o array é transformado em string novamente com os métodos <em>map e join</em>.</p>
<img src="/readme/5-6.png">