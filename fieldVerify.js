module.exports = (functionPage, employee) => {
    functionPage
                .clickEmployee(employee)
                //#Verify information saved in fields
                functionPage.waitForElementPresent('@Name')
                functionPage.waitForElementPresent('@Phone')
                functionPage.waitForElementPresent('@Job')
}