const {
  User,
  Bouquet,
  Fleur,
  Transaction,
  BouquetFleur,
} = require("../models");

async function insertTestData() {
  try {
    let fleur1, fleur2, fleur3;
    let user1, user2;
    const userCount = await User.count();
    if (userCount === 0) {
      user1 = await User.create({
        login: "Liza1",
        password: "password123",
        fullName: "Liza 1",
      });
      user2 = await User.create({
        login: "Liza2",
        password: "password456",
        fullName: "Liza 2",
      });
      console.log("Users inserted:", user1, user2);
    }

    // Vérifier si des fleurs existent déjà, sinon les créer
    const fleurCount = await Fleur.count();
    if (fleurCount === 0) {
      fleur1 = await Fleur.create({
        name: "Red Rose",
        description: "A beautiful red rose",
        image: "f1.jpeg",
        price: 50.0,
      });
      fleur2 = await Fleur.create({
        name: "Pink Rose",
        description: "A colorful tulip",
        image: "F2.jpeg",
        price: 30.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F3.jpeg",
        price: 40.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F4.jpeg",
        price: 40.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F5.jpeg",
        price: 40.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F6.jpeg",
        price: 40.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F7.jpeg",
        price: 40.0,
      });
      fleur3 = await Fleur.create({
        name: "Purpule Rose",
        description: "A fragrant white lily",
        image: "F8.jpeg",
        price: 40.0,
      });
    }

    const bouquetCount = await Bouquet.count();
    if (bouquetCount === 0) {
      const bouquet1 = await Bouquet.create({
        name: "Romantic Bouquet",
        description: "A romantic bouquet of red roses",
        price: 500.0,
        image: "bouquet2.jpg",
        likes: 0,
      });
      const bouquet2 = await Bouquet.create({
        name: "Spring Bouquet",
        description: "A colorful bouquet of tulips and lilies",
        price: 400.0,
        image: "bouquet3.jpg",
        likes: 0,
      });

      console.log("Bouquets inserted:", bouquet1, bouquet2);

      // Associer des fleurs aux bouquets via BouquetFleur
      if (fleur2 && fleur3) {
        await BouquetFleur.create({
          bouquetId: bouquet2.id,
          fleurId: fleur2.id,
          quantity: 5, // Add 5 tulips
        });
        await BouquetFleur.create({
          bouquetId: bouquet2.id,
          fleurId: fleur3.id,
          quantity: 3, // Add 3 lilies
        });
      }
      if (fleur1) {
        await BouquetFleur.create({
          bouquetId: bouquet1.id,
          fleurId: fleur1.id,
          quantity: 15, // Add 5 tulips
        });
      }
    }

    // Vérifier si des transactions existent déjà, sinon les créer
    // const transactionCount = await Transaction.count();
    // if (transactionCount === 0) {
    //   const user = await User.findOne(); // On prend le premier utilisateur pour la transaction
    //   const bouquet1 = await Bouquet.findOne({
    //     where: { name: "Romantic Bouquet" },
    //   });

    //   const transaction = await Transaction.create({
    //     userId: user.id,
    //     totalAmount: bouquet1.fleurs[0].unitPrice * 10, // Le prix total pour 10 roses
    //   });

    //   await transaction.addBouquet(bouquet1, { through: { quantity: 10 } });
    //   console.log("Transaction inserted:", transaction);
    // }
  } catch (error) {
    console.error("Error inserting test data:", error);
  }
}

module.exports = insertTestData;
