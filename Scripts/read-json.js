import fs from 'fs';
import path from 'path';


// return an ordered list of files in the input dir, with full paths
function listFilesSync(dir) {
    let soil_temp = [];
    let soil_moisture;
    let avg_soil_temp = 0;
    let total_days = 0;
    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const soil_data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        soil_moisture = soil_data['soil_moisture'];
        soil_temp.push(soil_data['soil_temp']);
        avg_soil_temp = soil_temp.reduce((a, b) => a + b) / soil_temp.length;
        total_days = Math.floor(Math.random() * 120);
    });
    return [avg_soil_temp, total_days, soil_moisture];
}

export default listFilesSync;

// data directory
// const soil_data = run().then(listFilesSync(dir));
// console.log(soil_data);