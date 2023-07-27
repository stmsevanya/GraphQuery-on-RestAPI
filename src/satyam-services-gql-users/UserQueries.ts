import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees @rest(path: "/api/v1/employees") {
      status
      message
      data
    }
  }
`;

export const CREATE_EMPLOYEES = gql`
  query CreateEmployees {
    employees(input: $input) @rest(path: "/api/v1/create", method: "POST") {
      status
      message
      data
    }
  }
`;