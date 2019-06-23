const config = {
    siteTitle: 'GeneSys - Referência de Documentação',
    pwaPathPrefix: '/',
    siteShortTitle: 'GeneSys - SRD',
    siteDescription:
        'Referência de Documentação para o sistema de RPG GeneSys da Grifo Editorial',
    gatsby: {
        pathPrefix: '/',
        siteUrl: 'http://genesys-rpg.com',
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
        title: 'GeneSys - System Reference Document (SRD)',
        description:
            'Documentation built with mdx. Powering https://genesys-srd.grifo.now.sh',
        ogImage: null,
        docsLocation:
            'https://github.com/grifoeditorial/genesys-srd/tree/master/content',
        favicon: 'logo-midnight-blue.png',
    },
}

module.exports = config
