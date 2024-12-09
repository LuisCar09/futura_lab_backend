module.exports = {
    components: {
        schemas: {
            Projects: {
                type: 'object',
                properties: {
                    nameproject: {
                        type: 'string',
                        description: 'Name of the project',
                        example: 'Agar-Agar Bioplastic'
                    },
                    owner: {
                        type: 'string',
                        description: 'Owner of the project',
                        example: 'John Doe'
                    },
                    description: {
                        type: 'string',
                        description: 'Description of the project (15 to 5000 characters)',
                        example: 'Bioplastic agar-agar based'
                    },
                    license: {
                        type: 'array',
                        description: 'Licenses associated with the project',
                        items: {
                            type: 'string',
                            enum: [
                                'CreativeCommons:Attribution-NoDerivates4.0Internacional(CCBY-ND4.0)',
                                'CreativeCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)',
                                'CreativeCommons:Attribution-NonCommercial4.0Internacional(CCBY-NC4.0)',
                                'CreativeCommons:Attribution-NonCommercial-NoDerivates4.0Internacional(CCBY-NC-ND4.0)', 
                                'CreativeCommons:Attribution-NonCommercial-ShareAlike4.0Internacional(CCBY-NC-SA4.0)',
                                'CreativeCommons:Attribution4.0Internacional(CCBY4.0)'
                            ]
                        },
                        example: ['CreativeCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)']
                    },
                    references: {
                        type: 'string',
                        description: 'References related to the project',
                        example: 'https://example.com/references'
                    },
                    bibliography: {
                        type: 'string',
                        description: 'Bibliography of the project',
                        example: 'https://el-recetario.net/wp-content/uploads/2018/07/TFT_Isaac_Memoria_LQ_001.pdf'
                    },
                    application: {
                        type: 'array',
                        description: 'Applications for the project',
                        items: {
                            type: 'string',
                            enum: ['ConsumerGoods', 'Fabrics', 'Packaging', 'Construction&BuiltEnviroment', 'ProductDesign']
                        },
                        example: ['ConsumerGoods', 'Packaging']
                    },
                    ingredients: {
                        type: 'array',
                        description: 'Ingredients used in the project',
                        items: {
                            type: 'string'
                        },
                        example: ['Agar-Agar']
                    },
                    properties: {
                        type: 'array',
                        description: 'Properties of the product',
                        items: {
                            type: 'string',
                            enum: [
                                'ThermalProperties', 'PhysicalProperties', 'MechanicalProperties-Tension', 
                                'MechanicalProperties-Strength', 'Chemical-Properties', 'Optical-Properties', 
                                'Barrier-Properties', 'Biocompatibility', 'Biodegradability', 
                                'Surface-Properties', 'Porosity', 'Electrical-properties', 
                                'Thermal-Stability', 'Antimicrobial-Properties', 'Viscoelastic-Properties'
                            ]
                        },
                        example: ['Biodegradability', 'ThermalProperties']
                    },
                    ambientconditions: {
                        type: 'string',
                        description: 'Ambient conditions for the project',
                        example: 'Room temperature'
                    },
                    lightsconditions: {
                        type: 'array',
                        description: 'Light conditions for the project',
                        items: {
                            type: 'string',
                            enum: ['DirectSunLigth', 'PartlyShadedSunLigth', 'AmbientOverheadLigthing']
                        },
                        example: ['DirectSunLigth']
                    },
                    tools: {
                        type: 'array',
                        description: 'Tools required for the project',
                        items: {
                            type: 'string',
                            enum: ['Cooker/stove/hotplates', 'Teaspoon', 'MeasuringCup', 'CookingPot', 'Scale']
                        },
                        example: ['Blender', 'CookingPot']
                    },
                    processes: {
                        type: 'array',
                        description: 'Processes involved in the project',
                        items: {
                            type: 'string',
                            enum: ['3Dprinted', 'LaserCut', 'Ground', 'Molded', 'Cast', 'Cooked', 'Cut']
                        },
                        example: ['Cooked', 'Molded']
                    },
                    preptime: {
                        type: 'string',
                        description: 'Preparation time for the project',
                        example: '30 minutes'
                    },
                    image: {
                        type: 'array',
                        description: 'Images related to the project',
                        items: {
                            type: 'string',
                            format: 'uri'
                        },
                        example: ['https://example.com/image1.png']
                    },
                    views: {
                        type: 'array',
                        description: 'Views related to the project',
                        items: {
                            type: 'string'
                        },
                        example: ['View1', 'View2']
                    },
                    comments: {
                        type: 'array',
                        description: 'Comments related to the project',
                        items: {
                            type: 'string'
                        },
                        example: ['Great project!', 'Very informative.']
                    },
                    method: {
                        type: 'string',
                        description: 'Method used in the project',
                        example: 'Mixing and cooking'
                    },
                    uid: {
                        type: 'string',
                        description: 'Unique identifier for the project',
                        example: 'user1234'
                    }
                }
            },
            Services: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'Name of the service',
                        example: 'Carpentry Service'
                    },
                    email: {
                        type: 'string',
                        description: 'Email of the service provider',
                        example: 'provider@example.com'
                    },
                    username: {
                        type: 'string',
                        description: 'Username of the service provider',
                        example: 'carpenter123'
                    },
                    description: {
                        type: 'string',
                        description: 'Description of the service',
                        example: 'Custom woodwork and repairs'
                    },
                    duration: {
                        type: 'string',
                        description: 'Duration of the service',
                        example: '2 hours'
                    },
                    price: {
                        type: 'string',
                        description: 'Price of the service',
                        example: '50.00'
                    },
                    location: {
                        type: 'string',
                        description: 'Location of the service provider',
                        example: 'New York, NY'
                    },
                    uid: {
                        type: 'string',
                        description: 'Unique identifier for the service',
                        example: 'service1234'
                    },
                    image: {
                        type: 'array',
                        description: 'Images related to the service',
                        items: {
                            type: 'string',
                            format: 'uri'
                        },
                        example: ['https://example.com/service-image.png']
                    },
                    stock: {
                        type: 'number',
                        description: 'Stock available for the service',
                        example: 10
                    },
                    hour: {
                        type: 'string',
                        description: 'Hour of service availability',
                        example: '10:00 AM'
                    },
                    date: {
                        type: 'string',
                        description: 'Date of service availability',
                        example: '2023-10-01'
                    }
                }
            },
            User: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'First name of the user',
                        example: 'John'
                    },
                    lastName: {
                        type: 'string',
                        description: 'Last name of the user',
                        example: 'Doe'
                    },
                    userName: {
                        type: 'string',
                        description: 'Username of the user',
                        example: 'johndoe123'
                    },
                    image: {
                        type: 'string',
                        description: 'Profile image URL of the user',
                        example: 'https://example.com/profile-image.png'
                    },
                    email: {
                        type: 'string',
                        description: 'Email of the user',
                        example: 'johndoe@example.com'
                    },
                    dateBirth: {
                        type: 'string',
                        description: 'Date of birth in YYYY/MM/DD format',
                        example: '1990/01/01'
                    },
                    address: {
                        type: 'string',
                        description: 'Address of the user',
                        example: '123 Main St, Anytown, USA'
                    },
                    projects: {
                        type: 'array',
                        description: 'Projects associated with the user',
                        items: {
                            type: 'string'
                        },
                        example: ['project1', 'project2']
                    },
                    likes: {
                        type: 'array',
                        description: 'Likes associated with the user',
                        items: {
                            type: 'string'
                        },
                        example: ['project1', 'project3']
                    },
                    followers: {
                        type: 'number',
                        description: 'Number of followers the user has',
                        example: 100
                    },
                    follows: {
                        type: 'number',
                        description: 'Number of users the user follows',
                        example: 50
                    },
                    preferences: {
                        type: 'array',
                        description: 'User preferences',
                        items: {
                            type: 'string'
                        },
                        example: ['preference1', 'preference2']
                    },
                    description: {
                        type: 'string',
                        description: 'Description of the user',
                        example: 'Passionate about bioplastics and sustainability'
                    },
                    offers: {
                        type: 'array',
                        description: 'Offers made by the user',
                        items: {
                            type: 'string'
                        },
                        example: ['offer1', 'offer2']
                    },
                    uid: {
                        type: 'string',
                        description: 'Unique identifier for the user',
                        example: 'user1234'
                    },
                    password: {
                        type: 'string',
                        description: 'Password of the user',
                        example: 'securepassword123'
                    },
                    phone: {
                        type: 'string',
                        description: 'Phone number of the user',
                        example: '+1234567890'
                    }
                }
            },
            Payment: {
                type: 'object',
                properties: {
                    uidOwner: {
                        type: 'string',
                        description: 'Unique identifier of the service owner',
                        example: 'owner1234'
                    },
                    uidBuyer: {
                        type: 'string',
                        description: 'Unique identifier of the buyer',
                        example: 'buyer1234'
                    },
                    methodPayment: {
                        type: 'string',
                        description: 'Payment method used',
                        example: 'Credit Card'
                    },
                    price: {
                        type: 'string',
                        description: 'Price of the service',
                        example: '50.00'
                    },
                    services: {
                        type: 'array',
                        description: 'Services involved in the payment',
                        items: {
                            type: 'string'
                        },
                        example: ['service1', 'service2']
                    }
                }
            }
        }
    }
}
