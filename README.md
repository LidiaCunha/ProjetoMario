# PROJETO MARIO 

![mario](https://user-images.githubusercontent.com/60737355/84044785-64c7a380-a97e-11ea-83f7-b4f876afd48c.png)

Desenvolvimento do projeto Mario que consiste em manipular um objeto JSON de audios wav que posteriormente farão parte da animação de interação com o usuário interessado em obter sons a partir do click nos personagens do game.

O desafio proposto faz parte da atividade de adaptação com audios.wav oferecida para matéria de Programação Front-end, SENAI - Jandira.

### Recursos ![settings](https://user-images.githubusercontent.com/60737355/84045137-d273cf80-a97e-11ea-863b-77d54bb9cf73.png)
- HTML5
- CSS3
- JavaScript
- Áudios.wav

### Conhecimentos adquiridos ![study (1)](https://user-images.githubusercontent.com/60737355/84208822-f7edff80-aa8a-11ea-889f-35a702200a45.png)
- Manipular áudios com HTML e JavaScript
- Método _play()_
- Evento _keydown_
- Evento _animationend_

### Passo a passo código
1. Para iniciar foi feito um objeto JSON que contém três elementos: **letra, sounds e imagem**. Eles farão a composição do exercício, tornando cada bloco de letra clicado em um som, seguido de uma aparição de personagem (imagem) específico para cada áudio.

![oie_jq3hcxzO3hlJ](https://user-images.githubusercontent.com/60737355/84099478-1814b480-a9e0-11ea-9753-afe25332d87d.jpg)
![oie_nXReqZXEFYvM](https://user-images.githubusercontent.com/60737355/84099834-dafcf200-a9e0-11ea-8d45-94207e06be10.jpg)

2. Posteriormente, em outro arquivo uma função é destinada a criação dos blocos de interação com os elementos do JSON, juntamente os inserindo no HTML da página.

3. Após, utlizamos uma função para tocar o áudio a partir da letra indicada, revelando o som e a imagem por trás de cada bloco. Ou seja, se a letra marcada for igual a letra do JSON, conclua a exibição.

