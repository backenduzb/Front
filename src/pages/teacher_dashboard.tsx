import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'http://iqrotalimapi2.pythonanywhere.com/api/users/teacher/students/',
          { withCredentials: true }
        );
        setStudents(response.data);
        setLoading(false);
      } catch (error: any) {
        console.error('Dashboard xatosi:', error);
        setLoading(false);
        if (error.response?.status === 401) {
          setError('Siz autentifikatsiya qilinmadingiz. Iltimos, qayta kiring.');
          navigate('/login'); // 401 xatosi bo'lsa, login sahifasiga yo<Action: redirect
          } else {
          setError('Ma\'lumotlarni olishda xato yuz berdi.');
        }
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mening o‘quvchilarim</h1>
      <ul className="space-y-2">
        {students.map((student: any) => (
          <li key={student.id} className="p-4 bg-gray-100 rounded shadow">
            <p><strong>FIO:</strong> {student.first_name} {student.last_name}</p>
            <p><strong>Username:</strong> {student.username}</p>
            <p><strong>Sinf:</strong> {student.class_number}{student.class_letter}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;