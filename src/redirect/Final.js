import React,{useState,useEffect,useMemo} from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";
import App from './App';

const Final = () => {
  const [data,setData]=useState();
  const [bloodcheck,setBloodCheck]=useState("");
  const [cdistrict,setCdistrict]=useState("");
  async function getdata() {
    await axios
      .get("http://localhost:3004/getdetails")
      .then((res) => {
        setData(res.data.myData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getdata();
  }, []);

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!bloodcheck) {
      return data;
    }
    else if(bloodcheck=='All'){
      return data;
    }
    return data.filter((item) => item.Blood === bloodcheck);
  }
  var filteredList = useMemo(getFilteredList, [bloodcheck, data]);
  // const newItems=data.filter((item)=>item.blood)
  function getFilteredList1() {
    // Avoid filter when selectedCategory is null
    if (!cdistrict) {
      return filteredList;
    }
    else if(cdistrict=='All'){
      return filteredList;
    }
    return filteredList.filter((item) => item.district === cdistrict);
  }
  var filterData=useMemo(getFilteredList1, [cdistrict, filteredList]);
  function handleBloodChange(event) {
    setBloodCheck(event.target.value);
  }
  function handleDistrictChange(event) {
    setCdistrict(event.target.value);
  }
  console.log(data)

  return (
    <>
      <div className='user-container'>
        <h1 className='resultsearch'>Available Donars nearby you </h1>
        <img className='loaduser' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
        <form>
        <div className='filter-section'>
          <select
          onChange={handleBloodChange}
           >
          <option>Select Your Blood</option>
               
                <option>All</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
          </select>
          <select
          onChange={handleDistrictChange}
          >
             <option>Select Your District</option>
                <option>All</option>
                <option>Delhi</option>
                <option>Patna</option>
                <option>Lucknow</option>
                <option>Bhopal</option>
                <option>Mumbai</option>
                <option>Ahmedabad</option>
                <option>Bangalore</option>
                <option>Korba</option>
                <option>Jaipur</option>
                </select>  
        </div>
        </form>  
      </div>
      <div className='index_div'>
        {filterData?.map((value) => {
          return (
            <App
              img={value.img}
              name={value.name}
              location={value.district}
              phone={value.phone}
              blood={value.Blood}
            />
          );
        })}
        {/* <div className='goto'>
        <h3>Search for Blood Bank </h3>
        <Link to='hospitals'>Click Here</Link>
      </div> */}
        <Outlet />
      </div>
    </>
  );
};

export default Final;