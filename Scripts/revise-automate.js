// const { Revise } = require("revise-sdk");
import { Revise } from "revise-sdk";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjM2ZhMzg0LTJmMzYtNDhlNC1hYjI3LTI2MmIwZjJlNWZhMyIsImtleSI6IjB4OXExMG00IiwiaWF0IjoxNjY0MTQzNDQzfQ.sZAITgYVoi-27sayi6gTR5W4PGgHNybyvjNEW1CfXck"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

const avg_temp = 19;
const number_days = 20

async function run() {

    if(avg_temp > 18 && avg_temp <20.5) {
      const nft = await revise.fetchNFT('4a43dcc9-900e-4a26-b458-beb93fee7495');
      const nftobject = revise.nft(nft);
      nftobject.setProperty('GrowthPeriod', 'Emergence to Flower').save();
      console.log(nftobject);
      // nftobject.setImage(data.image).save();
    }
};

run();