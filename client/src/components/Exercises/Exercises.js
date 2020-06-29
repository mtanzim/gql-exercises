import { useMutation, useQuery } from "@apollo/react-hooks";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { CREATE_EXERCISE, EXERCISES } from "./api";
import { ExerciseForm } from "./ExerciseForm";
import { Exercise } from "./ExerciseItem";

export const Exercises = () => {
  const { loading, error, data } = useQuery(EXERCISES);
  const [
    addExercise,
    { loading: formLoading, error: submitError },
  ] = useMutation(CREATE_EXERCISE, {
    update(
      cache,
      {
        data: { createExercise },
      }
    ) {
      const { exercises: currentExercises } = cache.readQuery({
        query: EXERCISES,
      });
      cache.writeQuery({
        query: EXERCISES,
        data: { exercises: currentExercises.concat([createExercise]) },
      });
    },
  });

  const onAdd = async (values) => {
    try {
      await addExercise({ variables: values });
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loading) {
    return <p>{"Loading..."}</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  const { exercises } = data;

  return (
    <div>
      <h1>Exercises</h1>
      <ListGroup>
        {exercises.map((exc) => (
          <Exercise key={exc.id} exercise={exc} />
        ))}
      </ListGroup>
      <h4 className="mt-4">Add new</h4>
      <ListGroup>
        <ListGroup.Item>
          <ExerciseForm
            loadig={formLoading}
            onSubmit={onAdd}
            className="mt-2"
          />
        </ListGroup.Item>
      </ListGroup>
      {submitError && <p>{submitError.message}</p>}
    </div>
  );
};
