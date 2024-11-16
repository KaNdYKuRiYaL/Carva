import { Schema , model , models} from "mongoose";

const PropertySchema =  new Schema(
// {
//     owner:{
//         type: Schema.Types.ObjectId,
//         ref : 'User',
//         required : true,
//     },
//     name:{
//         type:String,
//         required: true,
//     },
//     type:{
//         type:String,
//         required:true,
//     },
//     description:{
//         type:String
//     },
//     location:{
//         street:{
//             type:String
//         },
//         city:{
//             type:String
//         },
//         state:{
//             type:String
//         },
//         zipcode:{
//             type:String
//         }
//     },
//     beds:{
//         type:Number,
//         required:true,
//     },
//     baths:{
//         type:Number,
//         require: true,
//     },
//     square_feet:{
//         type:Number,
//         required:true,
//     },
//     amenities:[
//         {
//             type:String
//         }
//     ],
//     rates:{
//         nightly:{
//             type: Number
//         },
//         weekly:{
//             type: Number
//         },
//         monthly:{
//             type: Number
//         }
//     },
//     seller_info:{
//         name:{
//             type:String
//         },
//         email:{
//             type:String
//         },
//         phone:{
//             type:String
//         }
//     },
//     images:[
//         {
//             type:String
//         }
//     ],
//     is_featured:{
//         type:Boolean,
//         default:false
//     }
// },{
//     timestamps: true
// }

{
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    type: {
        type: String, // e.g., sedan, hatcback
        required: true,
    },

    model: {
        type: String, // e.g., lxi, vlxi
        required: true,
    },

    year: {
        type: Number, // e.g., 2022
        required: true,
    },
    description: {
        type: String,
    },

    location: {
        street : {
            type : String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipcode: {
            type: String,
        },
    },
    seating_capacity: {
        type: Number, // Number of seats in the car
        required: true,
    },
    fuel_type: {
        type: String, // e.g., Petrol, Diesel, Electric
        required: true,
    },
    transmission: {
        type: String, // e.g., Manual, Automatic
        required: true,
    },
    amenities : [
        {
            type : String
        }
    ],
    rates: {
        nightly: {
            type: Number,
        },
        weekly: {
            type: Number,
        },
        monthly: {
            type: Number,
        },
    },
    seller_info: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    images: [
        {
            type: String,
        }
    ],
    is_featured: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true
}


);

const Property = models.Property|| model('Property',PropertySchema)

export default Property;