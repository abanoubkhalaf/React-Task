import { Formik, Form } from 'formik'
import { faWifi , faSearch , faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from './table';
import axios from "axios";
import { useState, useEffect, useCallback } from "react";




const FilterForm = () => {
  const [data, setData] = useState([]);
  const [resultDataByEmail , setResultDataByEmail]= useState([])
  const [email, setEmail] = useState('');
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const paramValue = params.get("email");
  
  console.log(paramValue)

  const handleData = useCallback(() => {  
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
          setData(res.data);
      });
     
  
  },[])
    
  useEffect(() => {
   
      handleData();  
    },[ handleData])
    
    const filteredEmail =  data.filter((member) => member.email === email);
  const handleEmailValue = (e) => {
    setEmail(e.currentTarget.value)
    }
   


  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      return;
    }
    
    setRender(true)
    setResultDataByEmail(filteredEmail)

    let url  = new URL(window.location.href);
    let searchParams = new URLSearchParams();
    if (email.trim().length !== 0) {
      searchParams.append('email' , `${email}`)
    }

    
 
    url += searchParams.toString();
    if (!window.location.href.includes('email')) { window.history.pushState('', 'New Page Title', url) } else {
      window.location.href = '/'
    }
  }










 

  return (
    <div className='bg-gray-100 w-full h-screen lg:overflow-y-hidden lg:p-10  flex flex-col lg:flex-row gap-5  '>
    <div className=' h-full w-full sm:w-full  lg:w-1/4 bg-white 	'>
        <h1 className='lg:text-4xl text-2xl text-black text-center lg:py-5 py-2 uppercase  '>filters</h1>
        <hr className='my-2 border-gray-400 border '/>
      <Formik   >
        <Form className='flex h-full flex-col  items-center content-center p-5' onSubmit={onSubmit} >            
        <input name='email' id='email' type='email' placeholder='Type Your Email' className='border-b-2 border-gray-300 w-full bg-transparent h-10 mb-6 focus:outline-none focus:border-blue-500' onChange={handleEmailValue}   />
        
       
        <button  className='bg-blue-500 px-10 py-3 rounded text-white capitalize hover:bg-blue-600 transition duration-300 ease-in-out	' type='submit'> <FontAwesomeIcon icon={faWifi} className='mr-2' />filter</button>
      </Form>
    </Formik>
      </div>


      <div className='lg:h-5/6   w-full sm:w-full  lg:w-3/4 bg-white '>
        
        <div className='flex relative h-10 p-2 font-bold'>
          <h1>Heroes</h1>
            <div className='flex gap-5 absolute right-0 top-2'>
             <FontAwesomeIcon icon={faSearch} className='mr-2' />          
            <FontAwesomeIcon icon={faStream} className='mr-2' onClick={()=>{setShow(!show)}}/>
          </div>
          </div>
           
      
        {!show && !render ? <Table data = {data} /> :<Table data = {resultDataByEmail} /> }
       
      </div>
      </div>
  );
}

export default FilterForm;
