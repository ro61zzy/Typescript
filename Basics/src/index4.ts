//Functions
function calculateTax(income:number, taxYear: number): number{ //you have to specify the return type, what do you want your function to return by adding :number/void
    if (taxYear < 2022)
        return income * 1.2
        //but if we get a number that's greater than 50000 it will return undefined and that's where the error is coming from
    return income * 1.3
}
calculateTax(10000, 2022)

//if you add an extra value, or give less here above it will throw an error
//to fix this
function calculatetax (income: number, taxYear = 2022): number{
    if (taxYear < 2022)
    return income * 1.4

    return income * 1.3
}

calculatetax(10000) 