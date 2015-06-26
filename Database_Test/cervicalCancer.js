var mongo = require('mongodb');
var mongoose = require('mongoose');

var cervicalCancerSchema = mongoose.Schema;

var cervicalCancer = new cervicalCancerSchema({
	PatientDetails: { Name: String,
			      Surname: String,
			      HospitalNumber: String,
			      IDNumber: String,
	                      DateofBirth: Date,
	                      CellPhoneNumbers: [Number],
	                      DateOfDiagnosis: Date,
			      HIV: {Status: String, CD4: Number}
			      },
	
	FigoStage: {Label: [String], Status: [Boolean], Tumor: {Size: [Number], ForStage1b1: Number}},
	UseOfImagingTools: {Label: [String ], Status: [Boolean]},
	SiteOfDistantMetastases: {Label: [String], Status: [Boolean]},
	Histology: {Label: [String], Status: [Boolean]},
	Differentiation: {Label: [String], Status: [Boolean]},
	LymphovascularSpaceInvolvement: {Label: [String], Status: [Boolean]},
	PrimaryTreatmentPerfomed: {Treatment : {Label: [String], Status: [Boolean]}, DateOfTreatment: Date},
	TypeOfSurgery: {Surgery{Label: [String], Status: [Boolean]}, DateOfSurgery: Date},
	TypeOfRadiotherapy: {Radiotherapy : {Label: [String], Status: [Boolean]}, DateStarted: Date, DateEnded: Date },
	TypeOfChemotherapy: {TypeAndDrugs: String, DateStarted: Date, DateEnded: Date},
	ReponseOfTreatmeant: {Reponse: {Label: [String],  Status: [String]}, DateOfAssessment: Date},
	SurgicalPathologicalEvaluation: {TumorSize: {Label: [String], Status: [Boolean]}},
	LymphnodeInvolvementSurgery: {LymphnodeInvolvement: {Label: [String], Status: [Boolean]}, NodesInvolved: {Label: [String], Status: [Boolean]}, NumberOfNodesExamined: {Pelvic: Number, Paraortic: Number}, },
	}
);
var cervicalCan = mongoose.model('cervicalCancer', cervicalCancer);
mongoose.connect('mongodb://localhost/patients');
	
console.log('Connected.');
	
//This is just random data while we wait for front end structure
var patientForm = new cervicalCan({
	
	}
);
	
patientForm.save(function(err){
	
	if(err) {console.log('Error...', err);}
	else{console.log('Saved.');}
	});