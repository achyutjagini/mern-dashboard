import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {
        productId: String,
        yearlySalesTotal: Number,//Total price sold per year for the particular product
        yearlyTotalSoldUnits: Number,
        year: Number,

        /*no of items sold of the product per month*/

        //object nested in an array
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
    },
    { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;