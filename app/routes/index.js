import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        let response = await fetch('/api/contact.json');
        let { data } = await response.json();

        return data.map(model => {
            let { details } = model;
            let id;

            console.log("Data", data)
            return { id, ...details };
            
        })
    }
}
