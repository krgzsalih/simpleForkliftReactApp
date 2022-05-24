const mysql = require('mysql');
var mCredidentals={
    host     : '85.106.7.126',
    port     : '3306',
    user     : 'root',
    password : 'Apra!2561',
    database : 'apra'
}

function form(res, paket){

    var connection = mysql.createConnection(mCredidentals);
    console.log("gelen paket " + paket);
    var answer='';
    connection.connect();
    var q="INSERT INTO birimler (isim, aciklama, oncelik) values('"+paket.birim+"','"+paket.aciklama+"','"+paket.oncelik+"')";
    console.log(q);
    connection.query(q, function (error, results, fields) {
        if (error) throw error;
        console.log('kaydedildi ')
        connection.end();
    });    
}

function liste(res, paket){

    var connection = mysql.createConnection(mCredidentals);
    console.log("gelen paket " + paket);
    connection.connect();
    var q="SELECT * FROM gorevler where tamamlandi=0 order by oncelik,zaman";
    console.log(q);
    connection.query(q, function (error, results, fields) {
        if (error) throw error;
        console.log('veriler çekildi' + results);
        res.json({results})
        connection.end();
    });    
}


module.exports = {
    form:form,
    liste:liste
};