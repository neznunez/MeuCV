// Função para rolagem suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para efeito de digitação
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            let char = text.charAt(i);
            if (char === '\n') {
                element.innerHTML += '<br>';
            } else {
                element.innerHTML += char;
            }
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Variável para garantir que a animação de digitação ocorra apenas uma vez por elemento
let hasTyped = {};

// Objeto com os textos animados e os elementos correspondentes
const textosAnimados = {
	
   'infoPessoal': 'João Victor Nunes \n \n 06/01/2000 \n \n jvnunes066@gmail.com \n \n +5521971659864',
	
   'formacao': 'Formação \n \n Colégio Pedro II - Unidade Humaitá I, Humaitá \n — Ensino Fundamental/Médio 2006-2018 \n \n PUC-RIO - Cursando - Design em Comunicação Visual \n - 10º período',
	
	'typewriteText': 'Sobre mim:\n  De tudo um pouco, metido a Designer Multimídia, procuro sempre utilizar novas tecnologias para impulsionar meu processo criativo. \n Do Graffiti ao Design Gráfico, comecei como artista 3D e na criação de ambientes digitais. \n Em 2020, me aventurei em programação criativa, utilizando Processing e experimentos envolvendo telas. \n \n Em minha trajetória pela universidade, busquei trazer projetos que misturassem arte de rua, tecnologia e interatividade, além de estudos sobre as futuras relações dos seres humanos com o cenário urbano.\n \n Em 2022, participei do programa de Inovação Tecnológica na Apple Developer Academy, onde me tornei desenvolvedor iOS. Em UX/UI e no desenvolvimento de software, me aprofundei na criação de ferramentas utilizando realidade aumentada, realidade virtual, escaneamento 3D e outros componentes que usam a câmera do celular para criar experiências imersivas dentro do ecossistema Apple. \n \n No meio da arte, participei de curadorias e do desenvolvimento de exposições em realidade aumentada em Lisboa e em alguns lugares do Brasil, incluindo a Embaixada do Mexico com uma homenagem a Frida Kahlo. \n \n Caindo de paraquedas na moda, levei projetos para a Brazilian Immersive Fashion Week, com coleções de roupas físicas e digitais que envolviam novas tecnologias, representando a PUC-Rio. \n \n Apaixonado por encarar desafios, estou sempre em busca de inovação.Minha maior motivação é transformar ideias em realidade. Valorizo muito o trabalho em equipe e o compartilhamento de conhecimentos, pois acredito que juntos conseguimos ir mais longe.Para mim, cada projeto é uma oportunidade de contar uma história e criar experiências impactantes.A inovação acontece quando misturamos diferentes áreas e conhecimentos, e é essa mistura me motiva e me torna mais criativo.',
	
    'expTitle': 'Exp',
	
    'expText1': 'WorkShop Design Gráfico IED Rio (Istituto Europeo Di design)\n \n .Intensivo EBAC (Escola Britânica de artes criativas e tecnologia) - Desenvolvimento de Games. \n \n Programa de inovação tecnológica Apple developer Academy.2022/2023 \n \n Curso de Programação Visual com André Burnier- cc.espaço \n \n BRIFW- vencedor concurso Horizon Latin.x - Brazillian immersive Fashion Week 2022 e 2023. \n \n Workshop - Inovação para cidades inteligentes e sustentáveis - Sesi - Rio de Janeiro. \n \n Exposição de Arte com Realidade Aumentada em Lisboa. - Galeria 284 \n \n Exposição de Arte com Realidade Aumentada em homenagem à Frida Kahlo na Embaixada do México - Brasília.- Galeria 284 \n \n Desenvolvimento da identidade visual e criação da marca de roupa para o Album “Vida Cara” do rapper Orochi.',
	
    'expText2': 'Semana de Design PUC-RIO - Criação do primeiro espaço digital no metaverso da universidade. \n \n ECOA-PUC RIO organizei workshops para introdução à realidade virtual e realidade aumentada. \n \n ECOA-PUC RIO organizei workshops sobre novas tecnologias e web 3.0 para novos alunos da universidade \n \n ECOA-PUC roda de conversa com o diretor da Globo José Bonifácio (Boninho) sobre o futuro da televisão e do streaming \n \n ECOA-PUC apresentação de projetos envolvendo escaneamento 3d e preservação de artes urbanas para o escritor Mia Couto \n \n Apresentações de projetos envolvendo valorização e preservação do cenário urbano e novas tecnologias para Apple. \n \n PUC-RIO participei da organização da revitalização da nova área de convivência da PUC-RIO com atividades de graffiti e pintura.',
	
	'conhecimentoTitle':'Softwares:',
	
	'tituloAdobe': 'Adobe:',
	
    'tituloPhotoshop': 'Photoshop:',
	
    'tituloIllustrator': 'Illustrator:',
	
	'tituloAfter': 'After Effects / Premiere:',
	
    'titulo3D': '3D / VR :',
	
    'tituloBlender': 'Blender:',
	
	'tituloUnity' : 'Unity:' ,
	
	'tituloUnreal': 'Unreal:',
	
	'tituloAR': 'AR:',
	
	'tituloMetaSpark': 'Meta Spark:',
	
	'tituloAero': 'Adobe Aero:',
	
	'tituloDev' : 'Dev:',
	
	'tituloProcessing': 'Processing:',
	
	'tituloSwift': 'Swift:',
	


    // Adicione mais textos e elementos animados aqui, se necessário
};

