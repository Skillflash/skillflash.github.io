import gql from 'graphql-tag';

export const eventsQuery = gql`
    query {
        Event {
            Description
            Name
            Author
            Type
            Expert {
                Skills {
                    Skillname
                }
            }
            Location {
                Country
            }
        }
    }
`

export const skillsQuery = gql`
query {
    Skills {
        Skillname
        Description
        Expert{
            Skills {
                 Skillname
             }
        }
        
    }
}
`

export const subskillsQuery = gql`
query {
    Subskill {
        Name 
        Description
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