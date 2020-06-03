import Knex from 'knex'

export async function up(Knex: Knex){
  //criar tabela
  return Knex.schema.createTable('point_items',table => {{
    table.increments('id').primary
    table.integer('point_id').notNullable().references('id').inTable('points')
    table.integer('itemns_id').notNullable().references('id').inTable('items')
  }})

}

export async function down(Knex:Knex){
  //voltar atras(Deletar a tabela)

  return Knex.schema.dropTable('point_items')

}