// Função para iniciar a animação de digitação quando o elemento está visível
function initiateTypingAnimationWhenVisible(elementId, text, speed) {
    const element = document.getElementById(elementId);
    if (element && isElementInViewport(element) && !hasTyped[elementId]) {
        typeWriter(element, text, speed);
        hasTyped[elementId] = true;
    }
}

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Opções padrão para todas as barras de progresso

// Função para animar a barra de progresso quando visível
function animateProgressBarWhenVisible(barId, value) {
    const barElement = document.querySelector(barId);
    if (barElement && isElementInViewport(barElement) && !barElement.classList.contains('animated')) {
      
var bar = new ProgressBar.Line(barElement, opcoesPadrao);
        bar.animate(value);
        barElement.classList.add('animated');
    }
}

// Definindo as variáveis iniciais
let frameAtual = 0; // Começa do zero ou do número do primeiro frame
const totalFrames = 178; // Substitua pelo número total de frames da sua animação
const animacaoElement = document.getElementById('animacaoFrame');
const caminhoBase = 'NezSequence/frame_'; // O caminho base para os seus frames

function atualizarFrame() {
    // Construindo o caminho do arquivo com o número do frame atual, preenchendo com zeros
    const numeroFrame = frameAtual.toString().padStart(5, '0');
    animacaoElement.src = `${caminhoBase}${numeroFrame}.png`;

    // Incrementa o frame atual e reseta se passar do total
    frameAtual = (frameAtual + 1) % totalFrames;
}

// Definindo o intervalo para a animação. Por exemplo, 100ms entre cada frame.
setInterval(atualizarFrame, 25);



var opcoesPadrao = {
  strokeWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  color: '#eee',
  trailColor: '#eee',
  trailWidth: 3,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FF0000'},
  to: {color: '#F79C07'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
};

// Inicialização e animação das barras de progresso quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    // Sua lógica de animação de texto existente...

    // Inicialização e animação da barra de progresso para os Softwares hehehehe
	animateProgressBarWhenVisible('#habilidadePhotoshop', 0.9);
	
    animateProgressBarWhenVisible('#habilidadeIllustrator', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeAfter', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeBlender', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeUnity', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeUnreal', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeSpark', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeAero', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeProcessing', 0.9);
	
    animateProgressBarWhenVisible('#habilidadeSwift', 0.9);
	
    // Adicione mais barras conforme necessário
	
});


// Adicione um event listener de scroll para verificar a visibilidade dos elementos durante o scroll
window.addEventListener('scroll', () => {
    for (const elementId in textosAnimados) {
        if (textosAnimados.hasOwnProperty(elementId)) {
            const text = textosAnimados[elementId];
            initiateTypingAnimationWhenVisible(elementId, text, 20);
        }
    }
	
	animateProgressBarWhenVisible('#habilidadePhotoshop', 0.85);
	
    animateProgressBarWhenVisible('#habilidadeIllustrator', 0.80);
	
	animateProgressBarWhenVisible('#habilidadeAfter', 0.85);
	
	animateProgressBarWhenVisible('#habilidadeBlender', 0.9);
	
	animateProgressBarWhenVisible('#habilidadeUnity', 0.45);
	
	animateProgressBarWhenVisible('#habilidadeUnreal', 0.4);
	
	animateProgressBarWhenVisible('#habilidadeSpark', 0.82);
	
	animateProgressBarWhenVisible('#habilidadeAero', 0.74);
	
	animateProgressBarWhenVisible('#habilidadeProcessing', 0.35);
	
    animateProgressBarWhenVisible('#habilidadeSwift', 0.30);
});



