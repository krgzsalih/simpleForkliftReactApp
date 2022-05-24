import axios from 'axios';

export function form(birim, aciklama, oncelik,cb){
    var paket={birim, aciklama, oncelik}
    axios.post('http://localhost:6161/admin/form',paket).then(({data})=>{
        console.log(data);
        cb(data);
    }).catch((err)=>{
        console.log(err);
    })
}

export function liste(listem){
    
    axios.post('http://localhost:6161/admin/liste').then(res=>{
        listem = res.data;
    }).catch((err)=>{
        console.log(err);
    })
}
