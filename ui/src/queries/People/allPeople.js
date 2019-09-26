import gql from "graphql-tag";

const Person = gql`
  query Person{
    Person{
      id
      name
      roll {
        name
        type
      }
    }
  }
`;

export default Person;