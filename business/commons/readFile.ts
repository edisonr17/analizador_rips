const fs = require('fs');
const dataForge = require('data-forge-fs'); // For readFile/writeFile.
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
export class ReadFiles {
  constructor() {

  }

  readFile = async (path: string) => {
    return await fs.readFile(path, 'utf8');
  }


  getDataFromFileForge = async (path: string, columns: string[]) => {
    if (fs.existsSync(path)) {
      let data = await dataForge.readFile(path).parseCSV({ columnNames: columns });
      return data.content.values.rows;
    }
    return [];
  }

  // Use fs.readFile() method to read the file


  ///Método para leer datos de un archivo tipo xlsx
  readXLSX = async (filepath: string, page: number, initialRow: number) => new Promise(async function (resolve, reject) {
    console.log("____________________CREANDO ARCHIVOS DE EXCEL______________");

    workbook["xlsx"].readFile(filepath).then(async function () {
      let worksheet = workbook.getWorksheet(page);
      let data: string[] = [];
      await worksheet.eachRow({ includeEmpty: false }, function (row: any, rowNumber: number) {
        if (rowNumber >= initialRow) {
          data.push(row.values);
        }
      });
      resolve(data);

    }).catch(function (error: any) {
      console.log(error);
    });

  });

  escribirExcelGenerico =async (formatoOrigen: string, formatoSalida: string, datos: any, pagina = 1) =>  {
    await  this.readExcel(formatoOrigen, formatoSalida, datos, pagina);
    return true;
  };






  //let motorBDarchivo = file.split("_")[0];

  readExcel = async (formatoOrigen: string, formatoSalida: string, datos: any, pagina: number) => {


    console.log(formatoOrigen, formatoSalida, pagina)
    //console.log(regimenesEncontrados)

    //You can use the absolute path also
    let filepath = formatoOrigen;
    let workbook =await new Excel.Workbook();
    await workbook.xlsx.readFile(filepath);
  
    //You can use the index number also eg. 0 for selecting the sheet

    let worksheet = await workbook.getWorksheet("pag1");
   
    //console.log(formatoSalida, datos);
    for (const element of datos) {
      await worksheet.addRow(element).commit();
    }


    //console.log(tiposCitas);


    await workbook.xlsx.writeFile(formatoSalida);
    return true;
  }

}


