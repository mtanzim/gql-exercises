import { gql } from "@apollo/client";


export const GET_SESSIONS = gql`
  query GetSessions {
    exerciseSessions {
      id
      note
      timestamp
      user {
        id
        name
        email
      }
    }
  }
`;

export const MAKE_SESSION = gql`
  mutation CreateExerciseSession($note: String) {
    createExerciseSession(note: $note) {
      id
      note
      timestamp
      user {
        id
        name
        email
      }
    }
  }
`;

export const DELETE_ONE_SESSION = gql`
  mutation DeleteOneSession($id: Int!) {
    deleteOneexercise_session(where: { id: $id }) {
      id
    }
  }
`;

export const UPDATE_SESSION = gql`
  mutation UpdateOneSession($id: Int!, $note: String) {
    updateOneexercise_session(where: { id: $id }, data: { note: $note }) {
      id
      note
      timestamp
      user {
        id
        name
        email
      }
    }
  }
`;

export const CREATE_EXERCISE_INSTANCE = gql`
  mutation CreateExerciseInstance(
    $exerciseId: Int!
    $sessionId: Int!
    $weight: Float
    $duration: Float
    $repetitions: Int
  ) {
    createExerciseInstance(
      exerciseId: $exerciseId
      sessionId: $sessionId
      weight: $weight
      duration: $duration
      repetitions: $repetitions
    ) {
      id
      weight
      duration
      repetitions
      exercise {
        id
        name
        label
      }
      exercise_session {
        id
        timestamp
        user {
          id
          email
        }
      }
    }
  }
`;

export const GET_INSTANCES = gql`
  query GetInstances($sessionId: Int!) {
    exerciseInstances(sessionId: $sessionId) {
      id
      weight
      duration
      repetitions
      exercise {
        id
        name
        label
      }
      exercise_session {
        id
        timestamp
        user {
          id
          email
        }
      }
    }
  }
`;

export const DELETE_INSTANCE = gql`
  mutation DeleteExerciseInstances($id: Int!) {
    deleteOneexercise_instance(where: { id: $id }) {
      id
    }
  }
`;
