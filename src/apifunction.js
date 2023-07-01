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
      let cancelToken;
      if(typeof cancelToken != typeof undefined)
      {
        cancelToken.cancel("API Call cancelled")
      }
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
export const OrgAdminmailcheckget2 = async(id) =>{
   
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    //Get method start
    try{
      let response2 = await fetch(`/platform/v1/networkbytennatid/${id}`, 
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
      console.log("Api inside1", data2)
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
export const CreateOrguserrolepost = async (emailid, name, role, tenentid) =>
{         
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/userdetail',
        data: {
            'emailId': `${emailid}`,
            'userName': `${name}`,
            'password':"",
            'roleType': `${role}`,
            'method':"",
            'tennantId':`${tenentid}`
        }
      };
      try {
        const response = await axios(options2);
        const result = response.data;
        const title = 'User access';
        const description = `You have successfully added ${emailid} as a role: ${role} and the added user will receive an E-mail for confirmation.`;
        const tennat_id = tenentid;
        const statuses = false;
      
        await NotificationPost(title, description, localStorage.getItem("UserID"), tennat_id, statuses);
        console.log('Response:', result);
        return result;
      } catch (error) {
        console.error('Error:', error);
        return null;
      }
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

export const addToFavorites = async (emailId, sigmaId, name__v, filename__v, status__v, tenantId) => {
  const url = '/platform/v1/favourite';
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
      emailId:emailId,
      docId: sigmaId,
      docName: name__v,
      fileName: filename__v,
      docStatus: status__v
    }
  };

  console.log("docId", sigmaId);
  
  try {
    const response = await axios(options);
    const result = response.data;
    const title = 'Favourites';
    const description = `${filename__v} is added to favourites.`;
    const tennat_id = tenantId;
    const statuses = false;
  
    await NotificationPost(title, description, emailId, tennat_id, statuses);
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const fetchFavoriteDetails = async (emailId,limit) => {
  console.log("mail",emailId)
  const url = `/platform/v1/favourite/${emailId}/${limit}`;
  const key = 'BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5';

  try {
    const response = await axios.get(url, {
      headers: {
        'x-api-key': key
      }
    });
    
    console.log('Response:', response);

    // Assuming the response data is in the 'data' field
    const data = response.data;
    console.log('fetchFavoriteDetails:', data);
    return [true, data];
  } catch (error) {
    console.error('Error fetching favorite details:', error);
    return [false, null];
  }
};

export const deleteFavorite = async (emailId, sigmaId, filename_v, tenantId) => {
  const url = `/platform/v1/favourite/${emailId}/${sigmaId}`;
  const key = 'BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5';

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  const options = {
    method: 'DELETE',
    url,
    headers: {
      'x-api-key': key
    },
    data: {}
  };

  try {
    const responsed = await axios(options);
    console.log('Responsed:', responsed);
    const title = 'Favourites';
    const description = `${filename_v} is removed from favourites.`;
    const tennat_id = tenantId;
    const statuses = false;
  
    await NotificationPost(title, description, emailId, tennat_id, statuses);
    return responsed;
  } catch (error) {
    console.error('Error:', error);
    return null;
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
    await axios.request(options2).then(async function (response2) {
     console.log("response",response2);
     let present = await userDetailWithEmail(email)
     MailVerify = present[0];
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

  let MailVerify = false;
  try {
    let response = await axios.request(options2);
    MailVerify = true;
    console.log("response",response);
  }catch(error){
    console.error("done2",error);
    MailVerify = false;
  }
 
  return MailVerify;
}
export const Userprofileupload = async (Firstname,lastname,emailid) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let profilepicofuserdefault = "https://gateway.pinata.cloud/ipfs/Qma6vhaA98FmVUMyMUJLvdxVsT2wJJWH5key2gtKr3jftZ?_gl=1*j61wws";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'POST',
        url: '/platform/v1/userprofile',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          'firstName':`${Firstname}`,
          'lastName':`${lastname}`,
          'mobileNumber':"",
          'profilePic':"",
          'gender':"",
          'state':"",
          'country':"",
          'launguage':"",
          'timeZone':"",
          'emailId': `${emailid}`,
           
           
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

export const Userprofileupdate = async (Firstname,lastname,mobno,Img,gender,state,selectedCountry,launguage,timezone,emailid) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  let profilepicofuserdefault = "https://gateway.pinata.cloud/ipfs/Qma6vhaA98FmVUMyMUJLvdxVsT2wJJWH5key2gtKr3jftZ?_gl=1*j61wws";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'PUT',
        url: '/platform/v1/userprofile',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          'firstName':`${Firstname}`,
          'lastName':`${lastname}`,
          'mobileNumber':`${mobno}`,
          'profilePic':`${Img}`,
          'gender':`${gender}`,
          'state':`${state}`,
          'country':`${selectedCountry}`,
          'launguage':`${launguage}`,
          'timeZone':`${timezone}`,
          'emailId': `${emailid}`
           
           
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

export const userprofileget = async(email) =>{
   
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    //Get method start
    try{
      let response2 = await fetch(`/platform/v1/userprofile/${email}`, 
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

export const getSigmafieldConfig = async (tennatid) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
  try{
    let response2 = await fetch(`/platform/v1/sigmafieldconf/${tennatid}`, 
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
    // console.log("Api inside", data2)
    // return {data2};
    return [true,data2];
  }catch(err){
    console.log("vercelerrro",err)
    return [false,""];
  }
    
}

export const getJobList = async (tennatid,start,limit) =>
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
        url: '/platform/v1/job',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          tenantId:tennatid,
          limit:limit,
          start:start
           
        }
      };

     let jobsList =[];
      try {
        const response = await axios(options2);
         jobsList = response.data;
        // console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}

export const getJobListImmutable = async (tennatid,start,limit) =>
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
        url: '/platform/v1/job',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          tenantId:tennatid,
          limit:limit,
          start:start
           
        }
      };

     let jobsList =[];
      try {
        const response = await axios(options2);
         let jobsLists = response.data;
         jobsLists.map((r,i)=>{
          if(r.jobName === "MAKE_IREC"){
            jobsList.push(r);
          }
          console.log("datasr",jobsList)
         })
        // console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}

export const executeJobListImmutable = async () =>
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
        url: '/platform/v1/finalisedocs',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          
           
        }
      };

     let jobsList ;
      try {
        const response = await axios(options2);
        jobsList = response.data;
         
        console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}

export const userDetailWithEmail = async (emailid) =>
{       
  try{
    let cancelToken;
    if(typeof cancelToken != typeof undefined)
    {
      cancelToken.cancel("API Call cancelled")
    }
    let response2 = await fetch(`/platform/v1/userdetail/${emailid}`)
    //console.log(response2);
    // let response = await axios.request(options2);
    // tentidresponse= await response.data;
    // console.log("response",tentidresponse)
      
    const data2 = await response2.json();
    // console.log("Api inside", data2)
    // return {data2};
    return [true, data2];
  }catch(err){
    console.log("vercelerrro",err)
    return [false, ""];
  }
}

export const OrgTenentcheckget = async(tenentId, pageSize) =>{
   console.log("orgTenant", tenentId);
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    //Get method start
    try{
      let cancelToken;
      if(typeof cancelToken != typeof undefined)
      {
        cancelToken.cancel("API Call cancelled")
      }
      let response2 = await fetch(`/platform/v1/userdetailsid/${tenentId}/${parseInt(pageSize)}`, 
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
      console.log("orgTenant check", data2);
      // return {data2};
      return [true,data2];
    }catch(err){
      console.log("vercelerrro",err)
      return [false,""];
    }
     
}

export const DeleteOrgUser = async (emailid) =>
{       
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  // let userID = localStorage.getItem('UserID');
  // let connectAddress = localStorage.getItem("walletAddress");
  // let network = "AB";
  
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //console.log("done1",response.data);
      // console.log("date",date);
      const options2 = {
        method: 'DELETE',
        url: `/platform/v1/userdetail/${emailid}`,
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
            
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

export const getTransaction = async (start,limit,tennatId) =>
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
        url: '/platform/v1/tx',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          "start":start,
          "limit":limit,
          "tenantId":tennatId
           
        }
      };

     let jobsList=[] ;
      try {
        const response = await axios(options2);
        jobsList = response.data;
         
        console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}
export const getTransactionblock = async (start,limit,tennatId) =>
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
        url: '/platform/v1/blocks',
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          "start":start,
          "limit":limit,
          "tenantId":tennatId
           
        }
      };

     let jobsList=[] ;
      try {
        const response = await axios(options2);
        jobsList = response.data;
         
        console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}
export const nodeDetails = async (tenantId) =>
{       
  try{
    let response2 = await fetch(`/platform/v1/sigmanodesummary/${tenantId}`)
    //console.log(response2);
    // let response = await axios.request(options2);
    // tentidresponse= await response.data;
    // console.log("response",tentidresponse)
      
    const data2 = await response2.json();
    // console.log("Api inside", data2)
    // return {data2};
    return [true, data2];
  }catch(err){
    console.log("vercelerrro",err)
    return [false, ""];
  }
    
}



export const getTennantId = async () =>
{       
  let usermailid = localStorage.getItem("UserID");
  
  try{
    let response2 = await fetch(`/platform/v1/userdetail/${usermailid}`)
    //console.log(response2);
    // let response = await axios.request(options2);
    // tentidresponse= await response.data;
    // console.log("response",tentidresponse)
      
    const data2 = await response2.json();
    console.log("getTennantId", data2)
    // return {data2};
    return  data2.tennantId;
  }catch(err){
    console.log("vercelerrro",err)
    return "";
  }
    
}
export const createUserVisits = async(emailid,type,page) =>{

  const res = await fetch('https://geolocation-db.com/json/')
  // console.log("ipv4",await res.json())
  let k = (await res.json()).IPv4;
  console.log("ipv4",k)

    let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    let datas = {
         "ipAddress":(k).toString(),
        "algoAddress":emailid,
        "networkType":type,
        "walletType":page
        
        }


const options2 = {
    method: 'POST',
    url: '/platform/v1/uservisitrecord',
    headers: {
        'x-api-key': `${key}`    
    },
    data: datas
    };
    
    axios.request(options2).then(function (response2) {
    console.log("hlo",response2);
    console.log("update successfull15")
    }).catch(function (error) {
        console.error("done2",error);
    });
    
}
export const NotificationPost = async(title, description, email_id, tennat_id, statuses) => {

  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  let data = {
           
    "title": title,
    "descriptions": description,
    "mailId": email_id,
    "epochtime": (Date.now())/1000,
    "tennatId": tennat_id,
    "statuses": statuses
  }

  const options2 = {
  method: 'POST',
  url: '/platform/v1/notification',
  data: data
  };
  
  axios.request(options2).then(function (response2) {
  console.log("notification", response2);
  return [true, response2];
  }).catch(function (error) {
      console.error("done2", error);
      return [false, 'Error occurred while fetching data'];
});
}

export const NotificationSingle = async(id, email_id, status) => {
  console.log("status", status);
if(status != true)
{
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  let data = {
           
    "id": id,
    "mailId": email_id,
    "statuses": true
  }

  const options2 = {
  method: 'PUT',
  url: '/platform/v1/notificationbyid',
  data: data
  };
  
  axios.request(options2).then(function (response2) {
  console.log("notification", response2);
  return [true, response2];
  }).catch(function (error) {
      console.error("done2", error);
      return [false, 'Error occurred while fetching data'];
});
}
}

export const NotificationAll = async(email_id) => {
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  let data = {   
    "mailId": email_id,
    "statuses": true
  }

  const options2 = {
  method: 'PUT',
  url: '/platform/v1/notification',
  data: data
  };
  
  axios.request(options2).then(function (response2) {
  console.log("notification", response2);
  return [true, response2];
  }).catch(function (error) {
      console.error("done2", error);
      return [false, 'Error occurred while fetching data'];
});

}

export const getNotificationById = async (emailid) => {
  console.log("mailnotify",emailid)
  const url = `/platform/v1/notification/${emailid}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return [true, data];
    } else {
      return [false, 'Error occurred while fetching data'];
    }
  } catch (error) {
    console.log('Error:', error);
    return [false, 'Error occurred while making the request'];
  }
};

export const userByTenantId = async (tenantId) => {
  const url = `platform/v1/userdetailbytennantall/${tenantId}`;

  try {
    const response = await fetch(url);

    const data2 = await response.json();
    console.log("userdetailbytennant", data2)
    // return {data2};
    return [true, data2.length];
  }catch(err){
    console.log("userdetailbytennant",err)
    return [false,""];
  }
};
export const HelpandsupportPost = async(Ticket,Description,firstname,lastname,emailid,TennatId,statuse) =>{
  let key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  let datas = {
           
    "ticket": Ticket,
    "descriptions": Description,
    "firstName":firstname,
    "lastName":lastname,
    "mailId": emailid,
    "epochtime":"",
    "tennatId": TennatId,
    "statuses": statuse
  }

  const options2 = {
  method: 'POST',
  url: '/platform/v1/helpandsupport',
  headers: {
      'x-api-key': `${key}`    
  },
  data: datas
  };
  
  axios.request(options2).then(function (response2) {
  console.log("notification",response2);
  
  // console.log("update successfull15")
  }).catch(function (error) {
      console.error("done2",error);
});
}

export const getTicketsById = async (pageno) => {
  console.log("getticket",pageno)
  const url = `/platform/v1/helpandsupport/${pageno}`;
  const key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': key,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return [true, data];
    } else {
      return [false, 'Error occurred while fetching data'];
    }
  } catch (error) {
    console.log('Error:', error);
    return [false, 'Error occurred while making the request'];
  }
};

export const ResolveTicket = async(email_id,id,tenantId) => {
  console.log("email",email_id,id,tenantId);
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  let data = { 
    "id":id,  
    "mailId": email_id,
    "statuses": true
  }

  const options2 = {
  method: 'PUT',
  url: '/platform/v1/helpandsupport',
  data: data
  };
  try {
    const response = await axios(options2);
    const result = response.data;
    const title = 'Sigma Help and Support';
    const description = `The ticket originating from ${email_id} has been resolved. Kindly review your email for updates. If you have any additional questions, please feel free to reach out to us through the admin mail or the Help and Support Ticket System.`;
    const tennat_id = tenantId;
    const statuses = false;
  
    await NotificationPost(title, description, email_id, tennat_id, statuses);
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
//   axios.request(options2).then(function (response2) {
//   console.log("helpandsupportbyid", response2);
//   return [true, response2];
//   }).catch(function (error) {
//       console.error("done2", error);
//       return [false, 'Error occurred while fetching data'];
// });

}
export const getNFTProp = async (id,tennatId) =>
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
        url: `/platform/v1/nftdetails/${id}`,
        headers: {
          'x-api-key': `${key}`    
        },
        data: {
          
          "tenantId":tennatId
           
        }
      };

     let jobsList=[] ;
      try {
        const response = await axios(options2);
        jobsList = response.data;
         
        console.log('Response:', jobsList);
      }catch(error){
        console.error("done2",error);
      }
    
     
      return jobsList;
    
}

export const getJobsCountByType = async (type) => {
  const url = `/platform/v1/jobsfetch/${type}`;
  const key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': key,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return  data;
    } else {
      return 0;
    }
  } catch (error) {
    console.log('Error:', error);
    return 0;
  }
};
export const getLatestJObTime = async () => {
  const url = `/platform/v1/jobsfetch`;
  const key = "BvXlBA50Iw58XBSBZltS2H5P9IwS76f9hojA6aE5";

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': key,
      },
    });

    if (response.ok) {
      const data = await response.text();
      // console.log("--time--", data);
      return data;
    } else {
      return 0; 
    }
  } catch (error) {
    console.log('--time--', error);
    return 0;
  }
};