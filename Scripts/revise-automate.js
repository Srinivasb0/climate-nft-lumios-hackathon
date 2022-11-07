import { Revise } from "revise-sdk";
import fs from 'fs';
import listFilesSync from './read-json.js';


const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjM2ZhMzg0LTJmMzYtNDhlNC1hYjI3LTI2MmIwZjJlNWZhMyIsImtleSI6IjB4OXExMG00IiwiaWF0IjoxNjY0MTQzNDQzfQ.sZAITgYVoi-27sayi6gTR5W4PGgHNybyvjNEW1CfXck"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

var germination_0temp = fs.readFileSync('../nft-metadata/temp0/germination-0temp.json').toString();
germination_0temp = JSON.parse(germination_0temp);
var flowering_0temp = fs.readFileSync('../nft-metadata/temp0/flowering-0temp.json', 'utf8').toString();
flowering_0temp = JSON.parse(flowering_0temp);
var mature_0temp = fs.readFileSync('../nft-metadata/temp0/mature-0temp.json').toString();
mature_0temp = JSON.parse(mature_0temp);


// Reading Soil-Weather data
const dataDir = '../data/soil-data/'
const soil_data = listFilesSync(dataDir)
const avg_temp = soil_data[0];
const number_days = soil_data[1];
const soil_moisture = soil_data[2];

console.log("Average Soil Temperature : ", avg_temp);
console.log("Soil Moisture : ", soil_moisture);
console.log("Total growth days : ", number_days);

async function automate(data) {
    const tokenData = {
      "image" : data['image'],
      "name" : data['name'],
      "tokenId" : String(data['token_id']),
      "description": data['description']
    }
    console.log(tokenData);
    const nft = await revise.fetchNFT('922577ee-b982-40b8-8b30-e15089b44938');
    const nftobject = revise.nft(nft);
    nftobject.setProperty().setImage(tokenData['image'])
    .setName(tokenData['name'])
    .setTokenId(tokenData['tokenId'])
    .setDescription(tokenData['description'])
    .setProperty("Growth Stage", mature_0temp.attributes[3]["Growth Stage"])
    .setProperty("Growth period", mature_0temp.attributes[4]["Growth period"])
    .setProperty("Temperature with in range", mature_0temp.attributes[5]["Temperature with in rang"])
    .setProperty("Ripe Color", mature_0temp.attributes[6]["Ripe Color"])
    .save();
}

async function handler(avg_temp, number_days) {
    var day_count = number_days;
    var avg_temp = avg_temp;

    if((avg_temp > 12 && avg_temp <18) && (day_count > 10 && day_count <50) ) {
      const data = germination_0temp;
      automate(data);
    }

    else if((avg_temp > 12 && avg_temp <18) && (day_count > 50 && day_count <80) ) {
      const data = flowering_0temp;
      automate(data);
    }

    else if((avg_temp > 12 && avg_temp <18) && (day_count > 90 && day_count <120)) {
      const data = mature_0temp;
      automate(data);
    }

    // Average temperature above 1.5
    else if((avg_temp > 18 && avg_temp <20) && (day_count > 10 && day_count <50) ) {
      const data = germination_0temp;
      automate(data);
    }

    else if((avg_temp > 18 && avg_temp <20) && (day_count > 50 && day_count <80) ) {
      const data = flowering_0temp;
      automate(data);
    }

    else if((avg_temp > 18 && avg_temp <20) && (day_count > 90 && day_count <120) ) {
      const data = mature_0temp;
      automate(data);
    }

    // Average temperature above 2.2
    else if((avg_temp > 20 && avg_temp <22) && (day_count > 10 && day_count <50) ) {
      const data = germination_0temp;
      automate(data);
    }

    else if((avg_temp > 20 && avg_temp <22) && (day_count > 50 && day_count <80) ) {
      const data = flowering_0temp;
      automate(data);
    }

    else if((avg_temp > 20 && avg_temp <22) && (day_count > 90 && day_count <120) ) {
      const data = mature_0temp;
      automate(data);
    }

};

handler(avg_temp, number_days);