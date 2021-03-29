const fs = require('fs')
var xlsx = require('xlsx')
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var studentInfo = require('../model/studentsInfo-model')

exports.editForm10 = (req, res) => {
    try {
        fs.unlinkSync(__dirname + '//' + "new.xlsx")
        //file removed
    } catch (err) {
        console.error(err)
    }
    studentInfo.findOne({ _id: '6058516d1c005054a08f5b75' }, (err, response) => {
        console.log(response);
        if (response) {
            workbook.xlsx.readFile(__dirname + '//' + "form10.xlsx")
                .then(function () {
                    var worksheet = workbook.getWorksheet("Front");
                    var row1 = worksheet.getRow(9);
                    var row2 = worksheet.getRow(10);
                    var row3 = worksheet.getRow(15);
                    var row4 = worksheet.getRow(18);
                    var row5 = worksheet.getRow(19);
                    var row6 = worksheet.getRow(23);
                    var row7 = worksheet.getRow(24);
                    var row8 = worksheet.getRow(25);
                    var row9 = worksheet.getRow(26);
                    row1.getCell(5).value = response.studentLastName; // lastname
                    row1.getCell(18).value = response.studentFirstName; // firstname (R -18) (Z-26)
                    row1.getCell(30).value = response.studentNameExtn; // firstname (AD -30) (Z-26)
                    row1.getCell(43).value = response.studentMiddleName; // middleName (AQ -43) (Z-26)
                    row2.getCell(10).value = response.studentLRN; // middleName (AQ -43) (Z-26) LRN
                    row2.getCell(22).value = response.studentBirthdate; // middleName (AQ -43) (Z-26) BDAY
                    row2.getCell(46).value = response.studentSex; // middleName (AQ -43) (Z-26) SEX
                    row3.getCell(6).value = response.studentNameOfSchoolFromKinder; // middleName (AQ -43) (Z-26) Name of school
                    row3.getCell(20).value = response.studentSchoolId; //(T-19)) (Z-26) school id
                    row3.getCell(26).value = response.studentSchoolAddress; //(T-19)) (Z-26) Address of school
                    row4.getCell(10).value = response.studentPeptPasserRating; //(J-10)) (Z-26) PEPT Passer  Rating:
                    row4.getCell(23).value = response.studentDateOfxamination; //(T-19)) (Z-26) PEPT Passer  Rating:
                    row4.getCell(43).value = response.studentOthers; //(T-19)) (Z-26) Others
                    row5.getCell(12).value = response.studentNameAdressOfTestingCenter; //(T-19)) (Z-26) Name and Address of Testing Center:
                    row5.getCell(36).value = response.studentRemark; //(T-19)) (Z-26) Remark
                    row6.getCell(4).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                    row6.getCell(19).value = "204512"; //(T-19)) (Z-26) Remark
                    row7.getCell(4).value = "1 "; //(T-19)) (Z-26) Remark
                    row7.getCell(9).value = "Cebu"; //(T-19)) (Z-26) Remark
                    row7.getCell(20).value = "7 "; //(T-19)) (Z-26) Remark
                    row8.getCell(6).value = "1 "; //(T-19)) (Z-26) Remark
                    row8.getCell(10).value = "Rose"; //(T-19)) (Z-26) Remark
                    row8.getCell(19).value = "2021-2022"; //(T-19)) (Z-26) Remark
                    row9.getCell(8).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                    row1.commit();
                    row2.commit()
                    row3.commit()
                    row4.commit()
                    row5.commit()
                    row6.commit()
                    row7.commit()
                    row8.commit()
                    row9.commit()
                    return workbook.xlsx.writeFile('new.xlsx');
                })

        } else {
            console.log(err);
        }
    })

    //  workbook.xlsx.readFile(__dirname + '//' + "form10.xlsx")
    //     .then(function () {
    //         var worksheet = workbook.getWorksheet("Front");
    //         var row1 = worksheet.getRow(9);
    //         var row2 = worksheet.getRow(10);
    //         var row3 = worksheet.getRow(15);
    //         var row4 = worksheet.getRow(18);
    //         var row5 = worksheet.getRow(19);
    //         row1.getCell(5).value = 'Rufo'; // lastname
    //         row1.getCell(18).value = 'Irish'; // firstname (R -18) (Z-26)
    //         row1.getCell(30).value = 'Mae'; // firstname (AD -30) (Z-26)
    //         row1.getCell(43).value = 'Solatorio'; // middleName (AQ -43) (Z-26)
    //         row2.getCell(10).value = '18106242'; // middleName (AQ -43) (Z-26) LRN
    //         row2.getCell(22).value = '03/26/2000'; // middleName (AQ -43) (Z-26) BDAY
    //         row2.getCell(46).value = 'Female'; // middleName (AQ -43) (Z-26) SEX
    //         row3.getCell(6).value = 'Dalaguete Elementary School'; // middleName (AQ -43) (Z-26) Name of school
    //         row3.getCell(20).value = '15465'; //(T-19)) (Z-26) school id
    //         row3.getCell(26).value = 'Mantalongon Elementary School'; //(T-19)) (Z-26) Address of school
    //         row4.getCell(10).value = 99; //(J-10)) (Z-26) PEPT Passer  Rating:
    //         row4.getCell(23).value = '05/26/2020'; //(T-19)) (Z-26) PEPT Passer  Rating:
    //         row4.getCell(43).value = 'None'; //(T-19)) (Z-26) Others
    //         row5.getCell(12).value = 'Mantalongon Center'; //(T-19)) (Z-26) Name and Address of Testing Center:
    //         row5.getCell(36).value = 'Very Good'; //(T-19)) (Z-26) Remark

    //         row1.commit();
    //         row2.commit()
    //         row3.commit()
    //         row4.commit()
    //         row5.commit()
    //         return workbook.xlsx.writeFile('new.xlsx');
    //     })
    res.send({})

}   