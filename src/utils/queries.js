import gql from 'graphql-tag';

export const eventsQuery = gql`
    query {
        Event {
            Description
            Name
            Author
            Type
            Expert {
                Skill
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
            Level
            Industry
            Expert {
                Skill
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