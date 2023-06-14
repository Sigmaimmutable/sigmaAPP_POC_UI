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
