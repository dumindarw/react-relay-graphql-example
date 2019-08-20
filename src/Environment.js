import {
    Environment, 
    Network, 
    RecordSource, 
    Store
} from 'relay-runtime';

const fetchQuery = (operation, variables) => {
    console.log(operation);
    console.log(variables);
    
    return fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        })
    }).then(response => {
        console.log(response);
        
        return response.json();
    })
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
})

export default environment;