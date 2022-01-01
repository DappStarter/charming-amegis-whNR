require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom drink frame suspect notice crime remain color grace deputy fresh genuine'; 
let testAccounts = [
"0x34d4b448d9ce0a96b30397ee3932ae6cbdb7fdfd9130ee48b83c72c7a27dc7ef",
"0x528eaaf558d7afff7dd8aed27686e5fcd90e3ea5111ef0408cd8b8b0fa1fec09",
"0x900a61a4c0c04dd3c1a1be9729431ae298ad1d0d458b6a7bfd6a3fd758c1b0b4",
"0x96fb289248f8e393ee3b5e9c551a347cbedbf28310bd4ba04ada6513fdfe3351",
"0x7990cab44ed3dd333350984b1cb0e70ac1dfbae468e822a23fbcb9d2bc5a9dbe",
"0x29fabcbc9e8248708c5785b7fb6f72f40145028e098b3ee3a6a06a1cd863bf7b",
"0xf7bc4e855eacd0946f07b6d704df5c7d0284200743a982931edd189e43febf05",
"0x28020900d3cfc69349d7c562e25b36529e10db3df865ddb0cdbe51ffb660221d",
"0x44e8bcd2bbddfa6dbbf05958d2f92e87e54816e1c888101f0a5e271ec14741c7",
"0xcd98df948767295031849a12f159d96e51beea6652aa267a1ee517cbd9a1f705"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


