

describe('Hysteroscopy Form', function() {

    it('should have twenty one labels', function() {
        assert.equal('label', 'Date Of ProcedureHospital NumberAgeNameSurnameHIV' +
        'ComorbiditiesPrevious SurgeryEndocervical CanalUterine CavityFibroid' +
        'PolypProcedures performed at time of office hysteroscopyPlanned management' +
        'No further treatmentReferral forDuration of procedurePain score out of 10Coments');

        /*assert.equal(this.browser.text('form label'), 'Date Of ProcedureHospital NumberAgeNameSurnameHIV' +
        'ComorbiditiesPrevious SurgeryEndocervical CanalUterine CavityFibroid' +
        'PolypProcedures performed at time of office hysteroscopyPlanned management' +
        'No further treatmentReferral forDuration of procedurePain score out of 10Coments');



        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');
        assert.equal(this.browser.text('form label'), 'First NameLast NameEmailMessage');*/
    });


    it('should refuse empty submissions', function(done) {
        var browser = this.browser;
        browser.pressButton('Submit Data', function(error) {
            if (error) return done(error);
            assert.ok(browser.success);
            assert.equal(browser.text('div.alert'), 'Please fill in all the fields');
            done();
        });
    });


    it('should refuse partial submissions', function(done) {
        var browser = this.browser;
        browser.fill('name', 'Kelly');
        browser.fill('surname', 'Summers');
        browser.pressButton('Submit Data').then(function() {
            assert.ok(browser.success);
            assert.equal(browser.text('div.alert'), 'Please fill in all the fields before submission');
        }).then(done, done);
    });

    it('should accept complete submissions', function(done) {
        var browser = this.browser;
        browser.fill('name', 'Kelly');
        browser.fill('surname', 'Summers');
        browser.pressButton('Submit Data').then(function() {
            assert.ok(browser.success);
            assert.equal(browser.text('h1'), 'Form filled in');
            assert.equal(browser.text('p'), 'Thank you for filling out the form so dilligently :).'');
        }).then(done, done);
    });
});