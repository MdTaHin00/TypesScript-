        //! enum use case
//* 1: Direction or position : enum direction {Up,Down,Left,Right}
//* 2: Roles or permission: enum Role {Gest,User,Admin}        
//* 3: HTTP Status or APIs : enum httpStatus {ok=200, notfound=404}
//* 4: Days or week or months : enum Days {mon,tus,wed} 
//* 5: Toggle states or modes : enum Mode {Dark,Light}


//! numeric enum 
//* enum ar man 1,2,3,4 thaka start hoy
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let dir : Direction = Direction.Right ;
console.log(dir);

//! string enum
enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Pending = "PENDING"
}
//* enum call
const res = Status.Error ;
console.log("Enum Status ",res);

  //! Const enum
  //* const enum ar value -> 0,1,2,3 thaka start hoy
  const enum Size{
    Small,
    Medium,
    Larger
  }
  const sizeNum = Size.Small ;
  console.log(sizeNum);
  
   //! enum  post blog system
 
   enum PostStatus {
    Draft = "DRAFT",
    Published = "PUBLISHED",
    Archived = "ARCHIVED"
   }
   type BlogPost ={
    title : string ,
    content : string ,
    status : PostStatus ,
   }

   const post1 : BlogPost={
    title:"Post number 1",
    content:'Enum blog post',
    status: PostStatus.Published
   }
   console.log(post1);
   