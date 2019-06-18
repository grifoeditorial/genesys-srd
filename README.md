# GeneSys - Referência de documentação

Bem-vindo ao Documento de Referências para o GeneSys RPG. Esse é um "leia-me" técnico para aqueles que desejem contribuir com o sistema tanto no conjunto do sistema de regras quanto no próprio site do SRD.

O objetivo do SRD é ser um guia com referências rápidas e atualizadas para serem usados com os cenários desenvolvidos utilizando o sistema GeneSys.

Para manter-se acessível, ele é desenvolvido como um PWA responsiva o que garante o acesso em dispositivos móveis mesmo que estejam desconectados.

-   [GeneSys - Referência de documentação](#genesys---refer%C3%AAncia-de-documenta%C3%A7%C3%A3o)
    -   [Contexto](#contexto)
    -   [Recursos](#recursos)
    -   [Contribuindo para o Sistema de Regras](#contribuindo-para-o-sistema-de-regras)
    -   [Contribuindo para o Site do SRD](#contribuindo-para-o-site-do-srd)
    -   [Instalação técnica](#instala%C3%A7%C3%A3o-t%C3%A9cnica)
        -   [Git e Github](#git-e-github)
        -   [Node](#node)
        -   [Gatsby](#gatsby)
    -   [Git básico](#git-b%C3%A1sico)
    -   [Licenças e Créditos](#licen%C3%A7as-e-cr%C3%A9ditos)

## Contexto

GeneSys é um sistema de [RPG](https://genesys-srd.thluiz.now.sh/1.introducao#o-que---rpg) Universal, ou seja, se propõe a ser genérico para que se possa desenvolver aventuras em qualquer cenário imaginável mantendo a simplicidade sob controle dos jogadores.

A primeira versão do [Fast Play](https://links.grifo.now.sh/fastplay) foi impressa em 2015 com nosso conjunto principal de regras, que, apesar de poucas mudanças acabou defasando em função dos novos exemplos e mecânicas abordadas nas aventuras adicionais e novos cenários que fomos desenvolvendo.

Para mitigar essa defasagem, publicamos o [FAQ](https://links.grifo.now.sh/faq) apenas no site para mante-lo com um documento mais dinâmico resolvendo as principais dúvidas dos jogadores.

Agora que estamos às vesperas do lançamento do [BuShin](https://links.grifo.now.sh/bushin) começamos a unificar o FastPlay com o FAQ a fim de desenvolver a sua tão esperada segunda edição. Como desejamos uma atualização mais dinâmica desse conjunto de regras surgiu a ideia de concentrar todas as informações num único site de forma que o acesso seja agilizado e possa ser facilmente referenciado conforme novos cenários forem sendo publicados.

## Recursos

O SRD está sendo desenvolvido como uma PWA, a principais vantagens que nos levaram a optar por essa tecnologia foram as seguintes:

-   **Facilidade de Edição**: O conteúdo do sistema fica isolado o que permite que usuários não técnicos possam submeter suas próprias modificações;
-   **Portabilidade**: Sendo um site leve apenas com texto e utilizando técnicas responsivas, a documentação se mantem acessível mesmo em plataformas móveis;
-   **Disponibilidade**: PWAs utilizam sistema de armazenamento nativos dos navegadores o que permite o acesso mesmo que os dispositivos estejam desconectados;
-   **Instalação**: PWAs podem ser instaladas nativamente em todos os navegadores modernos, inclusive nos celulares. Tanto Google quanto Microsoft já anunciaram o suporte para esse mecanismo em suas lojas. O iOs (Apple) também já possui os recursos necessários no Safari, entrentanto ainda não há previsão para a AppleStore;
-   **Atualização**: Sendo apenas um site, a documentação se atualiza em todos os acessos. A cada versão aprovada o site se recontrói para refletir os ajustes;

## Contribuindo para o Sistema de Regras

GeneSys é liberado como Creative Common Attribution-ShareAlike... sugestões e alterações podem ser incorporadas no texto...podendo ser editado diretamente no GitHub com poucos clicks... As páginas do SRD possuem no rodapé o link para edição no GitHub...

## Contribuindo para o Site do SRD

O site do SRD é desenvolvido com Gatsby e pode ser estendido de acordo com a necessidade... pretendemos mantê-lo o mais simples possível tal qual o próprio sistema de RPG que ele suporta...

## Instalação técnica

Internamente usamos apenas máquinas windows e por isso vamos focar apenas nessa plataforma. De toda forma, todas as depêndencias possuem seus próprios guias específicos e vamos colocar os links em cada uma.

-   **Node**: Basta instalar o MSI do node no [site oficial](https://nodejs.org/en/download/).
-   **Terminal**: é preciso usar o terminal do windows em alguns momentos, algumas formas de executa-lo:
    - Abrir a janela de executar (iniciar -> Executar ou `WIN + r`), digitar cmd ou powershell;
    - No diretório que deseja abrir o terminal clicar com o botão direito do mouse segurando o `SHIFT`, terá uma opção "Abrir terminal aqui"
-   **Gatsby**: Com terminal aberto, digitar:

```sh

npm install -g gatsby gatsby-cli

```

A instalação completa dele pode ser encontrada no seu [tutorial](https://www.gatsbyjs.org/tutorial/part-zero/).

-   **Git e Github**: Utilizaremos a versão desktop do cliente gitbub do windows, basta instalar [esse executável](https://desktop.github.com/)

## Git básico

### Copiando o conteúdo (clone)

O Git é descentralizado, ou seja, não é preciso estar conectado o tempo todo com o servidor para poder realizar suas modificações. Para isso o trabalho é feito numa cópia local que é denominada clone.
Para ter seu clone local utilizando o cliente do GitHub para Windows, que é bem intuitivo; basta clicar em `File -> Clone Repository` que ele irá sincronizar os conteúdos do servidor com sua máquina local em uma pasta a sua escolha

### Sincronizando ajustes (commit)

Basta abrir o repositório no cliente do Github. Haverá uma janela no canto esquerdo escrito `Commit to master` ao clicar nele informando um título para os ajustes ele irá consolidar suas alterações para enviar para o servidor.

Com o commit feito, basta clicar em `publish`

## Rodando Local

Com todos as depêndencias instaladas basta executar com o terminal no diretório em que foi clonado o SRD:

```sh

gatsby develop

```



Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss deixa as pessoas mais interessantis. Aenean aliquam molestie leo, vitae iaculis nisl. Sapien in monti palavris qui num significa nadis i pareci latim.

## Licenças e Créditos

Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Manduma pindureta quium dia nois paga.
