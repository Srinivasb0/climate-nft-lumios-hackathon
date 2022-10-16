import { Revise } from "revise-sdk";
const AUTH_TOKEN = "????"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

const collection = await revise.addCollection({
    name: "peagotchi-seed-1",
    uri: "peagotch-2",
  });

  // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
  // Collection_URI  : Use a unique name (no spaces or special characters)
  //                   this will generate a unique link for your collection
  //                   for e.g. if you choose "myuniquecollection"
  //                   your baseURI wil be "myuniquecollection.revise.link"

  const nft = await revise.addNFT(
    {
      image:
        "https://images.pexels.com/photos/13957041/pexels-photo-13957041.jpeg",
      name: "Green Pea Flower",
      tokenId: "1",
      description: "It takes 38 days from seed to emergence, when the temperature is in optimal range 12-18.",
      url : "https://nicetotouch.eth.link/peppers"
    },
    [{Species : "Dingwan 2"}, {FarmerName : "Red Pepper"}, {SeedingDate : "15-March-2022"}, 
        {GrowthDays : "40"}, {GrowthPeriod : "Seed to Mature"}],
    collection.id
  );

  console.log(nft);
