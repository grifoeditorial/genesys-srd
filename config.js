const config = {
    siteTitle: 'GeneSys - Referência de Documentação',
    pwaPathPrefix: '/',
    siteShortTitle: 'GeneSys - SRD',
    siteDescription:
        'Referência de Documentação para o sistema de RPG GeneSys da Grifo Editorial - Seu jogo sob seu controle.',
    gatsby: {
        pathPrefix: '/',
        siteUrl: 'https://genesys-srd.grifo.now.sh',
        gaTrackingId: null,
    },
    header: {
        logo: 'logo.png',
        title: 'GeneSys',
        githubUrl: 'https://github.com/grifoeditorial/genesys-srd',
        helpUrl: '',
        tweetText: '',
        links: [{ text: '', link: '' }],
    },
    sidebar: {
        forcedNavOrder: [],
        links: [{ text: '', link: '' }],
    },
    siteMetadata: {
        title: 'GeneSys - Referência de Documentação (SRD)',
        description:
            'Referência de Documentação para o sistema de RPG GeneSys da Grifo Editorial - Seu jogo sob seu controle.',
        ogImage: null,
        keywords: 'RPG, Regras, Sistema, Documentação',
        docsLocation:
            'https://github.com/grifoeditorial/genesys-srd/tree/master/content',
        favicon: 'logo-midnight-blue.png',
    },
}

module.exports = config
