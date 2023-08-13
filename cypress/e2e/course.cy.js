import * as Utils from '../support/utils'
import * as LoginComponent from '../components/login_component'
import * as CourseComponent from '../components/course_component'
describe("Check course functionality", ()=>{
    context("Check the functionality as an admin", ()=> {
        
        beforeEach(()=>{
        Utils.visitPage('login')
        LoginComponent.performLogin("admin", "admin")
        })

        it("check the Delete button should be visible", () => {
        CourseComponent.courseButton().click()
        CourseComponent.deleteButton().should('be.visible')
        });
    })
})