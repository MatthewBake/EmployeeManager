module.exports = (functionPage, oldEmployee, newEmployee) => {
    functionPage
                .clickEmployee(oldEmployee)
                .editEmployee(newEmployee)
                //#Click on the "Save" button
                .click('@Save')
    //#Verify information saved in fields
                functionPage.expect.element('@Name').value.equals(newEmployee.name)
                functionPage.expect.element('@Phone').value.equals(newEmployee.phone)
                functionPage.expect.element('@Job').value.equals(newEmployee.job)
}