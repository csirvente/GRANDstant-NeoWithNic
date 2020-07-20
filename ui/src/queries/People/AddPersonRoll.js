import gql from "graphql-tag";

const AddPersonRoll = gql`
  mutation AddPersonRoll(
    $from: String!
    $to: String!
  ){
  AddPersonRoll(from: {name : $from}, to: {name: $to}) { 
    from {
      name
    }
    to{
      name
    }
  }
}
`;

console.log(AddPersonRoll)
export default AddPersonRoll;


/* const AddPersonRoll = gql`
  mutation AddPersonRoll(
    $PersonInput: ID!, 
    $RollInput: ID!
  ){
  AddPersonRoll(
    from: {
      id: $PersonInput
    }
    to: {
        id: $RollInput
    }
  ) { 
    from {
      id
      name
    }

    to {
      id
      name
    }
  }
}
`; */