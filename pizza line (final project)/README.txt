SPA application "Pizza Line" with a fully adaptive layout for any screen width is designed for 
pizzeria. Application is created using HTML, CSS and vanilla JavaScript. Semantics has also been 
applied in layout, flex and grid technologies have been used. The application includes the following 
navigation sections: 

-Home 
-About Us
-Menu
-Ordering
-Contact 

Each part includes several sections with posted information and links to the corresponding 
directories of the application. The MENU page shows the range of selling products. The entire list is 
placed in JSON file, which is easily editable. The data is retrieved using the fetch request method at 
the corresponding URL. The Ordering page shows the customer's shopping cart to place order. By adding the 
relevant products to the cart, the buyer has the opportunity to view his order by clicking on the cart icon. 
The order window appears, the effect of the appearance and hiding of this option is created using CSS and JS. 
The buyer has an ability to add and remove items from shopping cart by clicking on the corresponding 
+ or - buttons. After placing an order, the buyer confirms it by filling out the appropriate contact form 
which is placed in the Popup window. If the cart is empty a corresponding message appears.
All data about customer and his purchases is saved in localStorage.

The layout has several breakpoints for different screen width. When the screen size is small the menu switches 
to a burger menu. 