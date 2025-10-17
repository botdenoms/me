export const worksList = [
    {
        title: 'Medeasy',
        category: 'Mobile app',
        thumbnail: '../imgs/medesy showcase.png',
        description: `A mobile application offering remote or online diagnosis services.
        This services is enabled by bringing all involved stakeholder:  
        specialized doctor, health and test facilities and the users requiring the services. 
        Through the app a user can find specialist, schedule tests, request diagnosis service 
        , share test, view diagnosis and more. specialist and facilities can register to offer 
        their services to the users.`,
        tools: [
            'Flutter',
            'Firebase',
            'Vite',
            'Figma',
        ],
        showcase: [
            '../imgs/medesy 1 .png',
            '../imgs/medesy 2.png', 
            '../imgs/medesy 3.png', 
            '../imgs/medesy 4.png'
        ],
        stage: 'Development',
        repo: 'https://github.com/botdenoms/medeasy',
        otherlinks: [
            // {link : '', store: ''}
        ],
        feedback: ''
    },
    {
        title: 'Url2pdf',
        category: 'Python Flask api',
        thumbnail: '../imgs/url2pdf show.png',
        description: `Converts a given url links to a pdf file. Requests made to \n
        the REST api accepts website urls as the parameter, \n
        the api returns a json object. The json object contains the given url \n
        website pdf document in base64 format, if the url is a valid url\n
        the based64 encoding can be converted to a pdf file format.
        `,
        tools: [
            'Python',
            'Flask',
            'Selenium',
        ],
        showcase: [
            '../imgs/url2pdf 1.png',
            '../imgs/url2pdf 2.png'
        ],
        stage: 'Production',
        repo: 'https://github.com/botdenoms/url2pdf',
        otherlinks: [],
        feedback: ''
    },
    {
        title: 'Portfolio',
        category: 'Webiste',
        thumbnail: '../imgs/portfolio showcs.png',
        description: `My portfolio website, a static website showcasing my works.
        Contact links on how to find me and more information.
        `,
        tools: [
            'Vite',
            'Figma',
        ],
        showcase: [
            '../imgs/portfolio 1.png', 
            '../imgs/portfolio 2.png', 
            '../imgs/portfolio 3.png'
        ],
        stage: 'Production',
        repo: 'https://github.com/botdenoms/me',
        otherlinks: [
            {link: 'https://dennismosetio.web.app/', store: 'Web'}
        ],
        feedback: `My personal portfolio website, a simple, minimalistic website.\n
        \n
        `
    },
    {
        title: 'Offerske',
        category: 'Python app',
        thumbnail: '../imgs/offerske show.png',
        description: `A Scrapy python app: using scrapy package, this program scraps flash sale offer 
        on jumia e-commerce websit. \n
        Supports exporting scrapped data in scapy supported types, json, csv, pickle. \n
        plus custom support for mongodb pipeline for custom export to mongodb database.
        `,
        tools: [
            'Python',
            'Scrapy'
        ],
        showcase: [
            '../imgs/offers 2.png'
        ],
        stage: 'Production',
        repo: 'https://github.com/botdenoms/offerske',
        otherlinks: [],
        feedback: ''
    },
    {
        title: 'Ranked Choice Voting, (RCV)',
        category: 'Web app',
        thumbnail: '',
        description: `A web application: using the ranked choice voting methodology
        Users can create elections, add candidates, share the election, vote on elections 
        and view results plus visualizations of the data. 
        Featuress include anonimous voting, open public or private voting.
        `,
        tools: [
            'React',
            'Vite',
            'Firebase',
            'Figma',
        ],
        showcase: [],
        stage: 'Production',
        repo: 'https://github.com/botdenoms/rcv',
        otherlinks: [],
        feedback: ''
    },
]
