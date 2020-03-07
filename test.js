const Blockchain = require('./blockchain');   // importando a função Blockchain
const bitcoin = new Blockchain();



 //Testando Método Hash
bitcoin.hashBlock



const anteriorBlockHash = 'KKKKKKKKKKKKK444499999555ASDAHBHBHH';  
const atualtBlockData =[  {
    
    valor: 10,
    remetente: 'NNNNNNNNNNN222222222kkkkkkkkkkAAAA',
    destinatario: 'KKKKKKKKKKKKK2222222222222'
},

{
    valor: 100,
    remetente: 'NNNNNNNNNNN3222222222211111111',
    destinatario: 'KKKKKKKKKKKKK11111111111112'
},

{
    valor: 500,
    remetente: 'HHHHHHHHHHHHJJJJJJJJJJJJJJJJJK',
    destinatario: '555555555555552222222222222'
},

];

const nonce = 100;

// Motra o hash do bloco
console.log('Hash: '+bitcoin.hashBlock(anteriorBlockHash,atualtBlockData,1489));


//Testando proofOfWork \\ Mostra quantas vezes o PoW tem que rodar até achar o nonce correto para gerar o hash que inicia com '0000'
  //console.log(bitcoin.proofOfWork(anteriorBlockHash,atualtBlockData,));







  /***const bc1 = {"chain":[{"index":1,"timestamp":1573409144860,"transactions":[],"nonce":100,"hash":"0","previousBlockHash":"0"},{"index":2,"timestamp":1573409935367,"transactions":[{"valor":300,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"7df9dd7003e611eabb36d996039c182b"},{"valor":200,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"812b956003e611eabb36d996039c182b"},{"valor":20,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"852cd25003e611eabb36d996039c182b"}],"nonce":149867,"hash":"0000f20fa69ee57a086005ed1296e093cc2dafae66cac2f385b2c6c1f0eee091","previousBlockHash":"0"},{"index":3,"timestamp":1573409994291,"transactions":[{"valor":12.5,"remetente":"00","destinatario":"b72985c003e411eabb36d996039c182b","transactionId":"8e59745003e611eabb36d996039c182b"},{"valor":15,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"a77c641003e611eabb36d996039c182b"},{"valor":30,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"aa59ba7003e611eabb36d996039c182b"},{"valor":80,"remetente":"BBBBBBBBJJJJJJJJJJJJJJJJSSSSSSSSS","destinatario":"AAAAAA444444444555555555CCCCCC","transactionId":"adec571003e611eabb36d996039c182b"}],"nonce":39817,"hash":"00001b9aba07e6941277af093703a81994796135deab97a9374a3d96eb556fe8","previousBlockHash":"0000f20fa69ee57a086005ed1296e093cc2dafae66cac2f385b2c6c1f0eee091"},{"index":4,"timestamp":1573410017097,"transactions":[{"valor":12.5,"remetente":"00","destinatario":"b72985c003e411eabb36d996039c182b","transactionId":"b176683003e611eabb36d996039c182b"}],"nonce":8840,"hash":"0000159df99b0bcef2fe3014cb60a77cc136b43c46d40dd42d8e6285a2ae9ae8","previousBlockHash":"00001b9aba07e6941277af093703a81994796135deab97a9374a3d96eb556fe8"},{"index":5,"timestamp":1573410019586,"transactions":[{"valor":12.5,"remetente":"00","destinatario":"b72985c003e411eabb36d996039c182b","transactionId":"bf0e539003e611eabb36d996039c182b"}],"nonce":81823,"hash":"0000112f6d8ca6c04e9efb1d760843f6de7f0c1f20cbf89e231aaceb652482bf","previousBlockHash":"0000159df99b0bcef2fe3014cb60a77cc136b43c46d40dd42d8e6285a2ae9ae8"}],"pendingTransactions":[{"valor":12.5,"remetente":"00","destinatario":"b72985c003e411eabb36d996039c182b","transactionId":"c08a1e2003e611eabb36d996039c182b"}],"currentNodeUrl":"http://localhost:3001","networkNodes":[]}

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));***/

/** 

    //Transações contidas nos blocos//
bitcoin.createNewBlock (2389, 'HHHHHHHHHXXXXXXXXXX','HHHHHHHHYYYYYYYYYYYXXXXXXXX');

bitcoin.createNewTransaction(100,'aaaaaaaaaaaaaaaaaaaaaaaa','xxxxxxxxxxxxxxxxxxxxxxx');

bitcoin.createNewBlock (2444, 'AUHEUAHEUHSUHUHA','KKKKKKKKKKKKKKKKKK');

bitcoin.createNewTransaction(2828,'ANDREyyyyyyyyyyyyyyyyyyyyyy','xxxxxxxxxxxxxxxxxxxxxxx');
bitcoin.createNewTransaction(2929,'LUCASxxxxxxxxxxxxxxxxxxxxx','xxxxxxxxxxxxxxxxxxxxxxx');
bitcoin.createNewTransaction(3030,'SANTOSahsudhaushuahsuhauhu','xxxxxxxxxxxxxxxxxxxxxxx');

bitcoin.createNewBlock (2525, 'Akkkklklkllklklklklklklk','KKKKKKKKKKKKKKKKKK');


  console.log(bitcoin);

  
*/