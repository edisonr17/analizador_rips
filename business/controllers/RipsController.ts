
import { ReadFiles } from "./../commons/readFile"; 
const alasql = require('alasql');

export class RipsController {
    private readFiles;
    constructor(){
        this.readFiles = new ReadFiles();
    }
    objRips:any = {
     
    };
    readRips = async () => {

        let columns = [];
        this.objRips.AC = await this.readFiles.getDataFromFileForge('./files/rips/AC005312.txt', []);
        this.objRips.AF = await this.readFiles.getDataFromFileForge('./files/rips/AF005312.txt', []);
        this.objRips.AH = await this.readFiles.getDataFromFileForge('./files/rips/AH005312.txt', []);
        this.objRips.AM = await this.readFiles.getDataFromFileForge('./files/rips/AM005312.txt', []);
        this.objRips.AN = await this.readFiles.getDataFromFileForge('./files/rips/AN005312.txt', []);
        this.objRips.AP = await this.readFiles.getDataFromFileForge('./files/rips/AP005312.txt', []);
        this.objRips.AT = await this.readFiles.getDataFromFileForge('./files/rips/AT005312.txt', []);
        this.objRips.AU = await this.readFiles.getDataFromFileForge('./files/rips/AU005312.txt', []);
        this.objRips.CT = await this.readFiles.getDataFromFileForge('./files/rips/CT005312.txt', []);
        this.objRips.US = await this.readFiles.getDataFromFileForge('./files/rips/US005312.txt', []);

        var res = await alasql("SELECT [6], count([6]) FROM ? group by [6] ",[this.objRips.AC]);
        console.log(res);

    }
}