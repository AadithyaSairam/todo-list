# TodoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Tests to be executed

Add funtion test, check valid funciotnality of adding todo list item 
Remove funtion test, check valid funciotnality of removing todo list item 
Edit funtion test, check valid funciotnality of editting todo list item
Save funtion test, check valid funciotnality of saving todo list item 

Test filtering, check that filters are properly applied
Test that visibly the correct items are displayed

## Bug Found

Title: Same name causes only first item to be effects
Description: The same name in different items will cause only the first item to be updated to done or not done
Steps: Create 2 items of the same name, check off the 2nd item in the list
Results: The first item is checked
Expected Result: The second item is checked
