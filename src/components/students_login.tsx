import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import Image from '../assets/img/image.png';
import { useTranslation } from 'react-i18next';

// Axios global sozlamalari
axios.defaults.withCredentials = true;

const LoginRegisterPage = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    school_token: '',
    username: '',
    password: '',
  });

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://iqrotalimapi2.pythonanywhere.com/api/users/login/',
        loginData,
        { withCredentials: true }
      );
      console.log('Login muvaffaqiyatli:', response.data);
      navigate('/teacher/dashboard');
    } catch (error) {
      console.error('Login xatosi:', error);
      alert("Login muvaffaqiyatsiz. Username yoki parol noto'g'ri.");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://iqrotalimapi2.pythonanywhere.com/api/users/register/',
        registerData,
        { withCredentials: true }
      );
      console.log('Ro‘yxatdan o‘tish muvaffaqiyatli:', response.data);
      navigate('/teacher/dashboard');
    } catch (error) {
      console.error('Ro‘yxatdan o‘tish xatosi:', error);
      alert("Ro‘yxatdan o‘tish muvaffaqiyatsiz. Ma'lumotlarni tekshiring.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="bg-white mt-10 rounded-2xl shadow-xl w-full max-w-md p-8 dark:bg-zinc-900">
        <div className="flex justify-center items-center mb-6 h-20">
          <img src={Image} alt="logo" width={124} height={124} className="" />
          <h1 className="text-2xl font-bold mr-8 mb-3">EDUTEST</h1>
        </div>
        <div className="flex justify-between mb-6 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('login')}
            className={`py-2 px-1 font-medium ${
              activeTab === 'login'
                ? 'dark:text-green-500 border-b-2 dark:border-green-500 text-indigo-600 border-indigo-600'
                : 'text-gray-600'
            }`}
          >
            {t('login')}
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`py-2 px-1 font-medium ${
              activeTab === 'register'
                ? 'dark:text-green-500 dark:border-green-500 text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600'
            }`}
          >
            {t('signup')}
          </button>
        </div>

        {activeTab === 'login' && (
          <>
            <h2 className="text-lg font-semibold mb-4">{t('enter_account')}</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">{t('username')}</label>
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder={t('username')}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-300 font-medium">{t('password')}</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder={t('password')}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="remember" className="text-sm">{t('remember')}</label>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-green-600 dark:hover:bg-green-800 text-white font-semibold rounded-lg transition duration-300"
              >
                {t('login')}
              </button>
            </form>
          </>
        )}

        {activeTab === 'register' && (
          <>
            <h2 className="text-lg font-semibold mb-4">{t('signup')}</h2>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="flex justify-items-center items-center w-full gap-2">
                <div className="flex flex-col w-auto">
                  <label className="text-sm text-gray-600 dark:text-gray-300 font-medium ml-1">{t('first_name')}</label>
                  <input
                    type="text"
                    name="first_name"
                    value={registerData.first_name}
                    onChange={handleRegisterChange}
                    placeholder={t('first_name')}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                  />
                </div>
                <div className="flex flex-col w-auto">
                  <label className="text-sm text-gray-600 dark:text-gray-300 font-medium ml-1">{t('last_name')}</label>
                  <input
                    type="text"
                    name="last_name"
                    value={registerData.last_name}
                    onChange={handleRegisterChange}
                    placeholder={t('last_name')}
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-600 dark:text-gray-300 font-medium ml-1">{t('school_token')}</label>
                <input
                  type="text"
                  name="school_token"
                  value={registerData.school_token}
                  onChange={handleRegisterChange}
                  placeholder={t('school_token')}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-600 dark:text-gray-300 font-medium ml-1">{t('username')}</label>
                <input
                  type="text"
                  name="username"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  placeholder={t('username')}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm text-gray-600 dark:text-gray-300 font-medium ml-1">{t('password')}</label>
                <input
                  type="password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder={t('password')}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg dark:bg-zinc-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-600 dark:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-green-600 dark:hover:bg-green-800 text-white font-semibold rounded-lg transition duration-300"
              >
                {t('signup')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginRegisterPage;