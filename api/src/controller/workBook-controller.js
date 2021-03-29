var xlsx = require('xlsx')
var wb = xlsx.readFile(__dirname+'//'+"form10.xlsx")



exports.editForm10 = (req, res) => {
    // console.log(wb.SheetNames);
    var ws = wb.Sheets["Front"];
    var data = xlsx.utils.sheet_to_json(ws)
    // console.log(data);
    // for
    var newData = data.map(function (record) {
        if(record.__EMPTY_3){
            // console.log("naay name");
            record.__EMPTY_3 = 'Rufo'
            record.__EMPTY_15 = 'Irish'
            record.__EMPTY_40 = 'Solatorio'
 
        }
        return record
    })
    var newWB = xlsx.utils.book_new();
    var newWS =  xlsx.utils.json_to_sheet(newData);
    xlsx.utils.book_append_sheet(newWB, newWS, "WithData")
    res.send(data)
    xlsx.writeFile(newWB, "NewDataFile.xlsx")
}   