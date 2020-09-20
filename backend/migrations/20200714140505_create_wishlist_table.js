
exports.up = function(knex) {
    return knex.schema.createTable('wishlist', (table) => {
        table.increments('id')
        table.integer('user_id')
        table.integer('car_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('wishlist')

  
};
