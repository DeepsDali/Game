# Memory game - Matching cards

![Project Gallery](./images/game.JPG "PG")

## Description

Game has 16 cards arranged face down in a grid layout. On reload and restart cards are shuffled randomly. Cards when clicked rotate 180 degree to reveal an image of a flower. Player clicks on 2 cards consecutively. If cards match they remain face up else turn face down again. Game ends when all cards are matched. A game stats panel displays `Time taken`, `Number of moves` and a message. A `Restart` button sets the time and the number of moves to 0 and flips cards back.

## Plan

\* Design mobile first and then make the site laptop responsive: Drew the user interface layout to visualize how the game stats panel would change position in different layouts.

\* Generate data for the game by creating an array of objects with 8 pairs of images. The object would have the image source link, the image name and to uniquely identify them an image id. Create function to shuffle the images.

\* User Interface: Grid layout to evenly place the cards and resize them for different layouts. CSS transform properties to flip the cards when clicked. Use transition and shadow properties to give smooth roll over movement to the cards.

\* Game feature functions:

> \* Function to randomize the cards.  
> \* Function to create cards with a front and back panel. Front panel would use images from the array.  
> \* CSS for the grid layout and card transitions.  
> \* Add event listners on cards.Check if cards match and depending on the result cards would flip back or stay facing up.  
> \* Create timer function and restart game functions.

## Building

\* Use sort function to randomize the sequence of images.

\* Dynamically generate cards by creating divs. Loop through the shuffled images to use on the front panel.Assign an image name attribute to identify individual cards.

\* Add event listener on cards to check if card is clicked and log every click as 1 move

\* Create a compare cards function which would add a new class of `Selected` to the cards when clicked. On selecting 2 cards the images would be compared to check if they match based on their name attribute. If they matched a css pointer property would make them untclickable and their selected class would be removed.

hey The class would be removed after 2 cards are selected.

## Debugging
