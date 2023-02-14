
import { ReadFiles } from "./../commons/readFile";
const alasql = require('alasql');

export class RipsController {
    private readFiles;
    constructor() {
        this.readFiles = new ReadFiles();
    }
    objRips: any = {

    };
    readRips = async () => {

        let columns = [];
        this.objRips.AC = await this.readFiles.getDataFromFileForge('./files/rips/AC.txt', []);
        this.objRips.AF = await this.readFiles.getDataFromFileForge('./files/rips/AF.txt', []);
        this.objRips.AH = await this.readFiles.getDataFromFileForge('./files/rips/AH.txt', []);
        this.objRips.AM = await this.readFiles.getDataFromFileForge('./files/rips/AM.txt', []);
        this.objRips.AN = await this.readFiles.getDataFromFileForge('./files/rips/AN.txt', []);
        this.objRips.AP = await this.readFiles.getDataFromFileForge('./files/rips/AP.txt', []);
        this.objRips.AT = await this.readFiles.getDataFromFileForge('./files/rips/AT.txt', []);
        this.objRips.AU = await this.readFiles.getDataFromFileForge('./files/rips/AU.txt', []);
        this.objRips.CT = await this.readFiles.getDataFromFileForge('./files/rips/CT.txt', []);
        this.objRips.US = await this.readFiles.getDataFromFileForge('./files/rips/US.txt', []);
        this.objRips.config = await this.readFiles.readXLSX('./files/configFiles/HOSPITAL.xlsx',1,2);

        let result:any = {};
        result.AC_RESULT = await alasql(this.getQueryByFile("AC", this.getIndexFromFile("AC").cups), [this.objRips.AC]);
        result.AM_RESULT = await alasql(this.getQueryByFile("AM", this.getIndexFromFile("AM").med), [this.objRips.AM]);
        result.AP_RESULT = await alasql(this.getQueryByFile("AP", this.getIndexFromFile("AP").cups), [this.objRips.AM]);
        result.AT_RESULT = await alasql(this.getQueryByFile("AT", this.getIndexFromFile("AT").cups), [this.objRips.AM]);


       
        /*await this.readFiles.escribirExcelGenerico('./files/configFiles/HOSPITAL.xlsx','./results/SALIDA.xlsx', result.AC_RESULT, 2 );
        await this.readFiles.escribirExcelGenerico('./files/configFiles/HOSPITAL.xlsx','./results/SALIDA2.xlsx', result.AM_RESULT, 3 );
        await this.readFiles.escribirExcelGenerico('./files/configFiles/HOSPITAL.xlsx','./results/SALIDA.xlsx', result.AP_RESULT, 4 );
        await this.readFiles.escribirExcelGenerico('./results/SALIDA.xlsx','./results/SALIDA.xlsx', result.AT_RESULT, 5 );*/
        await this.readFiles.escribirExcelGenerico('./files/configFiles/HOSPITAL.xlsx','./results/SALIDA.xlsx', this.objRips.config, 6 );
        console.log("terminado")

    }



    getQueryByFile = (type: string, indMov: string) => {
        if (type == "AC") {
            return `SELECT ac.[${indMov}] as codigo, count(ac.[${indMov}]) as conteo 
            FROM ? ac group by [${indMov}]`;
        }


        if (type == "AM") {
            return `SELECT ac.[${indMov}] as codigo, count(ac.[${indMov}]) as conteo
            FROM ? ac group by [${indMov}]`;
        }

        if (type == "AP") {
            return `SELECT ac.[${indMov}] as codigo, count(ac.[${indMov}]) as conteo
            FROM ? ac group by [${indMov}]`;
        }


        if (type == "AT") {
            return `SELECT ac.[${indMov}] as codigo, count(ac.[${indMov}]) as conteo
            FROM ? ac group by [${indMov}]`;
        }
    }




    getIndexFromFile = (type: string): any => {
        if (type == "AC") {
            return {
                "cups": 6
            }
        }

        if (type == "AM") {
            return {
                "med": 5
            }
        }

        if (type == "AP") {
            return {
                "cups": 7
            }
        }


        if (type == "AT") {
            return {
                "cups": 3
            }
        }
    }
}