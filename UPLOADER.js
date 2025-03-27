j = api.getMoonstoneChestItems(myId)
j = j[0]["attributes"]

m = j["customDisplayName"]
j = j["customAttributes"]
z = j["changeTime"]
x = j["author"]
j = j["pages"][0]

api.log("cas: " + z)
api.log("cas: " + x)
api.log("cas: " + m)
status = "EDIT"

if(cas["files"][m] == undefined){
status = "NEW"
cas["files"]["count"]++
api.log("cas: FILE UPLOADING")
}

if (isNaN(cas["files"]["count"])){
cas["files"]["count"] = 1
}

r = cas["files"]["count"] 
cas["files"][r] = m
cas["files"][m] = j
