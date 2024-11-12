import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    nameProject: {
        type: String,
        trim: true,
        required: true
    },

    description: {
        type: String,
        trim:true,
        required: true,
        validated:{
            validator: (v) =>{
                return v.length >=15 && v.length <= 5000
            },
            message: 'Description must have betwwen 15 and 5000 characteres'
        }
    },

    Composition: {
        type: String,
        trim: true,
        required: true
    
    },
    Contributors: {
        type: String,
        trim: true,
        required: true

    },
    License: {
        type: [String],
        trim: true,
        required: true,
        enum: [
        'CreativeCommons:Attribution-NoDerivates4.0Internacional(CCBY-ND4.0)',
        'CreatvieCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)',
        'CreativeCommons:Attribution-NonCommercial4.0Internacional(CCBY-NC4.0)',
        'CreativeCommons:Attribution-NonCommercial-NoDerivates4.0 Internacional(CCBY-NC-ND4.0)', 
        'CreativeCommons:Attribution-NonCommercial-ShareAlike4.0Internacional(CCBY-NC-SA4.0)',
        'CreativeCommons:Attribution4.0Internacional(CCBY4.0)'
        ]
    },

    References: {
        type:String,
        trim: true,
        required: true,
    },
    Bibliography: {
        type:String,
        trim: true,
    },

    application: {
        type:String,
        trim: true,
        required: true,
        enum:['ConsumerGoods','Fabrics','Packaging','Construction&BuiltEnviroment','ProductDesign']
    },
    Ingredients: {
        type:String,
        trim: true,
        required: true
    },
    Properties: {//que se puedan elegir mas de una//
        type:[String],
        trim: true,
        required: true,
        enum: ['ThermalProperties', 'PhysicalProperties', 'MechanicalProperties-Tension', 'MechanicalProperties-Strength', 'Chemical-Properties', 'Optical-Properties', 'Barrier-Properties', 'Biocompatibility', 'Biodegradability', 'Surface-Properties', 'Porosity', 'Electrical-properties', 'Thermal-Stability', 'Antimicrobial-Properties','Viscoelastic-Properties']
    },
    AmbientConditions: {
        type: String, //para cº o fº
        trim:true,
        required: true

    },

    LigthsConditions: {
        type: String,
        trim:true,
        required: true,
        enum: ['DirectSunLigth', 'PartlyShadedSunLigth', 'AmbientOverheadLigthing']
    },
    Tools: {
        type: [String],
        trim:true,
        required: true,
        //se tendra que seleccionar mas de uno( mirar maxlengt y minlength como validadores)
        enum: ['Cooker/stove/hotplates', 'Teaspoon', 'MeasuringCup', 'CookingPot', 'Scale', 'Thermometer', 'Oven', 'MicronSieve', 'PressureCooker', 'Gloves', 'PlasticFillm','SprayBottle', 'CanningJar', 'Mold', 'Blender', 'Brush', 'Ruler', 'LasserCutter', 'MeasuringCylinder', 'Syringe', 'Pippete', 'Filter', 'Sponge', 'PaperMould', 'SiliconeMat', '3DPrinter', 'MetalScreenMesh', 'Drainer','Mixer','CentrifugalMixer','DustMask', 'PetriDish', 'strainer','ContainerWithLid', 'Scissors', 'MortarAndPestle', 'FabricCloth', 'PuttyKnife', 'Degasser', 'Homogenizer', 'KitchenTools', 'Scooby']
    },
   Processes: {
    type: [String],
    trim:true,
    required: true,
    //se tendra que seleccionar mas de uno( mirar maxlengt y minlength como validadores)
    enum: ['3Dprinted', 'LaserCut' ,'Ground', 'Molded', 'Cast', 'Cooked',
        'Cut','Baked','Mixed', 'AirDried', 'Freeze-dried', 'Frozen', 'Growm', 'Fermented', 'Boiled', 'Fired', 'Kneaded', 'Decant','OvenDry', 'Crushed', 'Sieved', 'Rinsed', 'Soaked', 'Sprayed', 'Dry',
        'Mix', 'Warm', 'Grated', 'Heated', 'Dyed', 'Painted', 'Extruded', 'Strained', 'Blended', 'Peeled', 'Pressed']
   },
   PrepTime: {
    type: String,
    trim:true,
    required:true
   },
   image : {
    type : String,
    required : true,
    validate:{
        validator: function(v) {
            const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i //regrex to validate image url
            return imagePattern.test(v)
        },
        message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
    }
    },
    video: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const videoPattern = /^(https?:\/\/.*\.(?:mp4|webm|ogg|mov|avi|flv|wmv))$/i; // regex to validate video URL
                return videoPattern.test(v);
            },
            message: 'Video must be a valid URL in formats: .mp4, .webm, .ogg, .mov, .avi, .flv, .wmv'
        }
    }

},{timestamps:true})

const Projects = mongoose.model('ProjectsDB',ProjectsSchema)

export default Projects