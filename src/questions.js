import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizDetail = () => {
  const { id } = useParams();

  const [quizDetails, setQuizDetails] = useState(null);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await fetch(`http://172.16.0.155:8000/api/quiz/${id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch quiz details');
        }

        const data = await response.json();
        console.log('Quiz details:', data);

        setQuestions(data.data); // Assuming the response contains an array of questions
      } catch (error) {
        console.error('Error fetching quiz details:', error);
        setError('An error occurred while fetching quiz details.');
      }
    };

    fetchQuizDetails();
  }, [id]);

  return (
    <div>
      <h2>Quiz Details</h2>
      <p>Quiz ID: {id}</p>
      {error && <p>{error}</p>}
      <ul>
      {Array.isArray(questions) && questions.map((question) => (
  <li key={question.id}>{question.title}</li>
))}
      </ul>
    </div>
  );
        }
export default QuizDetail;
