import Route from '@ember/routing/route';

export default class ContactRoute extends Route {

}

// async model(params) {
//   console.log(params);
//     let response = await fetch(`/api/contact/${params.contact_id}.json`);
//     let { data } = await response.json();

//     let { id, contact } = data;

//     let model = { id, ...contact };

//     return model;

// }