
# **Hipotenusa Animada – Perdendo Medo das Exatas**

## **Descrição**
Este projeto é uma animação interativa feita em **p5.js**, criada para um **Reels** no Instagram, com o objetivo de demonstrar que a **hipotenusa** é o caminho mais curto em um triângulo retângulo. A interação permite que o usuário explore diferentes trajetórias com a ajuda de três botões: **"Baixo"**, **"Direito"**, e **"Hipotenusa"**.

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
    \[ d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \]  
  - Quando o movimento termina, o plano de fundo muda para indicar a conclusão.

- **Resetar**  
  - Reinicia a aplicação, recarregando a página para que todos os botões possam ser usados novamente.

### **Salvar Captura de Tela**
Pressione **'S'** durante a execução para **salvar um arquivo PNG** da tela atual. Isso é útil para criar e editar backgrounds personalizados no **Canva** ou outras plataformas de design gráfico.

## **Tecnologias Utilizadas**
- **p5.js**: Biblioteca JavaScript para criação de gráficos e interações.
- **HTML5 e JavaScript**: Base para a execução no navegador.
- **Canva**: Ferramenta de design opcional para criar backgrounds.

## **Como Usar
