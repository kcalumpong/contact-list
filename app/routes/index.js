import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch('/api/contact.json');
        let { data } = await response.json();

        let model = [];

        for(let contactData of data) {
          let response = await fetch(`/api/contact/${contactData.id}.json`);
          let { data } = await response.json();
          let { id, contact } = data;
          let contactInfo = { id, ...contact };
          model.push(contactInfo);
        }

        console.log(model);
        return model;

        // return data.map(model => {
        //     let { id, details } = model;

        //     return { id, ...details };

        // })
    }
}
