/*
Copyright (c) 2025 fenl co.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


api.log("cas: HARD RESET")

caseos = {}
caseos["CURSOR"] = [0,0,0]
caseos["files"] = {}
caseos["path"] = ["files"]
try{ 
caseoser
} catch {
caseoser = -50
}

if(caseoser == 50 || caseoser == undefined){
caseoser = -50
}


caseFONT = {
        "A": [
            "  #  ",
            " # # ",
            "#####",
            "#   #",
            "#   #"
        ],
        "B": [
            "#### ",
            "#   #",
            "#### ",
            "#   #",
            "#### "
        ],
        "C": [
            " ####",
            "#    ",
            "#    ",
            "#    ",
            " ####"
        ],
        "D": [
            "#### ",
            "#   #",
            "#   #",
            "#   #",
            "#### "
        ],
        "E": [
            "#####",
            "#    ",
            "#####",
            "#    ",
            "#####"
        ],
        "F": [
            "#####",
            "#    ",
            "#####",
            "#    ",
            "#    "
        ],
        "G": [
            " ####",
            "#    ",
            "#  ##",
            "#   #",
            " ####"
        ],
        "H": [
            "#   #",
            "#   #",
            "#####",
            "#   #",
            "#   #"
        ],
        "I": [
            "#####",
            "  #  ",
            "  #  ",
            "  #  ",
            "#####"
        ],
        "J": [
            "#####",
            "   # ",
            "   # ",
            "#  # ",
            " ##  "
        ],
        "K": [
            "#   #",
            "#  # ",
            "###  ",
            "#  # ",
            "#   #"
        ],
        "L": [
            "#    ",
            "#    ",
            "#    ",
            "#    ",
            "#####"
        ],
        "M": [
            "#   #",
            "## ##",
            "# # #",
            "#   #",
            "#   #"
        ],
        "N": [
            "#   #",
            "##  #",
            "# # #",
            "#  ##",
            "#   #"
        ],
        "O": [
            " ### ",
            "#   #",
            "#   #",
            "#   #",
            " ### "
        ],
        "P": [
            "#### ",
            "#   #",
            "#### ",
            "#    ",
            "#    "
        ],
        "Q": [
            " ### ",
            "#   #",
            "# # #",
            "#  ##",
            " ####"
        ],
        "R": [
            "#### ",
            "#   #",
            "#### ",
            "#  # ",
            "#   #"
        ],
        "S": [
            " ####",
            "#    ",
            " ### ",
            "    #",
            "#### "
        ],
        "T": [
            "#####",
            "  #  ",
            "  #  ",
            "  #  ",
            "  #  "
        ],
        "U": [
            "#   #",
            "#   #",
            "#   #",
            "#   #",
            " ### "
        ],
        "V": [
            "#   #",
            "#   #",
            "#   #",
            " # # ",
            "  #  "
        ],
        "W": [
            "#   #",
            "#   #",
            "# # #",
            "## ##",
            "#   #"
        ],
        "X": [
            "#   #",
            " # # ",
            "  #  ",
            " # # ",
            "#   #"
        ],
        "Y": [
            "#   #",
            " # # ",
            "  #  ",
            "  #  ",
            "  #  "
        ],
        "Z": [
            "#####",
            "   # ",
            "  #  ",
            " #   ",
            "#####"
        ],
        "0": [
            " ### ",
            "#   #",
            "# # #",
            "#   #",
            " ### "
        ],
        "1": [
            "  #  ",
            " ##  ",
            "  #  ",
            "  #  ",
            " ### "
        ],
        "2": [
            " ### ",
            "#   #",
            "  ## ",
            " #   ",
            "#####"
        ],
        " ": [
            "     ",
            "     ",
            "     ",
            "     ",
            "     "
        ],
        "3": [
            "#####",
            "    #",
            "  ## ",
            "    #",
            "#####"
        ],
        "4": [
            "#   #",
            "#   #",
            "#####",
            "    #",
            "    #"
        ],
        "5": [
            "#####",
            "#    ",
            "#####",
            "    #",
            "#####"
        ],
        "6": [
            "#####",
            "#    ",
            "#####",
            "#   #",
            "#####"
        ],
        "7": [
            "#####",
            "    #",
            "   # ",
            "  #  ",
            " #   "
        ],
        "8": [
            "#####",
            "#   #",
            "#####",
            "#   #",
            "#####"
        ],
        "9": [
            "#####",
            "#   #",
            "#####",
            "    #",
            "#####"
        ],
        ".": [
            "     ",
            "     ",
            "     ",
            "  #  ",
            "     "
        ],
        ",": [
            "     ",
            "     ",
            "     ",
            "  #  ",
            " #   "
        ],
        "!": [
            "  #  ",
            "  #  ",
            "  #  ",
            "     ",
            "  #  "
        ],
        "?": [
            " ### ",
            "#   #",
            "   # ",
            "     ",
            "  #  "
        ],
        "-": [
            "     ",
            "     ",
            " ### ",
            "     ",
            "     "
        ]
    };

for(let i = caseoser; i < 51; i++){
for(let y = -50; y < 51; y++){
api.setBlock([i,y,49],api.getBlock(i,y,50))
}
caseoser = i
api.log(i)
}



api.log("SUCCESFUL")
