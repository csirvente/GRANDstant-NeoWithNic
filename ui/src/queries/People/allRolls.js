import gql from "graphql-tag";

const Rolls = gql`
 query AllRoles {
  Roll {
    id
    name
    rollType
  }
}
`;

export default Rolls;