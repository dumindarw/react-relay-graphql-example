/**
 * @flow
 * @relayHash 130a259e79ee2afeb993bf0896bf5515
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryVariables = {|
  userName: string
|};
export type appQueryResponse = {|
  +GET_USER: ?{|
    +tp: ?number
  |}
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery(
  $userName: String!
) {
  GET_USER(username: $userName) {
    tp
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "userName"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "tp",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "GET_USER",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "GET_USER",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "userProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "appQuery",
    "id": null,
    "text": "query appQuery(\n  $userName: String!\n) {\n  GET_USER(username: $userName) {\n    tp\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8aaff505d8f144bbdf4c671ebb7dd21f';
module.exports = node;
