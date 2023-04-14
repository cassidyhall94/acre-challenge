import 'cypress-iframe';

describe('Affordability Calculator Test', () => {
    it('Test Case 1', () => {
        cy.visit('https://www.nationwide-intermediary.co.uk/calculators/affordability-calculator');

        // dismiss cookie pop-up if it exists
        cy.get('#onetrust-accept-btn-handler').click();

        // people applying: 1
        cy.get('#AffCalc-q0-NumberOfApplicants-0').click({ force: true })

        // mortgage type: buy a new property
        cy.get('#AffCalc-q10-ApplicationType-0').click({ force: true })

        // borrow amount: 250000
        cy.get('#AffCalc-q20-BorrowingAmount').type('250000')

        // term length: 20 years
        cy.get('#AffCalc-q30-MortgageTermYears').type('20')

        // ownership type: standard
        cy.get('#AffCalc-q40-OwnershipType').select('Standard')

        // not a new home
        cy.get('#AffCalc-q60-PropertyFound-1').click({ force: true })

        // Not in Scotland
        cy.get('#AffCalc-q135-RegionCode-1').click({ force: true })

        //purchase price: 200000
        cy.get('#AffCalc-q90-PurchasePrice').type('200000')

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        //DOB: 22 09 1988
        cy.get('#AffCalc-q140-Day').type('20', { force: true })
        cy.get('#AffCalc-q140-Month').type('09', { force: true })
        cy.get('#AffCalc-q140-Year').type('1988', { force: true })

        // individual's status: First time buyer
        cy.get('#AffCalc-q145-PropertyTenure').select('First time buyer', { force: true })

        // have dependents: no
        cy.get('#AffCalc-q150-HaveDependents-1').click({ force: true })

        // retired: no
        cy.get('#AffCalc-q170-IsCustomerRetired-1').click({ force: true })

        // retirement age: 70
        cy.get('#AffCalc-q180-RetirementAge').type('70', { force: true })

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        // employed: employed
        cy.get('#AffCalc-q240-EmploymentCategory').select('Employed', { force: true })

        // contract: Permanent
        cy.get('#AffCalc-q250-EmploymentType').select('Permanent', { force: true })

        // job years: 10
        cy.get('#AffCalc-q270-JobYears').type('10', { force: true })

        //salary before tax: 40000
        cy.get('#AffCalc-q320-GrossAnnualIncome').type('40000', { force: true })

        // second job: no
        cy.get('#AffCalc-q420-HasSecondJob-1').click({ force: true })

        // other income: no
        cy.get('#AffCalc-q610-HasOtherIncome-1').click({ force: true })

        // total owed on credit cards: 5000
        cy.get('#AffCalc-q1320-TotalCreditCardBalances').type('5000', { force: true })

        // other regular monthly costs: 2000
        cy.get('#AffCalc-q1380-MonthlyOtherExpenditure').type('2000', { force: true })

        // any other mortgages: no
        cy.get('#AffCalc-q1540-HasExistingMortgages-1').click({ force: true })

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        // expected results for test case 1
        cy.get('.Amount').should('include.text', '£0', { force: true })
        cy.get('.Years').should('include.text', '20', { force: true })
        cy.get('.Months').should('include.text', '0', { force: true })
    })
})

