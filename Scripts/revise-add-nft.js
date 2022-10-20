
import { Revise } from "revise-sdk";
import fs from 'fs';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjM2ZhMzg0LTJmMzYtNDhlNC1hYjI3LTI2MmIwZjJlNWZhMyIsImtleSI6IjB4OXExMG00IiwiaWF0IjoxNjY0MTQzNDQzfQ.sZAITgYVoi-27sayi6gTR5W4PGgHNybyvjNEW1CfXck"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

var seed = fs.readFileSync('../nft-metadata/temp0/seed.json', 'utf8');
seed = JSON.parse(seed);
var flowering_0temp = fs.readFileSync('../nft-metadata/temp0/flowering-0temp.json', 'utf8').toString();
flowering_0temp = JSON.parse(flowering_0temp);
var germination_0temp = fs.readFileSync('../nft-metadata/temp0/germination-0temp.json').toString();
germination_0temp = JSON.parse(germination_0temp);
var mature_0temp = fs.readFileSync('../nft-metadata/temp0/mature-0temp.json').toString();
mature_0temp = JSON.parse(mature_0temp);


// // adding metadata to revise
async function addDataToRevise(collection_name, collection_uri, data) {
  var collection_name = collection_name;
  var collection_uri = collection_uri;
  try {
    const collection = await revise.addCollection({
      name : collection_name,
      uri : collection_uri
    });
  } catch (error) {
    console.log("error 1");
  }

  const tokenData = {
    "image" : seed['image'],
    "name" : seed['name'],
    "tokenId" : "1",
    "description": seed['description']
  }

  console.log(tokenData);

  const properties = data['attributes'];
  try {
    const nft = await revise.addNFT(tokenData, properties);
  } catch (error) {
    console.log("error 2");
  }
}

addDataToRevise("Pea-seeds1111111", "pea-seed1121111", seed);





// const collection = await revise.addCollection({
//     name: "peagotchi-seed-1",
//     uri: "peagotch-2",
//   });

  // const nft = await revise.addNFT(
  //   {
  //     image:
  //       "https://images.pexels.com/photos/13957041/pexels-photo-13957041.jpeg",
  //     name: "Green Pea Flower",
  //     tokenId: "1",
  //     description: "It takes 38 days from seed to emergence, when the temperature is in optimal range 12-18.",
  //     // url : "https://nicetotouch.eth.link/peppers"
  //   },
  //   [{Species : "Dingwan 2"}, {FarmerName : "Red Pepper"}, {SeedingDate : "15-March-2022"}, 
  //       {GrowthDays : "40"}, {GrowthPeriod : "Seed to Mature"}],
  //   collection.id
  // );
  // console.log(nft);

  // revise collectin uri
  // https://peagotch-2.revise.link/1