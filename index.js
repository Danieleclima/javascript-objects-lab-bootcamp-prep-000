var recipes = {
Pasta: '1 kg',
Cream: '250 ml'
}

function updateObjectWithKeyAndValue(object, key, value){
 var newObj = Object.assign({},object,{key: value})
 return newObj
}

