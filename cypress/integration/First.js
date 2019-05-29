import 'cypress-file-upload'

describe('First test', () => {
	it('Visiting UTE site', () => {
		cy.viewport('macbook-13')
		cy.visit('http://localhost:3000')
	});
})

describe('Appliance test', () => {
	it('Going to appliances', () => {
		cy.viewport('macbook-13')
		cy.get('#appliances').click();
	});
	it('Find an appliance', () => {
		cy.viewport('macbook-13')
		// cy.wait(2000)
		cy.get('#findingData').type('a')
		cy.get('#findingData').clear()
		// cy.wait(2000)
		cy.get('#findingData').type('1')
	});
	it('Find an appliance and consulting', () => {
		cy.viewport('macbook-13')
		cy.get('#findingData').type('a')
		cy.get('#findingData').clear()
		cy.get('#findingData').type('1')
		cy.wait(500)
		cy.get('#1').click()
		cy.get('#back').click()
	});
})
const fileName="test.png"
describe('Creating new Appliance', () => {
	it('Click and cancel', () => {
		cy.viewport('macbook-13')
		cy.get('.add-button').click()
		cy.get('#cancel-appliance').click()
		cy.get('#cancelar').click()
	})

	it('Click and continue', () => {
		cy.viewport('macbook-13')
		cy.get('.add-button').click()
		cy.get('#cancel-appliance').click()
		cy.get('#continuar').click()
		cy.get('[name=idPlanEstudios]').select('1')
		cy.get('[name=unidadAprendizaje]').type('computacion')
		cy.get('#planeacionDidactica').click()
		cy.fixture(fileName).then( fileContent => {
			cy.get('[data-cy=input]').click().upload(
				{ fileContent, fileName, mimeType : 'image/png' },
				{subjectType : 'input'}
			)
		})

	});
})