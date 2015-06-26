var mongo = require('mongodb');
var mongoose = require('mongoose');

var GynaSurgerySchema = mongoose.Schema;

var GynaSerg = new GynaSurgerySchema({

        ProcedureDate: Date,
        HospitalNumber: String,
        Age: Number,
        Name: String,
        Surname: String,
        HIV: {Status: String, CD4: Number},
        ProcedureType: String,
        Firm: String,
        ProcedureCat: String,
        AccessType: String,
        PreOperICD10Codes: String,
        PerformedBy: String,
	DygnosisNotOnICD10List: [String],
	ProPerformedCode: String,
	IOComplications: String,
	OtherComplications: String;
	
    }
);

var GynaSergery = mongoose.model('GynaSurgerySchema', GynaSerg );
mongoose.connect('mongodb://localhost/test');

console.log('Connected.');


var Form = new GynaSergery({

	ProcedureDate: Date.now(),
        HospitalNumber: 'ZAF931',
        Age: 33,
        Name: 'Cindy',
        Surname: 'Gadaffi',
	HIV: {Status: 'Neg', CD4: 50},
	ProcedureType: 'ELECTIVE',
        Firm: 'G2',
        ProcedureCat: 'INFERTILITY',
        AccessType: 'OPEN ABDOMEN',
        PreOperICD10Codes: 'GAF931',
        PerformedBy: 'Dr. Wiffelburg',
	DygnosisNotOnICD10List: null,
	ProPerformedCode: 'UGF125K',
	IOComplications: null,
	OtherComplications: null;
	
    }
);

Form.save(function(err){

    if(err) {console.log('Error...', err);}
    else{console.log('Saved.');}
});