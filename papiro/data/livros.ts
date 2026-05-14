export type Livro = {
  id: string;
  title: string;
  author: string;
  category: string;
  rating: number;
  image: any;
  description: string;
  chapter1: string;
};

export const livros:Livro[] = [
  {
    id: "1",
    title: "A Culpa É das Estrelas",
    author: "John Green",
    category: "Romance",
    rating: 4.7,

    image: require("../assets/capas/capa_culpa.jpg"),

    description:
      "Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante — o que lhe dá a promessa de viver mais alguns anos —, o último capítulo de sua história foi escrito no momento do diagnóstico.",

    chapter1: `Capítulo 1

Faltando pouco para eu completar meu décimo sétimo ano de vida, minha mãe resolveu que eu estava deprimida, provavelmente porque quase nunca saía de casa, passava horas na cama, lia o mesmo livro várias vezes, raramente comia e dedicava grande parte do meu abundante tempo livre pensando na morte.

Sempre que você lê um folheto, uma página da Internet ou sei lá o que mais sobre câncer, a depressão aparece na lista dos efeitos colaterais. Só que, na verdade, ela não é um efeito colateral do câncer. É um efeito colateral de se estar morrendo. (O câncer também é um efeito colateral de se estar morrendo. Quase tudo é, na verdade.)

Mas a mamãe achava que eu precisava de tratamento, então me levou ao meu médico comum, o Jim, que concordou que eu, de fato, estava nadando numa depressão paralisante e totalmente clínica e, portanto, ele ia trocar meus remédios e, além disso, eu teria que frequentar um Grupo de Apoio uma vez por semana.

O grupo era formado por um elenco rotativo de pessoas com várias questões psicológicas desencadeadas pelos tumores. A razão de o elenco ser rotativo? Efeito colateral de se estar morrendo.

O Grupo de Apoio era megadeprimente, óbvio. A reunião acontecia toda quarta-feira no porão de uma igreja episcopal — uma construção no formato de cruz com paredes de pedra. Nós nos sentávamos em uma roda bem no meio da cruz: onde os dois pedaços de madeira um dia se cruzaram, onde esteve o coração de Jesus.

Sabia disso porque o Patrick, Líder do Grupo de Apoio e o único naquele lugar com mais de dezoito anos, falava sobre o coração de Jesus todo raio de reunião, sobre como nós, jovens sobreviventes do câncer, estávamos sentados bem no sagrado coração de Cristo, e tal.

Bem, era assim que acontecia no coração do Senhor: os seis ou sete ou dez de nós chegávamos lá a pé ou de cadeira de rodas, comíamos um pouco daqueles biscoitos velhos com limonada, sentávamos na Roda da Esperança e ouvíamos o Patrick contar pela milésima vez a história ultradeprimente e superinfeliz da sua vida — sobre ter tido câncer nos testículos e acharem que ele ia morrer, mas não morreu, e ali estava, já adulto, no porão de uma igreja na 137ª cidade mais linda dos Estados Unidos, divorciado, viciado em videogames, quase sem amigos, levando uma vida sem graça explorando seu fantástico passado com câncer, ralando para terminar um mestrado que não vai melhorar sua perspectiva de carreira e esperando, como todos nós, que a espada de Dâmocles traga para ele o alívio do qual escapou muitos anos atrás.

E VOCÊS TAMBÉM PODEM TER ESSA SORTE!

Aí nós nos apresentávamos: nome, idade, diagnóstico e como estávamos no dia. Meu nome é Hazel, dizia na minha vez. Dezesseis. Tireoide, originalmente, mas com uma respeitável colônia satélite há muito tempo instalada nos pulmões. E está tudo bem comigo.

Depois do último da roda, o Patrick sempre perguntava se alguém queria se abrir. E aí começava o apoio mútuo: todo mundo falando de lutar, combater, vencer, remitir e examinar. Para não ser injusta com o Patrick, ele nos deixava falar da morte. Mas a maioria ali não estava morrendo. A maioria viveria até a idade adulta. Como o Patrick.

(Isso significa que havia muita competição, com todo mundo querendo vencer não só o câncer, mas também as outras pessoas da roda. Tipo, eu sei que não faz o menor sentido, mas quando você ouve que tem, por exemplo, vinte por cento de chance de viver cinco anos, e faz as contas e conclui que isso é uma chance em cinco… você olha em volta e pensa, como qualquer pessoa saudável faria: eu preciso durar mais que quatro desses desgraçados.)

A única coisa que salvava no Grupo de Apoio era um menino chamado Isaac, um magrelo de rosto comprido, com cabelos loiros e lisos que cobriam um de seus olhos.

E seu problema eram os olhos. Ele teve um tipo inacreditavelmente improvável de câncer ocular. Um olho foi extraído quando ele era pequeno, e agora o Isaac usava um par de óculos fundo de garrafa que fazia os olhos (tanto o de verdade quanto o de vidro) parecerem sobrenaturalmente grandes, como se a cabeça inteira fosse basicamente o globo ocular de mentira e o de verdade olhando para você.

Pelo que pude entender das raras vezes que ele se abriu para o grupo, uma recorrência colocou o olho que resta em perigo mortal.

O Isaac e eu nos comunicávamos quase exclusivamente por meio de suspiros. Cada vez que alguém falava de dietas anticâncer, de cheirar cartilagem de tubarão em pó ou sei lá, ele me olhava e suspirava de leve. Eu balançava a cabeça em um movimento microscópico e dava um suspiro em resposta.

Então o Grupo de Apoio deu o que tinha de dar, e depois de algumas semanas eu passei a surtar quando tocavam no assunto.

Na verdade, na quarta-feira em que conheci o Augustus Waters, tinha feito de tudo para me livrar da ida à sessão de grupo enquanto estava sentada no sofá com a mamãe, no meio da terceira parte da maratona de doze horas da temporada anterior de America’s Next Top Model, que, confesso, já tinha visto, mas mesmo assim…

Eu: “Eu me recuso a ir ao Grupo de Apoio.”

Mamãe: “Um dos sintomas da depressão é a falta de interesse em participar de atividades.”

Eu: “Por favor, mãe, deixe eu ficar vendo America’s Next Top Model. Isso é uma atividade.”

Mamãe: “Televisão é passividade.”

Eu: “Pô, mãe, por favor…”

Mamãe: “Hazel, você já é adolescente. Não é mais criancinha. Precisa fazer amigos, sair de casa, viver sua vida.”

Eu: “Se você quer que eu aja como adolescente, não me mande para o Grupo de Apoio. Compre uma carteira de identidade falsa para mim e aí eu vou sair à noite, beber vodca e fumar maconha.

Mamãe: “Para início de conversa, não se toma baseado.”

Eu: “Viu? Esse é o tipo de coisa que eu saberia se você comprasse uma carteira de identidade falsa para mim.”

Mamãe: “Você vai para o Grupo de Apoio.”

Eu: “SAAAAAAACO.”

Mamãe: “Hazel, você merece uma vida.”

Aquilo me fez calar a boca, mesmo não tendo conseguido entender o que a ida ao Grupo de Apoio tinha a ver com a definição de vida. De qualquer jeito, concordei em ir — depois de negociar o direito de gravar o episódio e meio do ANTM que eu ia perder.

Ia ao Grupo de Apoio pelo mesmo motivo que uma vez deixei enfermeiras com um ano e meio de faculdade me envenenarem com substâncias químicas de nomes exóticos: queria fazer meus pais felizes. Só tem uma coisa pior neste mundo que bater as botas aos dezesseis anos por causa de um câncer: ter um filho que bate as botas por causa de um câncer.

Mamãe parou na entrada circular atrás da igreja às 4h56. Fingi que estava ajeitando o cilindro de oxigênio por um segundo só para ganhar tempo.

— Quer que eu o carregue até lá dentro?

— Não, está tudo bem — respondi.

O cilindro verde só pesava uns poucos quilos e eu tinha um carrinho de aço para transportá-lo. Aquilo me fornecia dois litros de oxigênio por minuto através de uma cânula, um tubo transparente que se dividia bem embaixo do meu pescoço, passava por trás das orelhas e se juntava de novo nas narinas. A geringonça era necessária porque meus pulmões faziam um péssimo trabalho como pulmões.

— Eu te amo — ela disse, enquanto eu saltava do carro.

— Eu também, mãe. Vejo você às seis.

— Faça amigos! — ela gritou pela janela abaixada enquanto eu me distanciava.

Não quis usar o elevador porque isso é o tipo de coisa que você faz nos seus “Últimos dias no Grupo de Apoio”, então fui de escada. Peguei um biscoito, coloquei um pouco de limonada num copo descartável e me virei.

Um garoto olhava fixamente para mim.

Eu tinha quase certeza de nunca ter visto aquele cara na vida. Alto e magro, mas musculoso, ele fazia a cadeira de plástico parecer minúscula. Cabelo acaju, liso e curto. Parecia ter a minha idade, talvez um ano mais velho, e estava sentado com o cóccix na beirada da cadeira, uma postura péssima, com uma das mãos enfiada até a metade no bolso da calça jeans escura.

Desviei o olhar, repentinamente consciente da quantidade infinita de coisas erradas em mim. Eu estava com uma calça jeans velha, que algum dia foi justa mas que agora ficava folgada nos lugares mais estranhos, e uma camiseta amarela com o nome de uma banda da qual eu nem gostava mais.

Tinha também meu cabelo: cortado tipo Príncipe Valente, e eu nem tive a preocupação de, puxa, dar uma escovada nele. Além disso, minhas bochechas estavam ridiculamente redondas, como as de um esquilo — efeito colateral do tratamento. Eu era uma pessoa de proporções normais com um balão no lugar da cabeça. Isso sem falar do inchaço nos tornozelos.

Mesmo assim, dei uma espiada rápida e os olhos dele ainda estavam grudados em mim.

Foi então que entendi o verdadeiro sentido de aquilo ser chamado de contato visual.

Andei até a roda e me sentei ao lado do Isaac, a duas cadeiras do garoto. Olhei de novo, rapidamente. Ele ainda me observava.

Na boa, vou logo dizendo: ele era um gato. Se um cara que não é gato encara você sem parar, isso é, na melhor das hipóteses, esquisito, e na pior, algum tipo de assédio. Mas se é um cara gato… na boa…

Peguei meu celular e apertei uma tecla para ver as horas. Os lugares na roda foram ocupados por azarados de doze a dezoito anos e, então, o Patrick deu início aos trabalhos com a prece da serenidade:

Senhor, dê-me serenidade para aceitar as coisas que não posso modificar, coragem para modificar as que posso, e sabedoria para reconhecer a diferença entre elas.

O garoto ainda estava me encarando. Senti meu rosto ficar vermelho.

Por fim, resolvi que a melhor estratégia seria também olhar fixamente para ele. Afinal de contas, os garotos não detêm o monopólio da atividade de encarar. Foquei nele enquanto o Patrick explicava pela milésima vez sua ausência de bolas etc., e aquilo logo virou um jogo do sério.

Depois de um tempo o garoto sorriu e, enfim, desviou os olhos azuis.

Quando me olhou de novo, arqueei as sobrancelhas como que dizendo: ganhei.

Ele deu de ombros. O Patrick prosseguiu e, enfim, a hora das apresentações chegou.

— Isaac, talvez você queira ser o primeiro hoje. Sei que está enfrentando um grande desafio no momento.

— É — o Isaac disse. — Meu nome é Isaac. Tenho dezessete anos. Parece que vou precisar ser operado em duas semanas, depois vou ficar cego. Não estou reclamando nem nada porque sei que poderia ser pior, como no caso de alguns aqui, mas, quer dizer, ficar cego é, tipo, uma droga. Ter uma namorada me ajuda. Além de amigos como o Augustus. — Ele balançou a cabeça na direção do garoto, que agora tinha nome. — Pois é…

Ele estava olhando para as mãos, os dedos cruzados parecendo o topo de uma tenda.

— Não há nada que se possa fazer para mudar isso.

— Estamos do seu lado, Isaac — o Patrick falou. — Vamos lá, pessoal.

— Estamos do seu lado, Isaac.

O Michael foi o próximo. Ele tinha doze anos. Sofria de leucemia desde que se entendia por gente. E estava bem.

A Lida tinha dezesseis anos e era bonita o suficiente para ser alvo do olhar do cara gato. Estava em remissão de um câncer de apêndice, que eu nem sabia que existia. Disse que se sentia forte — o que, para mim, era basicamente tirar onda.

Outros cinco falaram antes do cara gato. Ele deu um sorrisinho quando chegou sua vez. A voz era baixa, aveludada e supersensual.

— Meu nome é Augustus Waters. Tenho dezessete anos. Tive um pouco de osteossarcoma um ano e meio atrás, mas só estou aqui hoje porque o Isaac pediu.

— E como está se sentindo? — o Patrick perguntou.

— Ah, maravilha — respondeu Augustus. — Estou numa montanha-russa que só vai para cima, amigão.

Quando chegou minha vez:

— Meu nome é Hazel. Tenho dezesseis anos. Tireoide com metástase nos pulmões. Estou bem.

A hora passou rápido. Lutas foram recontadas, batalhas ganhas em guerras que certamente seriam perdidas; a esperança virou tábua de salvação; famílias foram celebradas e recriminadas; lágrimas foram compartilhadas e consolo, oferecido.

Nem eu nem o Augustus tínhamos falado mais nada, até que o Patrick disse:

— Augustus, talvez você queira falar de seus medos para o grupo.

— Meus medos?

— É.

— Eu tenho medo de ser esquecido — disse ele. — Tenho medo disso como um cego tem medo do escuro.

— Calma aí… — disse Isaac, sorrindo.

— Estou sendo insensível? — perguntou Augustus. — Posso ser bem cego quando o assunto são os sentimentos das outras pessoas.

O Isaac estava rindo, mas o Patrick levantou um dedo.

— Por favor, Augustus. Voltemos a você. Disse que tem medo de ser esquecido?

— É.

O Patrick pareceu meio perdido.

— Alguém gostaria de comentar?

Eu não frequentava uma escola de verdade havia três anos. Meus melhores amigos eram meus pais. Meu terceiro melhor amigo era um escritor que nem sabia que eu existia. Eu era relativamente tímida — definitivamente não o tipo que levanta a mão para falar.

E, mesmo assim, dessa vez, resolvi abrir o verbo.

Levantei a mão, e o Patrick, com satisfação estampada no rosto, disse:

— Hazel!
Olhei na direção do Augustus Waters, que me encarava. Dava quase para ver através dos olhos dele, de tão azuis.

— Vai chegar um dia — eu disse — em que todos vamos estar mortos. Todos nós. Vai chegar um dia em que não vai sobrar nenhum ser humano sequer para lembrar que alguém já existiu ou que nossa espécie fez qualquer coisa nesse mundo. Não vai sobrar ninguém para se lembrar de Aristóteles ou de Cleópatra, quanto mais de você. Tudo o que fizemos, construímos, escrevemos, pensamos e descobrimos vai ser esquecido e tudo isso aqui — fiz um gesto abrangente — vai ter sido inútil.

Pode ser que esse dia chegue logo e pode ser que demore milhões de anos, mas, mesmo que o mundo sobreviva a uma explosão do Sol, não vamos viver para sempre. Houve um tempo antes do surgimento da consciência nos organismos vivos, e vai haver outro depois. E, se a inevitabilidade do esquecimento humano preocupa você, sugiro que deixe esse assunto para lá. Deus sabe que é isso o que todo mundo faz.

Eu tinha aprendido aquilo com meu já citado terceiro melhor amigo, Peter Van Houten, o autor recluso de Uma aflição imperial — de todos os meus livros, o mais próximo de uma Bíblia. Peter Van Houten era a única pessoa que eu conhecia que parecia: (a) entender o que era estar morrendo, e (b) não ter morrido.

Assim que terminei, fez-se um longo silêncio, e eu pude ver um sorriso se abrindo de um canto ao outro no rosto do Augustus — não o tipo de sorriso cafajeste do garoto tentando parecer sexy ao me encarar, mas um sorriso sincero, quase maior que a cara dele.

— Caramba! — disse ele baixinho. — Não é que você é mesmo demais?

Nós dois não falamos mais nada até o fim da reunião, quando todos se deram as mãos e o Patrick nos guiou em uma prece.

— Senhor Jesus Cristo, estamos aqui reunidos em Seu coração, literalmente em Seu coração, como sobreviventes do câncer. O Senhor e somente o Senhor nos conhece como conhecemos a nós mesmos. Nos guie pela vida e para a luz em nossos períodos de provação. Oremos pelos olhos do Isaac, pelo sangue do Michael e do Jamie, pelos ossos do Augustus, pelos pulmões da Hazel, pela garganta do James. Oremos para que o Senhor consiga nos curar e para que possamos sentir Seu amor e Sua paz, que excedem todo o entendimento. E nos lembremos em nossos corações daqueles que um dia conhecemos, amamos e que foram para a Sua casa: Maria, Kade, Joseph, Haley, Abigail, Angelina, Taylor, Gabriel…

A lista era grande. Tem muita gente morta no mundo.

E, enquanto o Patrick continuava a ladainha, lendo a relação em uma folha de papel porque era muito comprida para ser decorada, fiquei de olhos fechados, tentando elevar os pensamentos em oração, mas a maior parte do tempo imaginava o dia em que meu nome ocuparia um lugarzinho ali, bem no fim da lista, quando ninguém mais está prestando atenção.

Quando o Patrick acabou, entoamos juntos aquele mantra idiota — VIVENDO O MELHOR DA NOSSA VIDA HOJE — e foi o fim da reunião.

O Augustus Waters empurrou o corpo para fora da cadeira e caminhou na minha direção. O andar dele era tão cafajeste quanto o sorriso. Ele parou na minha frente, mas manteve uma certa distância para eu poder olhá-lo nos olhos sem ter de esticar o pescoço.

— Qual é o seu nome? — ele perguntou.

— Hazel.

— Não, o nome completo.

— Ahn, Hazel Grace Lancaster.

Ele ia dizendo alguma coisa quando o Isaac se aproximou.

— Só um instante — falou, levantando um dedo, e virou-se para o Isaac. — Isso foi pior do que você tinha dito, na verdade.

— Eu disse que era um tédio.

— Por que você se dá o trabalho de vir aqui?

— Sei lá. Meio que ajuda…?

O Augustus inclinou o corpo como se assim eu não conseguisse ouvi-lo.

— Ela vem sempre?

Não deu para escutar o comentário do Isaac, mas o Augustus respondeu:

— Quer saber?

Ele pegou o Isaac pelos ombros e deu meio passo para trás.

— Conte à Hazel da ida ao médico.

O Isaac apoiou uma das mãos na mesa de biscoitos e virou o olho enorme para mim.

— Tá, é que eu fui ao médico hoje de manhã e estava falando para o meu cirurgião que preferiria ser surdo a ser cego. E ele disse: “Não é assim que as coisas funcionam.” Aí eu falei: “É, eu sei que não é assim; só estou dizendo que preferia ser surdo a ser cego se pudesse escolher, mas sei que não posso.” E ele: “Bem, a boa notícia é que você não vai ficar surdo.” Eu disse: “Obrigado por esclarecer que meu câncer no olho não vai me deixar surdo. É muita sorte minha ter um gênio como você me operando.”

— Ele é mesmo um gênio — falei. — Vou tentar arrumar um câncer qualquer no olho para poder conhecer esse cara.

— Boa sorte. Então, tá. Já vou indo. A Monica está me esperando. Preciso olhar bastante para ela enquanto posso.

— Counterinsurgence amanhã? — o Augustus perguntou.

— Com certeza.

O Isaac deu meia-volta e subiu as escadas correndo, pulando os degraus de dois em dois.

Augustus Waters se virou para mim:

— Literalmente.

— Literalmente? — perguntei.

— Estamos literalmente no coração de Jesus… Achei que estivéssemos no porão de uma igreja, mas estamos literalmente no coração de Jesus.

— Alguém deveria contar isso para Jesus — falei. — Quer dizer, deve ser perigoso ficar guardando crianças com câncer no coração.

— Eu mesmo poderia contar — o Augustus falou —, mas, para minha infelicidade, estou literalmente enterrado no coração Dele, então Ele não vai conseguir me ouvir.

Eu ri. O Augustus balançou a cabeça, me olhando.

— O que foi? — perguntei.

— Nada — ele respondeu.

— Por que você está olhando para mim desse jeito?

Ele deu um sorrisinho.

— Porque você é bonita. Eu gosto de olhar para pessoas bonitas, e faz algum tempo que resolvi não me negar os prazeres mais simples da existência humana.

Um silêncio constrangedor se seguiu. Mas o Augustus quebrou o gelo:

— Quer dizer, principalmente porque, como você deliciosamente observou, tudo isso vai acabar em total esquecimento, e tal…

Eu meio que engasguei, ou suspirei, ou soltei o ar de um jeito que pareceu quase uma tosse.

— Eu não sou boni…

— Você é tipo uma Natalie Portman milenar. Tipo a Natalie Portman em V de Vingança.

— Não vi esse filme — falei.

— Sério? — ele perguntou. — Garota linda, de cabelo curto, rejeita a autoridade e não consegue resistir a um cara que ela sabe que vai ser um problema. É sua autobiografia, pelo menos até aqui, pelo que posso ver.

Cada sílaba que saía da boca dele flertava comigo. Ok, ele meio que me deixava excitada. Eu nem sabia que garotos podiam me deixar assim — pelo menos não na vida real.

Uma menina mais nova passou por nós.

— E aí, Alisa. Tudo bem? — ele perguntou.

Ela sorriu e balbuciou:

— Oi, Augustus.

— Gente do Memorial — ele explicou.

Memorial era o grande hospital de pesquisas.

— Qual você frequenta?

— O Hospital Pediátrico — respondi, com a voz mais baixa do que eu pretendia.

Ele fez que sim com a cabeça. A conversa parecia ter chegado ao fim.

— Bem — falei, mexendo a cabeça vagamente na direção dos degraus que levavam para fora do Coração Literal de Jesus.

Inclinei o carrinho do oxigênio para apoiá-lo nas rodinhas e comecei a andar. O Augustus foi mancando ao meu lado.

— Então, a gente se vê na próxima, talvez? — perguntei.

— Você deveria assistir — ele falou. — Ao V de Vingança, quero dizer.

— Tá. Vou ver se acho para assistir.

— Não. Comigo. Na minha casa — ele disse. — Agora.

Parei de andar.

— Eu mal conheço você, Augustus Waters. Você pode muito bem ser o assassino do machado.

Ele concordou.

— Tem toda razão, Hazel Grace.

E passou por mim, os ombros dando forma à camisa polo verde, as costas retas, os passos da direita um pouco mais marcantes enquanto andava firme e confiante, apoiado no que eu determinei ser uma prótese. Às vezes o osteossarcoma leva um dos membros só para dar uma sondada em você. Depois, se gostar, leva o restante.

Eu o segui escada acima, devagar, ficando para trás. Degraus não são o forte dos meus pulmões.

Aí fomos do coração de Jesus até o estacionamento, o frescor da brisa da primavera na medida certa, a luz do fim de tarde divina em sua nocividade.

Mamãe não tinha chegado ainda, o que era estranho, porque ela quase sempre estava lá esperando por mim.

Olhei em volta e vi que uma garota alta, morena e boazuda imprensava o Isaac na parede de pedra da igreja, beijando o menino de um jeito quase agressivo. Estávamos tão perto que eu podia escutar os ruídos das duas bocas grudadas, e ouvi o Isaac dizendo “sempre”, e ela respondendo com “sempre” também.

O Augustus apareceu de repente ao meu lado e sussurrou:

— Eles são grandes adeptos de demonstrar afeto em público.

— Qual é a do “sempre”?

O ruído da troca de saliva aumentou.

— “Sempre” é o lema deles. Sempre vão se amar, e tal. Pelos meus cálculos, e sendo bastante conservador, eles devem ter trocado quatro milhões de mensagens de texto com a palavra “sempre” no ano passado.

Mais dois carros chegaram, levando embora o Michael e a Alisa. Aí sobramos só o Augustus e eu, observando o Isaac e a Monica, que continuavam frenéticos, como se não estivessem encostados na parede de um local de oração.

Ele pôs a mão no peito dela, por cima da blusa, e apalpou o mamilo, a mão imóvel enquanto os dedos se mexiam. Fiquei me perguntando se aquilo seria gostoso. Não parecia, mas resolvi perdoar o Isaac levando em conta o fato de que ele estava para ficar cego. Os sentidos devem aproveitar enquanto ainda há apetite.

— Imagine a última ida de carro até o hospital — falei, baixinho. — A última vez que você vai dirigir um carro.

Sem me olhar, o Augustus disse:

— Você está atrapalhando a minha vibe aqui, Hazel Grace. Estou tentando observar o amor adolescente em sua esplendorosa estranheza.

— Acho que ele está machucando o peito dela — comentei.

— É. É difícil saber ao certo se ele está tentando excitar a menina ou fazer um exame de mama.

Aí o Augustus colocou a mão no bolso e tirou de lá, por incrível que pareça, um maço de cigarros. Levantou a tampa da caixinha e colocou um cigarro na boca.

— Isso é sério? — perguntei. — Você acha isso legal? Ai, meu Deus, você acabou de estragar a coisa toda.

— Que coisa toda? — ele perguntou, virando para mim.

O cigarro pendia apagado da boca, do canto que não sorria.

— A coisa toda em que um garoto que não é pouco atraente ou pouco inteligente ou, aparentemente, de forma alguma pouco tolerável me encara e chama minha atenção para utilizações incorretas da literalidade, me compara a atrizes e me convida para ver um filme na casa dele. Mas é claro que sempre tem uma hamartia, e a sua é que, ai, meu Deus, mesmo você tendo tido um raio de um câncer, ainda dá dinheiro para uma empresa em troca da chance de ter mais câncer. Ai, meu Deus. Deixe eu só dizer para você como é não conseguir respirar? É um inferno. Totalmente decepcionante.

— Uma hamartia? — ele perguntou, o cigarro ainda na boca.

Aquilo deixava sua mandíbula contraída. E a linha da mandíbula dele, infelizmente, era tudo…

— Uma falha trágica — expliquei, dando as costas para ele.

Dei um passo na direção do meio-fio, deixando o Augustus para trás, e foi então que ouvi um carro dando a partida mais adiante na rua. Era a mamãe. Ela tinha ficado ali, esperando que eu, tipo, fizesse amigos ou coisa assim.

Senti um misto de decepção e raiva crescendo em mim. Nem sei direito que sentimento era aquele, sério, só que havia muito dele, e eu queria dar um soco na cara do Augustus Waters e, ao mesmo tempo, trocar meus pulmões por outros que não fossem péssimos.

Eu estava de pé bem na pontinha do meio-fio com meu All-Star Chuck Taylor, o cilindro de oxigênio no carrinho ao meu lado parecendo aquela bola de ferro presa com uma corrente no tornozelo de um prisioneiro, e, na hora em que minha mãe ia encostando o carro, senti a mão dele pegar a minha.

Puxei a mão, mas me virei para ele.

— Eles não matam se você não acender — disse ele quando mamãe parou junto ao meio-fio. — E eu nunca acendi nenhum. É uma metáfora. Tipo: você coloca a coisa que mata entre os dentes, mas não dá a ela o poder de completar o serviço.

— É uma metáfora — falei, hesitante.

Mamãe esperava, quieta.

— É uma metáfora — ele repetiu.

— Você determina seu comportamento com base nas ressonâncias metafóricas…

— Ah, é. — Ele sorriu. — Sou um grande adepto da metáfora, Hazel Grace.

Eu me virei para o carro. Dei uma batidinha na janela, que se abriu.

— Vou ver um filme com o Augustus Waters — falei. — Grave, por favor, os próximos episódios da maratona do ANTM para mim.

`
  },
  {
    id: "2",
    title: "O Senhor dos anéis",
    author: "J.R. R. TOLKIEN",
    category: "Fantasia",
    rating: 4.9,

    image: require("../assets/capas/capa_senhor.webp"),

    description:
      "O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje. A imaginação prodigiosa de J.R.R. Tolkien e seu conhecimento profundo das antigas mitologias da Europa permitiram que ele criasse um universo tão complexo e convincente quanto o mundo real..",

    chapter1: `Uma festa muito esperada

Quando o Sr. Bilbo Bolseiro de Bolsão anunciou que em breve celebraria seu onzentésimo primeiro aniversário com uma festa de especial grandeza, houve muito comentário e agitação na Vila dos Hobbits.

Bilbo era muito rico e muito peculiar, e tinha sido a atração do Condado por sessenta anos, desde seu notável desaparecimento e inesperado retorno. As riquezas trazidas de suas viagens tinham agora se transformado numa lenda local, e popularmente se acreditava que a Colina em Bolsão estava cheia de túneis recheados com tesouros.

E, se isso não fosse o suficiente para se ter fama, havia também seu vigor prolongado, que maravilhava as pessoas. O tempo passava, mas parecia ter pouco efeito sobre o Sr. Bolseiro. Aos noventa anos, parecia ter cinquenta. Aos noventa e nove, começaram a chamá-lo de bem-conservado; mas inalterado ficaria mais próximo da realidade.

Havia pessoas que balançavam a cabeça e pensavam que isso era bom demais; parecia injusto que qualquer pessoa possuísse (aparentemente) a juventude perpétua, além de (supostamente) uma riqueza inexaurível.

— Isso terá seu preço — diziam eles. — Não é natural e trará problemas.

Mas até agora os problemas não haviam chegado e, como o Sr. Bolseiro era generoso com seu dinheiro, a maioria das pessoas estava disposta a perdoar suas esquisitices e sua boa sorte.

Continuou se relacionando em termos de cortesia com sua família (com exceção, é claro, dos Sacola-Bolseiros) e tinha muitos admiradores devotados entre os hobbits de famílias pobres e sem importância. Mas não tinha amigos íntimos, até que seus primos mais jovens começaram a crescer.

O mais velho deles, e favorito de Bilbo, era o jovem Frodo Bolseiro.

Quando Bilbo tinha noventa e nove anos, adotou Frodo como seu herdeiro e o trouxe para viver em Bolsão, e os Sacola-Bolseiros finalmente perderam as esperanças.

Por acaso, Bilbo e Frodo faziam aniversário no mesmo dia, 22 de setembro.

— Seria melhor que você viesse morar aqui, Frodo, meu rapaz! — disse Bilbo um dia. — E então poderemos comemorar nossos aniversários juntos e com mais conforto.

Nessa época, Frodo ainda estava na vintolescência, que é como os hobbits chamavam os anos irresponsáveis entre a infância e a maioridade, aos trinta e três anos.

Mais doze anos se passaram. Todo ano os Bolseiros davam animadas festas duplas de aniversário em Bolsão, mas agora se entendia que alguma coisa muito excepcional estava sendo planejada para aquele outono.

Bilbo ia fazer onzenta e um anos, 111, um número bastante curioso, e uma idade muito respeitável para um hobbit (mesmo o Velho Túk só havia chegado a 130); e Frodo ia fazer trinta e três, 33, um número importante: o ano em que se tornaria adulto.

As línguas começaram a se agitar na Vila dos Hobbits e em Beirágua. Rumores do evento que se aproximava viajaram por todo o Condado. A história e a personalidade do Sr. Bilbo Bolseiro se tornaram novamente o assunto principal das conversas, e as pessoas mais velhas repentinamente encontraram grande receptividade para suas lembranças.

Ninguém tinha uma plateia mais atenta que o velho Ham Gamgi, geralmente conhecido como Feitor. Ele contava histórias no Ramo de Hera, uma pequena hospedaria na estrada de Beirágua, e falava com certa autoridade, pois tinha cuidado do jardim de Bolsão por quarenta anos, e tinha ajudado o velho Holman no mesmo serviço antes disso.

Agora que ele estava ficando velho e com as juntas endurecidas, o serviço era feito principalmente por seu filho Gamgi. Tanto pai quanto filho tinham relações muito boas com Bilbo e Frodo.

Moravam na própria Colina, no número 3 da Rua do Bolsinho, logo abaixo de Bolsão.

— O Sr. Bilbo é um hobbit muito cavalheiro e gentil, como eu sempre disse — declarava o Feitor.

E dizia a mais perfeita verdade: Bilbo era gentil com ele, chamando-o de Mestre Hamfast e constantemente o consultando sobre o cultivo de legumes — em se tratando de “raízes”, especialmente batatas, o Feitor era considerado por todos na vizinhança (inclusive ele próprio) a maior autoridade.

— Mas e esse Frodo que mora com ele? — perguntou o Velho Noques Beirágua.

— O seu nome é Bolseiro, mas ele tem muito dos Brandebuque, pelo que dizem.

— Eu não entendo o motivo pelo qual um Bolseiro da Vila dos Hobbits vai procurar uma esposa lá na Terra dos Buques, onde as pessoas são tão estranhas.

— Não é de admirar que sejam estranhas — acrescentava Papai Dois, o vizinho do Feitor —, pois eles moram do lado errado do Grandevin e bem perto da Floresta Velha. Aquele é um lugar escuro e ruim, se metade das histórias for verdade.

— Você está certo, Pal — disse o Feitor. — Não é que os Brandebuques da Terra dos Buques morem na Floresta Velha, mas eles são uma raça estranha, ao que parece. Vivem para cima e para baixo de barco naquele rio grande — e isso não é natural. Não é de espantar que surjam problemas.

Mas, seja como for, o Sr. Frodo é um jovem hobbit tão gentil quanto se poderia desejar, exatamente como o Sr. Bolseiro. Afinal de contas, seu pai era um Bolseiro. Um hobbit decente e respeitável, o Sr. Drogo Bolseiro. Nunca houve o que dizer dele, até que morreu afogado.

— Afogado? — disseram várias vozes.

Já tinham ouvido este e outros rumores mais sombrios antes, é claro; mas os hobbits têm uma paixão por histórias familiares e estavam prontos para ouvir esta de novo.

— Bem, é o que dizem — disse o Feitor. — Veja você: o Sr. Drogo se casou com a pobre Sra. Prímula Brandebuque. Ela era prima em primeiro grau do nosso Sr. Bilbo por parte de mãe (a mãe dela era a filha mais jovem do Velho Túk); e o Sr. Drogo era primo dele em segundo grau.

Desse modo, o Sr. Frodo é filho dos primos do Sr. Bilbo em primeiro e segundo grau, e seu primo com o intervalo de uma geração, você me entende?

E o Sr. Drogo morava na Sede do Brandevin com o sogro, o velho Mestre Gorbadoc, como sempre fez depois de seu casamento (tinha um fraco por comida e o Velho Gorbadoc mantinha uma mesa bastante generosa).

E saíram para andar de barco no rio Brandevin, e ele e sua esposa morreram afogados; e o pobre Sr. Frodo era apenas uma criança na época.

— Ouvi dizer que eles foram para a água depois do jantar e sob o luar — disse o Velho Noques —; e que foi o peso de Drogo que afundou o barco.

— E eu ouvi que ela o empurrou, e ele a puxou para dentro da água depois que ele tinha caído — disse Ruivão, o moleiro da Vila dos Hobbits.

— Você não deveria dar ouvidos a tudo o que falam, Ruivão — disse o Feitor, que não gostava muito do moleiro. — Não tem sentido ficar falando sobre empurrar e puxar. Os barcos são muito traiçoeiros até para aqueles que se sentam quietinhos sem procurar problemas.

De qualquer jeito, foi assim que o Sr. Frodo se tornou um órfão e ficou perdido, como se pode dizer, em meio àquele estranho povo da Terra dos Buques, e foi criado na Sede do Brandevin.

Aquilo geralmente já é um formigueiro de tão cheio. O velho Mestre Gorbadoc nunca teve menos do que duzentos parentes nas redondezas.

O Sr. Bilbo não poderia ter feito coisa melhor do que trazer o menino para morar entre gente decente.

— Mas acho que esse foi um golpe duro para aqueles Sacola-Bolseiros. Eles acharam que iam ficar com Bolsão na época em que ele foi embora e foi considerado morto.

E então ele volta, os manda sair, e continua vivendo e vivendo, sem parecer um dia mais velho, puxa vida! E, de repente, arranja um herdeiro e organiza toda a documentação necessária. Os Sacola-Bolseiros nunca vão entrar em Bolsão depois disso, ou pelo menos se espera que não.

— Tem um monte de dinheiro enfiado lá dentro, ouvi dizer — disse um estranho, um visitante que estava a negócios vindo de Grã Cava, na Quarta Oeste. — Todo o topo da colina está cheio de túneis recheados de baús de ouro e prata, e joias, pelo que ouvi dizer.

— Então você ouviu mais do que eu posso discutir — respondeu o Feitor. — Não sei de nada sobre joias.

O Sr. Bilbo não faz muita economia com seu dinheiro, e parece que não há falta dele; mas não sei nada sobre túneis. Vi o Sr. Bilbo quando voltou, mais ou menos sessenta anos atrás, quando eu era um menino.

Não fazia muito tempo que eu era aprendiz do velho Holman (ele era primo do meu pai), mas mesmo assim me pediu que fosse a Bolsão para ajudá-lo a evitar que as pessoas pisoteassem a grama e ficassem andando pelo jardim quando a toca estava à venda.

E, em meio a tudo isso, o Sr. Bilbo veio subindo a colina com um pônei, alguns sacos bem grandes e uns baús. Não duvido que estivessem em sua maioria cheios de tesouros que ele apanhou em lugares distantes, onde há montanhas de ouro, dizem por aí; mas não havia o bastante para encher túneis.

Mas o meu menino Sam deve saber mais sobre isso. Ele vive entrando e saindo de Bolsão. É louco por histórias de antigamente, isso ele é, e escuta todas as histórias do Sr. Bilbo. O Sr. Bilbo ensinou-lhe suas letras — sem querer causar maldade, veja bem, e espero que nenhuma maldade venha disso.

— Elfos e dragões! — digo eu pra ele. — Repolho com batatas é melhor para você e para mim. Não vá se misturar com negócios que não são para o seu bico, ou você vai arranjar problemas muito grandes para você — digo eu pra ele. E posso dizer para outros também — acrescentou, olhando para o estranho e para o moleiro.

Mas o Feitor não convenceu sua plateia. A lenda sobre a riqueza de Bilbo estava fixada de maneira muito firme nas mentes das gerações mais jovens de hobbits.

— Ah! Mas ele pode muito bem ter juntado mais ao que trouxe no início — argumentou o moleiro, representando a opinião geral. — Ele está sempre longe de casa. E reparem nas pessoas bizarras que vêm visitá-lo: anões que chegam à noite, e aquele velho mágico andarilho, Gandalf, e todo o resto. Você pode dizer o que quiser, Feitor, mas Bolsão é um lugar estranho, e as pessoas de lá são mais estranhas ainda.

— Você pode dizer o que quiser sobre coisas que não conhece melhor do que a história do barco, senhor Ruivão — retrucou o Feitor, apreciando ainda menos o moleiro do que de costume. — Se isso é ser estranho, então poderíamos ter mais estranheza por aqui.

Tem gente não muito longe daqui que não ofereceria uma caneca de cerveja a um amigo, nem se vivesse numa toca com paredes de ouro. Mas em Bolsão eles fazem as coisas direito.

O nosso Sam disse que todo mundo vai ser convidado para a festa, e vai haver presentes, vejam bem, presentes para todos — neste mesmo mês.

Aquele mesmo mês era setembro, e estava agradável como se poderia desejar.

Um ou dois dias depois se espalhou um rumor (provavelmente começado pelo informado Sam) de que iria haver fogos de artifício — fogos como não se via no Condado há mais de um século; na verdade, desde que o Velho Túk havia morrido.

Os dias se passaram e o dia se aproximava.

Uma carroça de aparência estranha, carregada de pacotes de aparência estranha, rodou numa noite até a Vila dos Hobbits e foi subindo a Colina até chegar a Bolsão. Os hobbits assustados espiavam de portas iluminadas com lamparinas, embasbacados.

Era conduzida por pessoas bizarras, que cantavam canções estranhas: anões com barbas longas e capuzes fundos. Alguns deles ficaram em Bolsão.

No final da segunda semana de setembro, uma charrete passou por Beirágua vinda da Ponte do Brandevin, em plena luz do dia. Um homem a conduzia, sozinho. Usava um chapéu azul, alto e pontudo, uma longa capa cinza e um cachecol prateado. Tinha uma longa barba branca e sobrancelhas densas que sobressaíam da borda do chapéu.

Crianças hobbits seguiram a charrete pelas ruas da Vila dos Hobbits e colina acima. Era um carregamento de fogos de artifício, como eles bem adivinharam.

Na porta da frente de Bilbo, o homem começou a descarregar: havia grandes pacotes de fogos de artifício de todos os tipos e formatos, cada um rotulado com um grande G vermelho e com uma runa élfica.

Essa era a marca de Gandalf, é claro, e o velho era Gandalf, o Mago, cuja fama no Condado se devia principalmente ao seu talento com fogos, fumaça e luzes.

Seu ofício real era muito mais difícil e perigoso, mas o pessoal do Condado não sabia nada sobre isso. Para eles, ele era apenas uma das atrações da festa.

Por isso a excitação das crianças hobbits.

— G de Grande! — gritavam elas, e o velho sorria.

Conheciam-no de vista, embora ele aparecesse na Vila dos Hobbits de vez em quando e nunca ficasse por muito tempo. Mas nem eles, nem os mais velhos dentre os velhos, tinham visto uma de suas exibições de fogos — elas agora pertenciam a um passado lendário.

Quando o velho, ajudado por Bilbo e alguns anões, terminou de descarregar, Bilbo distribuiu uns trocados; mas não houve nem um buscapé ou bombinha, para a decepção dos observadores.

— Saiam agora! — disse Gandalf. — Vocês vão ver bastante quando a hora chegar.

Depois desapareceu para dentro com Bilbo, e a porta foi fechada.

Os jovens hobbits ficaram olhando em vão para a porta por um tempo, e então foram embora, sentindo que o dia da festa nunca chegaria.

Dentro de Bolsão, Bilbo e Gandalf estavam sentados perto da janela aberta de uma pequena sala que dava para o oeste, sobre o jardim.

O fim de tarde estava claro e quieto. As flores brilhavam, vermelhas e douradas: bocas-de-leão, girassóis e nastúrcios que subiam pelas paredes verdes e espiavam pelas janelas redondas.

— Como o seu jardim está bonito! — disse Gandalf.

— É — disse Bilbo. — Eu gosto muito dele, e de todo o velho e querido Condado, mas acho que preciso de férias.

— Quer dizer então que você pretende continuar com seu plano?

— Pretendo. Tomei a decisão há alguns meses e não mudei de ideia.

— Muito bem. É melhor não dizer mais nada. Continue com seu plano — seu plano completo, veja bem — e espero que tudo saia da melhor maneira possível, para você e para todos nós.

— Espero que sim. De qualquer forma, quero me divertir na quinta-feira e fazer minha brincadeirinha.

— Me pergunto quem vai rir… — disse Gandalf, balançando a cabeça.

— Veremos — disse Bilbo.

No dia seguinte, charretes e mais charretes subiram a Colina. Pode ter havido alguma reclamação sobre “negócios locais”, mas, nessa mesma semana, Bolsão começou a desovar encomendas de todo tipo de provisão, mercadoria ou artigo de luxo que se pudesse conseguir na Vila dos Hobbits ou em Beirágua, ou em qualquer outro lugar nas redondezas.

As pessoas ficaram entusiasmadas e começaram a marcar os dias no calendário, e vigiavam o carteiro com ansiedade, esperando convites.

Em breve, os convites começaram a se espalhar, e o correio da Vila dos Hobbits ficou entupido. Choveram cartas no correio de Beirágua, e carteiros auxiliares voluntários foram requisitados.

Em fluxo constante, subiam a Colina carregando centenas de variações polidas de “Agradeço o convite e confirmo minha presença”.

Um aviso apareceu no portão de Bolsão:

É PROIBIDA A ENTRADA DE PESSOAS QUE NÃO VENHAM TRATAR DOS PREPARATIVOS DA FESTA.

Mesmo a entrada daqueles que estavam, ou fingiam estar, tratando dos preparativos da festa era raramente permitida.

Bilbo estava ocupado: escrevendo convites, checando respostas, embrulhando presentes e fazendo alguns preparativos particulares.

Desde a chegada de Gandalf, ele havia sumido de vista.

Um dia de manhã, os hobbits acordaram e viram o grande campo ao sul da porta de frente de Bilbo cheio de cordas e paus para barracas e pavilhões.

Uma entrada especial foi aberta na ladeira que levava até a estrada, e degraus largos e um grande portão branco foram construídos ali.

As três famílias hobbits da Rua do Bolsinho, vizinha ao campo, ficaram extremamente interessadas e, em geral, sentiram inveja.

O velho Feitor Gamgi até parou de fingir que trabalhava em seu jardim.

As barracas começaram a ser levantadas. Havia um pavilhão especialmente grande, tão grande que a árvore que crescia no campo cabia direitinho dentro dele e se erguia altaneira próxima a um canto, na cabeceira da mesa principal.

Lanternas foram penduradas em todos os seus galhos.

Mais promissor ainda (para as mentes dos hobbits): uma enorme cozinha a céu aberto foi construída no canto norte do campo.

Um batalhão de cozinheiros, de todas as hospedarias e restaurantes num raio de milhas, chegou para ajudar os anões e outras pessoas estranhas que estavam aquarteladas em Bolsão.

A agitação chegou ao máximo.

Então o céu ficou cheio de nuvens. Foi na quarta-feira, véspera da festa.

A ansiedade era grande.

A quinta-feira, 22 de setembro, finalmente chegou.

O sol se levantou, as nuvens desapareceram, bandeiras foram desfraldadas e a diversão começou.

Bilbo Bolseiro chamava aquilo de festa, mas na verdade era uma variedade de entretenimentos reunidos num só.

Praticamente todos os que moravam ali por perto foram convidados. Muito poucos foram esquecidos por acidente, mas, como vieram de qualquer jeito, não se importaram. Muitas pessoas de outras partes do Condado também foram convidadas; e houve até algumas que vieram de regiões fora dos limites.

Bilbo recebeu em pessoa os convidados (e agregados) no novo portão branco. Distribuiu presentes para todos e mais alguns — estes eram aqueles que saíam por uma porta lateral e entravam de novo pelo portão.

Os hobbits dão presentes para outras pessoas em seus aniversários. Em geral não muito caros, e não tão generosos como nesta ocasião; mas esse sistema não era ruim. Na verdade, na Vila dos Hobbits e em Beirágua quase todos os dias alguém fazia aniversário, de modo que todos os hobbits tinham uma grande chance de ganhar no mínimo um presente, pelo menos uma vez por semana.

Mas nunca se cansavam de presentes.

Nessa ocasião, os presentes foram inusitadamente bons. As crianças hobbit estavam tão excitadas que por um tempo quase se esqueceram de comer.

Havia brinquedos que eles nunca tinham visto antes, todos lindos e alguns obviamente mágicos.

Muitos deles, na verdade, encomendados um ano antes, tinham percorrido todo o caminho vindo da Montanha e de Valle, e eram produtos genuínos feitos por anões.

Quando todos os convidados tinham recebido as boas-vindas e estavam finalmente do lado de dentro, houve canções, danças, música, jogos e, é claro, comida e bebida.

Houve três refeições oficiais: almoço, chá e jantar (ou ceia). Mas o almoço e o chá foram marcados pelo fato de que nesses momentos todos estavam sentados e comendo juntos. Em outros momentos havia simplesmente montes de pessoas comendo e bebendo — continuamente, das onze até as seis e meia, quando os fogos de artifício começaram.

Os fogos eram de Gandalf — não foram apenas trazidos por ele, mas projetados e fabricados por ele; e os efeitos especiais, cenários e foguetes era ele quem controlava.

Mas também houve farta distribuição de buscapés, bombinhas, fósos coloridos, tochas, velas-de-anões, fontes-élficas, fogos-de-orcs e rojões. Era tudo soberbo.

A arte de Gandalf havia se aperfeiçoado com o passar dos anos.

Havia foguetes imitando o voo de pássaros cintilantes cantando com vozes doces. Havia árvores verdes com troncos de fumaça escura: suas folhas se abriam como uma primavera inteira que florescesse num segundo, e seus ramos brilhantes derrubavam flores de luz sobre os hobbits atônitos, desaparecendo com um cheiro doce um pouco antes que pudessem tocar seus rostos voltados para o céu.

Havia montes de borboletas que voavam por entre as árvores; havia pilares de fogos coloridos que subiam e se transformavam em águias, em caravelas, ou numa falange de cisnes voadores; havia uma tempestade vermelha e uma chuva de gotas amarelas; houve uma floresta de lanças de prata que surgiram repentinamente no céu com um grito como um exército em batalha, e caíram no Água com um chiado como uma centena de cobras incandescentes.

E houve também uma última surpresa em homenagem a Bilbo, que assustou os hobbits além da conta, como era a intenção de Gandalf.

As luzes se apagaram. Uma grande fumaça subiu. Tomou a forma de uma montanha vista à distância, e começou a brilhar no topo. Soltava chamas verdes e vermelhas. Lá de dentro saiu um dragão de um vermelho dourado — não do tamanho de um dragão real, mas terrivelmente parecido com um dragão real: saía fogo de suas mandíbulas e os olhos penetrantes olhavam para baixo; houve um rugido, e por três vezes ele zuniu sobre as cabeças da multidão.

Todos se inclinaram e muitos caíram de cara no chão.

O dragão passou como um trem expresso, virou uma cambalhota, e explodiu sobre Beirágua com um estrondo ensurdecedor.

— Este é o sinal para a ceia! — disse Bilbo.

O sofrimento e o medo desapareceram imediatamente, e os hobbits prostrados se levantaram num segundo.

Havia uma ceia esplêndida para todos; para todos, quer dizer, com a exceção daqueles convidados para o jantar especial em família. Este aconteceu no grande pavilhão onde estava a árvore.

Os convites foram limitados a doze dúzias (um número também chamado de uma Grosa, embora a palavra fosse considerada inadequada para se referir a pessoas); e os convidados foram selecionados de todas as famílias com as quais Bilbo e Frodo tinham parentesco, havendo mais uns poucos amigos que não eram parentes (como Gandalf).

Muitos hobbits jovens foram incluídos, e estavam presentes com a permissão dos pais; pois os hobbits eram liberais com suas crianças em se tratando de ficar acordado até tarde, especialmente quando havia uma chance de conseguir para elas uma refeição de graça. Criar hobbits era muito dispendioso.

Havia muitos Bolseiros e Boffins, e também muitos Túks e Brandebuques; havia vários Fossadores (parentes da avó de Bilbo Bolseiro), e vários Roliços (relacionados ao seu avô Túk) e uma seleção de Covas, Bolgers, Justa-correias, Texugos, Boncorpos, Corneteiros e Pé-soberbos.

Alguns desses tinham apenas uma ligação distante com Bilbo, e outros raramente tinham visitado a Vila dos Hobbits antes, pois moravam em cantos remotos do Condado.

Os Sacola-bolseiros não foram esquecidos. Otho e sua esposa Lobélia estavam presentes. Não gostavam de Bilbo e detestavam Frodo, mas o convite era tão magnífico, escrito em tinta dourada, que eles acharam impossível recusar.

Além disso, Bilbo, seu primo, viera se especializando em comida por muitos anos, e sua mesa gozava de alta reputação.

Todos os cento e quarenta e quatro convidados esperavam por um banquete agradável, embora estivessem com um certo medo do discurso pós-ceia de seu anfitrião (um quesito inevitável).

Era provável que ele inoportunamente começasse a recitar trechos do que chamava de poesia e quem sabe, depois de um ou dois copos, pudesse aludir às absurdas aventuras de sua misteriosa viagem.

Os hóspedes não ficaram decepcionados: tiveram um banquete muito agradável, na verdade um entretenimento interessante: lauto, abundante, variado e prolongado.

As compras de provisões caíram quase a zero em todo o distrito nas semanas seguintes; mas como as provisões de Bilbo exauriram os estoques das lojas, adegas e armazéns num raio de várias milhas, isso não teve muita importância.

Depois do banquete (mais ou menos) veio o Discurso.

A maioria dos convidados estava, entretanto, numa disposição tolerante, e naquele estágio delicioso que eles chamavam de “encher os cantos”. Estavam bebendo suas bebidas favoritas, e mordiscando suas iguarias preferidas, e seus receios foram esquecidos.

Estavam preparados para ouvir qualquer coisa, e aplaudir a cada ponto final.

— Queridos convidados — começou Bilbo, levantando de sua cadeira.

“Escutem! Escutem! Escutem!” — gritaram eles, e continuaram repetindo isso em coro, parecendo relutantes em seguir seu próprio conselho.

Bilbo saiu de seu lugar e subiu numa cadeira perto da árvore iluminada. A luz das lanternas caía-lhe sobre o rosto radiante; os botões dourados brilhavam sobre o colete bordado. Todos podiam vê-lo em pé, acenando uma mão no ar, e com a outra no bolso da calça.

— Meus queridos Bolseiros e Boffins — começou de novo; — e meus queridos Túks e Brandebuques e Fossadores e Roliços e Covas e Corneteiros e Bolgers, Justa-correias, Boncorpos, Texugos e Pé-soberbos.

— Pé-soberbos! — gritou um hobbit velho do fundo do pavilhão.

— Pé-soberbos — repetiu Bilbo. — E também meus bons Sacola-bolseiros, a quem finalmente dou boas-vindas novamente em Bolsão. Hoje é meu centésimo décimo primeiro aniversário — hoje chego aos onzenta e um!

“Viva! Viva! Que essa data se repita por muitos anos!” — gritaram todos, e bateram nas mesas alegremente.

Espero que estejam se divertindo tanto quanto eu.

Na verdade, em um canto alguns dos Túks e Brandebuques jovens, supondo que o Tio Bilbo tivesse terminado (uma vez que já tinha dito tudo o que era necessário), agora improvisavam uma orquestra, e começavam a tocar uma toada alegre e dançante. Mestre Everard Túk e a Srta. Melilot Brandebuque subiram numa mesa e com sinos nas mãos começaram a dançar a Ciranda do Pulo: uma dança bonita, mas bastante vigorosa.

Mas Bilbo não tinha terminado. Pegando uma corneta de uma criança ao seu lado, soprou forte três vezes. O barulho silenciou.

— Eu não vou me demorar muito — gritou ele.

Aplausos de toda a platéia.

— Chamei todos vocês por um motivo.

Alguma coisa no jeito como ele disse isso causou uma certa impressão. Fez-se quase silêncio, e um ou dois Túks aguçaram os ouvidos.

— Na verdade, por três motivos! Primeiramente, para dizer a vocês que gosto imensamente de todos, e que onzenta e um anos é um tempo curto demais para viver entre hobbits tão excelentes e admiráveis.

Tremenda explosão de aprovação.

— Eu não conheço metade de vocês como gostaria; e gosto de menos da metade de vocês a metade do que vocês merecem.

Isso foi inesperado e muito difícil.

Houve alguns aplausos esparsos, mas a maioria deles estava tentando descobrir se aquilo era um elogio.

— Em segundo lugar. Para comemorar meu aniversário.

Aplausos novamente.

— Devo dizer NOSSO aniversário. Pois hoje, é claro, é o aniversário de meu herdeiro e sobrinho Frodo. Ele se torna maior de idade e passa a ter acesso à herança hoje.

Alguns aplausos perfunctórios dos mais velhos, e alguns gritos de “Frodo! Frodo! Felizardo!” dos mais novos. Os Sacola-bolseiros franziram a testa.

— Juntos perfazemos cento e quarenta e quatro anos. O número dos convidados foi escolhido para combinar com esse total notável — uma Grosa, se me permitem usar a expressão.

Nenhum aplauso. Aquilo era ridículo.

— Hoje também é, se me permitem que me refira à história antiga, o aniversário de minha chegada de barril a Esgaroth, no Lago Comprido. Eu tinha apenas cinquenta e um anos naquele tempo, e os aniversários não pareciam tão importantes. O banquete foi esplêndido, entretanto, embora eu estivesse com uma forte gripe.

Agora eu repito: Muito obrigado por virem à minha festinha.

Silêncio obstinado.

— Em terceiro lugar e finalmente — disse ele —, quero fazer um COMUNICADO.

Disse tão alto que todos se endireitaram.

— Sinto informá-los de que... o FIM chegou. Estou indo embora. JÁ. ADEUS!

Desceu da cadeira e desapareceu.

Houve um clarão de luz. Quando abriram os olhos, Bilbo não estava mais lá.

Cento e quarenta e quatro hobbits pasmos ficaram em silêncio.

Logo começaram a falar todos ao mesmo tempo.

A opinião geral era de que a brincadeira tinha sido de muito mau gosto. Foi necessário trazer mais comida e bebida.

“Sempre disse que ele era louco” foi o comentário mais comum.

Frodo era o único que não dizia nada. Ficou sentado em silêncio ao lado da cadeira vazia de Bilbo.

Tinha gostado da brincadeira, mas também se sentia estranho.

Depois de um tempo, levantou-se, bebeu à saúde de Bilbo e saiu discretamente.

Quanto a Bilbo, já em casa, tirou a roupa de festa e vestiu roupas velhas. Colocou um cinto com uma pequena espada e pegou uma capa antiga.

Retirou de um cofre um pacote, um livro e um envelope.

Colocou o anel dentro do envelope, junto com uma corrente, e o endereçou a Frodo.

Mas hesitou.

Nesse momento, Gandalf entrou.

— Alô! — disse Bilbo.

— Fico feliz em encontrá-lo visível — respondeu Gandalf.

Conversaram sobre o plano. Bilbo queria ir embora definitivamente.

— Estou velho — disse ele. — Sinto-me esticado... como manteiga espalhada num pedaço grande demais de pão.

Gandalf observou-o com atenção.

— Não parece certo.

Bilbo explicou que queria ver montanhas novamente e terminar seu livro.

— Vou deixar tudo para Frodo.

Gandalf perguntou:

— Tudo? O anel também?

Bilbo hesitou.

— Está no envelope... aqui no bolso.

— Não é estranho isso?

Gandalf respondeu com calma:

— Acho que você deveria deixá-lo para trás.

Bilbo ficou irritado.

— Por que eu deveria?

Sua voz mudou, ficando desconfiada.

— Você vive implicando com meu anel.

Gandalf respondeu firmemente:

— Eu precisava saber a verdade. Anéis mágicos são perigosos.

E completou:

— Você já ficou com ele tempo suficiente. Não vai mais precisar dele, Bilbo.

Bilbo ficou vermelho, e havia um brilho furioso em seu olhar. A expressão amigável se fez tensa.

— Por que não? — gritou ele. — E que negócio é esse de você saber o que eu faço com minhas próprias coisas? O anel é meu. Eu o achei. Ele veio até mim.

— Sim, sim — disse Gandalf — mas você não precisa ficar furioso.

— Se estou furioso, a culpa é sua — disse Bilbo. — Ele é meu, estou dizendo. Meu. Meu precioso. Sim, meu precioso.

O rosto do mago permaneceu grave e atento. Apenas uma faísca em seus olhos profundos demonstrava que estava alarmado.

— Ele já foi chamado assim antes — disse ele. — Mas não por você.

— Mas eu estou dizendo isso agora. E por que não? Até mesmo Gollum disse a mesma coisa uma vez. Agora o anel não é dele, é meu. E devo dizer que vou ficar com ele.

Gandalf se levantou, e sua voz tornou-se ríspida.

— Você vai ser um tolo se fizer isso, Bilbo. O anel se apoderou de você e isso foi longe demais. Largue dele! E então você poderá ir também, e ser livre.

— Eu vou fazer como quiser e irei como desejar — disse Bilbo, obstinado.

— Agora, meu querido hobbit — disse Gandalf —, por toda sua longa existência nós fomos amigos. Faça como prometeu: desista dele!

— Bem, se você quer o anel para você, diga logo! — gritou Bilbo. — Mas você não vai tê-lo. Eu não vou dar o meu precioso para ninguém.

Sua mão buscou o punho da pequena espada.

Os olhos de Gandalf brilharam.

— Logo será a minha vez de ficar furioso — disse ele. — Se você disser isso de novo, eu fico. E então verá Gandalf, o Cinzento, se revelar.

Ele deu alguns passos à frente, e parecia crescer, tornando-se ameaçador. Sua sombra encheu toda a sala.

Bilbo recuou até a parede, respirando com dificuldade, a mão presa ao bolso.

Por um momento, ficaram em silêncio, encarando-se. O ar parecia vibrar.

Lentamente, Bilbo começou a tremer.

— Não sei o que aconteceu com você, Gandalf — disse ele. — Você nunca foi assim antes. O que está acontecendo? Ele é meu, não é? Eu o achei... e Gollum teria me matado se eu não o tivesse guardado. Não sou um ladrão.

— Eu nunca chamei você de ladrão — respondeu Gandalf com calma. — E também não sou ladrão. Não estou tentando roubar você, mas ajudá-lo. Eu queria que você confiasse em mim.

A sombra desapareceu. Gandalf voltou a parecer apenas um velho cansado.

Bilbo passou a mão nos olhos.

— Sinto muito... — disse ele. — Mas me senti estranho. E, apesar disso, seria um alívio não ter mais que me preocupar com ele. Ele cresceu na minha mente... às vezes sinto como se fosse um olho me observando.

Ele suspirou.

— Estou sempre querendo colocá-lo e desaparecer... verificando se ele ainda está comigo. Não consigo me decidir.

— Então confie em mim — disse Gandalf. — Já está decidido. Vá embora e deixe-o aqui. Dê-o a Frodo.

Bilbo ficou imóvel por um instante. Depois soltou um longo suspiro.

— Está bem — disse ele com esforço. — Eu vou.

Deu um pequeno sorriso triste.

— Afinal, toda essa festa foi por causa disso... facilitar as coisas para entregar o anel. Seria uma pena desperdiçar tudo.

— Na verdade, destruiria o único motivo da festa — disse Gandalf.

— Muito bem — respondeu Bilbo. — Ele vai para Frodo, com todo o resto.

Respirou fundo.

— E agora devo ir... ou alguém vai me encontrar.

Ele pegou o saco e caminhou em direção à porta.

— Você ainda está com o anel no bolso — disse Gandalf.

— É mesmo! — exclamou Bilbo. — E o testamento também. Melhor você entregar tudo por mim.

— Não — disse Gandalf. — Coloque-o sobre a lareira. Estará seguro lá.

Bilbo tirou o envelope, mas, ao tentar colocá-lo, sua mão recuou de repente. O pacote caiu no chão.

Antes que pudesse pegá-lo, Gandalf se adiantou e o colocou sobre a lareira.

Por um instante, um espasmo de raiva passou pelo rosto de Bilbo — mas logo desapareceu, dando lugar a um ar de alívio.

Ele riu.

— Bem... é isso — disse. — Agora vou indo.

Saíram para o corredor. Bilbo pegou sua bengala favorita e assobiou.

Três anões apareceram de outros cômodos.

— Está tudo pronto? — perguntou Bilbo. — Tudo empacotado e etiquetado?

Eles assentiram.

Bilbo sorriu.

— Então vamos.

E saiu pela porta da frente.

A noite estava agradável, e o céu negro estava salpicado de estrelas. Bilbo olhou para cima, sentindo o ar fresco.

— Que bom! Que bom estar partindo novamente, partindo na Estrada com os anões! É isso que eu realmente quis por muitos anos! Adeus! — disse ele, olhando para sua velha casa e inclinando-se para a porta. — Adeus, Gandalf.

— Adeus por enquanto, Bilbo. Cuide-se bem! Você tem idade suficiente, e talvez também sabedoria.

— Cuide-se! Eu não me preocupo. Não se preocupe comigo. Estou mais feliz que nunca, e isso significa muita felicidade. Mas chegou a hora. Meus pés estão sendo impulsionados de novo, finalmente — acrescentou.

Então, em voz baixa, quase para si mesmo, começou a cantar suavemente no escuro:

A Estrada em frente vai seguindo
Deixando a porta onde começa.
Agora longe já vai indo,
Devo seguir, nada me impeça;
Em seu encalço vão meus pés,
Até a junção com a grande estrada,
De muitas sendas através.
Que vem depois? Não sei mais nada.

Ele parou por um momento, em silêncio.

Então, sem mais uma palavra, deu as costas às luzes e às vozes vindas dos campos e das barracas. Seguido por seus três companheiros, contornou o jardim e desceu rapidamente o longo caminho. Pulou a cerca-viva onde era mais baixa e atravessou os campos, desaparecendo na noite como o sussurro do vento na relva.

Gandalf ficou olhando por um tempo, até que Bilbo sumiu na escuridão.

— Adeus, meu querido Bilbo… até nosso próximo encontro — disse suavemente.

Depois entrou na casa.

Frodo chegou logo em seguida e encontrou Gandalf sentado no escuro, mergulhado em pensamentos.

— Ele se foi? — perguntou.

— Sim — respondeu Gandalf. — Finalmente ele se foi.

— Eu esperava até hoje que tudo fosse apenas uma brincadeira — disse Frodo. — Mas no fundo eu sabia que ele realmente queria ir. Queria ter chegado antes… só para vê-lo partir.

— Acho que ele preferia sair sem ser visto — disse Gandalf. — Não se preocupe. Ele ficará bem… agora. Ele deixou um pacote para você. Ali está.

Frodo pegou o envelope da lareira e o observou, mas não o abriu.

— Nele você encontrará o testamento e outros documentos — disse o mago. — Você agora é o dono de Bolsão. E também… há um anel de ouro.

— O anel! — exclamou Frodo. — Ele me deixou o anel? Por quê?

— Pode ser útil… ou não — disse Gandalf. — Eu não o usaria, se fosse você. Guarde-o em segredo. Agora vou dormir.

Como novo dono de Bolsão, Frodo sentiu que era seu dever se despedir dos convidados.

Rumores já se espalhavam pelo campo, mas ele apenas repetia:

— Tudo será esclarecido de manhã.

Por volta da meia-noite, carruagens começaram a levar embora os convidados mais importantes. Uma a uma, desceram a colina, cheias de hobbits satisfeitos… mas ainda murmurando.

Outros foram levados em carrinhos de mão, após terem bebido além da conta.

A noite passou devagar.

O sol nasceu.

Os hobbits acordaram tarde. A manhã avançou enquanto trabalhadores desmontavam tudo: pavilhões, mesas, cadeiras, lanternas, utensílios e restos da festa.

Logo depois, começaram a chegar mais pessoas — convidadas ou não.

Ao meio-dia, uma multidão já ocupava Bolsão.

Frodo estava na entrada, sorrindo, mas claramente cansado.

A todos dizia a mesma coisa:

— O Sr. Bilbo Bolseiro foi embora… e, pelo que sei, para sempre.

Alguns eram convidados a entrar, pois havia presentes deixados para eles.

No corredor, havia pilhas de objetos com etiquetas.

Muitos presentes traziam mensagens curiosas.

Para Adelard Túk, e SOMENTE PARA ELE — em um guarda-chuva.

Para Dora Bolseiro, em memória de uma LONGA correspondência — num cesto de lixo.

Para Milo Covas, esperando que seja útil — numa caneta e tinta.

Para Angélica — um espelho.

Para Hugo Justa-Correia — uma estante vazia.

E para Lobélia Sacola-bolseiro — um estojo de colheres de prata.

Os presentes causavam risos… e alguns aborrecimentos.

A casa estava cheia de objetos acumulados ao longo dos anos, e agora começava a ser esvaziada.

Os hobbits mais pobres foram os mais beneficiados.

O velho Feitor Gamgi recebeu batatas, ferramentas e um colete novo.

Rory Brandebuque ganhou vinho antigo e ficou satisfeito.

Mas nem tudo foi tranquilo.

Um rumor começou: que tudo estava sendo distribuído gratuitamente.

Logo, a casa ficou tomada por curiosos e aproveitadores.

Etiquetas desapareceram. Pessoas discutiam. Alguns tentavam roubar pequenos objetos.

A confusão aumentou.

Foi então que os Sacola-bolseiros chegaram.

Frodo havia se retirado por um momento e deixou Merry cuidando da situação.

— Queremos ver Frodo — exigiu Lobélia.

Depois de muita espera, foram levados até ele.

Frodo os recebeu educadamente, embora visivelmente cansado.

Eles começaram a negociar objetos sem etiqueta.

— Não estão à venda — respondeu Frodo.

— Isso é suspeito — disse Otho. — Quero ver o testamento.

Ele leu o documento com atenção.

— Tudo legal… infelizmente — resmungou.

— Sessenta anos esperando… para nada — disse, irritado.

Mas Lobélia ainda não tinha terminado.

Frodo acabou tendo que expulsá-la, depois de descobrir objetos escondidos em seu guarda-chuva.

— Você vai se arrepender disso! — gritou ela ao sair. — Você nem é um verdadeiro Bolseiro!

— Foi um elogio — disse Merry, depois que a porta se fechou.

Mesmo depois disso, a confusão continuou.

Alguns tentaram cavar as adegas em busca de tesouros.

A lenda do ouro de Bilbo ainda fascinava a todos.

Exausto, Frodo finalmente disse:

— Está na hora de fechar tudo, Merry. Não abra a porta para mais ninguém.

Sentou-se para tomar chá.

Mal havia começado quando ouviu uma batida na porta.

Ignorou.

A batida veio novamente, mais forte.

De repente, o rosto de Gandalf apareceu na janela.

— Se não me deixar entrar, Frodo, eu arrombo essa porta — disse ele.

— Gandalf! Já vou! — respondeu Frodo, correndo.

Abriu a porta.

— Pensei que fosse Lobélia.

— Então eu te perdôo — disse Gandalf, entrando. — Vi ela indo embora… com uma cara de azedar leite.

Frodo suspirou.

— Ela quase me fez usar o anel… eu queria desaparecer.

Gandalf ficou sério.

— Não faça isso. Tome cuidado com esse anel, Frodo. Foi por isso que vim.

Frodo olhou para ele.

— Sobre o quê?

— O que você já sabe? — perguntou Gandalf.

— Apenas o que Bilbo me contou. A história verdadeira.

— Interessante — disse Gandalf. — E o que você achou?

— Achei estranho ele ter mentido antes. Não era do feitio dele.

— Coisas estranhas acontecem com quem possui esse tipo de objeto — disse o mago. — Considere isso um aviso.

Frodo ficou em silêncio.

— Esse anel pode ter mais poderes do que você imagina — continuou Gandalf.

— Não entendo.

— Nem eu completamente — respondeu ele. — Mas escute meu conselho: use-o o menos possível. Ou não use. E, acima de tudo, mantenha-o em segredo.

Frodo olhou para ele, intrigado.

— Você parece preocupado. Com o quê?

— Não tenho certeza — disse Gandalf. — Por isso não direi mais nada... por enquanto.

Ele então se levantou.

— Vou partir imediatamente.

— Já?! — disse Frodo, surpreso. — Pensei que ficaria mais tempo.

— Meus planos mudaram. Posso ficar ausente por um bom tempo. Mas voltarei.

Ele fez uma pausa.

— Quando você menos esperar.

Frodo o acompanhou até a porta.

— Adeus, então.

— Adeus. Cuide-se bem — disse Gandalf.

O mago partiu pela estrada, sua figura logo desaparecendo no crepúsculo.

Frodo ficou observando até não vê-lo mais.

E por muito tempo... não o veria novamente.
`
  },
  {
    id: "3",
    title: "Duna",
    author: "Frank Herbert",
    category: "Ficção",
    rating: 4.8,

    image: require("../assets/capas/capa_duna.jpg"),

    description:
      "Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre.Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert ",

    chapter1: `Capítulo 1

Na semana anterior à partida para Arrakis, quando a agitação dos últimos preparativos chegara a um furor quase insuportável, uma velha veio visitar a mãe do menino Paul.

Era uma noite quente no Castelo Caladan, e as pedras antigas que serviam de lar à família Atreides havia vinte e seis gerações exalavam aquela sensação de suor resfriado que costumavam adquirir pouco antes do tempo virar.

Fizeram a velha entrar pela porta lateral, no fim da passagem abobadada perto do quarto de Paul, e deram-lhe a oportunidade de espiar o jovem deitado em sua cama.

À meia-luz de uma luminária suspensa, o menino, acordado, viu uma volumosa forma feminina parada à porta, um passo à frente de sua mãe. A velha parecia uma bruxa: os cabelos eram um emaranhado como teias de aranha, e os olhos cintilavam como joias.

— Ele não é pequeno para a idade, Jéssica? — perguntou a velha, com uma voz áspera, como um baliset desafinado.

— É fato conhecido que os Atreides começam a crescer tarde, Vossa Reverência — respondeu a mãe de Paul, com seu suave contralto.

— Foi o que ouvi... foi o que ouvi — chiou a velha. — Mas ele já tem 15 anos.

— Sim, Vossa Reverência.

— Está acordado e nos ouve — disse a velha. — O tratantezinho dissimulado.

Ela riu baixinho.

— Mas a realeza precisa ser dissimulada. E se ele for realmente o Kwisatz Haderach... bem...

Nas sombras da cama, Paul manteve os olhos semicerrados. Os olhos da velha pareciam crescer e brilhar ao encará-lo.

— Durma bem, seu tratantezinho dissimulado — disse ela. — Amanhã você precisará de todas as suas faculdades para enfrentar meu gom jabbar.

Então ela se foi, empurrando a mãe dele para fora e fechando a porta com firmeza.

Paul permaneceu deitado, acordado, perguntando-se:

O que é um gom jabbar?

Em meio à confusão daquele período de mudança, a velha fora a coisa mais estranha que já vira.

Vossa Reverência.

E a forma como falara com sua mãe, Jéssica, como se fosse uma criada comum — e não uma Bene Gesserit, concubina de um duque e mãe do herdeiro.

Será o gom jabbar algo de Arrakis que preciso conhecer antes de ir?, pensou.

Movendo os lábios, repetiu:

gom jabbar... Kwisatz Haderach...

Ele tivera de aprender tantas coisas. Arrakis era tão diferente de Caladan que as novas informações o deixavam tonto.

Arrakis.
Duna.
Planeta Deserto.

Thufir Hawat, o Mestre dos Assassinos de seu pai, explicara tudo: os Harkonnen, seus inimigos mortais, haviam dominado Arrakis por oitenta anos, explorando a especiaria mélange para a Companhia CHOAM. Agora partiam, e a Casa Atreides assumiria o controle.

Uma vitória aparente.

Mas, segundo Hawat, um perigo mortal se escondia sob isso.

— O homem popular incita a inveja dos poderosos — dissera ele.

Arrakis.
Duna.
Planeta Deserto.

Paul adormeceu e sonhou com uma caverna arrakina, cheia de pessoas em silêncio, iluminadas por uma luz fraca. Havia algo de solene ali, como uma catedral. Ele ouvia o som de água pingando.

Pinga... pinga... pinga...

Mesmo no sonho, sabia que se lembraria.

E lembraria.

O sonho desvaneceu.

Paul despertou em sua cama, pensando.

O Castelo Caladan, sem amigos de sua idade, talvez não fosse algo a lamentar tanto ao partir. O dr. Yueh lhe dissera que Arrakis era diferente — que lá existia um povo livre, os fremen, vivendo à margem do deserto.

Arrakis.
Duna.
Planeta Deserto.

Sentindo-se tenso, Paul começou um exercício mentecorporal ensinado por sua mãe.

Respiração controlada. Consciência focalizada.

Percepção flutuante.

A mente guiava o corpo:

o sangue fluindo...
a consciência expandindo...
o instinto sendo superado...
o ser humano vendo além do imediato...
todas as coisas sendo impermanentes...

A lição repetia-se em ciclos.

Quando a luz da aurora tocou a janela, Paul a percebeu através das pálpebras e abriu os olhos.

Ouviu o castelo despertar.

A porta se abriu, e sua mãe apareceu, com os cabelos presos e o rosto sereno.

— Já está acordado — disse ela. — Dormiu bem?

— Sim.

Paul observou a mãe da cabeça aos pés e percebeu um leve vestígio de tensão em seus ombros enquanto ela escolhia suas roupas nas prateleiras do closet. Outra pessoa talvez não notasse, mas ela o treinara nas minúcias da observação da doutrina Bene Gesserit.

Ela se virou, segurando um paletó quase formal. No bolso superior, destacava-se o gavião vermelho, símbolo dos Atreides.

— Vista-se rápido — disse ela. — A Reverenda Madre está esperando.

— Sonhei com ela uma vez — comentou Paul. — Quem é ela?

— Foi minha professora na escola da ordem Bene Gesserit. Agora é a Proclamadora da Verdade do imperador. E, Paul... — ela hesitou. — Fale-lhe de seus sonhos.

— Farei isso. Foi por causa dela que ganhamos Arrakis?

— Nós não ganhamos Arrakis — disse Jéssica, sacudindo o pó de uma calça e colocando-a ao lado do paletó. — Não faça a Reverenda Madre esperar.

Paul sentou-se na cama, abraçando os joelhos.

— O que é um gom jabbar?

Mais uma vez, o treinamento revelou a hesitação quase invisível da mãe. Ele interpretou aquilo como medo.

Jéssica caminhou até a janela, abriu as cortinas e olhou para o monte Syubi, além dos pomares.

— Você saberá o que é o gom jabbar daqui a pouco — disse ela.

Paul ouviu o medo na voz dela e ficou surpreso.

— A Reverenda Madre está esperando na sala — continuou Jéssica, sem se virar. — Por favor, apresse-se.

A Reverenda Madre Gaius Helen Mohiam observava os dois enquanto se aproximavam. Sentada em uma cadeira atapetada, ignorava a vista das janelas abertas para o rio e os campos.

A idade pesava sobre ela naquela manhã. Estava irritada. A viagem espacial e a dependência da Guilda a desagradavam profundamente.

Mas o dever exigia sua presença.

Maldita Jéssica, pensou. Se ao menos tivesse nos dado uma menina.

Jéssica parou a três passos e fez uma leve mesura. Paul inclinou-se com a reverência formal que aprendera.

— Ele é cauteloso, Jéssica — disse a velha.

A mão de Jéssica apertou o ombro de Paul. Por um instante, ele sentiu o medo pulsar.

— Assim foi treinado, Vossa Reverência.

Do que ela tem medo?, pensou Paul.

A velha analisou Paul rapidamente: o rosto oval da mãe, a ossatura forte, os cabelos negros do pai, os olhos verdes intensos.

— Ensinar é uma coisa — disse ela. — O ingrediente fundamental é outro. Veremos.

Ela lançou um olhar duro para Jéssica.

— Saia. Vá praticar a meditação da paz.

Jéssica hesitou.

— Vossa Reverência, eu...

— Você sabe que isso deve ser feito.

Paul olhou para a mãe, confuso.

Ela se recompôs.

— Sim... claro.

— Paul — disse ela, respirando fundo. — Este teste é importante para mim.

— Teste? — perguntou ele.

— Não se esqueça de que é filho de um duque.

Ela saiu da sala, e a porta se fechou com firmeza.

Paul voltou-se para a velha, contendo a raiva.

— É assim que se trata lady Jéssica? Como uma criada?

Um leve sorriso surgiu nos lábios enrugados da mulher.

— Ela foi minha criada por catorze anos — disse. — E era muito boa. Agora, venha aqui.

A ordem atingiu Paul como um golpe. Ele obedeceu antes de pensar.

Ela retirou de suas vestes um cubo metálico verde, com um dos lados aberto, revelando um interior negro e assustador.

— Está vendo isto? — perguntou.

Paul assentiu.

— Coloque sua mão direita na caixa.

O medo o atingiu de imediato. Ele tentou recuar.

— É assim que obedece à sua mãe? — disse a velha.

Paul encarou os olhos dela e, contra sua vontade, colocou a mão na caixa.

Sentiu primeiro o frio. Depois, uma sensação estranha, como se o interior o envolvesse.

A velha ergueu a outra mão. Algo metálico brilhou.

— Pare! — ordenou.

Paul congelou.

— Este é o gom jabbar — disse ela. — Uma agulha com veneno. Afaste-se, e você morre.

Ele tentou engolir em seco.

— O filho de um duque deve conhecer venenos — continuou ela. — Apresento-lhe um novo. Mata apenas animais.

O orgulho falou mais alto.

— Está sugerindo que sou um animal?

— Estou sugerindo que talvez seja humano.

Ela aproximou a agulha do pescoço dele.

— Não tente fugir. Sou velha, mas rápida.

— Quem é você? — sussurrou Paul. — Foi enviada pelos Harkonnen?

— Harkonnen? Não. Agora fique quieto.

O toque frio da agulha fez seu corpo querer recuar.

— Você passou no primeiro teste — disse ela. — Agora, escute: se tirar a mão da caixa, você morre. Se mantiver, viverá.

Paul respirou fundo.

— Se eu gritar, os criados virão.

— Não passarão por sua mãe — disse a velha. — Ela está guardando a porta. Ela passou pelo teste. Agora é sua vez.

A curiosidade começou a superar o medo.

Ele estava preso.

O gom jabbar em seu pescoço não permitia erro.

Então lembrou-se do ensinamento de sua mãe.

Não terei medo.
O medo mata a mente.
O medo é a pequena morte que leva à aniquilação total.

Enfrentarei meu medo.
Permitirei que passe por mim.

E quando passar...
restarei apenas eu.

Ele sentiu a calma voltar e disse:

— Vamos logo com isso, velha.

— Velha! — ela ralhou. — Você tem coragem, isso é inegável. Bem, veremos, meu senhor.

Ela se inclinou na direção dele e abaixou a voz.

— Você sentirá dor nessa mão dentro da caixa. Dor. Mas, se retirá-la, tocarei seu pescoço com meu gom jabbar... e a morte será imediata. Entendeu?

— O que há na caixa?

— Dor.

Ele sentiu o formigamento na mão aumentar e apertou os lábios.

A sensação virou coceira.

— Já ouviu falar de animais que roem a pata para escapar de uma armadilha? — disse a velha. — Um ser humano suportaria a dor e esperaria o momento certo para agir.

A coceira virou ardência.

— Por que está fazendo isso? — perguntou ele.

— Para determinar se você é humano. Fique quieto.

A dor aumentou.

Calor… mais calor… cada vez mais intenso.

Paul tentou mover os dedos, mas não conseguiu.

— Está queimando — murmurou.

— Silêncio!

A dor subiu pelo braço.

Seu corpo inteiro gritava para que ele retirasse a mão.

Mas havia o gom jabbar.

Dor.

Seu mundo se reduziu àquela sensação insuportável.

Ele imaginou a pele queimando, escurecendo, se desfazendo até restarem apenas ossos.

E então... parou.

A dor desapareceu de repente.

Paul tremia.

— Já basta — disse a velha. — Tire a mão da caixa.

Ele hesitou.

Então retirou a mão.

Não havia nada.

Nenhuma marca.

— Dor por indução nervosa — explicou ela. — Não mutilamos possíveis humanos.

Paul olhou a mão esquerda, onde as unhas haviam perfurado a pele.

— Você fez isso com minha mãe?

— Nós peneiramos as pessoas — disse ela. — Procuramos seres humanos.

— E tudo se resume à dor?

— A dor é apenas o eixo do teste.

Ela o observou.

— Você sabe quando alguém está dizendo a verdade?

— Sei.

Ela assentiu.

— Talvez você seja o Kwisatz Haderach. Sente-se.

— Prefiro ficar de pé.

— Você nos odeia um pouco, não?

Ela chamou:

— Jéssica!

A porta se abriu.

Jéssica entrou.

— Você deixou alguma vez de me odiar? — perguntou a velha.

— Amo e odeio ao mesmo tempo — respondeu Jéssica.

— Fique em silêncio — disse a velha.

Jéssica encostou-se à porta.

Paul a observou.

Ela estava aliviada.

Ele sabia.

— Um dia você também pode ficar atrás de uma porta como essa — disse a velha.

Paul olhou para a mão.

Depois voltou a encará-la.

— Por que procuram seres humanos?

— Para libertá-los.

— Libertar?

— Um dia os homens confiaram às máquinas sua própria razão.

Paul respondeu:

— “Não criarás uma máquina à semelhança da mente de um homem.”

— Exato — disse ela. — A mente humana precisou evoluir.

— As Bene Gesserit?

— Sim. E a Guilda Espacial.

— Política — disse Paul.

A velha o observou com atenção.

— Sim. Política.

Ela continuou:

— Separar o humano do animal tornou-se necessário.

Paul franziu o cenho.

— Vocês carregam uma grande responsabilidade.

— Nosso fardo é pesado.

Ele então perguntou:

— O que é o Kwisatz Haderach?

Jéssica tentou interromper:

— Paul...

— Deixe-o — disse a velha.

Ela então explicou:

— A Proclamadora da Verdade usa uma droga para acessar memórias do corpo. Mas só conseguimos acessar o passado feminino.

Ela fez uma pausa.

— Existe um lugar que não podemos ver.

— E esse homem verá?

— Sim. Ele verá o passado feminino e masculino.

— O Kwisatz Haderach.

— Sim.

Paul perguntou:

— Muitos tentaram?

— Muitos.

Ela respondeu calmamente:

— Eles tentaram… e morreram.
`
  },
  {
    id: "4",
    title: "Frankenstein",
    author: "Mary Shelley",
    category: "Terror",
    rating: 4.9,

    image: require("../assets/capas/capa_frank.webp"),

    description:
      "A obra-prima de Mary Shelley merece. Seu livro de estreia é um marco do romance gótico, verdadeiro ícone do terror e influência fundamental para o surgimento da ficção científica. A criatura de Frankenstein é considerada o primeiro mito dos tempos modernos.",

    chapter1: `Carta 1

À senhora Saville, Inglaterra.

São Petersburgo, 11 de dezembro de 17...

Você gostará de saber que nenhum desastre aconteceu no início de uma empreitada que você olhava com tantos pressentimentos negativos.

Cheguei aqui ontem, e minha primeira preocupação foi assegurar à minha irmã que estou bem e confiante no sucesso de meu empreendimento.

Já estou bem ao norte de Londres.

Ao andar pelas ruas de São Petersburgo, sinto uma brisa fria do norte em minha face, que revigora minhas forças e me envolve de prazer.

Você conhece essa sensação?

Essa brisa, que vem de regiões para as quais estou indo, dá-me uma antecipação daqueles climas frios.

Animado por esse vento de promessa, meus sonhos diários tornam-se mais vívidos.

Tento em vão persuadir-me de que o Polo é um local de gelo e desolação, mas ele se apresenta à minha imaginação como a região da beleza e dos prazeres.

Ali, Margaret, o sol é sempre visível.

Seu vasto disco apenas toca o horizonte e irradia um esplendor infinito.

Ali — e deixe, minha irmã, que eu dê algum crédito aos navegadores do passado — não há neve ou gelo.

Navegando num mar calmo, podemos ser conduzidos até uma terra plena de maravilhas jamais vista no mundo habitado.

Suas formas não têm igual, e a visão dos corpos celestes sem dúvida só é possível em lugares tão ermos.

O que não se pode esperar num país de luz eterna?

Ali descobrirei o poder extraordinário que atrai o ponteiro da bússola.

E certamente farei milhares de observações celestiais.

Satisfarei minha curiosidade com a visão de parte do mundo nunca antes visitada.

Pisarei uma terra nunca antes marcada pelo passo do homem.

É isso que me fascina.

E é suficiente para superar qualquer medo de perigos ou até da morte.

Isso me estimula a iniciar esta árdua viagem com a alegria de uma criança em férias, explorando um rio com amigos.

Mas, supondo que tudo isso seja falso, ainda assim não se pode contestar o benefício que poderei legar à humanidade.

Descobrir uma passagem pelo Polo reduziria meses de viagem.

Ou revelar o segredo do magnetismo.

Essas reflexões dissiparam minha agitação inicial.

Sinto meu coração tomado por entusiasmo.

Nada tranquiliza tanto a mente quanto um propósito firme.

Essa expedição foi o maior sonho da minha juventude.

Li com paixão relatos de viagens rumo ao Polo Norte.

Você certamente se lembra da biblioteca de nosso tio Thomas.

Nunca dei atenção aos estudos formais, mas sempre adorei ler.

Esses livros eram meu mundo.

E aumentaram minha frustração quando fui impedido de seguir a vida no mar.

Depois, encontrei a poesia.

Durante um ano vivi num mundo que criei.

Imaginei alcançar a grandeza de Homero e Shakespeare.

Mas você conhece meu fracasso.

Mais tarde, herdei uma fortuna de meu primo.

E meus pensamentos voltaram aos sonhos antigos.

Seis anos se passaram desde então.

Preparei-me fisicamente.

Viajei com baleeiros.

Suportei frio, fome e exaustão.

Trabalhei mais que os marinheiros durante o dia.

Estudei à noite.

Matemática, medicina e ciências naturais.

Servi duas vezes em navios groenlandeses.

E fui valorizado por isso.

Meu capitão chegou a me oferecer um cargo superior.

E agora, Margaret, não mereço um grande destino?

Poderia ter escolhido conforto.

Mas escolhi a glória.

Minha coragem é firme.

Mas minhas esperanças oscilam.

Esta será uma jornada longa e difícil.

Terei de sustentar não só os outros, mas a mim mesmo.

A viagem pela Rússia tem sido agradável.

Os trenós deslizam sobre a neve com facilidade.

Muito melhor que as diligências inglesas.

O frio é suportável com roupas adequadas.

Não pretendo morrer antes mesmo de chegar ao meu destino.

Partirei para Archangel em breve.

Lá alugarei um navio.

E recrutarei marinheiros.

Não partirei antes de junho.

E quando voltarei?

Não sei.

Se tiver sucesso, levará meses ou anos.

Se fracassar, talvez volte logo.

Ou nunca mais.

Adeus, minha querida Margaret.

Que os céus a protejam.

E me permitam retribuir todo o seu amor.

Seu irmão afetuoso,

R. Walton.

`
  },
  {
    id: "5",
    title: "O Hobbit",
    author: "J.R.R Tolkien Stoker",
    category: "Aventura",
    rating: 4.9,

    image: require("../assets/capas/capa_hobbit.jpg"),

    description:
      "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.",

    chapter1: `Capítulo 1

Numa toca no chão vivia um hobbit.

Não uma toca desagradável, suja e úmida, cheia de restos de minhocas e com cheiro de lodo, tampouco uma toca seca, vazia e arenosa, sem nada em que sentar ou o que comer.

Era a toca de um hobbit, e isso quer dizer conforto.

A toca tinha uma porta perfeitamente redonda como uma escotilha, pintada de verde, com uma maçaneta brilhante de latão amarelo exatamente no centro.

A porta se abria para um corredor em forma de tubo, como um túnel.

Um túnel muito confortável, sem fumaça, com paredes revestidas e com o chão ladrilhado e atapetado.

Havia cadeiras de madeira polida e montes de cabides para chapéus e casacos.

O hobbit gostava de visitas.

O túnel descrevia um caminho cheio de curvas, afundando bastante no flanco da colina.

A Colina, como todas as pessoas num raio de muitas milhas a chamavam.

Muitas portinhas redondas se abriam ao longo dela, de um lado e do outro.

Nada de escadas para o hobbit.

Quartos, banheiros, adegas, despensas, guarda-roupas, cozinhas e salas de jantar.

Tudo ficava no mesmo andar.

Na verdade, tudo no mesmo corredor.

Os melhores cômodos ficavam do lado esquerdo de quem entra.

Eram os únicos que tinham janelas.

Janelas redondas e fundas, voltadas para o jardim e para as campinas que desciam até o rio.

Esse hobbit era muito abastado.

Seu nome era Bolseiro.

Os Bolseiros viviam nas vizinhanças da Colina desde tempos imemoriais.

Eram considerados muito respeitáveis.

Não apenas porque eram ricos.

Mas porque nunca tinham tido nenhuma aventura ou feito algo inesperado.

Você sempre sabia o que um Bolseiro diria, sem precisar perguntar.

Esta é a história de como um Bolseiro teve uma aventura.

E passou a fazer coisas totalmente inesperadas.

Ele pode ter perdido o respeito dos vizinhos.

Mas ganhou... bem, isso vocês verão.

A mãe desse hobbit... o que é um hobbit?

Talvez seja necessário explicar.

Hoje em dia são raros e esquivos.

Eles são pequenos, cerca de metade da altura de um humano.

Menores que anões.

Não têm barba.

Possuem pouca magia.

Apenas o suficiente para desaparecer silenciosamente.

Especialmente quando pessoas grandes se aproximam fazendo barulho.

Eles são um pouco gordos.

Vestem roupas coloridas.

Não usam sapatos.

Seus pés têm solas naturais e são cobertos por pelos espessos.

Seus cabelos são encaracolados.

Têm dedos longos e ágeis.

Rostos amigáveis.

E adoram rir, especialmente depois das refeições.

Comem várias vezes ao dia, quando podem.

Agora já sabemos o suficiente.

A mãe de Bilbo era a famosa Beladona Túk.

Filha do Velho Túk, chefe de uma importante família hobbit.

Dizia-se que os Túks tinham algo de diferente.

Talvez um ancestral estranho.

Talvez até uma fada, segundo rumores.

O fato é que alguns Túks gostavam de aventuras.

E às vezes desapareciam.

Os Túks não eram tão respeitáveis quanto os Bolseiros.

Mas eram mais ricos.

Beladona, porém, nunca teve aventuras depois de casar.

Bungo Bolseiro, pai de Bilbo, construiu uma toca luxuosa para ela.

E ali viveram até o fim da vida.

Ainda assim, algo dos Túks existia em Bilbo.

Algo esperando para despertar.

A oportunidade demorou a aparecer.

Só surgiu quando ele já era adulto.

Com cerca de cinquenta anos.

Vivendo confortavelmente.

Numa manhã tranquila, em um mundo mais verde e silencioso, Bilbo estava à porta.

Fumava seu cachimbo após o desjejum.

Então, Gandalf apareceu.

Gandalf.

Se você tivesse ouvido sequer parte das histórias sobre ele, estaria preparado para qualquer coisa.

Aventuras surgiam por onde ele passava.

Ele não aparecia ali há muito tempo.

Desde a morte do Velho Túk.

Os hobbits quase o tinham esquecido.

Bilbo viu apenas um velho com um cajado.

Usava um chapéu azul, alto e pontudo.

Uma capa cinzenta.

Um cachecol prateado.

Sua longa barba branca descia até a cintura.

E usava grandes botas pretas.

— Bom dia! — disse Bilbo sinceramente. O sol brilhava, e a grama estava muito verde. Mas Gandalf lançou-lhe um olhar por baixo de suas longas e espessas sobrancelhas, que se projetavam da sombra da aba do chapéu.

— O que você quer dizer com isso? — perguntou ele. — Está me desejando um bom dia, ou quer dizer que o dia está bom não importa que eu queira ou não, ou quer dizer que você se sente bem neste dia, ou que este é um dia para se estar bem?

— Tudo isso de uma vez — disse Bilbo. — É uma manhã muito agradável para fumar um cachimbo ao ar livre, além disso. Se você tiver um cachimbo com você, sente-se e tome um pouco do meu fumo! Não há pressa, temos o dia todo pela frente!

Então Bilbo se sentou numa cadeira à sua porta, cruzou as pernas e soprou um belo anel de fumaça cinzenta que se ergueu no ar sem se desmanchar e foi flutuando sobre a Colina.

— Muito bonito! — disse Gandalf. — Mas eu não tenho tempo para soprar anéis de fumaça esta manhã. Estou procurando alguém para participar de uma aventura que estou organizando, e está muito difícil achar alguém.

— Acho que sim, por estes lados! Nós somos gente simples e acomodada, e eu não gosto de aventuras. São desagradáveis e desconfortáveis! Fazem com que você se atrase para o jantar! Não consigo imaginar o que as pessoas veem nelas — disse o nosso Sr. Bolseiro, colocando um polegar atrás dos suspensórios e soprando outro anel de fumaça ainda maior.

Depois pegou sua correspondência matinal e começou a lê-la, fingindo não prestar mais atenção ao velho. Havia decidido que não era do tipo que o agradava e queria que ele fosse embora. Mas o velho não se mexeu. Ficou parado, apoiando-se no seu cajado, observando o hobbit sem dizer nada, até que Bilbo se sentiu meio embaraçado, e até um pouco contrariado.

— Bom dia! — disse ele finalmente. — Nós não queremos aventuras por aqui, obrigado! Você podia tentar além da Colina ou do outro lado do Água.",

Com isso quis dizer que a conversa estava terminada.

— Você usa Bom Dia para um monte de coisas! — disse Gandalf. — Agora está querendo dizer que quer se livrar de mim e que o dia não ficará bom até que eu vá embora.

— De jeito nenhum, de jeito nenhum, caro senhor! Deixe-me ver, acho que não sei o seu nome.

— Sim, sim, meu caro senhor, e eu sei o seu, Sr. Bilbo Bolseiro. E você sabe o meu nome, embora não se lembre de que ele se refere a mim. Eu sou Gandalf, e Gandalf significa eu! E pensar que eu viveria para escutar um “Bom dia” do filho de Beladona Túk como se fosse um simples mascate que bate de porta em porta!

— Gandalf, Gandalf! Puxa vida! Não o mago errante que deu ao Velho Túk um par de abotoaduras de diamante que se abotoavam e nunca se soltavam até que fosse ordenado? Não o camarada que costumava contar histórias maravilhosas nas festas, sobre dragões, orcs e gigantes e sobre resgates de princesas e sobre a sorte inesperada de filhos de viúvas?

— Não o homem que costumava fazer fogos de artifício especialmente maravilhosos? Eu me lembro deles! O Velho Túk costumava soltá-los na véspera do Solstício de Verão. Esplêndido! Eles subiam como grandes lírios e bocas-de-leão e laburnos de fogo, ficavam no céu durante todo o entardecer!

Vocês já devem ter notado que o Sr. Bolseiro não era tão prosaico como queria acreditar que fosse, e também que gostava muito de flores.

— Ora, ora! — continuou ele. — Não o Gandalf que foi responsável por tantos moços e moças tranquilos partirem em loucas aventuras? Qualquer coisa, desde subir em árvores até visitar elfos, ou navegar em navios para outras praias!

— Puxa! A vida costumava ser muito interessante... quero dizer, você costumava perturbar muito as coisas por estas bandas naquela época. Eu peço desculpas, mas não imaginava que ainda estava na ativa.

— Onde mais eu poderia estar? — disse o mago. — De qualquer forma, estou satisfeito em saber que você se lembra de alguma coisa a meu respeito. Parece que a lembrança dos meus fogos de artifício, pelo menos, lhe é agradável, e isto já é alguma coisa. Mas, em memória do seu velho avô Túk e de sua mãe Beladona, darei o que você me pediu.

— Peço desculpas, mas não pedi nada!

— Você pediu sim, duas vezes agora. Desculpas. Está desculpado. Na verdade vou muito além disso, vou mandá-lo nessa aventura. Muito divertido para mim, muito bom para você... e lucrativo, muito provavelmente, se você conseguir chegar até o fim.

— Sinto muito! Eu não quero aventuras, muito obrigado. Hoje não. Bom dia! Mas, por favor, venha tomar chá, a qualquer hora que quiser! Por que não amanhã? Venha amanhã! Até logo!

Com isso o hobbit se virou e entrou por sua porta redonda e verde e a fechou o mais rápido que era possível sem parecer rude. Afinal de contas, magos são magos.

— Por que raios eu o convidei para o chá!? — perguntou para si mesmo, enquanto ia para a despensa. Tinha acabado de tomar o desjejum, mas achou que um pedaço de bolo ou dois, e um gole de alguma coisa, lhe fariam bem depois do susto.

Enquanto isso, Gandalf ainda estava parado do lado de fora da porta, rindo muito, mas sem fazer ruído. Depois de uns instantes ele se levantou, e com o cravo de seu cajado riscou um sinal estranho na bela porta verde da toca do hobbit. Depois foi embora, mais ou menos no momento em que Bilbo estava terminando o seu segundo pedaço de bolo e começando a pensar que se havia safado muito bem das aventuras.

No dia seguinte, quase havia esquecido Gandalf. Ele não se lembrava muito bem das coisas, a não ser que as anotasse em sua Agenda de Compromissos. Assim: Gandalf — Chá, Quarta-Feira. No dia anterior tinha ficado muito agitado para fazer qualquer coisa desse tipo.

Um pouco antes da hora do chá, um tremendo toque soou na campainha da porta da frente, e então ele se lembrou! Apressou-se e colocou a chaleira no fogo, pôs na mesa outra xícara e outro pires, um ou dois pedaços de bolo a mais, e correu para a porta.

— Desculpe por fazê-lo esperar! — ia dizer, quando viu que não era realmente Gandalf.

Era um anão com uma barba azul enfiada num cinto de ouro, e olhos muito brilhantes sob seu capuz verde escuro. Assim que Bilbo abriu ele se enfiou porta adentro, como se fosse esperado.

Pendurou a capa com capuz no cabide mais próximo e:

— Dwalin, às suas ordens! — disse ele, fazendo uma grande reverência.

— Bilbo Bolseiro às suas! — disse o hobbit, surpreso demais para perguntar qualquer coisa no momento.

Quando o silêncio que se seguiu tornou-se incômodo, ele acrescentou:

— Estava quase na hora do meu chá, por favor, venha e sirva-se.

Talvez ele tenha sido um pouco seco, mas suas intenções eram gentis. E o que vocês fariam, se um anão aparecesse sem ser convidado em sua casa, e pendurasse suas coisas no seu corredor sem uma palavra de explicação?

Não fazia muito tempo que eles estavam à mesa, na verdade, mal tinham chegado ao terceiro pedaço de bolo, quando veio um toque ainda mais alto da campainha.

— Com licença — disse o hobbit, e foi até a porta.

— Então, finalmente você chegou! — era o que ele ia dizer para Gandalf desta vez. Mas não era Gandalf.

Em vez dele, ali estava na entrada um anão que parecia muito velho, com uma barba branca e um capuz vermelho, que também pulou para dentro assim que a porta foi aberta, como se tivesse sido convidado.

— Vejo que já começaram a chegar — disse ele quando viu pendurado o capuz verde de Dwalin.

Pendurou o seu perto do outro, e:

— Balin, às suas ordens — disse, com a mão sobre o peito.

— Obrigado! — disse Bilbo, ofegante.

Não era a coisa certa para dizer, mas o “já começaram a chegar” o agitara muito. Ele gostava de visitas, mas gostava de conhecê-las antes que chegassem, e preferia convidá-las por sua própria conta.

Teve um pensamento horrível de que o bolo poderia não ser suficiente e então ele, como anfitrião, que sabia de sua obrigação e se resignava a ela apesar do sofrimento, poderia ter de ficar sem.

— Entre e tome um pouco de chá! — conseguiu dizer, depois de respirar fundo.

— Um pouco de cerveja me cairia melhor, se não lhe fizer diferença, meu bom senhor — disse Balin, agitando a barba branca. — Mas eu não recuso um pouco de bolo... bolo de sementes se você tiver.

— Um monte! — Bilbo se viu respondendo, para sua própria surpresa.

E se viu também correndo até a adega para encher uma caneca de cerveja, e depois para a despensa para pegar dois belos e redondos bolos de sementes que fizera aquela tarde para petiscar depois do jantar.

Quando voltou, Balin e Dwalin estavam conversando à mesa como velhos amigos (na verdade, eles eram irmãos).

Bilbo arriou a cerveja e o bolo com um baque na mesa diante deles, quando veio um toque forte da campainha de novo, e depois outro toque,

“Gandalf, com certeza, desta vez”, pensou ele, enquanto arfava ao longo do corredor.

Mas não era. Eram mais dois anões, ambos com capuzes azuis, cintos de prata e barbas amarelas, e cada um deles carregava um saco de ferramentas e uma pá.

Quando saltaram para dentro, assim que a porta começou a se abrir, Bilbo não ficou nem um pouco surpreso.

— Em que posso ajudá-los, meus anões? — disse ele.",

— Kili, às suas ordens! — disse o primeiro.

— E Fili! — acrescentou o segundo, e ambos retiraram seus capuzes azuis e fizeram reverência.

— Às suas ordens, e de sua família — respondeu Bilbo, lembrando-se das boas maneiras desta vez.

— Dwalin e Balin já estão aqui, pelo que vejo — disse Kili.

— Vamos nos juntar à multidão!

“Multidão!”, pensou o Sr. Bolseiro. “Isso não soa bem.”

Ele só tinha tomado um gole — no canto, enquanto os quatro anões se sentavam em volta da mesa e conversavam sobre minas e ouro e problemas com os orcs e as depredações de dragões — quando sua campainha tocou novamente, como se algum menino-hobbit estivesse tentando arrancá-la fora.

— Alguém está à porta! — disse ele, piscando.

— Pelo som, eu diria que uns quatro — disse Fili. — Além disso, nós os vimos vindo atrás de nós ao longe.",

O pobrezinho do hobbit sentou-se no corredor e colocou as mãos na cabeça, querendo saber o que havia acontecido e o que iria acontecer, e se eles todos iriam ficar para o jantar.

Então a campainha tocou outra vez, mais alto que nunca, e ele correu para a porta.

Não eram quatro no fim das contas, eram cinco.

Um outro anão juntara-se aos quatro enquanto ele estivera cismando no corredor.

Mal havia girado a maçaneta e estavam todos dentro, fazendo reverências e dizendo “às suas ordens” um após o outro.

Dori, Nori, Ori, Oin e Gloin eram seus nomes, e logo dois capuzes roxos, um cinza, um marrom e um branco estavam pendurados nos cabides,

Eles marcharam para a frente com suas mãos largas enfiadas em seus cintos de ouro e prata para se juntarem aos demais.

Aquilo já quase se transformara numa multidão.

Alguns pediram cerveja clara, outros pediram cerveja escura, e um deles pediu café, e todos pediram bolo, o que manteve o hobbit ocupado por um bom tempo.

Um grande bule de café acabava de ser levado ao fogo, os bolos de sementes tinham acabado, e os anões estavam começando uma rodada de bolinhos amanteigados, quando veio uma batida forte.

Não um toque de campainha, mas um grande ratatá na bela porta verde do hobbit. Alguém estava batendo com um cajado!

Bilbo correu pelo corredor, muito zangado e totalmente desnorteado e desconcertado — era a mais estapafúrdia quarta-feira de que ele se lembrava.

Abriu a porta com um solavanco e todos caíram para dentro, um em cima do outro.

Mais anões, mais quatro! E Gandalf estava atrás, inclinando-se sobre seu cajado e rindo.

Tinha feito um estrago razoável na superfície da bela porta, e também tinha feito desaparecer o sinal secreto que deixara nela na manhã anterior.

"Cuidado! Cuidado! — disse ele. — Não é do seu feitio, Bilbo, deixar amigos esperando no capacho, e depois abrir a porta como uma espingarda de pressão! Deixe-me apresentar Bifur, Bofur, Bombur e, especialmente, Thorin!\n\nAs suas ordens! — disseram Bifur, Bofur e Bombur parados em fila. Penduraram dois capuzes amarelos e um verde-claro, e também um azul — celeste com uma longa borla prateada. Este último pertencia a Thorin, um anão enormemente importante, na verdade ninguém menos que Thorin Escudo de Carvalho em pessoa.\n\nQue não estava de modo algum satisfeito por ter caído sobre o capacho de Bilbo como uma fruta madura, com Bifur, Bofur e Bombur em cima dele. Para começo de conversa, Bombur era imensamente gordo e pesado. Na verdade, Thorin era muito altivo, e não disse nada sobre estar às ordens, mas o pobre Sr. Bolseiro disse tantas vezes que sentia muito que finalmente ele resmungou um “não tem problema” e parou de franzir a testa.\n\nAgora estamos todos aqui! — disse Gandalf, olhando para a fileira de treze capuzes, capuzes de festa, removíveis, da melhor qualidade, e seu próprio chapéu, pendurados nos cabides. — Que reunião alegre! Espero que tenha sobrado alguma coisa para os atrasados comerem e beberem! O que é isso? Chá! Não, obrigado! Um pouco de vinho tinto para mim, eu acho.\n\nPara mim também — disse Thorin.\n\nE geléia de framboesa e torta de maçã — disse Bifur.\n\nE pastelão de carne com queijo — disse Bofur.\n\nE torta de carne de porco com salada — disse Bombur.\n\nE mais bolo, e cerveja clara, e café, se não se incomoda — disseram os outros anões através da porta.\n\nSirva também alguns ovos, meu bom rapaz! — disse Gandalf para ele ouvir, enquanto o hobbit se esbaforia para as despensas. — E traga também a salada de galinha com picles.\n\n\"Parece que ele sabe tanto sobre o conteúdo das minhas despensas quanto eu\", pensou o Sr. Bolseiro, que estava se sentindo positivamente aturdido e começava a se perguntar se a mais infame das aventuras não tinha vindo parar exatamente dentro de sua casa.\n\nNa hora em que tinha acabado de pegar todas as garrafas e comidas e facas e garfos e copos e pratos e colheres e coisas empilhadas em grandes bandejas, já estava ficando com muito calor, e com o rosto vermelho, e zangado.\n\nRaios partam esses anões! — disse em voz alta. — Por que eles não vêm dar uma ajuda?\n\nDito e feito! Lá estavam Balin e Dwalin na porta da cozinha, e Fili e Kili atrás deles, e antes que o hobbit pudesse dizer faca eles tinham arrebatado as bandejas e um par de mesinhas para a sala e arrumado tudo de novo.\n\nGandalf sentou-se à cabeceira com todos os anões em volta: e Bilbo se sentou num banquinho ao lado do fogo, mordiscando um biscoito (estava totalmente sem apetite) e tentando fingir que tudo aquilo era perfeitamente normal e nada parecido com uma aventura.\n\nOs anões foram comendo e comendo, e conversando e conversando, e o tempo passou. Finalmente eles afastaram as suas cadeiras, e Bilbo foi retirar os pratos e copos.\n\nImagino que vocês todos vão ficar para o jantar? — disse ele, com sua voz mais educada e calma.\n\nÉ claro! — disse Thorin. — E até depois disso. Não devemos terminar até muito tarde, e precisamos de um pouco de música primeiro. Agora vamos limpar tudo!\n\nEntão os doze anões — não Thorin, ele era importante demais e ficou conversando com Gandalf — puseram-se imediatamente de pé, e fizeram grandes pilhas com todas as coisas.\n\nE foram, sem esperar por bandejas, equilibrando colunas de pratos, cada uma com uma garrafa no topo, em uma única mão, enquanto o hobbit corria atrás deles quase gemendo de pavor: “Por favor, tenham cuidado” e “por favor, não se incomodem, eu posso cuidar disso!”.\n\nMas os anões apenas começaram a cantar:\n\nCopos trincados e pratos partidos!\nFacas cegas, colheres dobradas!\nÉ isso que em Bilbo causa gemidos\nGarrafas em cacos e rolhas queimadas!\nPise em gordura, corte a toalha!\nSobre o tapete jogue os ossinhos!\nO leite entornado no chão se coalha!\nEm cada porta há manchas de vinho!\nJogue esta louça em água fervente,\nSoque bastante com este bastão,\nSe nada quebrar, por mais que se tente,\nFaça rolar, rolar pelo chão!\nIsso é o que Bilbo Bolseiro detesta!\nCuidado! Cuidado com os pratos da festa!\n\nE é claro que eles não fizeram nenhuma dessas coisas terríveis, e que tudo estava limpo e guardado a salvo com a rapidez de um relâmpago, enquanto o hobbit ficava dando voltas e voltas na cozinha tentando ver o que eles estavam fazendo.\n\nDepois voltaram e encontraram Thorin com os pés sobre a guarda da lareira, fumando um cachimbo. Estava soprando os maiores anéis de fumaça, e onde quer que ordenasse que os anéis fossem, eles iam — para cima da chaminé, para baixo da mesa, ou dando voltas no forro.\n\nMas onde quer que um anel fosse, não era rápido o suficiente para escapar de Gandalf. Pop! Ele enviava um anel de fumaça menor do seu pequeno cachimbo de barro direto no meio de cada um dos anéis de Thorin. Então o anel de fumaça de Gandalf ficava verde e voltava para flutuar sobre a cabeça do mago.\n\nJá havia uma nuvem deles sobre a sua cabeça, e na luz fraca aquilo o deixava estranho e misterioso. Bilbo estava quieto, olhando — adorava anéis de fumaça —, e então ficou vermelho ao pensar em como se orgulhara dos anéis de fumaça que tinha soprado no vento sobre a Colina.\n\nAgora, um pouco de música! — disse Thorin. — Tragam os instrumentos!\n\nKili e Fili correram até seus sacos e trouxeram pequenas rabecas, Dori, Nori e Ori tiraram flautas de algum lugar em seus casacos, Bombur trouxe um tambor do corredor, Bifur e Bofur saíram também, e voltaram com clarinetas que haviam deixado entre as bengalas.\n\nDwalin e Balin disseram:\n\nCom licença, deixei a minha na varanda!\n\nTraga a minha também! — disse Thorin.\n\nVoltaram com violas tão grandes como eles próprios e com a harpa de Thorin embrulhada num pano verde. Era uma bonita harpa dourada, e quando Thorin a dedilhou a música irrompeu imediatamente, tão repentina e doce que Bilbo esqueceu todo o resto.\n\nE foi levado para terras escuras sob luas estranhas, lugares distantes do Água e muito distantes de sua toca de hobbit sob a Colina.\n\nA escuridão entrava na sala pela pequena janela que se abria na encosta da Colina, a luz do fogo tremia — era abril — e, ainda assim, continuavam tocando, enquanto a sombra da barba de Gandalf se agitava contra a parede.\n\nA escuridão encheu toda a sala, o fogo se extinguiu, as sombras se perderam e, ainda assim, continuaram tocando.\n\nE, de repente, primeiro um, e depois outro, começaram a cantar enquanto tocavam, o canto grave dos anões das profundezas de seus antigos lares, e este é como um fragmento de sua canção, se é que pode ser como uma de suas canções sem a sua música."

Para além das montanhas nebulosas, frias, adentrando cavernas, calabouços cravados, devemos partir antes de o sol surgir, em busca do pálido ouro encantado. Operavam encantos anões de outrora, ao som de martelo qual sino a soar, na profundeza onde dorme a incerteza, em antros vazios sob penhascos do mar.

Para o antigo rei e seu elfo senhor criaram tesouros de grã nomeada. As pedras plasmaram, a luz captaram, prendendo-a nas gemas do punho da espada. Em colares de prata eles juntaram estrelas floridas, fizeram coroas de fogo dragão e, no mesmo cordão, fundiram a luz do sol e da lua.

Para além das montanhas nebulosas frias, adentrando cavernas, calabouços perdidos, devemos partir antes de o sol surgir, buscando tesouros há muito esquecidos. Para seu uso taças foram talhadas e harpas de ouro; onde ninguém mora, jazeram perdidas e suas cantigas por homens e elfos não foram ouvidas.

Zumbiram pinheiros sobre a montanha, uivaram os ventos em noites azuis. O fogo vermelho queimava parelho, as árvores-tochas em fachos de luz. Tocaram os sinos chovendo no vale, erguiam-se pálidos rostos ansiosos. Irado, o dragão feroz se insurgira, arrasando casas e torres formosas.

Sob a luz da lua furavam montanhas; os anões ouviram a marcha final. Fugiram do abrigo, achando o inimigo, e sob seus pés a morte ao luar. Para além das montanhas nebulosas frias, adentrando cavernas, calabouços perdidos, devemos partir antes de o sol surgir, buscando tesouros há muito esquecidos.

Enquanto eles cantavam, o hobbit sentiu agitar-se dentro de si o amor por coisas belas feitas por mãos, com habilidade e com mágica — um amor feroz e ciumento, o desejo dos corações dos anões. Então alguma coisa dos Túk despertou no seu íntimo, e ele desejou ir ver as grandes montanhas, ouvir os pinheiros e as cachoeiras, explorar as cavernas e usar uma espada ao invés de uma bengala.

Olhou pela janela. As estrelas apareciam num céu escuro sobre as árvores. Pensou nas joias dos anões brilhando em cavernas escuras. De repente, na floresta além do Água, uma chama surgiu — provavelmente alguém acendendo uma fogueira — e ele pensou em dragões saqueadores alojando-se em sua calma Colina e transformando-a toda em chamas.

Sentiu um tremor e muito rapidamente voltou a ser o Sr. Bolseiro de Bolsão, Sob-a-Colina, novamente. Levantou-se tremendo. Estava muito pouco disposto a ir buscar uma lamparina, e muito disposto a fingir que ia fazê-lo e se esconder atrás dos barris de cerveja na adega, e não sair mais de lá até que todos os anões tivessem ido embora.

De repente descobriu que toda a música e cantoria haviam parado, e todos estavam olhando para ele com olhos que brilhavam no escuro. — Aonde você vai? — perguntou Thorin, num tom que parecia adivinhar tudo sobre as disposições do hobbit. — Que tal um pouco de luz? — disse Bilbo, como que pedindo desculpas.

— Nós gostamos do escuro — disseram todos os anões. — Escuro para negócios escusos! Ainda há muitas horas antes da alvorada. — Claro! — disse Bilbo, sentando-se apressadamente. Não acertou o banquinho e acabou se sentando na guarda da lareira, derrubando o atiçador e a pá com muito barulho.

— Silêncio! — disse Gandalf. — Deixem Thorin falar!

E foi assim que Thorin começou. — Gandalf, anões e Sr. Bolseiro! Estamos reunidos na residência de nosso amigo e companheiro de conspiração, este mui excelente e audacioso hobbit. Que o pêlo de seus pés jamais caia! Todos os elogios ao seu vinho e à sua cerveja!

Ele parou para tomar fôlego e receber um comentário polido, mas o pobre Bilbo apenas se remexia, desconcertado por ser chamado de audacioso — e, pior ainda, de companheiro de conspiração — sem conseguir dizer palavra. Thorin continuou: — Estamos reunidos para discutir nossos planos, caminhos, meios, política e estratégias. Em breve, antes do nascer do dia, iniciaremos uma longa viagem, uma viagem da qual alguns de nós — ou todos nós — talvez nunca voltemos. Este é um momento solene.

O pobre Bilbo não pôde suportar mais. Ao ouvir “talvez nunca voltemos”, um grito agudo começou a crescer dentro dele e irrompeu como o apito de uma locomotiva. Os anões pularam, derrubando a mesa. Gandalf acendeu uma luz azul na ponta de seu cajado, e, nesse brilho, viram o hobbit ajoelhado, tremendo como gelatina.

Logo caiu no chão, gritando repetidamente “atingido por um raio!”. Os anões o levaram para o sofá da sala de visitas, deixando uma bebida ao seu lado, e voltaram aos seus negócios. — Sujeitinho impressionável — disse Gandalf —, mas é um dos melhores. Feroz como um dragão num aperto.

Enquanto isso, Bilbo foi recobrando os sentidos e, após um momento, aproximou-se da porta e ouviu Gloin resmungar que duvidava de sua utilidade. Aquilo o atingiu. De repente, o lado Túk falou mais alto. Ele entrou na sala decidido.

— Desculpem — disse — se ouvi o que estavam dizendo. Não vou fingir que entendi tudo, mas creio que acham que eu não sirvo. Vou lhes mostrar! Digam-me o que deve ser feito e eu tentarei, mesmo que tenha de ir até o leste do leste!

Gandalf então interveio com firmeza, afirmando que Bilbo era o ladrão escolhido, e que havia mais nele do que todos imaginavam. Depois pediu uma lamparina e desenrolou sobre a mesa um pergaminho: um mapa da Montanha.

Os anões se inclinaram, discutindo a entrada secreta marcada por runas, enquanto Bilbo, cada vez mais curioso, fazia perguntas. Thorin explicou a história de seu povo, da riqueza da Montanha, da cidade de Vale e da chegada do dragão Smaug, que destruiu tudo e tomou o tesouro.

Por fim, ficou claro o objetivo: recuperar o tesouro e derrotar o dragão. Gandalf revelou a chave secreta, entregue pelo pai de Thorin, e reforçou que a missão exigia furtividade — por isso precisavam de um ladrão.

Ainda confuso, mas agora determinado, Bilbo sugeriu que partissem após descansar. Thorin concordou, pedindo um farto desjejum.

E assim, depois de acomodar todos os anões em sua casa, exausto e inquieto, Bilbo foi dormir. Enquanto adormecia, ouvia Thorin cantar baixinho:

Para além das montanhas nebulosas, frias, adentrando cavernas, calabouços perdidos, devemos partir antes de o sol surgir, buscando tesouros há muito esquecidos.

E com essa canção nos ouvidos, Bilbo caiu em um sono inquieto, cheio de sonhos perturbadores. Já era bem depois do amanhecer quando finalmente despertou.
`,
  },
  {
    id: "6",
    title: "A menina que rouba livros",
    author: "Markus Zusak",
    category: "Drama",
    rating: 4.8,

    image: require("../assets/capas/capa_menina.jpg"),

    description:
      "Traços de uma sobrevivente: a mãe comunista, perseguida pelo nazismo, envia Liesel e o irmão para o subúrbio pobre de uma cidade alemã, onde um casal se dispõe a adotá-los por dinheiro. O garoto morre no trajeto e é enterrado por um coveiro que deixa cair um livro na neve. É o primeiro de uma série que a menina vai surrupiar ao longo dos anos. O único vínculo com a família é esta obra, que ela ainda não sabe ler. Assombrada por pesadelos, ela compensa o medo e a solidão das noites com a conivência do pai adotivo, um pintor de parede bonachão que lhe dá lições de leitura. Alfabetizada sob vistas grossas da madrasta, Liesel canaliza urgências para a literatura. Em tempos de livros incendiados, ela os furta, ou os lê na biblioteca do prefeito da cidade.",

    chapter1: `CHEGADA À RUA HIMMEL

Aquela última vez. Aquele céu vermelho... Como é que uma menina que rouba livros acaba ajoelhada, soltando uivos e ladeada por um monte de entulho ridículo, gordurento, inventado, feito pelo homem?

Anos antes, o começo foi a neve. Tinha chegado a hora. Para um momento espetacularmente trágico. Um trem se deslocava depressa, abarrotado de seres humanos. Um menino de seis anos morreu no terceiro vagão. A roubadora de livros e seu irmão estavam viajando para Munique, onde logo seriam entregues a pais de criação. Agora sabemos, é claro, que o menino não chegou lá.

Houve um intenso acesso de tosse. Um acesso quase inspirado. E, logo depois — nada. Quando a tosse parou, não restou outra coisa senão o nada da vida, seguindo em frente com um arrastar dos pés, ou um espasmo quase silencioso. Nessa hora, uma subtaneidade achou o caminho de seus lábios, que eram de um marrom corroído e descascado, feito tinta velha, precisando desesperadamente de reforma.

A mãe deles dormia. Entrei no trem. Meus pés passaram pelo corredor atravancado e minha palma lhe cobriu a boca num instante. Ninguém notou. O trem continuou em seu galope. Menos a menina.

Com um olho aberto, outro ainda no sonho, a roubadora de livros — também conhecida como Liesel Meminger — pôde ver, sem sombra de dúvida, que seu irmão caçula, Werner, estava caído de lado e morto. Seus olhos azuis fitavam o chão, sem nada ver.

Antes de acordar, a menina estivera sonhando com o Führer, Adolf Hitler. No sonho, ela participava de um comício em que ele fazia um discurso, e olhava para o repartido cor de crânio em seu cabelo e para o quadrado perfeito de seu bigode. Ouvia contente a enxurrada de palavras que jorrava da boca do homem. As frases dele rebrilhavam à luz. Num momento mais calmo, ele até se abaixara e sorrira para ela.

Liesel retribuíra o sorriso, dizendo: “Guten Tag, Herr Führer. Wie geht's dir hent?” Ela não havia aprendido a falar muito bem, nem tampouco a ler, porque raras vezes frequentara a escola. A razão disso ela descobriria no devido tempo. Quando o Führer estava prestes a responder, a menina acordou.

Era janeiro de 1939. Liesel tinha nove anos, logo faria dez. Seu irmão estava morto. Um olho aberto. Um ainda num sonho. Seria melhor um sonho completo, eu acho, mas realmente não tenho controle sobre isso.

O segundo olho acordou de um salto e ela me flagrou, disso não tenho dúvida. Foi exatamente na hora em que me ajoelhei e extraí a alma do menino, segurando-a, amolecida, em meus braços inchados. Logo depois ele se aqueceu, mas, quando o peguei originalmente, o espírito do menino estava mole e frio, feito sorvete. Começou a derreter em meus braços. Depois, foi-se aquecendo completamente. Curando-se.

Para Liesel Meminger, houve a rigidez aprisionada dos movimentos e a invasão atordoante das ideias. Es stimmt nicht. Isso não está acontecendo. Não está acontecendo. E os sacolejos. Por que eles sempre os sacodem?

É, eu sei, imagino que tenha algo a ver com o instinto. Para estancar o fluxo da verdade. O coração dela, naquele momento, estava escorregadio e quente, e alto, muito, muito alto. Estupidamente, fiquei. Observei.

Depois disso, a mãe. A menina a acordou com o mesmo sacolejo aflito. Se você não consegue imaginar como é, pense num silêncio canhestro. Pense em cacos e pedaços de desespero flutuante. E em se afogar num trem.

A neve andara caindo ininterruptamente, e o serviço para Munique foi obrigado a parar, por causa do trabalho malfeito nos trilhos. Havia uma mulher chorando. E uma menina entorpecida, parada ao lado dela. Em pânico, a mãe abriu a porta, desceu para a neve, segurando o corpinho. Que podia fazer a menina senão segui-la?

Como já foi dito, dois guardas também desceram do trem. Conversaram e discutiram sobre o que fazer. Era uma situação desagradável, para dizer o mínimo. Acabou sendo decidido que todos os três seriam levados para a estação seguinte e deixados lá, para resolver as coisas.

Dessa vez, o trem capengou pelo interior coberto de neve. Chacoalhou e parou. Eles desceram na plataforma, o corpo nos braços da mãe. Pararam. O menino estava ficando pesado.

Liesel não tinha ideia de onde estava. Era tudo branco e, enquanto ficaram na estação, ela só conseguiu olhar para as letras desbotadas da placa à sua frente. Para ela, a cidade não tinha nome, e foi lá que seu irmão, Werner, foi enterrado dois dias depois. As testemunhas incluíram um padre e dois coveiros, trêmulos de frio.

Um par de guardas do trem. Um par de coveiros. No fim das contas, um deles dava as ordens. O outro fazia o que lhe mandavam. A pergunta é: e quando o outro é muito mais do que um?

Erros, erros… às vezes parece que isso é tudo de que sou capaz. Durante dois dias, cuidei do que é meu. Viajei pelo globo, como sempre, entregando almas à esteira rolante da eternidade. Vi-as serem passivamente levadas. Em vários momentos, avisei a mim mesma que deveria manter uma boa distância do enterro do irmão de Liesel Meminger.

Não ouvi meus conselhos.

A quilômetros de distância, ao me aproximar, já pude ver o grupinho de humanos frigidamente parados em meio ao deserto de neve. O cemitério me acolheu como a uma amiga e, logo depois, eu estava com eles. Abaixei a cabeça.

Parados à esquerda de Liesel, os coveiros esfregavam as mãos e resmungavam sobre a neve e as condições de escavação do momento. “É muito difícil atravessar esse gelo todo”, diziam. Um deles não podia ter mais de quatorze anos — um aprendiz. Quando foi embora, depois de alguns passos, um livro preto caiu inocuamente do bolso de seu casaco, sem que ele percebesse.

Minutos depois, a mãe de Liesel começou a se afastar com o padre, agradecendo-lhe por ter oficiado a cerimônia. Mas a menina ficou. Seus joelhos afundaram no chão. Era chegada a sua hora.

Ainda incrédula, ela começou a cavar. Ele não podia estar morto. Ele não podia estar morto. Ele não podia... Em segundos, havia neve trinchando sua pele. O sangue congelado rachava em suas mãos. Em algum lugar, em toda aquela brancura, ela via seu coração partido em dois pedaços, cada metade pulsando sob a neve.

A menina só percebeu que a mãe voltara para buscá-la quando sentiu a mão ossuda em seu ombro. Estava sendo arrastada para longe. Um grito quente encheu-lhe a garganta.

A vinte metros de distância, terminado o arrastar, mãe e filha pararam para respirar. Havia uma coisa preta e retangular abrigada na neve. Só a menina a viu. Ela se curvou, apanhou-a e a segurou firme entre os dedos. O livro tinha letras prateadas.

As duas deram as mãos. Soltou-se um último adeus encharcado, e fizeram meia-volta, saindo do cemitério, olhando várias vezes para trás. Quanto a mim, fiquei mais alguns momentos. Acenei. Ninguém retribuiu o aceno.

Mãe e filha deixaram o cemitério e se dirigiram ao próximo trem para Munique. As duas eram magras e pálidas. As duas tinham machucados nos lábios. Liesel percebeu isso na janela suja e embaçada do trem, pouco antes do meio-dia. A viagem prosseguiu como se nada tivesse acontecido.

Quando o trem parou na Bahnhof, em Munique, os passageiros saíram como que de um embrulho rasgado. Havia gente de todas as classes, mas os pobres eram os mais fáceis de reconhecer. Os empobrecidos sempre tentam continuar andando, como se a mudança resolvesse algo, sem perceber que o mesmo problema os espera no destino.

A mãe sabia disso. Não entregaria os filhos aos ricos, mas ao menos um lar de criação havia sido encontrado. Lá, talvez, a menina pudesse ser alimentada e educada melhor.

O menino.

Liesel tinha certeza de que a mãe ainda o carregava na memória, como um peso invisível. Como podia continuar andando? Como podia seguir em frente? Essa é uma das coisas que nunca compreenderei — do que os humanos são capazes.

Encontraram autoridades. Houve perguntas sobre o atraso e sobre o menino. Liesel ficou num canto de um escritório pequeno e empoeirado, enquanto a mãe se sentava, com os pensamentos comprimidos dentro de si.

Então veio o caos da despedida. Foi uma despedida molhada, com a cabeça da menina enterrada no casaco gasto da mãe. Houve mais arrastões, mais resistência, mais dor.

Bem além de Munique, havia uma cidade chamada Molching, numa rua chamada Himmel. “Himmel” significa céu. Quem deu esse nome provavelmente tinha senso de ironia, pois não era exatamente o paraíso.

Os pais de criação de Liesel estavam esperando. Os Hubermann. Haviam aguardado um menino e uma menina, mas só receberiam a menina. Ninguém queria ser a pessoa a dar a notícia a Rosa Hubermann. Seu temperamento não era dos mais fáceis, embora tivesse experiência com crianças.

Para Liesel, tudo virou um passeio de carro — algo novo e estranho. Seu estômago subia e descia, e ela desejava que se perdessem no caminho. Mas seus pensamentos sempre voltavam para a mãe, sozinha na estação, tremendo de frio.

O carro seguiu sob um céu cinzento, a cor da Europa, com a chuva caindo como cortinas fechadas. — Estamos quase chegando — disse Frau Heinrich. — Sua nova casa.

Havia também um homem no carro, que permaneceu ao lado de Liesel enquanto a mulher entrava na casa. Talvez estivesse ali para impedir que ela fugisse. Talvez fosse apenas uma presença silenciosa.

Depois de alguns minutos, um homem alto saiu da casa: Hans Hubermann. Ao seu lado, Frau Heinrich e Rosa Hubermann, baixa e robusta, com um jeito quase cômico — não fosse o rosto duro e cansado.

Liesel se recusou a sair do carro. Rosa perguntou o que havia de errado, repetindo com impaciência. Abriu a porta e tentou chamá-la. Nada.

Quem conseguiu foi Hans. Em silêncio.

Depois veio o portão, ao qual Liesel se agarrou, chorando. Pessoas começaram a se juntar na rua, até que Rosa as expulsou com gritos.

Por fim, Liesel entrou. Hans segurava sua mão. Na outra, ela levava sua mala.

E dentro da mala, escondido sob as roupas, estava um pequeno livro preto de letras prateadas — perdido por um jovem coveiro em uma cidade sem nome.

Assim, a menina que roubava livros realizou seu primeiro roubo. O início de algo muito maior.
  `,
  },
];