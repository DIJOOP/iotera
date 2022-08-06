const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        public_id: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			required: true,
		}
    },
    vendor:{
        type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
    },
    district:{
        type:String,
        
    },
    approval:{
        type:String,
        default:"Approval Pending"
    }
},
{timestamps:true})

module.exports=mongoose.model("Product",productSchema)