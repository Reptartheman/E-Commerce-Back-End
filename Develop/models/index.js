// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// One-to-One relationship
// Foreign key will belong to Product
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// One-to-Many relationship
// Foreign key will belong to Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Many-to-Many relationship
// There is a many-to-many relationship between Product and Tag, with ProductTag being the junction table. 
// Junction Table: This is a table where two tables will be connected because of a many-to-many relationship.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Same as above.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};



/* NOTES

    -- One to One: It's when one record of one table is linked to another record in another table. 
    -- One to Many: This is when one record of one table can be linked to zero or more records in another table.
    -- Many to Many: When many rows in one table are linked to many rows in another table.
*/