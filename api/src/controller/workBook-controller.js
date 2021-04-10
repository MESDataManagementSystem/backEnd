const fs = require('fs')
var xlsx = require('xlsx')
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var studentInfo = require('../model/studentsInfo-model')
var subjects = require("../model/subjects-model");
var pdfMaker = require('pdf-maker');


exports.editForm10 = (req, res) => {
    // var filePath = 'C:/Users/2ndyrgroupc/Desktop/mantalongon_Project/backEnd/api/new.xlsx';
    // fs.unlinkSync(filePath);
    // console.log('deleted');
    var count = 0;
    studentInfo.findOne({ _id: req.params.id }, (err, response) => {
        if (response) {
            console.log('naa gd')
            workbook.xlsx.readFile(__dirname + '//' + "form10.xlsx")
                .then(function () {
                    var worksheetFront = workbook.getWorksheet("Front");
                    var worksheetBack = workbook.getWorksheet("Back");
                    var row1 = worksheetFront.getRow(9);
                    var row2 = worksheetFront.getRow(10);
                    var row3 = worksheetFront.getRow(15);
                    var row4 = worksheetFront.getRow(18);
                    var row5 = worksheetFront.getRow(19);
                    var row6 = worksheetFront.getRow(23);
                    var row7 = worksheetFront.getRow(24);
                    var row8 = worksheetFront.getRow(25);
                    var row9 = worksheetFront.getRow(26);
                    var row10 = worksheetFront.getRow(30);
                    var row11 = worksheetFront.getRow(31);
                    var row12 = worksheetFront.getRow(32);
                    var row13 = worksheetFront.getRow(33);
                    var row14 = worksheetFront.getRow(34);
                    var row15 = worksheetFront.getRow(35);
                    var row16 = worksheetFront.getRow(36);
                    var row17 = worksheetFront.getRow(37);
                    var row18 = worksheetFront.getRow(38);
                    var row19 = worksheetFront.getRow(39);
                    var row20 = worksheetFront.getRow(40);
                    var row21 = worksheetFront.getRow(41);
                    var row22 = worksheetFront.getRow(42);
                    var row23 = worksheetFront.getRow(43);
                    var row24 = worksheetFront.getRow(44);
                    var row25 = worksheetFront.getRow(60);
                    var row26 = worksheetFront.getRow(61);
                    var row27 = worksheetFront.getRow(62);
                    var row28 = worksheetFront.getRow(63);
                    var row29 = worksheetFront.getRow(64);
                    var row30 = worksheetFront.getRow(65);
                    var row31 = worksheetFront.getRow(66);
                    var row32 = worksheetFront.getRow(67);
                    var row33 = worksheetFront.getRow(68);
                    var row34 = worksheetFront.getRow(69);
                    var row35 = worksheetFront.getRow(70);
                    var row36 = worksheetFront.getRow(71);
                    var row37 = worksheetFront.getRow(72);
                    var row38 = worksheetFront.getRow(73);
                    var row39 = worksheetFront.getRow(74);
                    // back
                    var row40 = worksheetBack.getRow(10);
                    var row41 = worksheetBack.getRow(11);
                    var row42 = worksheetBack.getRow(12);
                    var row43 = worksheetBack.getRow(13);
                    var row44 = worksheetBack.getRow(14);
                    var row45 = worksheetBack.getRow(15);
                    var row46 = worksheetBack.getRow(16);
                    var row47 = worksheetBack.getRow(17);
                    var row48 = worksheetBack.getRow(18);
                    var row49 = worksheetBack.getRow(19);
                    var row50 = worksheetBack.getRow(20);
                    var row51 = worksheetBack.getRow(21);
                    var row52 = worksheetBack.getRow(22);
                    var row53 = worksheetBack.getRow(23);
                    var row54 = worksheetBack.getRow(24);
                    // second box
                    var row55 = worksheetBack.getRow(39);
                    var row56 = worksheetBack.getRow(40);
                    var row57 = worksheetBack.getRow(41);
                    var row58 = worksheetBack.getRow(42);
                    var row59 = worksheetBack.getRow(43);
                    var row60 = worksheetBack.getRow(44);
                    var row61 = worksheetBack.getRow(45);
                    var row62 = worksheetBack.getRow(46);
                    var row63 = worksheetBack.getRow(47);
                    var row64 = worksheetBack.getRow(48);
                    var row65 = worksheetBack.getRow(49);
                    var row66 = worksheetBack.getRow(50);
                    var row67 = worksheetBack.getRow(51);
                    var row68 = worksheetBack.getRow(52);
                    var row69 = worksheetBack.getRow(53);
                    // for gradelevel header
                    var row70 = worksheetFront.getRow(52);
                    var row71 = worksheetFront.getRow(53);
                    var row72 = worksheetFront.getRow(54);
                    var row73 = worksheetFront.getRow(55);
                    // grade 4-5
                    var row74 = worksheetBack.getRow(3);
                    var row75 = worksheetBack.getRow(4);
                    var row76 = worksheetBack.getRow(5);
                    var row77 = worksheetBack.getRow(6);
                    // grade 6
                    var row78 = worksheetBack.getRow(32);
                    var row79 = worksheetBack.getRow(33);
                    var row80 = worksheetBack.getRow(34);
                    var row81 = worksheetBack.getRow(35);
                    // for average 
                    var row82 = worksheetFront.getRow(45);
                    var row83 = worksheetFront.getRow(75);
                    var row84 = worksheetBack.getRow(25);
                    var row85 = worksheetBack.getRow(54);
                    // for MAPEH
                    var row86 = worksheetFront.getRow(37);
                    var row87 = worksheetFront.getRow(67);
                    var row88 = worksheetBack.getRow(17);
                    var row89 = worksheetBack.getRow(46);


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
                    subjects.find({ studentId: req.params.id }, (err, result) => {
                        result.forEach(grade => {
                            count += 1
                            console.log(grade);
                            if (grade.grade === 'Kindergarten') {
                                row6.getCell(4).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row6.getCell(19).value = "204512"; //(T-19)) (Z-26) Remark
                                row7.getCell(4).value = "1 "; //(T-19)) (Z-26) Remark
                                row7.getCell(9).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row7.getCell(20).value = "7 "; //(T-19)) (Z-26) Remark
                                row8.getCell(6).value = "Kindergarten"; //(T-19)) (Z-26) Remark
                                row8.getCell(10).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row8.getCell(19).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row9.getCell(8).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
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
                                    row82.getCell(11).value = grade.average;
                                    row86.getCell(11).value = grade.mapeh;
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
                                    row82.getCell(12).value = grade.average;
                                    row86.getCell(12).value = grade.mapeh;
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
                                    row82.getCell(14).value = grade.average;
                                    row86.getCell(14).value = grade.mapeh;
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
                                    row82.getCell(15).value = grade.average;
                                    row86.getCell(15).value = grade.mapeh;
                                }

                            }
                            if (grade.grade === 'Grade 1') {
                                row6.getCell(24).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row6.getCell(48).value = "204512"; //(T-19)) (Z-26) Remark
                                row7.getCell(30).value = "1 "; //(T-19)) (Z-26) Remark
                                row7.getCell(9).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row7.getCell(51).value = "7 "; //(T-19)) (Z-26) Remark
                                row8.getCell(26).value = "1 "; //(T-19)) (Z-26) Remark
                                row8.getCell(31).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row8.getCell(48).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row9.getCell(29).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    row10.getCell(36).value = grade.motherTongue;
                                    row11.getCell(36).value = grade.filipino;
                                    row12.getCell(36).value = grade.english;
                                    row13.getCell(36).value = grade.mathematics;
                                    row14.getCell(36).value = grade.science;
                                    row15.getCell(36).value = grade.aralingPanlipunan;
                                    row16.getCell(36).value = grade.eppTle;
                                    row17.getCell(36).value = grade.Mapeh;
                                    row18.getCell(36).value = grade.music;
                                    row19.getCell(36).value = grade.arts;
                                    row20.getCell(36).value = grade.pe;
                                    row21.getCell(36).value = grade.health;
                                    row22.getCell(36).value = grade.edukasyonSaPagpapakatao;
                                    row23.getCell(36).value = grade.arabicLanguage;
                                    row24.getCell(36).value = grade.islamicLanguage;
                                    row82.getCell(36).value = grade.average;
                                    row86.getCell(36).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 2') {
                                    row10.getCell(39).value = grade.motherTongue;
                                    row11.getCell(39).value = grade.filipino;
                                    row12.getCell(39).value = grade.english;
                                    row13.getCell(39).value = grade.mathematics;
                                    row14.getCell(39).value = grade.science;
                                    row15.getCell(39).value = grade.aralingPanlipunan;
                                    row16.getCell(39).value = grade.eppTle;
                                    row17.getCell(39).value = grade.Mapeh;
                                    row18.getCell(39).value = grade.music;
                                    row19.getCell(39).value = grade.arts;
                                    row20.getCell(39).value = grade.pe;
                                    row21.getCell(39).value = grade.health;
                                    row22.getCell(39).value = grade.edukasyonSaPagpapakatao;
                                    row23.getCell(39).value = grade.arabicLanguage;
                                    row24.getCell(39).value = grade.islamicLanguage;
                                    row82.getCell(39).value = grade.average;
                                    row86.getCell(39).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 3') {
                                    row10.getCell(41).value = grade.motherTongue;
                                    row11.getCell(41).value = grade.filipino;
                                    row12.getCell(41).value = grade.english;
                                    row13.getCell(41).value = grade.mathematics;
                                    row14.getCell(41).value = grade.science;
                                    row15.getCell(41).value = grade.aralingPanlipunan;
                                    row16.getCell(41).value = grade.eppTle;
                                    row17.getCell(41).value = grade.Mapeh;
                                    row18.getCell(41).value = grade.music;
                                    row19.getCell(41).value = grade.arts;
                                    row20.getCell(41).value = grade.pe;
                                    row21.getCell(41).value = grade.health;
                                    row22.getCell(41).value = grade.edukasyonSaPagpapakatao;
                                    row23.getCell(41).value = grade.arabicLanguage;
                                    row24.getCell(41).value = grade.islamicLanguage;
                                    row82.getCell(41).value = grade.average;
                                    row86.getCell(41).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 4') {
                                    row10.getCell(44).value = grade.motherTongue;
                                    row11.getCell(44).value = grade.filipino;
                                    row12.getCell(44).value = grade.english;
                                    row13.getCell(44).value = grade.mathematics;
                                    row14.getCell(44).value = grade.science;
                                    row15.getCell(44).value = grade.aralingPanlipunan;
                                    row16.getCell(44).value = grade.eppTle;
                                    row17.getCell(44).value = grade.Mapeh;
                                    row18.getCell(44).value = grade.music;
                                    row19.getCell(44).value = grade.arts;
                                    row20.getCell(44).value = grade.pe;
                                    row21.getCell(44).value = grade.health;
                                    row22.getCell(44).value = grade.edukasyonSaPagpapakatao;
                                    row23.getCell(44).value = grade.arabicLanguage;
                                    row24.getCell(44).value = grade.islamicLanguage;
                                    row82.getCell(44).value = grade.average;
                                    row86.getCell(44).value = grade.mapeh;
                                }
                            }
                            if (grade.grade === 'Grade 2') {
                                row70.getCell(4).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row70.getCell(19).value = "204512"; //(T-19)) (Z-26) Remark
                                row71.getCell(4).value = "1 "; //(T-19)) (Z-26) Remark
                                row71.getCell(9).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row71.getCell(20).value = "7 "; //(T-19)) (Z-26) Remark
                                row72.getCell(6).value = "2 "; //(T-19)) (Z-26) Remark
                                row72.getCell(10).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row72.getCell(19).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row73.getCell(8).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    row25.getCell(11).value = grade.motherTongue;
                                    row26.getCell(11).value = grade.filipino;
                                    row27.getCell(11).value = grade.english;
                                    row28.getCell(11).value = grade.mathematics;
                                    row29.getCell(11).value = grade.science;
                                    row30.getCell(11).value = grade.aralingPanlipunan;
                                    row31.getCell(11).value = grade.eppTle;
                                    row32.getCell(11).value = grade.Mapeh;
                                    row33.getCell(11).value = grade.music;
                                    row34.getCell(11).value = grade.arts;
                                    row35.getCell(11).value = grade.pe;
                                    row36.getCell(11).value = grade.health;
                                    row37.getCell(11).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(11).value = grade.arabicLanguage;
                                    row39.getCell(11).value = grade.islamicLanguage;
                                    row83.getCell(11).value = grade.average;
                                    row87.getCell(11).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 2') {
                                    row25.getCell(12).value = grade.motherTongue;
                                    row26.getCell(12).value = grade.filipino;
                                    row27.getCell(12).value = grade.english;
                                    row28.getCell(12).value = grade.mathematics;
                                    row29.getCell(12).value = grade.science;
                                    row30.getCell(12).value = grade.aralingPanlipunan;
                                    row31.getCell(12).value = grade.eppTle;
                                    row32.getCell(12).value = grade.Mapeh;
                                    row33.getCell(12).value = grade.music;
                                    row34.getCell(12).value = grade.arts;
                                    row35.getCell(12).value = grade.pe;
                                    row36.getCell(12).value = grade.health;
                                    row37.getCell(12).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(12).value = grade.arabicLanguage;
                                    row39.getCell(12).value = grade.islamicLanguage;
                                    row83.getCell(12).value = grade.average;
                                    row87.getCell(12).value = grade.mapeh;


                                }
                                if (grade.quarter === 'Quarter 3') {
                                    row25.getCell(14).value = grade.motherTongue;
                                    row26.getCell(14).value = grade.filipino;
                                    row27.getCell(14).value = grade.english;
                                    row28.getCell(14).value = grade.mathematics;
                                    row29.getCell(14).value = grade.science;
                                    row30.getCell(14).value = grade.aralingPanlipunan;
                                    row31.getCell(14).value = grade.eppTle;
                                    row32.getCell(14).value = grade.Mapeh;
                                    row33.getCell(14).value = grade.music;
                                    row34.getCell(14).value = grade.arts;
                                    row35.getCell(14).value = grade.pe;
                                    row36.getCell(14).value = grade.health;
                                    row37.getCell(14).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(14).value = grade.arabicLanguage;
                                    row39.getCell(14).value = grade.islamicLanguage;
                                    row83.getCell(14).value = grade.average;
                                    row87.getCell(14).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 4') {
                                    row25.getCell(15).value = grade.motherTongue;
                                    row26.getCell(15).value = grade.filipino;
                                    row27.getCell(15).value = grade.english;
                                    row28.getCell(15).value = grade.mathematics;
                                    row29.getCell(15).value = grade.science;
                                    row30.getCell(15).value = grade.aralingPanlipunan;
                                    row31.getCell(15).value = grade.eppTle;
                                    row32.getCell(15).value = grade.Mapeh;
                                    row33.getCell(15).value = grade.music;
                                    row34.getCell(15).value = grade.arts;
                                    row35.getCell(15).value = grade.pe;
                                    row36.getCell(15).value = grade.health;
                                    row37.getCell(15).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(15).value = grade.arabicLanguage;
                                    row39.getCell(15).value = grade.islamicLanguage;
                                    row83.getCell(15).value = grade.average;
                                    row87.getCell(15).value = grade.mapeh;
                                }
                            }
                            if (grade.grade === 'Grade 3') {
                                row70.getCell(24).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row70.getCell(48).value = "204512"; //(T-19)) (Z-26) Remark
                                row71.getCell(30).value = "1 "; //(T-19)) (Z-26) Remark
                                row71.getCell(30).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row71.getCell(51).value = "7 "; //(T-19)) (Z-26) Remark
                                row72.getCell(26).value = "3 "; //(T-19)) (Z-26) Remark
                                row72.getCell(31).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row72.getCell(48).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row73.getCell(29).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    row25.getCell(36).value = grade.motherTongue;
                                    row26.getCell(36).value = grade.filipino;
                                    row27.getCell(36).value = grade.english;
                                    row28.getCell(36).value = grade.mathematics;
                                    row29.getCell(36).value = grade.science;
                                    row30.getCell(36).value = grade.aralingPanlipunan;
                                    row31.getCell(36).value = grade.eppTle;
                                    row32.getCell(36).value = grade.Mapeh;
                                    row33.getCell(36).value = grade.music;
                                    row34.getCell(36).value = grade.arts;
                                    row35.getCell(36).value = grade.pe;
                                    row36.getCell(36).value = grade.health;
                                    row37.getCell(36).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(36).value = grade.arabicLanguage;
                                    row39.getCell(36).value = grade.islamicLanguage;
                                    row87.getCell(36).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 2') {
                                    row25.getCell(39).value = grade.motherTongue;
                                    row26.getCell(39).value = grade.filipino;
                                    row27.getCell(39).value = grade.english;
                                    row28.getCell(39).value = grade.mathematics;
                                    row29.getCell(39).value = grade.science;
                                    row30.getCell(39).value = grade.aralingPanlipunan;
                                    row31.getCell(39).value = grade.eppTle;
                                    row32.getCell(39).value = grade.Mapeh;
                                    row33.getCell(39).value = grade.music;
                                    row34.getCell(39).value = grade.arts;
                                    row35.getCell(39).value = grade.pe;
                                    row36.getCell(39).value = grade.health;
                                    row37.getCell(39).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(39).value = grade.arabicLanguage;
                                    row39.getCell(39).value = grade.islamicLanguage;
                                    row83.getCell(39).value = grade.average;
                                    row87.getCell(39).value = grade.mapeh;


                                }
                                if (grade.quarter === 'Quarter 3') {
                                    row25.getCell(41).value = grade.motherTongue;
                                    row26.getCell(41).value = grade.filipino;
                                    row27.getCell(41).value = grade.english;
                                    row28.getCell(41).value = grade.mathematics;
                                    row29.getCell(41).value = grade.science;
                                    row30.getCell(41).value = grade.aralingPanlipunan;
                                    row31.getCell(41).value = grade.eppTle;
                                    row32.getCell(41).value = grade.Mapeh;
                                    row33.getCell(41).value = grade.music;
                                    row34.getCell(41).value = grade.arts;
                                    row35.getCell(41).value = grade.pe;
                                    row36.getCell(41).value = grade.health;
                                    row37.getCell(41).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(41).value = grade.arabicLanguage;
                                    row39.getCell(41).value = grade.islamicLanguage;
                                    row83.getCell(41).value = grade.average;
                                    row87.getCell(41).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 4') {
                                    row25.getCell(44).value = grade.motherTongue;
                                    row26.getCell(44).value = grade.filipino;
                                    row27.getCell(44).value = grade.english;
                                    row28.getCell(44).value = grade.mathematics;
                                    row29.getCell(44).value = grade.science;
                                    row30.getCell(44).value = grade.aralingPanlipunan;
                                    row31.getCell(44).value = grade.eppTle;
                                    row32.getCell(44).value = grade.Mapeh;
                                    row33.getCell(44).value = grade.music;
                                    row34.getCell(44).value = grade.arts;
                                    row35.getCell(44).value = grade.pe;
                                    row36.getCell(44).value = grade.health;
                                    row37.getCell(44).value = grade.edukasyonSaPagpapakatao;
                                    row38.getCell(44).value = grade.arabicLanguage;
                                    row39.getCell(44).value = grade.islamicLanguage;
                                    row83.getCell(44).value = grade.average;
                                    row87.getCell(44).value = grade.mapeh;
                                }
                            }
                            if (grade.grade === 'Grade 4') {
                                row74.getCell(4).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row74.getCell(15).value = "204512"; //(T-19)) (Z-26) Remark
                                row75.getCell(4).value = "1"; //(T-19)) (Z-26) Remark
                                row75.getCell(8).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row75.getCell(16).value = "7 "; //(T-19)) (Z-26) Remark
                                row76.getCell(5).value = "4"; //(T-19)) (Z-26) Remark
                                row76.getCell(7).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row76.getCell(15).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row77.getCell(6).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    if (grade.quarter === 'Quarter 1') {
                                        row40.getCell(8).value = grade.motherTongue;
                                        row41.getCell(8).value = grade.filipino;
                                        row42.getCell(8).value = grade.english;
                                        row43.getCell(8).value = grade.mathematics;
                                        row44.getCell(8).value = grade.science;
                                        row45.getCell(8).value = grade.aralingPanlipunan;
                                        row46.getCell(8).value = grade.eppTle;
                                        row47.getCell(8).value = grade.Mapeh;
                                        row48.getCell(8).value = grade.music;
                                        row49.getCell(8).value = grade.arts;
                                        row50.getCell(8).value = grade.pe;
                                        row51.getCell(8).value = grade.health;
                                        row52.getCell(8).value = grade.edukasyonSaPagpapakatao;
                                        row53.getCell(8).value = grade.arabicLanguage;
                                        row54.getCell(8).value = grade.islamicLanguage;
                                        row54.getCell(8).value = grade.islamicLanguage;
                                        row84.getCell(8).value = grade.average;
                                        row88.getCell(8).value = grade.mapeh;

                                    }
                                    if (grade.quarter === 'Quarter 2') {
                                        row40.getCell(9).value = grade.motherTongue;
                                        row41.getCell(9).value = grade.filipino;
                                        row42.getCell(9).value = grade.english;
                                        row43.getCell(9).value = grade.mathematics;
                                        row44.getCell(9).value = grade.science;
                                        row45.getCell(9).value = grade.aralingPanlipunan;
                                        row46.getCell(9).value = grade.eppTle;
                                        row47.getCell(9).value = grade.Mapeh;
                                        row48.getCell(9).value = grade.music;
                                        row49.getCell(9).value = grade.arts;
                                        row50.getCell(9).value = grade.pe;
                                        row51.getCell(9).value = grade.health;
                                        row52.getCell(9).value = grade.edukasyonSaPagpapakatao;
                                        row53.getCell(9).value = grade.arabicLanguage;
                                        row54.getCell(9).value = grade.islamicLanguage;
                                        row84.getCell(9).value = grade.average;
                                        row88.getCell(9).value = grade.mapeh;

                                    }
                                    if (grade.quarter === 'Quarter 3') {
                                        row40.getCell(10).value = grade.motherTongue;
                                        row41.getCell(10).value = grade.filipino;
                                        row42.getCell(10).value = grade.english;
                                        row43.getCell(10).value = grade.mathematics;
                                        row44.getCell(10).value = grade.science;
                                        row45.getCell(10).value = grade.aralingPanlipunan;
                                        row46.getCell(10).value = grade.eppTle;
                                        row47.getCell(10).value = grade.Mapeh;
                                        row48.getCell(10).value = grade.music;
                                        row49.getCell(10).value = grade.arts;
                                        row50.getCell(10).value = grade.pe;
                                        row51.getCell(10).value = grade.health;
                                        row52.getCell(10).value = grade.edukasyonSaPagpapakatao;
                                        row53.getCell(10).value = grade.arabicLanguage;
                                        row54.getCell(10).value = grade.islamicLanguage;
                                        row84.getCell(10).value = grade.average;
                                        row88.getCell(10).value = grade.mapeh;

                                    }
                                    if (grade.quarter === 'Quarter 4') {
                                        row40.getCell(11).value = grade.motherTongue;
                                        row41.getCell(11).value = grade.filipino;
                                        row42.getCell(11).value = grade.english;
                                        row43.getCell(11).value = grade.mathematics;
                                        row44.getCell(11).value = grade.science;
                                        row45.getCell(11).value = grade.aralingPanlipunan;
                                        row46.getCell(11).value = grade.eppTle;
                                        row47.getCell(11).value = grade.Mapeh;
                                        row48.getCell(11).value = grade.music;
                                        row49.getCell(11).value = grade.arts;
                                        row50.getCell(11).value = grade.pe;
                                        row51.getCell(11).value = grade.health;
                                        row52.getCell(11).value = grade.edukasyonSaPagpapakatao;
                                        row53.getCell(11).value = grade.arabicLanguage;
                                        row54.getCell(11).value = grade.islamicLanguage;
                                        row84.getCell(11).value = grade.average;
                                        row88.getCell(11).value = grade.mapeh;
                                    }
                                }
                            }
                            if (grade.grade === 'Grade 5') {
                                row74.getCell(20).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row74.getCell(33).value = "204512"; //(T-19)) (Z-26) Remark
                                row75.getCell(20).value = "1"; //(T-19)) (Z-26) Remark
                                row75.getCell(28).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row75.getCell(34).value = "7 "; //(T-19)) (Z-26) Remark
                                row76.getCell(21).value = "5"; //(T-19)) (Z-26) Remark
                                row76.getCell(26).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row76.getCell(33).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row77.getCell(22).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    row40.getCell(28).value = grade.motherTongue;
                                    row41.getCell(28).value = grade.filipino;
                                    row42.getCell(28).value = grade.english;
                                    row43.getCell(28).value = grade.mathematics;
                                    row44.getCell(28).value = grade.science;
                                    row45.getCell(28).value = grade.aralingPanlipunan;
                                    row46.getCell(28).value = grade.eppTle;
                                    row47.getCell(28).value = grade.Mapeh;
                                    row48.getCell(28).value = grade.music;
                                    row49.getCell(28).value = grade.arts;
                                    row50.getCell(28).value = grade.pe;
                                    row51.getCell(28).value = grade.health;
                                    row52.getCell(28).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(28).value = grade.arabicLanguage;
                                    row54.getCell(28).value = grade.islamicLanguage;
                                    row84.getCell(28).value = grade.average;
                                    row88.getCell(28).value = grade.mapeh;
                                }
                                if (grade.quarter === 'Quarter 2') {
                                    row40.getCell(30).value = grade.motherTongue;
                                    row41.getCell(30).value = grade.filipino;
                                    row42.getCell(30).value = grade.english;
                                    row43.getCell(30).value = grade.mathematics;
                                    row44.getCell(30).value = grade.science;
                                    row45.getCell(30).value = grade.aralingPanlipunan;
                                    row46.getCell(30).value = grade.eppTle;
                                    row47.getCell(30).value = grade.Mapeh;
                                    row48.getCell(30).value = grade.music;
                                    row49.getCell(30).value = grade.arts;
                                    row50.getCell(30).value = grade.pe;
                                    row51.getCell(30).value = grade.health;
                                    row52.getCell(30).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(30).value = grade.arabicLanguage;
                                    row54.getCell(30).value = grade.islamicLanguage;
                                    row84.getCell(30).value = grade.average;
                                    row88.getCell(30).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 3') {
                                    row40.getCell(32).value = grade.motherTongue;
                                    row41.getCell(32).value = grade.filipino;
                                    row42.getCell(32).value = grade.english;
                                    row43.getCell(32).value = grade.mathematics;
                                    row44.getCell(32).value = grade.science;
                                    row45.getCell(32).value = grade.aralingPanlipunan;
                                    row46.getCell(32).value = grade.eppTle;
                                    row47.getCell(32).value = grade.Mapeh;
                                    row48.getCell(32).value = grade.music;
                                    row49.getCell(32).value = grade.arts;
                                    row50.getCell(32).value = grade.pe;
                                    row51.getCell(32).value = grade.health;
                                    row52.getCell(32).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(32).value = grade.arabicLanguage;
                                    row54.getCell(32).value = grade.islamicLanguage;
                                    row84.getCell(32).value = grade.average;
                                    row88.getCell(32).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 4') {
                                    row40.getCell(33).value = grade.motherTongue;
                                    row41.getCell(33).value = grade.filipino;
                                    row42.getCell(33).value = grade.english;
                                    row43.getCell(33).value = grade.mathematics;
                                    row44.getCell(33).value = grade.science;
                                    row45.getCell(33).value = grade.aralingPanlipunan;
                                    row46.getCell(33).value = grade.eppTle;
                                    row47.getCell(33).value = grade.Mapeh;
                                    row48.getCell(33).value = grade.music;
                                    row49.getCell(33).value = grade.arts;
                                    row50.getCell(33).value = grade.pe;
                                    row51.getCell(33).value = grade.health;
                                    row52.getCell(33).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(33).value = grade.arabicLanguage;
                                    row54.getCell(33).value = grade.islamicLanguage;
                                    row84.getCell(33).value = grade.average;
                                    row88.getCell(33).value = grade.mapeh;
                                }
                            }
                            if (grade.grade === 'Grade 6') {
                                let countGrade = 0;
                                row78.getCell(4).value = "Mantalongon Elementary School"; //(T-19)) (Z-26) Remark
                                row78.getCell(15).value = "204512"; //(T-19)) (Z-26) Remark
                                row79.getCell(4).value = "1"; //(T-19)) (Z-26) Remark
                                row79.getCell(8).value = "Cebu"; //(T-19)) (Z-26) Remark
                                row79.getCell(16).value = "7 "; //(T-19)) (Z-26) Remark
                                row80.getCell(5).value = "6"; //(T-19)) (Z-26) Remark
                                row80.getCell(7).value = response.studentSection; //(T-19)) (Z-26) Remark
                                row80.getCell(15).value = "2021-2022"; //(T-19)) (Z-26) Remark
                                row81.getCell(6).value = "Yubert Mariscal"; //(T-19)) (Z-26) Remark
                                if (grade.quarter === 'Quarter 1') {
                                    countGrade++;
                                    row55.getCell(8).value = grade.motherTongue;
                                    row56.getCell(8).value = grade.filipino;
                                    row57.getCell(8).value = grade.english;
                                    row58.getCell(8).value = grade.mathematics;
                                    row59.getCell(8).value = grade.science;
                                    row60.getCell(8).value = grade.aralingPanlipunan;
                                    row61.getCell(8).value = grade.eppTle;
                                    row62.getCell(8).value = grade.Mapeh;
                                    row63.getCell(8).value = grade.music;
                                    row64.getCell(8).value = grade.arts;
                                    row65.getCell(8).value = grade.pe;
                                    row66.getCell(8).value = grade.health;
                                    row67.getCell(8).value = grade.edukasyonSaPagpapakatao;
                                    row68.getCell(8).value = grade.arabicLanguage;
                                    row69.getCell(8).value = grade.islamicLanguage;
                                    row85.getCell(8).value = grade.average;
                                    row89.getCell(8).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 2') {
                                    countGrade++;
                                    row55.getCell(9).value = grade.motherTongue;
                                    row56.getCell(9).value = grade.filipino;
                                    row57.getCell(9).value = grade.english;
                                    row58.getCell(9).value = grade.mathematics;
                                    row59.getCell(9).value = grade.science;
                                    row60.getCell(9).value = grade.aralingPanlipunan;
                                    row61.getCell(9).value = grade.eppTle;
                                    row62.getCell(9).value = grade.Mapeh;
                                    row63.getCell(9).value = grade.music;
                                    row64.getCell(9).value = grade.arts;
                                    row65.getCell(9).value = grade.pe;
                                    row66.getCell(9).value = grade.health;
                                    row67.getCell(9).value = grade.edukasyonSaPagpapakatao;
                                    row68.getCell(9).value = grade.arabicLanguage;
                                    row69.getCell(9).value = grade.islamicLanguage;
                                    row85.getCell(9).value = grade.average;
                                    row89.getCell(9).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 3') {
                                    countGrade++;
                                    row40.getCell(10).value = grade.motherTongue;
                                    row41.getCell(10).value = grade.filipino;
                                    row42.getCell(10).value = grade.english;
                                    row43.getCell(10).value = grade.mathematics;
                                    row44.getCell(10).value = grade.science;
                                    row45.getCell(10).value = grade.aralingPanlipunan;
                                    row46.getCell(10).value = grade.eppTle;
                                    row47.getCell(10).value = grade.Mapeh;
                                    row48.getCell(10).value = grade.music;
                                    row49.getCell(10).value = grade.arts;
                                    row50.getCell(10).value = grade.pe;
                                    row51.getCell(10).value = grade.health;
                                    row52.getCell(10).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(10).value = grade.arabicLanguage;
                                    row54.getCell(10).value = grade.islamicLanguage;
                                    row85.getCell(10).value = grade.average;
                                    row89.getCell(10).value = grade.mapeh;

                                }
                                if (grade.quarter === 'Quarter 4') {
                                    countGrade++;
                                    row40.getCell(11).value = grade.motherTongue;
                                    row41.getCell(11).value = grade.filipino;
                                    row42.getCell(11).value = grade.english;
                                    row43.getCell(11).value = grade.mathematics;
                                    row44.getCell(11).value = grade.science;
                                    row45.getCell(11).value = grade.aralingPanlipunan;
                                    row46.getCell(11).value = grade.eppTle;
                                    row47.getCell(11).value = grade.Mapeh;
                                    row48.getCell(11).value = grade.music;
                                    row49.getCell(11).value = grade.arts;
                                    row50.getCell(11).value = grade.pe;
                                    row51.getCell(11).value = grade.health;
                                    row52.getCell(11).value = grade.edukasyonSaPagpapakatao;
                                    row53.getCell(11).value = grade.arabicLanguage;
                                    row54.getCell(11).value = grade.islamicLanguage;
                                    row85.getCell(11).value = grade.average;
                                    row89.getCell(11).value = grade.mapeh;
                                }
                                if(countGrade === 4){
                                    console.log('graduated!')
                                }
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
                            row25.commit()
                            row26.commit()
                            row27.commit()
                            row28.commit()
                            row29.commit()
                            row30.commit()
                            row31.commit()
                            row32.commit()
                            row33.commit()
                            row34.commit()
                            row35.commit()
                            row36.commit()
                            row37.commit()
                            row38.commit()
                            row39.commit()
                            row40.commit()
                            row41.commit()
                            row42.commit()
                            row43.commit()
                            row44.commit()
                            row45.commit()
                            row46.commit()
                            row47.commit()
                            row48.commit()
                            row49.commit()
                            row50.commit()
                            row51.commit()
                            row52.commit()
                            row53.commit()
                            row54.commit()
                            row55.commit()
                            row56.commit()
                            row57.commit()
                            row58.commit()
                            row59.commit()
                            row60.commit()
                            row61.commit()
                            row62.commit()
                            row63.commit()
                            row64.commit()
                            row65.commit()
                            row66.commit()
                            row67.commit()
                            row68.commit()
                            row69.commit()
                            row70.commit()
                            row71.commit()
                            row72.commit()
                            row73.commit()
                            row74.commit()
                            row75.commit()
                            row76.commit()
                            row77.commit()
                            row78.commit()
                            row79.commit()
                            row80.commit()
                            row81.commit()
                            row82.commit()
                            row83.commit()
                            row84.commit()
                            row85.commit()
                            row86.commit()
                            row87.commit()
                            row88.commit()
                            row89.commit()
                            return workbook.xlsx.writeFile('uploads/new.xlsx');

                        }
                    })

                })
                res.send({status: true, url: 'http://localhost:5000/uploads/new.xlsx', name: response.studentLastName + '_form10' })
        } else {
            // fs.copyFile('new.xlsx', 'newq.pdf', (err) => {
            //     if (err) throw err;
            //     console.log('source.txt was copied to destination.txt');
            //     });

            // console.log(err, 'error');
            res.send({status: false})

        }
    })

}

exports.transferFile = (req, res) => {
    var template = 'http://localhost:5000/api/new';
    var pdfPath = 'http://localhost:5000/uploads/form11';
    var option = {

        paperSize: {
            format: 'A4',
            orientation: 'portrait',
            border: '1.8cm'

        }
    };
    pdfMaker(template, pdfPath, option);
    res.send(pdfMaker)
    // let convertApi = ConvertApi.auth({ secret: '<YOUR SECRET HERE>' })
    // let params = convertApi.createParams()
    // params.add('http://localhost:5000/api/new.xlsx', elFileInput.files[0]);
    // let result = convertApi.convert('xls', 'pdf', params)
} 
