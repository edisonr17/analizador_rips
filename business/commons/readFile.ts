const fs = require('fs');
const dataForge = require('data-forge-fs'); // For readFile/writeFile.
var Excel = require('exceljs');
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
    var workbook = new Excel.Workbook();

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





  /**
   * Llenamos el formato de excel para savia
   */
  escribirExcelGenerico = (formatoOrigen: string, formatoSalida: string, datos: any, pagina = 1) => new Promise(async function (resolve, reject) {
    
    let workbook = new Excel.Workbook();
		await workbook.xlsx.readFile(formatoOrigen);
		let worksheet = await workbook.getWorksheet(pagina);
    
    let indRow = 1 ;
    for (const element of datos) {
      indRow++ ; 
      let rows:any = await worksheet.getRow(indRow);
      
      rows.getCell(1).value  = element.codigo;
      rows.getCell(2).value  = element.name;
      rows.getCell(3).value  = element.conteo;

      rows.commit();
      //await worksheet.addRow(Object.values(element)).commit();
		}
    await workbook.xlsx.writeFile(formatoSalida);
    resolve("") ;

  });




}


