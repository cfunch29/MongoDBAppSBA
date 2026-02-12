import mongoose from 'mongoose';

const beverageSchema = new mongoose.Schema({
    name: { type: String,
        required: true
     }, 
    contents: { type: [String] },
    alcohol: { type: Boolean, default: false }

});

beverageSchema.index({ category: 1 });

beverageSchema.methods.getCategory = function (cb) {
    return mongoose.model("Drinks").find({ category: this.category }, cb);
};

// named default 
export default mongoose.model("Drinks", beverageSchema);