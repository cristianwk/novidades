const db = ('../../banco/dbConexao');

module.exports = class GaleriaModel{
    static getTodos(callback){
        return db.query("select * from galeria", callback);
    }
}