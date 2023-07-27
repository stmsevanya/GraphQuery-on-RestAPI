import apolloClient from "./ApolloClient";
import { CREATE_EMPLOYEES, GET_EMPLOYEES } from "./UserQueries";

// const GET_USERS = gql`
//     query GetEmployees{
//     employees {
//         id
//         employee_name
//         employee_salary
//         employee_age
//         profile_image
//     }
//     }
// `;



// const GET_PEOPLE = gql`
//   query GetPEOPLE {
//     response @rest(path: "/api/people", method: "GET") {
//       count
//       results {
//         name
//         height
//       }
//     }
//   }
// `;
export class UsersSvc {
    public async getUsers() {

        console.log('Satyam Calling users api :get');
        try {
            const { data } = await apolloClient.query({
              query: GET_EMPLOYEES,
            });
        
            console.log('Satyam users data:', data);
            console.log('Satyam stringified users data:', JSON.stringify(data));
          } catch (error) {
            console.error('Error fetching user:', error);
          }

        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }

    public async createUsers() {

        console.log('Satyam Calling users api :create');
        try {
            const { data } = await apolloClient.query({
              query: CREATE_EMPLOYEES,
              variables: {
                input: {
                    name: "abc",
                    salary: 500,
                    age: 21
                }
              }
            });
        
            console.log('Satyam users data:', data);
            console.log('Satyam stringified users data:', JSON.stringify(data));
          } catch (error) {
            console.error('Error fetching user:', error);
          }

        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }
}
