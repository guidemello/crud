const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Lu30ca03s12',
    database: 'crud'
})

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou no MysQL!');
})

function selectClientes(callback){
    connection.query('SELECT * FROM clientes;', callback);
}

function insertCliente(cliente, callback){
    const sql = "INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);";
    connection.query(sql, [cliente.nome, cliente.idade, cliente.uf], callback);
}

function selectCliente(id, callback){  
    const sql = "SELECT * FROM clientes WHERE id=?";
    connection.query(sql, [id], callback);
}

function updateCliente(id, cliente, callback){
    const sql = "UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?";
    connection.query(sql, [cliente.nome, cliente.idade, cliente.uf, id], callback);
}

function deleteCliente(id, callback){
    connection.query('DELETE FROM clientes WHERE id=?;', [id], callback);
}

module.exports = { selectClientes, selectCliente, insertCliente, updateCliente, deleteCliente }