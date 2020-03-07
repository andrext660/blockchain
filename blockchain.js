const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];
const uuid = require('uuid/v1');

function Blockchain () {
    this.chain = []; // local onde o blockchain será armazenado
    this.pendingTransactions = []; // local onde as transações serão armazenadas antes de irem pro blockchain

        this.currentNodeUrl = currentNodeUrl;
        this.networkNodes = [];

    this.createNewBlock(100,'0','0');
   
   
}

Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions =[];
    this.chain.push(newBlock);
    
    return newBlock;

};

//Buscar bloco anterior
Blockchain.prototype.getLastBlock = function (){
  return this.chain[this.chain.length - 1];
};



//Criar nova transação
Blockchain.prototype.createNewTransaction = function(valor,remetente,destinatario){
    const newTransaction = {
        valor: valor,
        remetente: remetente,
        destinatario: destinatario,
        transactionId: uuid().split('-').join('')
    };

    return newTransaction;
};

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj){
 this.pendingTransactions.push(transactionObj);
 return this.getLastBlock()['index'] + 1;
};


// Cria o hash do bloco
Blockchain.prototype.hashBlock = function(anteriorBlockHash, atualBlockData, nonce){

    const dataAsString = anteriorBlockHash + nonce.toString() + JSON.stringify(atualBlockData);
    const hash = sha256(dataAsString);
    return hash;
};

// Proof-of-Work
Blockchain.prototype.proofOfWork = function(anteriorBlockHash, atualBlockData){
 let nonce =0;
 let hash = this.hashBlock(anteriorBlockHash, atualBlockData, nonce);
 while(hash.substring(0,4) !== '0000'){
     nonce++;
     hash=this.hashBlock(anteriorBlockHash, atualBlockData, nonce);

     // Imprime o total de hash's até chegar em um valor que comece com o '0000'
    console.log(hash);
 }

 return nonce;

}

// Compara se os valores contidos na blockchain são legitimos

Blockchain.prototype.chainIsValid = function(blockchain) {
    let validChain = true;
    for(var i = 1; i<blockchain.length; i++){
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[ i - 1];
        const blockHash = this.hashBlock(prevBlock['hash'], {transactions: currentBlock['transactions'], index: currentBlock['index']}, currentBlock['nonce']);

        if(blockHash.substring(0, 4) !== '0000') validChain = false;
        if(currentBlock['previousBlockHash'] !== prevBlock['hash']) validChain = false;

 };

  const genesisBlock = blockchain[0];
  const correctNonce = genesisBlock['nonce'] === 100;
  const correctPreviousBlockHash = genesisBlock['previousBlockHash'] === '0';
  const correctHash = genesisBlock['hash'] === '0';
  const correctTransactions = genesisBlock['transactions'].length === 0;
  
   if(!correctNonce || !correctPreviousBlockHash || !correctHash || !correctTransactions) validChain = false;

    return validChain;
};


Blockchain.prototype.getBlock = function(blockHash){
let correctBlock = null;
this.chain.forEach(block => {
if(block.hash === blockHash) correctBlock = block;
});

return correctBlock;
};

Blockchain.prototype.getTransaction = function(transactionId){
    let correctTransaction = null;
    let correctBlock = null;

    this.chain.forEach(block => {
        block.transactions.forEach(transaction => {
            if(transaction.transactionId === transactionId){
                correctTransaction = transaction;
                correctBlock = block;
            };
        });
        
    });


    return {
        transaction: correctTransaction,
        block: correctBlock
    };
};

Blockchain.prototype.getAdressData = function(address){
    const addressTransactions = [];
    this.chain.forEach(block => {
        block.transactions.forEach(transaction =>{
            if(transaction.remetente === address || transaction.destinatario === address){
                addressTransactions.push(transaction);
            };
        });
        
            
        });
        let balance = 0;
        addressTransactions.forEach(transaction => {
            if(transaction.destinatario === address) balance += transaction.valor;
            else if (transaction.remetente === address) balance -= transaction.valor;
        });
        return {
            addressTransactions: addressTransactions,
            addressBalance : balance
        };
    };



module.exports = Blockchain;