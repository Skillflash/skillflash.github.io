import gql from 'graphql-tag';

export const eventsQuery = gql`
  query {
    Event {
      id
      Description
      Name
      startdate
      Enddate
      Previewimg {
        id
        width
        height
        title
        type
        tags
        description
        filesize
        filename_disk
      }
    }
  }
`

export const skillsQuery = gql`
    query {
        Skills {
            Skillname
            Level
            Industry
            Expert {
                Skills {
                    Skillname
                }
            }
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
`


export const expertsQuery = gql`
query {
        Expert {
            Event {
                Author
                Description
                Type
                Name
            }
            Skills {
                Skillname
            }
            Experience {
                Company
                Role
                Name
                Startdate
            }
            Blog {
                Date
                Name
                Content
            }
        }
    }
`