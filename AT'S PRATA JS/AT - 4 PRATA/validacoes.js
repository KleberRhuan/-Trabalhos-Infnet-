function isNotEmpty(value){
  if(value !== null && value !== undefined && (value.length > 0)){
    return true;
  }
  return false;
}

function isMinChar(value){
  if(value.length >= 3){
    return true;
  }
  return false;
}

function isMaxChar(value){
  if(value.length <= 10){
    return true;
  }
  return false;
}

function isInt(value){
  if(Number.isInteger(value)){
    return true;
  }
  return false;
}

function isReal(value){
  if(!Number.isNaN(parseFloat(value))){
    return true;
  }
  return false;
}

