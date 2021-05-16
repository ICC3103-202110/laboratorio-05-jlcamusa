



function update(input,model){
    const {bill} = input
    const {percentage} = input
    const {tip} = model
    const {total} = model

    return {
        ...model,
        bill: bill,
        percentage: percentage,
        tip: bill*(percentage/100),
        total: (bill/1.0) + (bill*(percentage/100))
    }
}

module.exports = {
    update
}