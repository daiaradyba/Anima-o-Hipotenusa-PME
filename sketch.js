const POSICAO_INICIAL_X = 200;
const POSICAO_INICIAL_Y = 225;
const VELOCIDADE_X = 4;
const VELOCIDADE_Y = 5;
const LIMIAR_DISTANCIA = 10;

let personagem, positionSprite;
let botaoBaixo, botaoDireito, botaoHipotenusa, resetButton;
let idleFrames = [], runningFrames = [];
let targetX = null, targetY = null;
let background1, background2, background3, background4, currentBackground;
let distanciaPercorrida = 0;
let controle = null;
let botaoBaixoAtivo = true;
let botaoDireitoAtivo = true;

function preload() {
  carregarAnimacoes();
  carregarBackgrounds();
  carregarElementosUI();
}

function setup() {
  createCanvas(1080, 1200);
  currentBackground = background1;

  personagem.changeAnimation('idle');
  personagem.scale = 0.2;

  positionSprite.addImage('position', loadImage('assets/position/medium.png'));
  positionSprite.scale = 0.07;
}

function draw() {
  image(currentBackground, 0, 0, width, height);

  if (controle === 'hipotenusa') {
    moverSimultaneamente(targetX, targetY, VELOCIDADE_X, VELOCIDADE_Y);
  } else {
    moverParaDestino();
  }

  verificarCliqueNosBotoes();
  atualizarAnimacaoPersonagem();
  desenharUI();
}

function carregarAnimacoes() {
  for (let i = 0; i <= 14; i++) {
    idleFrames.push(loadImage(`assets/golem/idle/0_Golem_Idle_${nf(i, 3)}.png`));
  }
  for (let i = 0; i <= 11; i++) {
    runningFrames.push(loadImage(`assets/golem/running/0_Golem_Running_${nf(i, 3)}.png`));
  }

  personagem = createSprite(POSICAO_INICIAL_X, POSICAO_INICIAL_Y, 40, 40);
  personagem.addAnimation('idle', ...idleFrames);
  personagem.addAnimation('running', ...runningFrames);
}

function carregarBackgrounds() {
  background1 = loadImage('assets/bckg/1.png');
  background2 = loadImage('assets/bckg/2.png');
  background3 = loadImage('assets/bckg/3.png');
  background4 = loadImage('assets/bckg/4.png');
}

function carregarElementosUI() {
  positionSprite = createSprite(480, 110, 40, 40);

  botaoBaixo = criarBotao(50, 800, 'Baixo', color(255, 0, 0));
  botaoDireito = criarBotao(150, 800, 'Direito', color(0, 255, 0));
  botaoHipotenusa = criarBotao(250, 800, 'Hipotenusa', color(0, 0, 255));
  resetButton = criarBotao(350, 800, 'Resetar', color(128, 128, 128));
}

function criarBotao(x, y, texto, cor) {
  let botao = createSprite(x, y, 80, 40);
  botao.shapeColor = cor;
  botao.text = texto;
  botao.ativo = true;
  return botao;
}

function verificarCliqueNosBotoes() {
  if (mouseIsPressed) {
    if (botaoBaixo.overlapPoint(mouseX, mouseY) && botaoBaixoAtivo) {
      iniciarMovimento('baixo', 475, null, background1);
      botaoBaixoAtivo = false;
      botaoBaixo.shapeColor = color(100);
    } else if (botaoDireito.overlapPoint(mouseX, mouseY) && botaoDireitoAtivo) {
      iniciarMovimento('direito', null, 400, background2);
      botaoDireitoAtivo = false;
      botaoDireito.shapeColor = color(100);
    } else if (botaoHipotenusa.overlapPoint(mouseX, mouseY)) {
      resetarPersonagem();
      iniciarMovimento('hipotenusa', 475, 400, background3);
    } else if (resetButton.overlapPoint(mouseX, mouseY)) {
      location.reload();
    }
  }
}

function iniciarMovimento(tipoControle, y, x, bg) {
  controle = tipoControle;
  targetY = y;
  targetX = x;
  currentBackground = bg;
}

function resetarPersonagem() {
  personagem.position.x = POSICAO_INICIAL_X;
  personagem.position.y = POSICAO_INICIAL_Y;
  distanciaPercorrida = 0;
}

function moverSimultaneamente(alvoX, alvoY, velX, velY) {
  let chegouX = moverEixo('x', alvoX, velX);
  let chegouY = moverEixo('y', alvoY, velY);

  if (chegouX && chegouY) {
    currentBackground = background4;
  }
}

function moverParaDestino() {
  moverEixo('x', targetX, VELOCIDADE_X);
  moverEixo('y', targetY, VELOCIDADE_Y);
}

function moverEixo(eixo, alvo, velocidade) {
  if (alvo === null) return true;

  let distancia = alvo - personagem.position[eixo];
  if (abs(distancia) <= LIMIAR_DISTANCIA) {
    personagem.position[eixo] = alvo;
    return true;
  } else {
    personagem.position[eixo] += velocidade * Math.sign(distancia);
    return false;
  }
}

function atualizarAnimacaoPersonagem() {
  let isMoving = targetX !== null || targetY !== null;
  personagem.changeAnimation(isMoving ? 'running' : 'idle');
}

function desenharUI() {
  drawSprites();

  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);

  text(botaoBaixo.text, botaoBaixo.position.x, botaoBaixo.position.y);
  text(botaoDireito.text, botaoDireito.position.x, botaoDireito.position.y);
  text(botaoHipotenusa.text, botaoHipotenusa.position.x, botaoHipotenusa.position.y);
  text(resetButton.text, resetButton.position.x, resetButton.position.y);

  fill(0);
  textSize(20);

  if (controle === 'hipotenusa') {
    distanciaPercorrida = parseFloat(
      dist(personagem.position.x, personagem.position.y, POSICAO_INICIAL_X, POSICAO_INICIAL_Y).toFixed(2)
    );
  } else {
    distanciaPercorrida = personagem.position.x - POSICAO_INICIAL_X + personagem.position.y - POSICAO_INICIAL_Y;
  }

  text(distanciaPercorrida, 470, 115);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('meu_arquivo', 'png');
  }
}
