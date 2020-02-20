import Controller from '@ember/controller';

export default class IndexController extends Controller {
    async model() {
        return {
            action: {
                submit: function () {
                    let id = document.getElementbyId('id')
                    let firstName = document.getElementById('firstName')
                    let newContact = this.store.createRecord('contact', {
                        id: id,
                        firstName: firstName
                    }).then(
                    localStorage.setItem('Contact', newContact)
         
                    )
                }
            }
        }
    }
}


