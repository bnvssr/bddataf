// ./step-definitions/trusted-trade.js

module.exports = function () {
    
    var po = page.trustedTrade;
    
    this.BeforeScenario(function(scenario, done) {
//        console.log('BeforeScenario: ' + scenario.getName());
        done();
    });
    
    this.Given(/^the (.*), sold by (.*) from (.*) with status (.*)$/, function(asset, customer, verkoper, status, done){
        po.enterCustomer(customer);
        po.enterVerkoper(verkoper);
        po.enterAsset(asset);
        po.enterStatus(status);
        done();
    });

    this.Given(/^I am at Trusted Trade$/, function () {
      
        return po.loadTrustedTradeAndVerify();
        
    });
    
    this.When(/^I enter (.*) as customer name$/, function(customer) {

        return po.enterCustomer(customer);
        
    });
    
    this.When(/^I enter (.*) as verkoper name$/, function (verkoper) {
  
        return po.enterVerkoper(verkoper);
   
    });
    
    this.When(/^I enter (.*) as asset identifier$/, function (asset) {
   
        return po.enterAsset(asset);
   
    });
    
    this.When(/^I trigger (.*)$/, function (caption) {
        
        return po.clickButton(caption);
        
    });      
    
    this.Then(/^the status changes to (.*)$/, function (expectedStatus) {
        
        return po.statusIs(expectedStatus);
        
    });
    
    this.Then(/^the (.*) is displayed$/, function(message){
        
        return po.messageIs(message);
        
    });

};
