let title, poem, textbox, addBtn;

function setup() {
  noCanvas();
  
  title = createP("Emily Dickinson 3000");
  poem = createDiv('');
  textbox = createInput('').attribute('type', 'text').parent(controls);
  addBtn = createButton('Add Line').parent(controls);
  
  addBtn.mousePressed(() => {
    const userLine = textbox.value().trim();
    if(!userLine)return;
    textbox.value("");
    
    let row = createDiv().parent(poem);
    let textSpan = createSpan(userLine).parent(row)
    let slider = createSlider(0, 360, floor(random(360)), 1).parent(row);
    
    letapplyColor = () =>textSpan.style('color', 'hsl(${slider.value()}, 80%, 50%)');
    slide.input(apply);
    apply();
  })
}

function draw() {
  background(220);
}
