import { useState, useEffect } from 'react';
import DoctorList from './components/DoctorList';
import { doctorsApi } from './api';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await doctorsApi.get('/doctors', '', {});
      setIsLoading(false);
      setDoctors(res.data);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setErrorMsg(error?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{errorMsg}</p>;
  }
  return (
    <div className='mt-10  flex flex-col justify-center items-center'>
      <h1 className='font-extrabold text-2xl'>Doctor's list</h1>
      <div>
        {doctors.map((doctor) => (
          <DoctorList
            key={doctor.id}
            fullname={doctor.fullname}
            phone={doctor.phone}
            gender={doctor.gender}
            email={doctor.email}
            photo={doctor.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
