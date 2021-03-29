const fs = require('fs')
var xlsx = require('xlsx')
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var studentInfo = require('../model/studentsInfo-model')
var subjects = require("../model/subjects-model");

exports.editForm10 = (req, res) => {
    // var filePath = 'C:/Users/2ndyrgroupc/Desktop/mantalongon_Project/backEnd/api/new.xlsx';
    // fs.unlinkSync(filePath);
    // console.log('deleted');
    var count = 0;
    studentInfo.findOne({ _id: '6058516d1c005054a08f5b75' }, (err, response) => {
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
                    var row10 = worksheet.getRow(30);
                    var row11 = worksheet.getRow(31);
                    var row12 = worksheet.getRow(32);
                    var row13 = worksheet.getRow(33);
                    var row14 = worksheet.getRow(34);
                    var row15 = worksheet.getRow(35);
                    var row16 = worksheet.getRow(36);
                    var row17 = worksheet.getRow(37);
                    var row18 = worksheet.getRow(38);
                    var row19 = worksheet.getRow(39);
                    var row20 = worksheet.getRow(40);
                    var row21 = worksheet.getRow(41);
                    var row22 = worksheet.getRow(42);
                    var row23 = worksheet.getRow(43);
                    var row24 = worksheet.getRow(44);

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
                    subjects.find({ studentId: '6058516d1c005054a08f5b75' }, (err, result) => {
                        result.forEach(grade => {
                            count += 1
                            if (grade.quarter === 'Quarter 1') {
                                row10.getCell(11).value = grade.motherTongue;
                                row11.getCell(11).value = grade.filipino;
                                row12.getCell(11).value = grade.english;
                                row13.getCell(11).value = grade.mathematics;
                                row14.getCell(11).value = grade.science;
                                row15.getCell(11).value = grade.aralingPanlipunan;
                                row16.getCell(11).value = grade.eppTle;
                                row17.getCell(11).value = grade.Mapeh;
                                row18.getCell(11).value = grade.music;
                                row19.getCell(11).value = grade.arts;
                                row20.getCell(11).value = grade.pe;
                                row21.getCell(11).value = grade.health;
                                row22.getCell(11).value = grade.edukasyonSaPagpapakatao;
                                row23.getCell(11).value = grade.arabicLanguage;
                                row24.getCell(11).value = grade.islamicLanguage;
                            }
                            if (grade.quarter === 'Quarter 2') {
                                row10.getCell(12).value = grade.motherTongue;
                                row11.getCell(12).value = grade.filipino;
                                row12.getCell(12).value = grade.english;
                                row13.getCell(12).value = grade.mathematics;
                                row14.getCell(12).value = grade.science;
                                row15.getCell(12).value = grade.aralingPanlipunan;
                                row16.getCell(12).value = grade.eppTle;
                                row17.getCell(12).value = grade.Mapeh;
                                row18.getCell(12).value = grade.music;
                                row19.getCell(12).value = grade.arts;
                                row20.getCell(12).value = grade.pe;
                                row21.getCell(12).value = grade.health;
                                row22.getCell(12).value = grade.edukasyonSaPagpapakatao;
                                row23.getCell(12).value = grade.arabicLanguage;
                                row24.getCell(12).value = grade.islamicLanguage;
                            }
                            if (grade.quarter === 'Quarter 3') {
                                row10.getCell(14).value = grade.motherTongue;
                                row11.getCell(14).value = grade.filipino;
                                row12.getCell(14).value = grade.english;
                                row13.getCell(14).value = grade.mathematics;
                                row14.getCell(14).value = grade.science;
                                row15.getCell(14).value = grade.aralingPanlipunan;
                                row16.getCell(14).value = grade.eppTle;
                                row17.getCell(14).value = grade.Mapeh;
                                row18.getCell(14).value = grade.music;
                                row19.getCell(14).value = grade.arts;
                                row20.getCell(14).value = grade.pe;
                                row21.getCell(14).value = grade.health;
                                row22.getCell(14).value = grade.edukasyonSaPagpapakatao;
                                row23.getCell(14).value = grade.arabicLanguage;
                                row24.getCell(14).value = grade.islamicLanguage;
                            }
                            if (grade.quarter === 'Quarter 4') {
                                row10.getCell(15).value = grade.motherTongue;
                                row11.getCell(15).value = grade.filipino;
                                row12.getCell(15).value = grade.english;
                                row13.getCell(15).value = grade.mathematics;
                                row14.getCell(15).value = grade.science;
                                row15.getCell(15).value = grade.aralingPanlipunan;
                                row16.getCell(15).value = grade.eppTle;
                                row17.getCell(15).value = grade.Mapeh;
                                row18.getCell(15).value = grade.music;
                                row19.getCell(15).value = grade.arts;
                                row20.getCell(15).value = grade.pe;
                                row21.getCell(15).value = grade.health;
                                row22.getCell(15).value = grade.edukasyonSaPagpapakatao;
                                row23.getCell(15).value = grade.arabicLanguage;
                                row24.getCell(15).value = grade.islamicLanguage;
                            }

                        });
                        if (count === result.length) {
                            row1.commit();
                            row2.commit()
                            row3.commit()
                            row4.commit()
                            row5.commit()
                            row6.commit()
                            row7.commit()
                            row8.commit()
                            row9.commit()
                            row10.commit()
                            row11.commit()
                            row12.commit()
                            row13.commit()
                            row14.commit()
                            row15.commit()
                            row16.commit()
                            row17.commit()
                            row18.commit()
                            row19.commit()
                            row20.commit()
                            row21.commit()
                            row22.commit()
                            row23.commit()
                            row24.commit()
                            return workbook.xlsx.writeFile('new.xlsx');
                        }
                    })

                })

        } else {
            console.log(err);
        }
    })
    res.send({})

}   