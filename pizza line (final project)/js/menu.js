let productsContainer = document.querySelector('.food-container');
fetch('https://raw.githubusercontent.com/davserge/projects/main/project%20Pizza/menu.json')
.then(response => response.json())
.then(menu => {    
    let out =''; 
    menu.forEach(product => {
        out +=`
        <div class="col-md-6 menubox ${product.type}">    
            <div class="content box m-1">                
                <div class="menu-image">
                    <img src="${product.image}" alt="img">
                </div>
                <div class="cont-menu m-2">
                    <div class="header">                        
                        <span class="title">${product.name}</span>                        
                        <span class="price">${product.price} USD</span>
                    </div>                    
                    <div class="description m-3">
                        <p>${product.description}</p>
                    </div>
                </div>   
            </div>
        </div>      
        `;        
    })
    productsContainer.innerHTML = out;           
});   
    