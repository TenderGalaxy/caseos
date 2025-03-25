/*
Copyright (c) 2025 fenl co.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


api.log("cas: HARD RESET")

cas = {}
cas["CURSOR"] = [0,0,0]
cas["files"] = {}
cas["path"] = ["files"]
try{ 
caseoser
} catch {
caseoser = -50
}

if(caseoser == 50 || caseoser == undefined){
caseoser = -50
}
cas["high"] = [0,0,0]
cas["path"] = ["files"]

caseFONT = {
"A": "_#_####_#",
"B": "##_######",
"C": "####__###",
"D": "##_#_###_",
"E": "#####_###",
"F": "#####_#__",
"G": "##_#_####",
"H": "#_#####_#",
"I": "###_#_###",
"J": "__##_####",
"K": "#_###_#_#",
"L": "#__#__###",
"M": "#######_#",
"N": "####_##_#",
"O": "####_####",
"P": "#######__",
"Q": "######__#",
"R": "####__#__",
"S": "_##_#_##_",
"T": "###_#__#_",
"U": "#_##_####",
"V": "#_##_#_#_",
"W": "#_#######",
"X": "#_#_#_#_#",
"Y": "#_#_#__#_",
"Z": "##__#__##",
".": "_______#_",
" ": "_________",
",": "____#_##_"
}
     

for(let i = caseoser; i < 51; i++){
for(let y = -50; y < 51; y++){
api.setBlock([i,y,49],api.getBlock(i,y,50))
}
caseoser = i
}



api.log("SUCCESFUL")
