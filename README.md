# Valedouro — Mestre Virtual Web v2.0 Beta

Versão 100% estática para GitHub Pages. Não usa IA, Python, Node, servidor, API key ou instalação.

## Publicação no GitHub Pages

Copie o conteúdo desta pasta para a raiz do repositório (ou para uma pasta publicada pelo Pages) e publique normalmente. `index.html` é a entrada.

## O que esta Beta implementa

- Tela inicial visual e acesso ao Compêndio público.
- Criação de 1 a 4 personagens.
- Multiclasse estrutural (duas classes na interface desta Beta).
- Cálculo no navegador de CA, PV máximo/atual, iniciativa, bônus de proficiência, deslocamento e Dados de Vida.
- Dados d4, d6, d8, d10, d12, d20 e d100 gerados no navegador.
- Q01 “A Caravana que Não Chegou” convertida para um Quest Engine declarativo baseado em nós/opções/testes, sem DM IA e sem narrativa hardcoded em cadeia de `if/else`.
- Personagens e save da Q01 persistidos em `localStorage` do navegador.
- Ações alternativas como ignorar o comerciante e ir à taverna não forçam retorno automático à Quest.

## Limites intencionais

Esta não é ainda uma implementação completa de D&D 5.5. Salvaguardas, perícias com proficiência, equipamento completo, recursos de classe, combate integral, progressão e importação/exportação de PDF ainda serão evoluídos.

Sem IA, a interface não promete interpretação irrestrita de linguagem natural. O jogador escolhe ações contextuais apresentadas pelo Quest Engine. Novas Quests devem ser descritas em dados/estruturas declarativas, mantendo a lógica genérica no motor.

## Arquitetura

`index.html` → `js/app.js` (motor genérico web) → `js/q01.js` (dados da Quest) → estado/saves em `localStorage`.

O Compêndio v3.19.5 está incluído como conteúdo público em `compendio/`.

## v2.0.1 — criação/carregamento de personagens
- Novo jogo voltou a oferecer, por vaga de jogador, Criar nova ficha ou Carregar ficha salva.
- Atributos de ficha nova não são editáveis: são gerados em sequência por 4d6, descartando o menor, para FOR/DES/CON/INT/SAB/CAR.
- Cada rolagem mostra os quatro d6, marca o menor como descartado e grava o valor no atributo correspondente.
- É possível reiniciar toda a geração de atributos, mas não digitar resultados manualmente.
- Fichas validadas ficam no localStorage e podem ser reutilizadas em novas partidas.
- Validação impede nível total acima de 20 e multiclasse repetindo a classe inicial.
