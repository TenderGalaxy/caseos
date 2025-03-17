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

if(caseos["files"][m] == undefined){
status = "NEW"
caseos["files"]["count"]++
api.log("cas: FILE UPLOADING")
}

if (isNaN(caseos["files"]["count"])){
caseos["files"]["count"] = 1
}

r = caseos["files"]["count"] 
caseos["files"][r] = m
caseos["files"][m] = j
