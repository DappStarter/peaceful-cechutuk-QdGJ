require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain hole gloom dry fringe typical'; 
let testAccounts = [
"0xe11a835845570661a12c4e305d22fd5edc36e71c795f2b75d88097a9a58092b9",
"0x1d6982dd1337a86617426eda95231cfaad86f62df00688d4f13eeb321f3c51ab",
"0x05789674fb612b7692d29f45485ff3fd87459fcbfe55e38c11ec67b50f606e76",
"0x059f7e50d3fe608b1925c8fe277b5cf8a73c37add353e6748c764f0d923bcb6d",
"0x0e44165ac30c802158b27f4cfec07c32133ebf535122646c0dacd1b7767529a4",
"0x0b6f00f385d0d5ace772d35722713021e5ecc12e6e1b9dd11a1d3b43dcf614a0",
"0xe1e0cc4c47e20c5c818d0ae3600441cf96c3d977bdaa41bba71701ac55871c90",
"0xdaee33a571877351413de739a3e6b8b5b53917cdc919f5da7f820213b12a38b2",
"0xa4853a6c0b7b5389a21a1e712f8aa78efc1cd51b419541734b0635c25ca8454e",
"0x5e51896d4c2c30d66c378e7e93fae1ec72c91faf90edcf9ed2b4513021454b5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

