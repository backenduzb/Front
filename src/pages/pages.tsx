import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TeacherStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('/api/teacher/students/', {
          withCredentials: true
        });
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError('O\'quvchilarni yuklab bo\'lmadi');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mening O'quvchilarim</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Ism</th>
              <th className="py-2 px-4 border-b">Familiya</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b text-center">{student.first_name}</td>
                <td className="py-2 px-4 border-b text-center">{student.last_name}</td>
                <td className="py-2 px-4 border-b text-center">{student.username}</td>
                <td className="py-2 px-4 border-b text-center">
                  <Link 
                    to={`/teacher/students/${student.id}/edit`}
                    className="text-blue-500 hover:underline mr-3"
                  >
                    Tahrirlash
                  </Link>
                  <button className="text-red-500 hover:underline">
                    O'chirish
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherStudentsPage;