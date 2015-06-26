var mongo = require('mongodb');
var mongoose = require('mongoose');

var officeHysterscopySchema = mongoose.Schema;

var officeHysterscopy = new officeHysterscopySchema({
	dateOfProcedure: Date,
	HospitalNumber: Number,
	Age: Number,
	Name: String,
	Surname: String,
	UnknownFiled: [Boolean], //not sure what this captures
	HIV: {Status: String, CD4: Number},
	Comorbidities: [Boolean],
	PreviousSurgery: [Boolean],
	EndocervicalCanal: [Boolean],
	UterineCavity: [Boolean],
	Fibroid: {Position: String, Size: Number},
	Polyp: {Position: String, Size: Number},
	ProceduresPerformed: [Boolean],
	Diagnonsis: String,
	PlannedManagement: String,
	NoFurtherTreatement: [Boolean],
	ReferralFor: [Boolean],
	DurationOfProcedure: Number,
	PainScore: Number,
	Comments: String
	}
);
var officeHysters = mongoose.model('officeHysterscopy', officeHysterscopy);
mongoose.connect('mongodb://localhost/patients');
	
console.log('Connected.');
	
//This is just random data while we wait for front end structure
var patientForm = new officeHysters({

	}
);
	
patientForm.save(function(err){
	
	if(err) {console.log('Error...', err);}
	else{console.log('Saved.');}
	});