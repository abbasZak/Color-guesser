let AddEl = document.getElementById('start');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let text = document.getElementById('rgb');
let FullItems = [item1, item2, item3];
let Count = 0;

function start(){
    AddEl.innerText = 'Replay';
    let Prop = [
        {
            r: Math.floor(Math.random() * 250),
            g: Math.floor(Math.random() * 250),
            b: Math.floor(Math.random() * 250)
        },
    
        {
            r1: Math.floor(Math.random() * 250),
            g1: Math.floor(Math.random() * 250),
            b1:  Math.floor(Math.random() * 250)
        },
    
        {
            r2: Math.floor(Math.random() * 250),
            g2: Math.floor(Math.random() * 250),
            b2: Math.floor(Math.random() * 250)
        }
    ]
    
    let style1 = item1.style.background = `rgb(${Prop[0].r}, ${Prop[0].g}, ${Prop[0].b})`
    let style2 = item2.style.background = `rgb(${Prop[1].r1}, ${Prop[1].g1}, ${Prop[1].b1})`
    let style3 = item3.style.background = `rgb(${Prop[2].r2}, ${Prop[2].g2}, ${Prop[2].b2})`
    

    let Styles = [style1, style2, style3];

    let Randomrgb = Math.floor(Math.random() * Prop.length);
    
    let values = Styles[Randomrgb];
    
    text.innerText = `${values}`

    text.style.color = 'black';
    
    FullItems.forEach(item=> {
        item.addEventListener('click', () => {
            Count++;
            let clickedColor = item.style.background;
            // console.log(values === clickedColor);

            if(values === clickedColor){
                text.innerText = "Winner!";
                text.style.color = 'green';
                item.removeAttribute("onclick");
            }

            else{
                text.innerText = "Looser";
                text.style.color = 'red';
            }

            if(Count === 1){
                item.removeEventListener();                
            }
        
        })
    })

}


console.log("Hello world")