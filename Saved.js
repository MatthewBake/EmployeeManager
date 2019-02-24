var employee = {}
let castMembers = require("../testAssets/dataTest")
let employeeChange = require("../testAssets/employeeChange")
module.exports = {
    beforeEach: browser => {
        employee = browser.page.employee()
        employee.navigate()
        .waitForElementPresent("@Title")
    },
    after: browser => {
        browser.end()
    },
    "Save Changes QO2MB-35": browser => {
           
    //#Click on the first employee
    //#Make a change to the phone number, name, and title fields
    //#Click on the "Save" button
    //#Verify information saved in fields
    //#Click on the next employee
        castMembers.forEach(cast => {
        employee.click('@Add')
        employee.pause(1000)
        employeeChange(employee, "New Employee", cast)

    })

    }
}