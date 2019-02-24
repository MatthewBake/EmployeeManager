var employeeCommands ={

clickEmployee: function(employeeName) {
    this.api.useXpath()
    this.click(`//*[text()="${employeeName}"]`)
    this.api.useCss()
    return this
},
editEmployee:  function(employeeInfo){
            if(employeeInfo.name){
            this    
                .clearValue('@Name')
                .setValue('@Name', employeeInfo.name)
            }
            if(employeeInfo.phone){
            this
                .clearValue('@Phone')
                .setValue('@Phone', employeeInfo.phone)
            }
            if(employeeInfo.job){
            this
                .clearValue('@Job')
                .setValue('@Job', employeeInfo.job) 
            }        
            return this
    }   
}

module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommands],
    elements: {
        Name: 'input[name="nameEntry"',
        Phone: 'input[name="phoneEntry"',
        Job: 'input[name="titleEntry"',
        Title: '.titleText',
        ID: 'span[name="employeeID"',
        Save: 'button[name="save"',
        Add: 'li[name="addEmployee"]',

    }
}