import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        //productsWithStats-array of objects

        const productsWithStats = await Promise.all(

            //map over all products
            products.map(async (product) => {

                //stats of the product being mapped over
                const stat = await ProductStat.find({
                    productId: product._id,
                });

                return {
                    //all the product properties of the specific document
                    ...product._doc,
                    stat,
                };
            })
        );

        res.status(200).json(productsWithStats);

    }

    catch (error) {
        res.status(404).json({ message: error.message });
    }
};

