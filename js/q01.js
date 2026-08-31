window.Q01={
 id:'QST-001',title:'A Caravana que Não Chegou',version:'web-2.0',
 start:'north_gate',
 nodes:{
  north_gate:{text:'Valedouro, início da noite. Próximo ao portão norte, um comerciante inquieto observa a estrada e tenta chamar a atenção do grupo. Guardas encerram os registros do dia e viajantes entram e saem da cidade.',options:[
   {label:'Ouvir o comerciante',next:'merchant',set:{merchant_heard:true}},
   {label:'Falar com os guardas do portão',next:'guard'},
   {label:'Ignorar e ir à taverna',next:'tavern'},
   {label:'Sair pela estrada norte por conta própria',next:'road_start'}]},
  merchant:{text:'O comerciante explica que uma caravana de três carroças deveria ter chegado às 19h30. Ela saiu pela rota norte e não deu notícias. Um aprendiz de cerca de 18 anos viajava com o grupo. Ele pede que vocês descubram o que aconteceu.',options:[
   {label:'Aceitar investigar',next:'accepted',set:{quest_accepted:true}},
   {label:'Perguntar quando foi vista pela última vez',next:'merchant_lastseen'},
   {label:'Recusar e voltar ao portão',next:'north_gate'}]},
  merchant_lastseen:{text:'O comerciante não sabe o horário exato do último registro. Ele sugere consultar os guardas do portão, que controlam a passagem de viajantes e cargas.',options:[{label:'Falar com os guardas',next:'guard'},{label:'Aceitar a investigação',next:'accepted',set:{quest_accepted:true}}]},
  guard:{text:'O registro do portão indica que a caravana foi vista pela última vez por volta das 13h30, seguindo normalmente pela estrada para Valedouro. A rota tem aproximadamente 24 km e uma caravana desse tipo costuma avançar perto de 4 km/h.',options:[
   {label:'Calcular uma região provável de ocorrência',check:{ability:'INT',dc:10,success:'guard_calc_ok',failure:'guard_calc_fail'}},
   {label:'Seguir pela estrada norte',next:'road_start',set:{guard_info:true}},
   {label:'Voltar ao comerciante',next:'merchant'}]},
  guard_calc_ok:{text:'Comparando os horários, o grupo estima que a caravana deveria ter avançado cerca de quatro horas antes de surgir um problema: algo em torno de 16 km após o último registro é uma boa região inicial de busca.',options:[{label:'Partir pela estrada',next:'road_start',set:{guard_info:true,search_hint:true}}]},
  guard_calc_fail:{text:'A estimativa não fica clara. Ainda assim, os registros confirmam a direção e permitem iniciar a busca pela estrada norte.',options:[{label:'Partir pela estrada',next:'road_start',set:{guard_info:true}}]},
  accepted:{text:'O comerciante agradece. Ele não tenta determinar o método: encontrar a caravana e trazer notícias é o objetivo. Vocês podem reunir informações antes de partir ou seguir imediatamente.',options:[{label:'Consultar os guardas',next:'guard'},{label:'Partir agora',next:'road_start'}]},
  tavern:{text:'Vocês entram em uma taverna próxima. O salão está ocupado por viajantes e trabalhadores encerrando o dia. A história da caravana não os persegue automaticamente; vocês podem permanecer aqui ou voltar a agir quando quiserem.',options:[
   {label:'Pedir uma cerveja',next:'tavern_order',set:{beer_ordered:true}},
   {label:'Observar o salão',next:'tavern_observe'},
   {label:'Voltar ao portão',next:'north_gate'}]},
  tavern_order:{text:'A atendente confirma o pedido e se afasta. Pouco depois retorna com a cerveja, coloca a caneca sobre a mesa e informa o valor. O pedido está entregue.',options:[{label:'Beber e observar o ambiente',next:'tavern_observe',set:{beer_delivered:true}},{label:'Pagar e voltar ao portão',next:'north_gate',set:{beer_delivered:true,beer_paid:true}}]},
  tavern_observe:{text:'Nada no salão exige a atenção do grupo. Conversas independentes acontecem ao redor, sem pistas obrigatórias sobre a caravana. A noite continua.',options:[{label:'Permanecer mais um pouco',next:'tavern_observe'},{label:'Voltar ao portão norte',next:'north_gate'}]},
  road_start:{text:'O grupo deixa Valedouro pela estrada norte. O terreno e a luz da noite permitem procurar sinais de passagem. A caravana deixou marcas suficientes para uma tentativa de rastreamento.',options:[
   {label:'Rastrear a caravana',check:{ability:'SAB',skill:'Sobrevivência',dc:12,success:'road_track_ok',failure:'road_track_fail'}},
   {label:'Avançar sem rastrear',next:'road_search'}]},
  road_track_ok:{text:'As marcas de três carroças aparecem com clareza. Uma delas passa a deixar irregularidades progressivas: pequenas oscilações, depois sulcos mais marcados. O problema parece ter piorado ao longo do caminho.',options:[{label:'Seguir as marcas',next:'disturbed_ground',set:{wheel_wear_seen:true}}]},
  road_track_fail:{text:'As marcas se misturam às de outros viajantes. Vocês continuam pela rota provável, mas sem uma leitura segura do que ocorreu.',options:[{label:'Continuar procurando',next:'road_search'}]},
  road_search:{text:'Depois de avançar pela estrada, vocês encontram uma área de terreno bastante perturbado e sinais de que carroças saíram do movimento normal.',options:[{label:'Examinar o terreno',check:{ability:'INT',skill:'Investigação',dc:10,success:'disturbed_ground',failure:'disturbed_partial'}}]},
  disturbed_partial:{text:'Há sinais claros de parada e confusão, mas as direções dos rastros ainda não ficam organizadas. Uma segunda inspeção cuidadosa pode separar os movimentos.',options:[{label:'Examinar novamente',check:{ability:'SAB',skill:'Sobrevivência',dc:12,success:'disturbed_ground',failure:'disturbed_partial'}}]},
  disturbed_ground:{text:'A área revela rodas interrompidas, sulcos, objetos espalhados e várias pegadas. É possível separar três conjuntos relevantes: um grupo seguiu em direção a Valedouro, outro tomou direção oposta e uma trilha solitária se afastou correndo do local.',options:[
   {label:'Seguir o grupo que foi para Valedouro',next:'survivors'},
   {label:'Seguir o grupo em direção oposta',next:'bandits'},
   {label:'Seguir a trilha solitária',next:'apprentice_track'}]},
  bandits:{text:'A trilha conduz a um pequeno acampamento de oportunistas com objetos compactos retirados da caravana. Eles parecem interessados no saque, não em manter prisioneiros. A presença do grupo pode levar a conversa, retirada ou confronto.',options:[
   {label:'Perguntar sobre o aprendiz',next:'bandit_answer'},
   {label:'Evitar o confronto e retornar aos rastros',next:'disturbed_ground'},
   {label:'Tentar intimidá-los',check:{ability:'CAR',dc:12,success:'bandit_answer',failure:'bandit_tense'}}]},
  bandit_answer:{text:'Ao ouvir a pergunta, a reação é genuinamente confusa: “Que rapaz?”. Nada no acampamento indica que tenham levado o aprendiz. A pista do desaparecido continua em outro lugar.',options:[{label:'Voltar ao local da emboscada',next:'disturbed_ground'}]},
  bandit_tense:{text:'A ameaça deixa o grupo hostil, mas não produz informação nova. O confronto pode ser evitado se vocês recuarem; a busca pelo aprendiz ainda aponta para outra trilha.',options:[{label:'Recuar e voltar aos rastros',next:'disturbed_ground'}]},
  survivors:{text:'Vocês alcançam sobreviventes e parte das carroças. Há feridos e sinais de ataque, mas ninguém viu o aprendiz ser levado. O chefe da escolta afirma: “Não vi ninguém levando o garoto.”',options:[
   {label:'Prestar primeiros socorros',check:{ability:'SAB',skill:'Medicina',dc:10,success:'survivors_treated',failure:'survivors_treated'}},
   {label:'Perguntar sobre a carroça defeituosa',next:'driver_info'},
   {label:'Voltar e seguir a trilha solitária',next:'apprentice_track'}]},
  survivors_treated:{text:'Os feridos são estabilizados com os recursos disponíveis. O atendimento reduz o risco imediato, mas não substitui tratamento posterior. Os sobreviventes agradecem e confirmam que o aprendiz desapareceu durante a confusão.',options:[{label:'Seguir a trilha solitária',next:'apprentice_track'},{label:'Ouvir o condutor da carroça',next:'driver_info'}]},
  driver_info:{text:'O condutor lembra de vibração e ruído progressivos antes da parada. A falha não surgiu de uma vez; a condição da roda/eixo foi piorando até obrigar a interrupção da marcha. Não há indício de sabotagem.',options:[{label:'Seguir a trilha solitária',next:'apprentice_track'},{label:'Voltar aos rastros',next:'disturbed_ground'}]},
  apprentice_track:{text:'A trilha de uma única pessoa mostra corrida desorganizada, afastando-se do local do ataque. Ela segue por terreno irregular e depois desce para uma área mais difícil.',options:[
   {label:'Seguir cuidadosamente',check:{ability:'SAB',skill:'Sobrevivência',dc:14,success:'fall_site',failure:'track_delay'}}]},
  track_delay:{text:'A trilha se perde por alguns minutos entre pedras e vegetação, mas o padrão geral continua. O tempo passa, sem surgir uma ameaça artificial para compensar o atraso.',options:[{label:'Retomar a busca',check:{ability:'SAB',skill:'Sobrevivência',dc:12,success:'fall_site',failure:'track_delay'}}]},
  fall_site:{text:'Vocês encontram sinais de queda numa encosta. Mais abaixo, o aprendiz está vivo, consciente e com uma lesão séria na perna. Ele não consegue subir sozinho.',options:[
   {label:'Descer com uma corda',next:'rescue'},
   {label:'Procurar uma rota de acesso menos íngreme',next:'rescue_alt'}]},
  rescue:{text:'Com a corda ancorada, um personagem pode descer até o aprendiz. A prioridade é estabilizar a perna antes de movimentá-lo.',options:[{label:'Estabilizar a lesão',check:{ability:'SAB',skill:'Medicina',dc:12,success:'splint_ok',failure:'splint_partial'}}]},
  rescue_alt:{text:'A rota alternativa é mais longa, mas funciona sem criar um obstáculo compensatório. Vocês conseguem chegar ao aprendiz por terreno menos íngreme.',options:[{label:'Estabilizar a lesão',check:{ability:'SAB',skill:'Medicina',dc:12,success:'splint_ok',failure:'splint_partial'}}]},
  splint_ok:{text:'A perna é imobilizada com uma tala improvisada. O aprendiz continua ferido, mas está estável o suficiente para ser retirado com cuidado.',options:[{label:'Içar com cordas',next:'return_home'},{label:'Improvisar uma maca e usar a rota menos íngreme',next:'return_home'}]},
  splint_partial:{text:'A imobilização não fica perfeita, mas reduz o movimento da perna. Com ajuda e bastante cuidado, ainda é possível retirá-lo sem transformar a ação em uma cura instantânea.',options:[{label:'Retirar o aprendiz',next:'return_home'}]},
  return_home:{text:'O grupo consegue retirar o aprendiz e organizar o retorno. Os sobreviventes e o comerciante finalmente recebem uma explicação coerente: falha mecânica progressiva, ataque oportunista e fuga do jovem durante a confusão. O aprendiz não havia sido sequestrado.',options:[{label:'Encerrar a aventura',next:'complete'}]},
  complete:{text:'QUEST CONCLUÍDA — A Caravana que Não Chegou. A primeira explicação disponível não era automaticamente a verdadeira. As ações do grupo reconstruíram os fatos a partir de evidências.',complete:true,options:[]}
 }
};
