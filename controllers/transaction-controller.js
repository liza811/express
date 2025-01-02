const secretKey = require("../config");
const { User, Bouquet, Transaction } = require("../models");
const jwt = require("jsonwebtoken");
exports.getUserTransactions = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    jwt.verify(token, secretKey);
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  try {
    const transactions = await Transaction.findAll({
      where: { userId },
      include: [
        {
          model: Bouquet,
          as: "bouquet",
          attributes: ["name"], // Fetch bouquet name
        },
      ],
      attributes: ["price", "date"], // Select transaction fields
      order: [["date", "DESC"]], // Order by date
    });

    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching user transactions:", error);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};
