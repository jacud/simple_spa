const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})


const Basket = sequelize.define('basket', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
})

const BasketItem = sequelize.define('basket_item', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Manufacturer = sequelize.define('manufacturer', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },    
})

const ProductCategory = sequelize.define('product_category', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },    
})

const Vote = sequelize.define('vote', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    value: { type: DataTypes.INTEGER, allowNull: false },    
})

const ProductInfo = sequelize.define('product_info', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

const ManufacturerProductCategoryLink = sequelize.define('manufacturer_product_category_link', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true }
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Vote);
Vote.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

ProductCategory.hasOne(Product);
Product.belongsTo(ProductCategory);

Manufacturer.hasOne(Product);
Product.belongsTo(Manufacturer);

Product.hasMany(Vote);
Vote.belongsTo(Product);

Product.hasMany(BasketItem);
BasketItem.belongsTo(Product);

ProductCategory.belongsToMany(Manufacturer, { through: ManufacturerProductCategoryLink });
Manufacturer.belongsToMany(ProductCategory, { through: ManufacturerProductCategoryLink });

module.exports = {
    User,
    Basket,
    BasketItem,
    Product,
    ProductCategory,
    Manufacturer,
    ProductInfo,
    Vote,
    ManufacturerProductCategoryLink
}
