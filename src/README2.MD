## CHALLENGES:
1. Understanding when is better implement flipped state for each card (on card level or app level).
Decided to implement on app by adding additional promp to the card and not add to card object.
In this case, we avoid multi rendering of cards each time when single card is flipped.
2. Implemeting flipping effect with CSS for card on click
3. Implememnting local storage (needed to clear cashe, otherwise was giving an error can not parse NaN)


## Tasks to finish:
1. DONE: Add flatiron icons
2. DONE: Change moves to be calculated not on each click, but on every pair
3. DONE: Update Footer
4. DONE: Add function to select 8 random cards from array of cards making game different each time 
5. DONE: Add functionality to update icon on button on hover 
6. DONE: Add stack icons, links (except freepik - react icon -not working)
7. Add title with outlines
8. DONE: Add best score with memory for each user
9. Add credits for each card and for confetti
10. Check accessibility by using WAVE
11. Testing
    

## BUGS:
1. Sometimes when loading game, fireworks pop up, but they should not until all pairs are found
2. Background on the top and at the bottow are white when scrolling in Google Chrome
3. Not responsive in Safari on big screen
