query appQuery(
  $userName: String!
) {
  GET_USER(username: $userName) {
    nic
    id
  }
}

{
  "userName": "dum2"
}