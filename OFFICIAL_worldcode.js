/* Caseos To-Do List
1. Cursor (Auto) !CHECK
2. Highlighter (1) !CHECK
4. Click (2)
*/
let _tick = 0;
myId = api.getPlayerId("fenl_") /* Change this to owner of computer */
function tick() {
  _tick++;
  myId = api.getPlayerId("fenl_") /* Same thing */
/* POINT CURSOR */
  z = api.getPlayerFacingInfo(myId)

  r = z["dir"]
  z = z["camPos"]

  if(r[2] < 0){
    api.broadcastMessage("cas: CameraError")
  } else {
    z[2] ++

    while(z[2] < 50 && z[1] < 48 && z[1] > -48 && z[0] < 48 && z[0] > -48){
      z[0] += r[0]
      z[1] += r[1]
      z[2] += r[2]
    }

    if(z[2] >= 50){
      z[0] = Math.floor(z[0])
      z[1] = Math.floor(z[1])
      z[2] = 47

      m = [cas["CURSOR"][0] + 5, cas["CURSOR"][1] - 5, cas["CURSOR"][2]]


    api.setBlockRect(cas["CURSOR"], m, "Air")
    caseos["CURSOR"] = z
    for(let x = 0; x < 5; x++){
      for(let y = 0; y < 5; y++){
        m[0] = z[0] + x
        m[1] = z[1] - y
        m[2] = z[2]
        api.setBlock(m,api.getBlock(50-x,50-y,51))
      }
    }

    } else{
      api.broadcastMessage("cas: CameraError")
    }
  }

}

function onPlayerSelectInventorySlot(id,slot){
  if(slot == 1){
    m = cas["high"]
    m = [m[0]+4,m[1]-4,m[2]]
    api.setBlockRect(cas["high"],m,"Air")

    m = cas["CURSOR"]
    m[0] = Math.floor(m[0]/4)
    m[1] = Math.floor(m[1]/4)

    cas["high"] = [m[0],m[1],m[2]]

    m[0] += 4
    m[1] -= 4

    api.setBlockRect(cas["high"],m,"Water")
  }
}

