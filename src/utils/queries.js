import gql from "graphql-tag";

export const eventsQuery = gql`
query {
<<<<<<< HEAD
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
=======
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

export const skillsQuery = gql`
  query {
    Skills {
      Skillname
      Description
      Expert {
        Skills {
          Skillname
        }
      }
>>>>>>> 493dd5e7ce5535b3fda6f12659990633afa4abf5
    }
  }
`;

<<<<<<< HEAD
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
=======
export const subskillQuery = gql`
  query {
    Subskill {
      Name
      Description
>>>>>>> 493dd5e7ce5535b3fda6f12659990633afa4abf5
    }
  }
`;

<<<<<<< HEAD
export const websiteQuery = gql`
query{
    website{
        path
        title
    }
}
`




=======
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
>>>>>>> 493dd5e7ce5535b3fda6f12659990633afa4abf5
