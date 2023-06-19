import axios from "axios";

export const OrgAdminmailcheckget = async (id) => {
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  //Get method start
  try {
    let response2 = await fetch(`/platform/v1/sigmadocsummary/${id}`,
      {
        headers: {
          'x-api-key': `${key}`
        },
      }
    )
    console.log("err",response2)
    const data2 = await response2.json();
    console.log("Api inside", data2);
    // return {data2};
    return [true, data2];
  } catch (err) {
    console.log("vercelerrro", err);
    return [false, ""];
  }
};

export const OrgAdminmailcheckget1 = async(email) =>{
   
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    //Get method start
    try{
      let response2 = await fetch(`/platform/v1/userdetail/${email}`, 
      {
          headers: {
              'x-api-key': `${key}`    
            },
        }
        )
      //console.log(response2);
      // let response = await axios.request(options2);
      // tentidresponse= await response.data;
      // console.log("response",tentidresponse)
        
      const data2 = await response2.json();
      console.log("Api inside", data2)
      // return {data2};
      return [true,data2];
    }catch(err){
      console.log("vercelerrro",err)
      return [false,""];
    }
     
}

export const CreateOrganizationPost = async (name, organizationname) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/org',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            'name': `${name}`,
            'createdBy': `${organizationname}`,
        }
      };
      let tentidresponse ="";
      try {
     let response = await axios.request(options2);
     tentidresponse= await response.data;
     console.log("response",tentidresponse);
      }catch(error){
        console.error("done2",error);
      }
      // axios.request(options2).then(function (response2) {
      // //  window.location.reload();
      // }).catch(function (error) {
      //     console.error("done2",error);
      // });
     
      return tentidresponse;
}
export const CreateOrguserrolepost = async (emailid,name,role,tenentid) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/userdetail',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            'emailId': `${emailid}`,
            'userName': `${name}`,
            'password':"",
            'roleType': `${role}`,
            'method':"",
            'tennantId':`${tenentid}`
        }
      };
      
      axios.request(options2).then(function (response2) {
       console.log("response",response2);
       return response2;
      //  window.location.reload();
      }).catch(function (error) {
          console.error("done2",error);
      });
}
export const Orgadminsignup = async (emailid,Pwd) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'PUT',
        url: '/platform/v1/userdetail',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            'password': `${Pwd}`,
            'method':"SIGNIN",
            'emailId': `${emailid}`
          
          
        }
      };
      let usercheck=true;
      try {
        let response = await axios.request(options2);
        let statuscheck= await response.data;
        console.log("response",statuscheck);
         }catch(error){
           console.error("done2",error);
           usercheck=false;
         }
         return usercheck;


      // await axios.request(options2).then(function (response2) {
      //  console.log("response",response2);
      //  return true;
      // //  window.location.reload();
      // }).catch(function (error) {
      //     console.error("done2",error);
      //     return false;
      // });
}

export const Orguserlogincheck = async (emailid,pwd) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/userdetailsid',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            'emailId': `${emailid}`,
            'password':`${pwd}`
           
        }
      };

     let userlogincheck ="";
      try {
     let response = await axios.request(options2);
     userlogincheck= await response.data;
     console.log("response",userlogincheck);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return userlogincheck;
    
}
export const Sessionloginpost = async (currentDateTime,logouttime,userlogstatus,tenentid,role,email) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/session',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            'loginTime': currentDateTime.toString(),
            'logoutTime': "",
            'activity':`${userlogstatus}`,
            'tennatId': `${tenentid}`,
            'roleType':`${role}`,
            'mailId':`${email}`
        }
      };
      
      axios.request(options2).then(function (response2) {
       console.log("response",response2);
       return response2;
      //  window.location.reload();
      }).catch(function (error) {
          console.error("done2",error);
      });
}
export const Sessionstatusget= async(email) =>{
   
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    //Get method start
    try{
      let response2 = await fetch(`/platform/v1/session/${email}`, 
      {
          headers: {
              'x-api-key': `${key}`    
            },
        }
        )
      //console.log(response2);
      // let response = await axios.request(options2);
      // tentidresponse= await response.data;
      // console.log("response",tentidresponse)
        
      const data2 = await response2.json();
      console.log("Api inside", data2)
      // return {data2};
      return [true,data2];
    }catch(err){
      console.log("vercelerrro",err)
      return [false,""];
    }
     
}
export const Sessionstatusupdate = async (logintime,logouttime,logstatus,email) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let profilepicofuserdefault = "https://gateway.pinata.cloud/ipfs/Qma6vhaA98FmVUMyMUJLvdxVsT2wJJWH5key2gtKr3jftZ?_gl=1*j61wws";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'PUT',
        url: '/platform/v1/session',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          'loginTime':`${logintime}`,
          'logoutTime':`${logouttime}`,
          'activity':`${logstatus}`,
          'mailId':`${email}`,
          
           
           
        }
      };

     let userlogincheck ="";
      try {
     let response = await axios.request(options2);
     userlogincheck= await response.data;
     console.log("response",userlogincheck);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return userlogincheck;
    
}
export const fetchSigmadocByTid = async (start, limit, tenantId) => {
  const url = '/platform/v1/sigmadocbytid';
  const key = 'BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5';
  
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  const options = {
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key
    },
    data: {
      start: start,
      limit: limit,
      tenantId: tenantId
    }
  };

  try {
    const response = await axios(options);
    const sigmadocData = response.data;
    console.log('Response:', sigmadocData);
    return sigmadocData;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
export const fetchSigmadocdetails = async (sigmaId) => {
  console.log("id", sigmaId);
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  try {
    const response3 = await fetch(`/platform/v1/sigmadoc/${sigmaId}`, {
      headers: {
        'x-api-key': `${key}`
      },
    });
    console.log("response", response3);

    const data = await response3.json();
    console.log("Api inside", data);
    return [true, data];
  } catch (err) {
    console.log("Error fetching document details:", err);
    return [false, ""];
  }
};
export const forgetPasswordMailVerification = async(email) =>{

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  //console.log("done1",response.data);
    // console.log("date",date);
    const options2 = {
      method: 'POST',
      url: `platform/v1/resetpassword/${email}`,
    };
    let MailVerify = false;
    await axios.request(options2).then(function (response2) {
     console.log("response",response2);
     MailVerify = true;
    //  window.location.reload();
    }).catch(function (error) {
        console.error("done2",error);
        MailVerify = false;
    });
 return MailVerify;
}

export const resetPasswordSubmit = async (email, password, otp) =>
{       
let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
// let userID = localStorage.getItem('UserID');
// let connectAddress = localStorage.getItem("walletAddress");
// let profilepicofuserdefault = "https://gateway.pinata.cloud/ipfs/Qma6vhaA98FmVUMyMUJLvdxVsT2wJJWH5key2gtKr3jftZ?_gl=1*j61wws";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//console.log("done1",response.data);
  // console.log("date",date);
  const options2 = {
    method: 'PUT',
    url: `platform/v1/resetpassword/${email}`,
    headers: {
      'x-api-key': `${key}`    
    },
    data: {
      'emailId':`${email}`,
      'password':`${password}`,
      'otp':`${otp}`
    }
  };

 let userlogincheck ="";
  try {
 let response = await axios.request(options2);
 userlogincheck= await response.data;
 console.log("response",userlogincheck);
  }catch(error){
    console.error("done2",error);
  }
 
  return userlogincheck;
}