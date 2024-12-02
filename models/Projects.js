import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    nameproject: {
        type: String,
        trim: true,
        required: true
    },
    owner:{
        type:String,
        required:true
    },

    description: {
        type: String,
        trim:true,
        required: true,
        validate:{
            validator: (v) =>{
                return v.length >=15 && v.length <= 5000
            },
            message: 'Description must have betwwen 15 and 5000 characteres'
        }
    },
    license: {
        type: [String],
        trim: true,
        required: true,
        enum: [
        'CreativeCommons:Attribution-NoDerivates4.0Internacional(CCBY-ND4.0)',
        'CreativeCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)',
        'CreativeCommons:Attribution-NonCommercial4.0Internacional(CCBY-NC4.0)',
        'CreativeCommons:Attribution-NonCommercial-NoDerivates4.0 Internacional(CCBY-NC-ND4.0)', 
        'CreativeCommons:Attribution-NonCommercial-ShareAlike4.0Internacional(CCBY-NC-SA4.0)',
        'CreativeCommons:Attribution4.0Internacional(CCBY4.0)'
        ]
    },

    references: {
        type:String,
        trim: true,
        required: true,
    },
    bibliography: {
        type:String,
        trim: true,
    },

    application: {
        type:[String],
        trim: true,
        required: true,
        enum:['ConsumerGoods', 'Fabrics', 'Packaging', 'Construction&BuiltEnviroment', 'ProductDesign']
    },
    ingredients: {
        type:[String],
        trim: true,
        required: true
    },
    properties: {
        type:[String],
        trim: true,
        required: true,
        enum: ['ThermalProperties', 'PhysicalProperties', 'MechanicalProperties-Tension', 'MechanicalProperties-Strength', 'Chemical-Properties', 'Optical-Properties', 'Barrier-Properties', 'Biocompatibility', 'Biodegradability', 'Surface-Properties', 'Porosity', 'Electrical-properties', 'Thermal-Stability', 'Antimicrobial-Properties','Viscoelastic-Properties']
    },
    ambientconditions: {
        type: String, 
        trim:true,
        required: true

    },

    lightsconditions: {
        type: String,
        trim:true,
        required: true,
        enum: ['DirectSunLigth', 'PartlyShadedSunLigth', 'AmbientOverheadLigthing']
    },
    tools: {
        type: [String],
        trim:true,
        required: true,
        enum: ['Cooker/stove/hotplates', 'Teaspoon', 'MeasuringCup', 'CookingPot', 'Scale', 'Thermometer', 'Oven', 'MicronSieve', 'PressureCooker', 'Gloves', 'PlasticFillm','SprayBottle', 'CanningJar', 'Mold', 'Blender', 'Brush', 'Ruler', 'LasserCutter', 'MeasuringCylinder', 'Syringe', 'Pippete', 'Filter', 'Sponge', 'PaperMould', 'SiliconeMat', '3DPrinter', 'MetalScreenMesh', 'Drainer','Mixer','CentrifugalMixer','DustMask', 'PetriDish', 'strainer','ContainerWithLid', 'Scissors', 'MortarAndPestle', 'FabricCloth', 'PuttyKnife', 'Degasser', 'Homogenizer', 'KitchenTools', 'Scooby']
    },
   processes: {
    type: [String],
    trim:true,
    required: true,
    enum: ['3Dprinted', 'LaserCut' ,'Ground', 'Molded', 'Cast', 'Cooked',
        'Cut','Baked','Mixed', 'AirDried', 'Freeze-dried', 'Frozen', 'Growm', 'Fermented', 'Boiled', 'Fired', 'Kneaded', 'Decant','OvenDry', 'Crushed', 'Sieved', 'Rinsed', 'Soaked', 'Sprayed', 'Dry',
        'Mix', 'Warm', 'Grated', 'Heated', 'Dyed', 'Painted', 'Extruded', 'Strained', 'Blended', 'Peeled', 'Pressed']
   },
   preptime: {
    type: String,
    trim:true,
    required:true
   },
   image : {
    type : [String],
    required : true,
    // validate:{
    //     validator: function(v) {
    //         const imagePattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i 
    //         return imagePattern.test(v)
    //     },
    //     message:'Image must be a URL valid or a format ,.png, .jpeg, .jpg, .gif, .webp'
    //}
    },
    views:{
        type: [String],
  
    },
    comments: {
        type: [String]
    },
    method:{
        type:String,
        trim:true
    },
    uid:{
        type : String,
        trim : true,
        required : true
    }

},{timestamps:true})

const Projects = mongoose.model('ProjectsDB',ProjectsSchema)

export default Projects