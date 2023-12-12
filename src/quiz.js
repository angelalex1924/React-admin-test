import './quiz.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function Quiz() {
    const [showModal, setShowModal] = useState(false);
    const [quizzesData, setquizzesData] = useState([]);

    // Define handleOpenModal function to open the modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://172.16.0.155:8000/api/questions');
            setQuestions(response.data);
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
      
        fetchData(); // Call the async function immediately
      }, []);
      
      const addNewQuiz = async () => {
        try {
          const respaddnew = await axios.post('http://172.16.0.155:8000/api/quiz', {
            title: newQuizTitle,
            user_id: user_id
          });
      
          console.log('New quiz created:', respaddnew.data);
          // Additional logic here if needed
        } catch (error) {
          console.error('Error creating new quiz:', error);
        }
      };
      

    return (
        <div className='quizmenubox'>
            <h1 className='quizmenutitle'>All Quizzes</h1>
            <button className='addnew' onClick={handleOpenModal}>
                Add New
            </button>
            <Modal show={showModal} handleClose={handleCloseModal} handleSave={addNewQuiz}>
                {/* Content for your modal */}
                <h2>Add new Quiz</h2>
            </Modal>
            <div className='line'></div>
            <div className='listofquizzes'>
                {quizzesData.map((quiz, index) => (
                    <div key={index}>
                        <Link to={`/contentofquiz/${quiz.id}`} className='quizelements'>
                            {quiz.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quiz;
