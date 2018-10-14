var recipes = {
Pasta: '1 kg',
Cream: '250 ml'
}

function updateObjectWithKeyAndValue(object, key, value){
 var newObj = Object.assign({},object,{[key]: value})
 return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value
}

