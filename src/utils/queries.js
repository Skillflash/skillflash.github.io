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
        }
      }
      eventImage {
        id
        width
        height
        title
        filename_disk
        type
        description
      }
      author {
        firstName
        lastName
        id
        shortBio
        description
        profileImage {
          width
          height
          id
          type
        }
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
    }
  }
`;

export const subskillQuery = gql`
  query {
    Subskill {
      Name
      Description
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
