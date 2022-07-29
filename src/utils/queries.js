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