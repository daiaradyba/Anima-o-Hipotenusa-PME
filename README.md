
# **Hipotenusa Animada – Perdendo Medo das Exatas**

## **Descrição**
Este projeto é uma animação interativa feita em **p5.js**, criada para um **Reels** no Instagram, com o objetivo de demonstrar que a **hipotenusa** é o caminho mais curto em um triângulo retângulo. A interação permite que o usuário explore diferentes trajetórias com a ajuda de três botões: **"Baixo"**, **"Direito"**, e **"Hipotenusa"**.

Você também pode acessar o projeto online [aqui](https://daiaradyba.github.io/Hipotenusa-Animada/).

<img src="/assets/gif/gif.gif">

## **Funcionamento**

### **Botões e Funções**
- **Baixo**  
  - Movimenta o personagem verticalmente para baixo.  
  - A distância percorrida é a diferença entre a **posição final** e a **posição inicial** no eixo Y.  
  - Após ser clicado, o botão é **desativado**.

- **Direito**  
  - Movimenta o personagem horizontalmente para a direita.  
  - A distância percorrida é a diferença entre a **posição final** e a **posição inicial** no eixo X.  
  - Após ser clicado, o botão é **desativado**.

- **Hipotenusa**  
  - Movimenta o personagem diagonalmente (X e Y) até o ponto final, representando a **hipotenusa**.  
  - A distância percorrida é calculada como **distância euclidiana**:  
    `d = sqrt((x2 - x1)^2 + (y2 - y1)^2)`  
  - Quando o movimento termina, o plano de fundo muda para indicar a conclusão.

- **Resetar**  
  - Reinicia a aplicação, recarregando a página para que todos os botões possam ser usados novamente.

### **Salvar Captura de Tela**
Pressione **'S'** durante a execução para **salvar um arquivo PNG** da tela atual. Isso é útil para criar e editar backgrounds personalizados no **Canva** ou outras plataformas de design gráfico.

## **Tecnologias Utilizadas**
- **p5.js**: Biblioteca JavaScript para criação de gráficos e interações.
- **HTML5 e JavaScript**: Base para a execução no navegador.
- **Canva**: Ferramenta de design opcional para criar backgrounds.

## **Como Usar**
1. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com/seu-usuario/hipotenusa-animada.git
   ```
2. Abra o arquivo `index.html` no navegador ou acesse a [versão online](https://daiaradyba.github.io/Hipotenusa-Animada/).
3. Interaja com os botões na tela para experimentar diferentes trajetórias.

## **Fórmulas Utilizadas**
- **Distância Euclidiana:**  
  `d = sqrt((x2 - x1)^2 + (y2 - y1)^2)`
  
- **Distância Linear:**  
  `Δx = x2 - x1` e `Δy = y2 - y1`

## **Licença**
Este projeto está sob a **licença MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
