var mongoose = require('mongoose');

teachersInfoSchema = new mongoose.Schema({
    lastName: { type: String, required: "Last Name is required" },
    firstName: { type: String, required: "First Name is required" },
    middleName: { type: String, required: "Middle Name is required" },
    nameExt: { type: String, required: "Name Extension is required" },
    employeeNumber: { type: Number, required: "Employee Number is required" },
    itemNumber: { type: String, required: "Item Number is required" },
    dateOfBirth: { type: Date, required: "Date Of Birth is required" },
    placeOfBirth: { type: String, required: "Place Of Birth is required" },
    age: { type: Number, required: "Age is required" },
    gender: { type: String, required: "Gender is required" },
    maritalStatus: { type: String, required: "Marital Status is required" },
    homeAddress: { type: String, required: "Home Address is required" },
    schoolAssignment: { type: String, required: "School Assignment is required" },
    district: { type: String, required: "District is required" },
    currentPosition: { type: String, required: "Current Position is required" },
    employeeStatus: { type: String, required: "Employee Status is required" },
    designation: { type: String, required: "Designation is required" },
    firstDayOfService: { type: Date, required: "First Day Of Service is required" },
    dateOfLastPromotion: { type: Date, required: "date Of Last Promotion is required" },
    salaryGrade: { type: Number, required: "Salary Grade is required" },
    stepIncrement: { type: Number, required: "STEP Increment is required" },
    eligibility: { type: String, required: "Eligibility is required" },
    contactNumber: { type: Number, required: "Contact Number is required" },
    depEdEmailAddress: { type: String, required: "DepEd Email Address is required" },
    tin: { type: String, required: "TIN is required" },
    philHealthNumber: { type: String, required: "PhilHealth Number is required" },
    gsisBPNumber: { type: Number, required: "GSIS (BP) Number  is required" },
    pagIbigNumber: { type: String, required: "PagIbig Number is required" },
    availableServiceCredits: { type: mongoose.Decimal128, required: "Available Service Credits is required" }
})

module.exports = mongoose.model('TeacherInfo', teachersInfoSchema);