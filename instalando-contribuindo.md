## Instalação

Esse guia é destinado as pessoas que desejam contribuir, mas que não tem nenhuma familiriade com desenvolvimento em código aberto (open source).

Internamente usamos apenas máquinas windows e por isso vamos focar apenas nessa plataforma. De toda forma, todas as depêndencias possuem seus próprios guias específicos e vamos colocar os links em cada uma.

-   **Node**: Basta instalar o MSI do node no [site oficial](https://nodejs.org/en/download/).
-   **Terminal**: é preciso usar o terminal do windows em alguns momentos, algumas formas de executa-lo:
    -   Abrir a janela de executar (iniciar -> Executar ou `WIN + r`), digitar cmd ou powershell;
    -   No diretório que deseja abrir o terminal clicar com o botão direito do mouse segurando o `SHIFT`, terá uma opção "Abrir terminal aqui"
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

### Ramos de alterações (branch)

Por segurança, apenas administradores conseguem enviar mudanças diretamente para o ramo principal (master) do site. Então é preciso criar um Ramo específico para suas alterações. Novamente utilizando o cliente do GitHub para Windows, basta clicar em `Branch -> New Branch`

### Sincronizando ajustes (commit && push)

Basta abrir o repositório no cliente do Github. Haverá uma janela no canto esquerdo escrito `Commit to master` ao clicar nele informando um título para os ajustes ele irá consolidar suas alterações para enviar para o servidor.

Com o commit feito, basta clicar em `publish` que os ajustes serão enviados para o github (push). Ao finalizar a sincronização ele irá oferecer para criar um pedido de mudança (pull request).

Quando seu pedido é aprovado, seus ajustes são automaticamente inseridos no ramo Master e nosso processo de publicação, que é todo automatizado, em cerca de 3 minutos disponibiliza as modificações no site do SRD.

## Rodando Local

Com todos as depêndencias instaladas basta executar com o terminal no diretório em que foi clonado o SRD:

```sh

gatsby develop

```
