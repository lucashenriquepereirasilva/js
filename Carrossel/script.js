/**
 * Carrossel de imagens
 * @author lucas henrique
 */

let indice=0 // 0,1,2 (3 Imagens)

// Capturar as tags HTML identificadas (id)
const imgs=document.getElementById('imagens')

// Capturar 2 elementos HTML
const imagem=document.querySelectorAll('#imagens img')

function carrossel(){
    indice++ // Somar 1 a variável (indice)
    console.log(indice)
    if(indice>=imagem.length){
        indice=0

    }
    // A linha abaixo modifica o estilo CSS de imgs
    // Style modifica o CSS
    // Transform (Deslocamento no eixo X)
    // indice = 0: Posição inicial | 1: Deslocar 512px a Esq | 2: deslocar 1024px esq
    // OBS: 512px (Sincronizar com o tamanho das imagens (CSS))
    imgs.style.transform=`translateX(${-indice*512}px)`
}

// A linha abaixo executa a função carrossel a cada 2s
setInterval (carrossel, 2000)