describe('Affordability Calculator Test', () => {
    it('Test Case 2', () => {
        cy.visit('https://www.nationwide-intermediary.co.uk/calculators/affordability-calculator');
        // dismiss cookie pop-up if it exists
        cy.get('#onetrust-accept-btn-handler').click();

        // people applying: 2
        cy.get('#AffCalc-q0-NumberOfApplicants-1').click({ force: true })

        // mortgage type: Remortgage
        cy.get('#AffCalc-q10-ApplicationType-1').click({ force: true })

        // not borrowing funds to repay debts
        cy.get('#AffCalc-q15-RemortagingToRepayDebts-1').click({ force: true })

        // borrow amount: 175000
        cy.get('#AffCalc-q20-BorrowingAmount').type('175000')

        // existing mortgage balance: 100000
        cy.get('#AffCalc-q25-AmountTransferredFromOtherLender').type('100000')

        // term length: 25 years
        cy.get('#AffCalc-q30-MortgageTermYears').type('25')

        // ownership type: Shared equity
        cy.get('#AffCalc-q40-OwnershipType').select('Shared equity')

        //purchase price: 175000
        cy.get('#AffCalc-q90-PurchasePrice').type('175000', { force: true })

        // legal status: Leasehold
        cy.get('#AffCalc-q70-PropertyTenure').select('Leasehold')

        // property type: Semi-detached house
        cy.get('#AffCalc-q80-PropertyType').select('Semi-detached house')

        // Not in Scotland
        cy.get('#AffCalc-q135-RegionCode-1').click({ force: true })

        cy.get('#AffCalc-q130-CurrentEstimatedValueShare').type('175000', { force: true })

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        //DOB: 15 08 1979
        cy.get('#AffCalc-q140-Day').type('15', { force: true })
        cy.get('#AffCalc-q140-Month').type('08', { force: true })
        cy.get('#AffCalc-q140-Year').type('1979', { force: true })

        // individual's status: Borrower with another lender
        cy.get('#AffCalc-q145-PropertyTenure').select('Borrower with another lender')

        // have dependents: yes
        cy.get('#AffCalc-q150-HaveDependents-0').click({ force: true })

        // child aged 0-5: 1
        cy.get('#AffCalc-q160-Age0to5-0').type('1')

        // child aged 6-11: 1
        cy.get('#AffCalc-q160-Age6to11-1').type('1')

        // retired: no
        cy.get('#AffCalc-q170-IsCustomerRetired-1').click({ force: true })

        // retirement age: 72
        cy.get('#AffCalc-q180-RetirementAge').type('68', { force: true })

        //DOB: 01 12 1980
        cy.get('#AffCalc-q190-Day').type('01', { force: true })
        cy.get('#AffCalc-q190-Month').type('12', { force: true })
        cy.get('#AffCalc-q190-Year').type('1980', { force: true })

        // individual's status: Borrower with another lender
        cy.get('#AffCalc-q195-JointApplicant-CustomerType').select('Borrower with another lender')

        // have dependents: yes
        cy.get('#AffCalc-q200-HaveDependents-0').click({ force: true })

        // child aged 0-5: 1
        cy.get('#AffCalc-q210-Age0to5-0').type('1')

        // child aged 6-11: 1
        cy.get('#AffCalc-q210-Age6to11-1').type('1')

        // retired: no
        cy.get('#AffCalc-q220-IsCustomerRetired-1').click({ force: true })

        // retirement age: 70
        cy.get('#AffCalc-q230-RetirementAge').type('70', { force: true })

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        // employed: Self employed (partner)
        cy.get('#AffCalc-q240-EmploymentCategory').select('Self employed (partner)', { force: true })

        // job years: 4
        cy.get('#AffCalc-q270-JobYears').type('4', { force: true })

        // net profit from latest period: 48000
        cy.get('#AffCalc-q380-LatestPeriodProfitShare').type('48000', { force: true })

        // net profit for previous period: 60000
        cy.get('#AffCalc-q390-PreviousPeriodProfitShare').type('60000', { force: true })

        // second job? no
        cy.get('#AffCalc-q420-HasSecondJob-1').click({ multiple: true, force: true })

        // other income? no
        cy.get('#AffCalc-q610-HasOtherIncome-1').click({ multiple: true, force: true })

        // employed: Homemaker
        cy.get('#AffCalc-q780-EmploymentCategory').select('Homemaker', { force: true })

        // other income? no
        cy.get('#AffCalc-q1150-HasOtherIncome-1').click({ multiple: true, force: true })

        // total owed on credit cards: 2000
        cy.get('#AffCalc-q1320-TotalCreditCardBalances').type('2000', { force: true })

        // personal loans/hire: 2000
        cy.get('#AffCalc-q1330-MonthlyPersonalLoanOrHire').type('2000', { force: true })

        // other regular monthly costs: 250
        cy.get('#AffCalc-q1380-MonthlyOtherExpenditure').type('250', { force: true })

        // monthly childcare payments: 200
        cy.get('#AffCalc-q1390-MonthlyChildCare').type('200', { force: true })

        // additional costs for dependants: 150
        cy.get('#AffCalc-q1420-MonthlyCostOfFinancialDependents').type('150', { force: true })

        // total owed on credit cards: 1000
        cy.get('#AffCalc-q1430-TotalCreditCardBalances').type('1000', { force: true })

        // student loan payments: 12000
        cy.get('#AffCalc-q1470-MonthlyStudentLoan').type('12000', { force: true })

        // first applicant has any other mortgages: yes
        cy.get('#AffCalc-q1540-HasExistingMortgages-0').click({ multiple: true, force: true })

        // How many joint mortgages with the second applicant: 0
        cy.get('#AffCalc-q1550-NoOfJointMortgages').select('0', { force: true })

        // How many other mortgages does the first applicant have: 1
        cy.get('#AffCalc-q1570-NoOfExistingMortgages').select('1', { force: true })

        // total balance on the other mortgage: 100000
        cy.get('#AffCalc-q1580-0-0-TotalBalance').type('100000', { force: true })

        // interest-only balance on the other mortgage: 100000
        cy.get('#AffCalc-q1580-0-1-InterestOnlyBalance').type('15000', { force: true })

        // remaining term: 10
        cy.get('#AffCalc-q1580-0-2-RemainingTermOfLoanYY').type('10', { force: true })

        // client let property linked to mortgage: no
        cy.get('#AffCalc-q1580-0-3-PropertyLet-1').click({ multiple: true, force: true })

        // second applicant has other mortgage: no
        cy.get('#AffCalc-q1590-HasExistingMortgages-1').click({ multiple: true, force: true })

        cy.get('#AffCalc-q1620-CouncilTax').type('1100', { force: true })
        cy.get('#AffCalc-q1630-BuildingInsurance').type('200', { force: true })
        cy.get('#AffCalc-q1650-GroundRent').type('100', { force: true })

        // click Next button
        cy.get('.Affordability-nextStep').click({ multiple: true, force: true })

        // expected results for test case 2
        cy.get('.Amount').should('include.text', '£0', { force: true })
        cy.get('.Years').should('include.text', '25', { force: true })
        cy.get('.Months').should('include.text', '0', { force: true })
    })

})
