//Question: https://www.greatfrontend.com/questions/javascript/deep-clone#

//Code: Using Recusrion 

export default function deepClone(Oldobject) {
  return deepCloneFunc(Oldobject);
  throw 'Not implemented!';
}

function deepCloneFunc(oldObj){
  //Base Condition
  if(typeof oldObj !== 'object' || oldObj === null){
    return oldObj;
  }
  
  let newObj = {};
  for(let key in oldObj){
    if(typeof oldObj[key] === 'object'){
      newObj[key] = deepClone(oldObj[key]);
    }
    else{
      newObj[key] = oldObj[key];
    }

    return newObj;
  }
}

