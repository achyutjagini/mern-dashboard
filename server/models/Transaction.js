import mongoose from "mongoose";

/*

products: This seems to be a property or field in the data model. It
is expected to hold an array of elements.

type: [mongoose.Types.ObjectId]: This part indicates the data type for each element
in the products array. In this case, it is set to be an array of Mongoose ObjectIds.

An ObjectId is a unique identifier used by MongoDB to identify 
documents in a collection.

of: Number: This part specifies that each element of the products array should be
 of type Number.
Therefore, the elements in the products array are expected to be numeric values.

*/

const TransactionSchema = new mongoose.Schema(
    {
        userId: String,

        cost: String,

        products: {
            type: [mongoose.Types.ObjectId]
        },
    },

    { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;