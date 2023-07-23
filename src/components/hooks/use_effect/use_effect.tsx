// make an api call using useEffect
import { useEffect, useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const APICall = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const fetchTodo = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTodo(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <h2>useEffect - TODO</h2>
      <p>Title: {todo?.title}</p>
      <p>Completed: {todo?.completed ? 'true' : 'false'}</p>
    </>
  );
};
