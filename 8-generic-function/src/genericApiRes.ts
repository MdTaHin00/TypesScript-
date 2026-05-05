 
      //! Generic  Api response handel

 interface ApiResponse <T>{
    status:number;
    message:string,
    data:T
 }
 
 function handelResponse<T>(response: ApiResponse<T>) : T {
    if(response.status === 200){
        console.log("Success: ",response.message ,"data value ", response.data);
        return response.data
    }else{
        throw new Error("Something New error")
    }
 }
 const UserResult = handelResponse<string>({
    status:200,
    message:'User fetched successfully',
    data:'user'
 })
 
 const productResult = handelResponse<string[]>({
    status:200,
    message:"Product fetched successfully",
    data:['book','300','4.80']
 })