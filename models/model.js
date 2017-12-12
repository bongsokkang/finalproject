module.exports = function(sequelize, DataTypes) {
    var combinations = sequelize.define("combo", {
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    category: Sequelize.STRING,
    imageURL: Sequelize.STRING,
      chosen: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }, 
      
    });
    return combinations;

    var burgers = sequelize.define("burger", {
        name: Sequelize.STRING,
        price: Sequelize.INTEGER,
        category: Sequelize.STRING,
        imageURL: Sequelize.STRING,
          chosen: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          }, 
          
        });
        return combinations;

        var drinks = sequelize.define("drink", {
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            imageURL: Sequelize.STRING,
            //   text: {
            //     type: DataTypes.STRING,
            //     // AllowNull is a flag that restricts a todo from being entered if it doesn't
            //     // have a text value
            //     allowNull: false,
            //     // len is a validation that checks that our todo is between 1 and 140 characters
            //     validate: {
            //       len: [1, 140]
            //     }
            //   },
              chosen: {
                type: DataTypes.BOOLEAN,
                // defaultValue is a flag that defaults a new todos complete value to false if
                // it isn't supplied one
                defaultValue: false
              }, 
              
            });
            return combinations;

  };