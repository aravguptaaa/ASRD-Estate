import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl text-center font-semibold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type='email'
            placeholder='Email'
            className='border border-gray-300 p-3 rounded-lg'
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 p-3 rounded-lg'
            id='password'
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            disabled={loading}
            className='bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          <OAuth/>
        </form>
        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
        <div className="flex flex-col items-center mt-6">
          <p className="text-sm">
            Don't have an account?
            <Link to="/sign-up" className="text-blue-500 ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
