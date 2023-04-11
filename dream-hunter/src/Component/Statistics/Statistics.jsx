import React ,{ useState, useEffect} from "react";
import  Chart  from "react-apexcharts";
function Statistics()
{
   const [stdudentSubject, setStudentsubject]= useState([]);
   const [studentMarks, setStudentMarks]= useState([]);

   useEffect( ()=>{
       const sSubject=[];
       const sMarks=[];
       const getStudentdata= async()=>{
       const reqData= await fetch("pie.json");
       const resData= await reqData.json();       
       for(let i=0; i< resData.length; i++)
       {
        sSubject.push(resData[i].subject);
        sMarks.push(parseInt(resData[i].marks));
       }
       setStudentsubject(sSubject);
       setStudentMarks(sMarks);
        //console.log(resData); 
       }

    getStudentdata();

   },[]);

    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="p-10 text-center text-3xl">Welcome to my Result </h3>
                <p className="text-center text-xl"> Total Mark: 60</p>
                <Chart 
                type="pie"
                width={1349}
                height={550}

                series={ studentMarks }                

                options={{
                        title:{ text:""
                        } , 
                       noData:{text:"Empty Data"},                        
                      labels:stdudentSubject                     

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default Statistics;