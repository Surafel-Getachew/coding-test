const DoctorList = ({ fullname, photo, gender, email, phone }) => {
  return (
    <div className='my-4 p-4 bg-white flex flex-wrap justify-between items-center rounded-md '>
      <div className='rounded-[50%] basis-1/12 xsm:basis-2/12'>
        <img
          src={photo}
          alt='profile'
          width='100%'
          height='100%'
          className='rounded-[50%]'
        />
      </div>
      <div className='ml-2 basis-3/12 xsm:basis-9/12'>
        <h3 className=' font-bold'>Doctor fullname</h3>
        <h3 className='font-bold'>{fullname}</h3>
      </div>
      <div className='ml-2 xsm:mt-4 basis-6/12 xsm:basis-12/12'>
        <p>
          phone: {'   '}
          {phone}
        </p>
        <p>
          gener: {'   '} {gender}
        </p>
        <p>
          email: {'   '}
          {email}
        </p>
      </div>
    </div>
  );
};

export default DoctorList;
