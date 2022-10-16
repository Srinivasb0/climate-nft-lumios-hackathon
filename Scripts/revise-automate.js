// const { Revise } = require("revise-sdk");
import { Revise } from "revise-sdk";
const AUTH_TOKEN = "???"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

const avg_temp = 19;
const number_days = 20

async function run() {

    if(avg_temp > 18 && avg_temp <20.5) {
      const nft = await revise.fetchNFT('nft-id');
      const nftobject = revise.nft(nft);
      nftobject.setProperty('GrowthPeriod', 'Emergence to Flower').save();
      console.log(nftobject);
      // nftobject.setImage(data.image).save();
    }
};

run();
