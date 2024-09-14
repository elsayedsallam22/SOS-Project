exports.LoginPage = 
class LoginPage {
   
    constructor(page) {
      this.page = page;
      
       this.userInput = this.page.getByTestId('username');
       this.passwordInput = this.page.getByTestId('password');
       this.loginButton = this.page.getByRole('button', { name: 'تسجيل الدخول' });
    }
  
    async gotoLoginPage(){
        await this.page.goto('https://dev.sos.sbmsec.com/login');
    }
  
    async login(user, password) {
     await this.userInput.fill(user);
     await this.passwordInput.fill(password);
     await this.loginButton.click();
     
    }
  }