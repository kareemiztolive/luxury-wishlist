
exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments('id')
        table.string('make')
        table.string('model')
        table.integer('year')
        table.integer('cost')
        table.integer('horsepower')
        table.integer('zerotosixty')
        table.integer('torque')
        table.integer('fueleconomycity')
        table.integer('fueleconomyhighway')
        table.string('description')
        table.string('imageurl1')
        table.string('imageurl2')
        table.string('imageurl3')
        table.string('imageurl4')

    
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('cars')
  
};
