import * as LoginComponent from '../components/login_component'
import * as HeaderComponent from '../components/header_component'
import * as CourseComponent from '../components/course_component'
import * as Utils from '../support/utils'
describe("Testing the login page",()=>{
    beforeEach(()=>{
        Utils.visitPage('login')
    })

    it('Login with valid username and valid password for a normal user', () => {
        LoginComponent.performLogin("user", "user")
        CourseComponent.courseButton().click()
        Utils.checkURL().should('contain', '/courses')
        HeaderComponent.signout().should('be.visible')
    });

    it('should login as admin using valid userName and userPassword', ()=> {
        LoginComponent.performLogin("admin", "admin")
        CourseComponent.courseButton().click()
        Utils.checkURL().should('contain', '/courses')
        HeaderComponent.signout().should('be.visible')
        CourseComponent.deleteButton().should('be.visible')
    });
})