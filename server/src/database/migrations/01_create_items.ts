import Knex from 'knex'

export async function up(Knex: Knex){
  //criar tabela
  return Knex.schema.createTable('items',table => {{
    table.increments('id').primary
    table.string('titulo').notNullable()
    table.string('image').notNullable()
  }})

}

export async function down(Knex:Knex){
  //voltar atras(Deletar a tabela)

  return Knex.schema.dropTable('items')

}