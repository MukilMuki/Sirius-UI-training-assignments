function objectShapes(id, shape, side, area, perimeter, sideFormula, areaFormula, perimeterFormula) {   //Shapes Object
    this.id = id;
    this.shape = shape;
    this.side = side;
    this.area = area;
    this.perimeter = perimeter;
    this.sideFormula = sideFormula;
    this.areaFormula = areaFormula;
    this.perimeterFormula = perimeterFormula;
}

const circle = new objectShapes('1', 'Circle', 'RADIUS', 'AREA', 'PERIMETER', 'r', '&#960r²','2&#960r');  //Circle instance of the shape object
const triangle = new objectShapes('2', 'Triangle', 'SIDE', 'AREA', 'PERIMETER', 's', '0.433 * s * s','3 * s');   //Triangle instance of the shape object
const square = new objectShapes('3', 'Square', 'SIDE', 'AREA', 'PERIMETER', 's', 's * s', '4 * s');            //Square instance of the shape object

var currentId = "";         //Variable to store Id of the selected shape
const showTick = (event) => {     //1st Page
    currentId = event.target.id;    //gets the Id of the object 
    document.getElementById('next-button').style.display = 'block';
    const circleTick = document.getElementById('circle-tick');
    const triangleTick = document.getElementById('triangle-tick');
    const squareTick = document.getElementById('square-tick');
    
    if (currentId == "circle-selected") {       //When Circle is selected
        circleTick.style.display = 'block';
        triangleTick.style.display = 'none';
        squareTick.style.display = 'none';
    }
    if (currentId == "triangle-selected") {     //When Triangle is selected
        circleTick.style.display = 'none';
        triangleTick.style.display = 'block';
        squareTick.style.display = 'none';
    }
    if (currentId == "square-selected") {       //When Square is selected
        circleTick.style.display = 'none';
        triangleTick.style.display = 'none';
        squareTick.style.display = 'block';
    }
}

const dimensionInput = () => {      //2nd Page
    const inputSize = document.getElementById('dimension__entry');
    if (currentId == "circle-selected") {      //Displays corresponding shape's dimensions for user to enter
        inputSize.innerHTML = '2. Enter Radius';
    }
    if (currentId == "triangle-selected") {
        inputSize.innerHTML = '2. Enter Side(Base and Height)';
    }
    if (currentId == "square-selected") {
        inputSize.innerHTML = '2. Enter Side';
    }
    document.getElementById('shape-dimensions').style.display = 'block';
    document.getElementById('shape-choosing').style.visibility = "hidden";
}

const calculationResult = () => {       //3rd Page
    document.getElementById('shape-dimensions').style.display = 'none';
    document.getElementById('calculate-button').style.visibility = "hidden";
    document.getElementById('calculation-result').style.display = 'block';

    const shapeDiagram= document.getElementById('shape__diagram');
    const shapeType = document.getElementById('shape__type');
    const shapeSide = document.getElementById('shape__side')
    const shapeArea = document.getElementById('shape__area');
    const shapePerimeter = document.getElementById('shape__perimeter');
    const sideFormula = document.getElementById('side__formula');
    const areaFormula = document.getElementById('area__formula');
    const perimeterFormula = document.getElementById('perimeter__formula');
    const sideValue = document.getElementById('side__value');
    const areaValue = document.getElementById('area__value');
    const perimeterValue = document.getElementById('perimeter__value');
    let dimension = document.getElementById('dimension__value').value;


    const myShape = (shape) => {        //Function fired for inserting the current shape's properties
        shapeType.innerHTML = shape.shape;
        shapeSide.innerHTML = shape.side;
        shapeArea.innerHTML = shape.area;
        shapePerimeter.innerHTML = shape.perimeter;
        sideFormula.innerHTML = shape.sideFormula;
        areaFormula.innerHTML = shape.areaFormula;
        perimeterFormula.innerHTML = shape.perimeterFormula;
    }

    if (currentId == "circle-selected") {       //Calculates current shape's area,perimeter and radius
        shapeDiagram.setAttribute('class','re-circle');
        myShape(circle);
        sideValue.innerHTML = dimension + ' cm';
        areaValue.innerHTML = Math.round(3.14 * dimension * dimension) + ' sq cm';
        perimeterValue.innerHTML = Math.round(2 * 3.14 * dimension) + ' cm';
    }
    else if (currentId == "triangle-selected") {
        shapeDiagram.setAttribute('class','re-triangle');
        myShape(triangle);
        sideValue.innerHTML = dimension + ' cm';
        areaValue.innerHTML = Math.round(0.433 * dimension * dimension) + ' sq cm';
        perimeterValue.innerHTML = 3 * dimension + ' cm';
    }

    else if (currentId = "square-selected") {
        shapeDiagram.setAttribute('class','re-square');
        myShape(square);
        sideValue.innerHTML = dimension + ' cm';
        areaValue.innerHTML = dimension * dimension + ' sq cm';
        perimeterValue.innerHTML = 4 * dimension + ' cm';
    }

}



