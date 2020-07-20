import gql from "graphql-tag";

const AddPerson = gql`
  mutation CreatePerson($name: String!, $description: String!, $personPhoto: String!) {
    CreatePerson(name: $name, description: $description, personPhoto: $personPhoto) {
      id
      name
      description
      personPhoto
    }
  }
`;

export default AddPerson;