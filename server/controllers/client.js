import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
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
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    // sort should look like this: { "field": "userId", "sort": "desc"}
    //frontend will send that as a string
    //need to parse that into a JS object

    const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

    // formatted sort should look like { userId: -1 } -what mongodb can read


    //if sort=asc sortParsed.field=1 else -1
    const generateSort = () => {
      const sortParsed = JSON.parse(sort);

      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
      };

      return sortFormatted;
    };

    //if sort exists we do the generateSort
    const sortFormatted = Boolean(sort) ? generateSort() : {};

    const transactions = await Transaction.find({
      $or: [
        //search the cost field with the user inputted search from frontend
        { cost: { $regex: new RegExp(search, "i") } },
        { "userId": { $regex: new RegExp(search, "i") } },
      ],
    })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize);

    //total number of transactions

    //search should already be a regular expression object like /abcd/

    /*  userId: { $regex: new RegExp(search, "i") },*/
    /*const total = await Transaction.countDocuments({

    });
*/

    const total = await Transaction.countDocuments(
      {
        "userId": { $regex: new RegExp(search, "i") },
      }
    );

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//After processing all the users, the mappedLocations object contains the count 
//of users for each country, mapped by their ISO3 code.

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    //{country starts from index 0}
    const mappedLocations = users.reduce((acc, { country }) => {

      const countryISO3 = getCountryIso3(country);

      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }

      acc[countryISO3]++;

      return acc;

    }, {});//{} is initial value of accumulator

    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};