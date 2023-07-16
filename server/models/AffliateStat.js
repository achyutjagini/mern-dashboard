import mongoose from "mongoose";

//userID - one to one as one userId per affiliate stat

//affiliatesales - one to many 

const AffiliateStatSchema = new mongoose.Schema(
    {
        userId:
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },

        affiliateSales: {
            //array of object id's
            type: [mongoose.Types.ObjectId],
            ref: "Transaction",
        },

    },
    { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;






















