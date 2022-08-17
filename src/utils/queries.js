import gql from "graphql-tag";

export const eventsQuery = gql`
query {
  Event {
    id
    description
    name
    startDate
    endDate
    skills {
      id
      MainSkills_id {
        id
        skillName
      }
    }
    eventImage {
      id
      width
      height
    }
  }
}
`;

export const teamsQuery = gql`
  query {
    Team {
      Description
      Name
      Users {
        Firstname
        Lastname
      }
    }
  }
`;

export const expertsQuery = gql`
  query {
    Expert {
      id
      Email
      yearsofexperince
      Username
      Profilimg {
        id
      }
      Shortbio
      Firstandlastname
    }
  }
`; 


export const skillsQuery = gql`
query {
  MainSkills {
      skillName
      description
      subskills {
          id
          SubSkill_id {
              name
          }
      }
      image {
          id
      }
  }
 }  
`

export const subskillQuery = gql`
query{
    SubSkill{
        name
        description
    }
  }
`;








