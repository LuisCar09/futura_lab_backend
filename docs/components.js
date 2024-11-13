module.exports = {
    components: {
        schemas: {
            Projects: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: 'project identification number',
                        example: '6733ad254493364b697221bd'
                    },
                    NameProject: {
                        type: 'string',
                        description: 'name of the project',
                        example: 'agar-agar bioplastic'
                    },
                    Description: {
                        type: 'string',
                        description: 'description of the product',
                        example: 'bioplastic agar-agar based'
                    },
                    Composition: {
                        type: 'string',
                        description: 'composition of the product',
                        example: 'agar-agar'
                    },
                    Contributors: {
                        type: 'string',
                        description: 'researchers of the project',
                        example: 'Bárbara Sánchez Urbano'
                    },
                    License: {
                        type: 'string',
                        description: 'kind of the license',
                        example: 'Creative-commons'
                    },
                    Bibliography: {
                        type: 'string',
                        description: 'bibliography of the project',
                        example: 'https://el-recetario.net/wp-content/uploads/2018/07/TFT_Isaac_Memoria_LQ_001.pdf'
                    },
                }
            }
        }
    }
}