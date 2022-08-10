import gql from "graphql-tag";

export const eventsQuery = gql`
query {
    Event{
       name
       startDate
       endDate
       description
       maxTicketPrice 
       minTicketPrice 
       eventImage{
           height   
       }
       author{
           username  
       }
       locationType
       locationLink
       skills {
        id
        }  
    }
} 
`

export const expertsQuery = gql`
query {
    Expert{
        profileImage{
            height
        }
        username
        firstName
        lastName
        email
        shortBio
        description
        yearsOfExperience
        author   
    }
  }
`;

export const skillsQuery = gql`
query {
    MainSkills {
             skillName
             description
             subskills{
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

export const websiteQuery = gql`
query{
    website{
        path
        title
    }
}
`

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




