function lineWrapper(left: SixDirection, buildRecipe: () => void) {
    builder.setOrigin()
    buildRecipe()
    builder.teleportToOrigin()
    builder.move(left, 1)
}

function printAleph(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 3    
    lineWrapper(left, function() {
        builder.move(up, 2)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
    })
}

function printBet(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    builder.place(block)
    builder.move(left, 1)
    //  line 2
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
}

function printGimel(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 2)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
    })
}

function printDalet(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
}

function printHe(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
    })
}

function printVav(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printZain(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 2)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
        builder.move(up, 2)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
}

function printChet(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printTet(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    builder.place(block)
    builder.move(left, 1)
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printYod(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 3)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
}

function printKaf(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
}

function printFinalKaf(block: Block, up: SixDirection, down: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(down, 2)
        builder.mark()
        builder.move(up, 6)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
}

function printLamed(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 1)
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
}

function printMem(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 5
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
}

function printFinalMem(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printNoon(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    builder.place(block)
    builder.move(left, 1)
}

function printFinalNoon(block: Block, up: SixDirection, down: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(down, 2)
        builder.mark()
        builder.move(up, 6)
        builder.fill(block)
    })
}

function printSamech(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 1)
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printAin(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    builder.place(block)
    builder.move(left, 1)
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
    //  line 5
    builder.place(block)
    builder.move(left, 1)
}

function printPeh(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
}

function printTsadi(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 3)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
}

function printFinalTsadi(block: Block, up: SixDirection, down: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 3)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(down, 2)
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 2)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.move(up, 3)
        builder.place(block)
        builder.move(up, 1)
        builder.place(block)
    })
}

function printKof(block: Block, up: SixDirection, down: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.move(up, 1)
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.move(down, 2)
        builder.mark()
        builder.move(up, 3)
        builder.fill(block)
        builder.move(up, 3)
        builder.place(block)
    })
}

function printResh(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2 + 3 + 4
    for (let i = 0; i < 3; i++) {
        lineWrapper(left, function() {
            builder.move(up, 4)
            builder.place(block)
        })
    }
}

function printShin(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    builder.place(block)
    builder.move(left, 1)
    //  line 3
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.mark()
        builder.move(up, 2)
        builder.fill(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.place(block)
        builder.move(up, 2)
        builder.place(block)
    })
    //  line 5
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
}

function printTav(block: Block, up: SixDirection, left: SixDirection) {
    //  line 1
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 2
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 3
    lineWrapper(left, function() {
        builder.move(up, 4)
        builder.place(block)
    })
    //  line 4
    lineWrapper(left, function() {
        builder.mark()
        builder.move(up, 4)
        builder.fill(block)
    })
    //  line 5
    builder.place(block)
    builder.move(left, 1)
}

//% emitAsConstant
enum TwoOrientation {
    //% block="Vertical"
    Vertical,
    //% block="Horizontal"
    Horizontal
}

/**
 * Hebrew category
 */
//% weight=100 color=#0fbc11 icon="\uf031"
namespace hebrew {

    /**
     * Function will print a hebrew text with the specified block, position and orientation
     * @param text The hebrew text; eg: שלום
     * @param block The block to print with
     * @param position The position to start from
     * @param direction The direction of the text; eg: WEST
     * @param orientation Vertical or Horizontal orientation - Standing up or laying down; eg: VERTICAL
     */
    //% blockId=print_hebrew
    //% block="print $text|of $block|at $position=minecraftCreatePosition|along $direction|with orientation $orientation"
    //% blockExternalInputs=1
    export function printHebrew(
        text: string,
        block: Block,
        position: Position,
        direction: CompassDirection,
        orientation: TwoOrientation
    ) {
        let up, down, left

        switch (direction) {
            case EAST: 
                up = BACK
                down = FORWARD
                left = RIGHT
                break
            case WEST:
                up = FORWARD
                down = BACK
                left = LEFT
                break
            case SOUTH:
                up = LEFT
                down = RIGHT
                left = BACK
                break
            case NORTH:
                up = RIGHT
                down = LEFT
                left = FORWARD
                break
        }
        
        if (orientation == TwoOrientation.Vertical) {
            up = UP
            down = DOWN
        }

        builder.pushState()
        builder.teleportTo(position)
        for (let c of text) {
            switch (c) {
                case 'א': printAleph(block, up, left); break;
                case 'ב': printBet(block, up, left); break;
                case 'ג': printGimel(block, up, left); break;
                case 'ד': printDalet(block, up, left); break;
                case 'ה': printHe(block, up, left); break;
                case 'ו': printVav(block, up, left); break;
                case 'ז': printZain(block, up, left); break;
                case 'ח': printChet(block, up, left); break;
                case 'ט': printTet(block, up, left); break;
                case 'י': printYod(block, up, left); break;
                case 'כ': printKaf(block, up, left); break;
                case 'ך': printFinalKaf(block, up, down, left); break;
                case 'ל': printLamed(block, up, left); break;
                case 'מ': printMem(block, up, left); break;
                case 'ם': printFinalMem(block, up, left); break;
                case 'נ': printNoon(block, up, left); break;
                case 'ן': printFinalNoon(block, up, down, left); break;
                case 'ס': printSamech(block, up, left); break;
                case 'ע': printAin(block, up, left); break;
                case 'פ': printPeh(block, up, left); break;
                case 'צ': printTsadi(block, up, left); break;
                case 'ץ': printFinalTsadi(block, up, down, left); break;
                case 'ק': printKof(block, up, down, left); break;
                case 'ר': printResh(block, up, left); break;
                case 'ש': printShin(block, up, left); break;
                case 'ת': printTav(block, up, left); break;
                case ' ': builder.move(left, 4); break;
                default: continue
            }
            
            builder.move(left, 2)
        }
        builder.popState()
    }
}
