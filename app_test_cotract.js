const Caver  = require('caver-js')
const proof_json = require('./build/contracts/Proof.json')
const cav = new Caver('https://api.baobab.klaytn.net:8651')
const smartContract  = new cav.klay.Contract(proof_json.abi , proof_json.networks[1001].address)

const account = cav.klay.accounts.createWithAccountKey("0x1CdF445E0393c6fA9624e07Cb539A1B168a37FBc", "0x57a9f5193636fffce2a65696439556c518901344b316129b4b06fa41f3073156")
cav.klay.accounts.wallet.add(account)
// console.log(account.address)
// smartContract.methods.notarize("문서 증빙").send({
//     from:account.address,
//     gas:8500000
// }).then(function(receipt){
//     console.log(receipt)
// })


smartContract.methods.checkDocument("문서 증빙").call()
.then(function(data){
    console.log(data)
    if (data==true) {
        console.log("이문서는 검증이 완료된 문서 입니다.")
    } else {
        console.log("이 문서는 검증되지 않은 문서 입니다 . 다시 확인해 주세요")
    }
})