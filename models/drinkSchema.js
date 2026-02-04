import mongoose from 'mongoose';

const beverageSchema = new mongoose.Schema({
    name: { type: String,
        required: true
     }, 
    contents: { type: [String] },
    alcohol: { type: Boolean, default: false }

});

export default mongoose.model("Drinks", beverageSchema);