import gql from "graphql-tag";

const CreateRoll = gql`
  mutation CreateRoll($name: String!, $rollType: Rolltype!) {
    CreateRoll(name: $name, rollType: $rollType) {
      id
      name
      rollType
    }
  }
`;

export default CreateRoll;