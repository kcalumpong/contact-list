import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    store.createRecord('contact', {
      id: id,
      name: name
    })
  }
}
 



// when using localStorage, you can just
  // fetch all the data from localStorage
  // contacts: [
    //   {
      //     id: 'kristina',
      //     name: 'kristina',
      //     ...
      //   },
      
      // ]

  
    
    // async model() {
    //     let response = await fetch('/api/contact.json');
    //     let { data } = await response.json();

    //     let model = [];

    //     for(let contactData of data) {
    //       let response = await fetch(`/api/contact/${contactData.id}.json`);
    //       let { data } = await response.json();
    //       let { id, contact } = data;
    //       let contactInfo = { id, ...contact };
    //       model.push(contactInfo);
    //     }

    //     console.log(model);
    //     return model;
    // }