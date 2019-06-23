# GeneSys - Referência de documentação

Bem-vindo ao Documento de Referências para o GeneSys [RPG](https://links.grifo.now.sh/o-que-e-rpg). Esse é um "leia-me" técnico para aqueles que desejem contribuir com o sistema tanto no conjunto de regras quanto no próprio site do SRD.

O objetivo do SRD é ser um guia atualizado para referência rápida nos cenários desenvolvidos utilizando o sistema GeneSys tanto pela Grifo quanto pelos jogadores evitando que o conteúdo seja duplicado ou esteja ambíguo.

Para manter-se acessível, ele é desenvolvido como um PWA responsiva o que garante o acesso em dispositivos móveis mesmo que estejam desconectados.

Nesse arquivo você vai encontrar:

- [GeneSys - Referência de documentação](#GeneSys---Refer%C3%AAncia-de-documenta%C3%A7%C3%A3o)
  - [Contexto](#Contexto)
  - [Recursos](#Recursos)
  - [Contribuindo para o Sistema de Regras](#Contribuindo-para-o-Sistema-de-Regras)
  - [Contribuindo para o Site do SRD](#Contribuindo-para-o-Site-do-SRD)
  - [Licenças e Créditos](#Licen%C3%A7as-e-Cr%C3%A9ditos)


## Contexto

GeneSys é um sistema de [RPG](https://links.grifo.now.sh/o-que-e-rpg) Universal, ou seja, se propõe a ser genérico para que se possa desenvolver aventuras em qualquer cenário imaginável mantendo a simplicidade sob controle dos jogadores.

A primeira versão do [Fast Play](https://links.grifo.now.sh/fastplay) foi impressa em 2015 com nosso conjunto principal de regras, que, apesar de poucas mudanças acabou defasando em função dos novos exemplos e mecânicas abordadas nas aventuras adicionais e novos cenários que fomos desenvolvendo.

Para mitigar essa defasagem, publicamos o [FAQ](https://links.grifo.now.sh/faq) apenas no site para mantê-lo com um documento mais dinâmico resolvendo as principais dúvidas dos jogadores.

Agora que estamos às vésperas do lançamento do [BuShin](https://links.grifo.now.sh/bushin) começamos a unificar o FastPlay com o FAQ a fim de desenvolver a sua tão esperada segunda edição. Como desejamos uma atualização mais dinâmica desse conjunto de regras surgiu a ideia de concentrar todas as informações num único site de forma que o acesso seja agilizado e possa ser facilmente referenciado conforme novos cenários forem sendo publicados.

## Recursos

O SRD está sendo desenvolvido como uma PWA, a principais vantagens que nos levaram a optar por essa tecnologia foram as seguintes:

-   **Facilidade de Edição**: O conteúdo do sistema fica isolado o que permite que usuários não técnicos possam submeter suas próprias modificações;
-   **Portabilidade**: Sendo um site leve apenas com texto e utilizando técnicas responsivas, a documentação se mantem acessível mesmo em plataformas móveis;
-   **Disponibilidade**: PWAs utilizam sistema de armazenamento nativos dos navegadores o que permite o acesso mesmo que os dispositivos estejam desconectados;
-   **Instalação**: PWAs podem ser instaladas nativamente em todos os navegadores modernos, inclusive nos celulares. Tanto Google quanto Microsoft já anunciaram o suporte para esse mecanismo em suas lojas. O iOs (Apple) também já possui os recursos necessários no Safari, entretanto ainda não há previsão para a AppleStore;
-   **Atualização**: Sendo apenas um site, a documentação se atualiza em todos os acessos. A cada versão aprovada o site se reconstrói para refletir os ajustes;

## Contribuindo para o Sistema de Regras

GeneSys é liberado como [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) o que resumidamente quer dizer que as regras podem ser estendidas ou modificadas desde que seja dada atribuição aos autores. Com isso, sugestões e alterações podem ser incorporadas no texto sem burocracia, mantendo o sistema vivo com a sua própria comunidade.

Uma grande vantagem da adoção desse modelo “open source” é que o conteúdo pode ser editado diretamente encurtando enormemente o tempo para que os jogadores possam usufruir das melhorias, como a comunidade de Software já faz.

Logo, as formas mais triviais de contribuição são utilizando o link de edição no rodapé das páginas ou editando diretamente o arquivo no diretório correspondente no diretório `content` ao salvar as modificações será feito um pedido de mudanças (Pull Request) que será avaliado e, caso não tenha nenhuma restrição, será incorporado ao sistema.

Caso deseje contribuir com grandes porções de texto aconselhamos a instalação do [Gatsby](https://www.gatsbyjs.org/tutorial/part-zero/) e do [Visual Studio Code](https://code.visualstudio.com/Download). Fizemos esse [guia inicial](https://github.com/grifoeditorial/genesys-srd/blob/master/instalando-contribuindo.md) para quem não conhece nada de ambos e deseje começar.

Para evitar frustrações, antes de enviar ou mesmo fazer grandes ajustes ou melhorias, solicitamos que abra uma [Issue](https://github.com/grifoeditorial/genesys-srd/issues/new) no Github para que possamos discutir os pontos que seriam alterados.

## Contribuindo para o Site do SRD

O site do SRD é desenvolvido com Gatsby e pode ser estendido de acordo com a necessidade. Pretendemos mantê-lo o mais simples possível de forma que possua uma grande compatibilidade com navegadores móveis.

Entretanto, tal qual o sistema de regras, estamos sempre abertos a contribuições. Basta enviar o Pull Requests que iremos avaliar a modificação para incorporá-la ao código.

Tal qual o sistema de regras, solicitamos que abra uma [Issue](https://github.com/grifoeditorial/genesys-srd/issues/new) no Github para que possamos discutir os pontos que seriam alterados e a necessidade das alterações.

Nosso "roadmap" técnico no momento é o seguinte:

-   [Layout: Descer botão de "Edit on Github" para o rodapé](https://github.com/grifoeditorial/genesys-srd/issues/2)
-   [Notificações de Atualização do SRD](https://github.com/grifoeditorial/genesys-srd/issues/4): Criar um sistema de inscrição para notificar as pessoas que tenham instalado o SRD como APP
-   ~~[Divulgar que o site do SRD é uma PWA](https://github.com/grifoeditorial/genesys-srd/issues/1): Quando aberto em dispositivos móveis notificar o usuário que o site pode ser instalado (add to home screen)~~
-   ~~Atualizar PWA quando usuário acessá-la novamente caso haja novo conteúdo~~
-   ~~Navegação: Links do rodapé para página anterior e próxima~~
-   ~~Navegação: Ancoras para títulos com caracteres especiais~~
-   ~~Navegação: Ancoras para títulos com espaços~~

## Licenças e Créditos

O sistema de regras (conteúdo na pasta contents) é liberado como [Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/).

O site é licenciado como MIT e desenvolvido com [Gatsby](https://www.gatsbyjs.org/) com o starter [Gitbook](https://github.com/hasura/gatsby-gitbook-starter) (ambos também licenciados como [MIT](https://github.com/gatsbyjs/gatsby/blob/master/LICENSE)).
