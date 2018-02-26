// ./step-definitions/steps.js

module.exports = function () {

  this.Given(/^I am at (".*")$/, function (url) {

    console.log("load url", url);

  });

  this.Given(/^I am logged in at (".*")$/, function (url, table) {

    console.log("load url", url);
    console.log("Username: ", table.hashes()[0]['USERNAME'])
    console.log("Password: ", table.hashes()[0]['PASSWORD'])

  });

  this.Given(/^the time sheet is active$/, function (table) {

    console.log("button ATR_HoursBookingButton is pressed");

  });

  this.When(/^I send a SOAP request$/, function (table) {

    console.log("Send Soap request, parameters: ", table.hashes()[0]['SERVICE'])
  });

  this.When(/^I enter week hours$/, function (table) {

    table.hashes().map((rw) => {
      console.log("Week Nbr: ", rw['WEEKNR'], " - Activity: ", rw['ACTIVITYCODE']);
      //      console.log("Week Nbr: ", table.hashes()[0]['WEEKNR']);
      //      console.log("Activity: ", table.hashes()[0]['ACTIVITYCODE']);
    })
  });

  this.Then(/^I get a (".*") response$/, function (message) {

    console.log(message);

  });
  this.Then(/^the timesheet is filled$/, function () {

    console.log("tijd geschreven!!!");

  });

};
