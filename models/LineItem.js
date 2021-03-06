var mongoose = require("mongoose")

const LineItemSchema = new mongoose.Schema({
  description: { type: String , required: [ true, 'is required'] },
  quantity: String,
  unitOM: String,
  materialUnitPrice: String,
  laborUnitPrice: String,
})

LineItemSchema.methods.getLineItemObject = function() {
  return {
    id: this._id,
    description: this.description,
    quantity: this.quantity,
    uom: this.unitOM,
    materialUnitPrice: this.materialUnitPrice,
    laborUnitPrice: this.laborUnitPrice
  }
}

const LineItem = mongoose.model('LineItem', LineItemSchema)


module.exports = LineItem
