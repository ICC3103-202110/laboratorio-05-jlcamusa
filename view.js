const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//possibly change

function getTable(model){
    const {bill} = model
    const {percentage} = model
    const {tip} = model
    const {total} = model
    return [
        {
            'Bill Amount': bill,
            'Tip (%)': percentage,
            'Tip': tip,
            'Total': total
        }
    ]
}

function inputForm(model){
    const{bill} = model
    const message_1 = 'Bill Amount?'
    const{percentage} = model
    const message_2 = 'Tip(%)?'

    return inquirer.prompt([
        {
            name: 'bill',
            type: 'input',
            message: message_1,
            default: bill //min: 42:40
        },
        {
            name: 'percentage',
            type: 'input',
            message: message_2,
            default: percentage
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}