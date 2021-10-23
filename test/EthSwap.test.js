const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

// *this will configure our assertions later when we run the test
require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('EthSwap', (accounts)=>{
    describe('EthSwap deployment', async() => {
        it('contract has a name', async()=> {
            const name = ethSwap
        })
    })
})