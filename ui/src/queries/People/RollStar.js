import gql from "graphql-tag";

const RollStar = gql`
  query RollStar {
    Roll(rollType: STAR){
      id
      rollType
      name
      person {
        id
        name
        personPhoto
      }
    }
  }
`;

export default RollStar;