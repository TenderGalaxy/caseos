/* Caseos To-Do List
1. Cursor (Auto) !CHECK
2. Highlighter (2)
3. Display File List on Caseos Reset (1)
4. Click (3)
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

      m = [caseos["CURSOR"][0] + 5, caseos["CURSOR"][1] - 5, caseos["CURSOR"][2]]


    api.setBlockRect(caseos["CURSOR"], m, "Air")
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

