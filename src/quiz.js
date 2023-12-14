import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState({ data: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('http://172.16.0.155:8000/api/quiz');

        if (!response.ok) {
          throw new Error('Failed to fetch quizzes');
        }

        const data = await response.json();
        console.log('API response:', data);
        setQuizzes(data); // Assuming the response is an object with a 'data' property
      } catch (error) {
        console.error('Error fetching quizzes:', error);
        setError('An error occurred while fetching quizzes.');
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className='listofquizzesbox'>
      <h1 className='quizboxtitle'>Quizzes</h1>
      {error && <p>{error}</p>}
      <ul>
        {quizzes.data.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
