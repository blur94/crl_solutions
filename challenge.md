# Challenge 

## Day 1 Challenge
1) Limit the total width of the .intro-content to about half of it's parent.
2) Stop the text from overflowing out the bottom at small screen widths

### Solution

#### Problem 1
Limiting the total width of the child container to about half was done by setting **.intro** class to a width of 50%
```css
.intro-content {
    width: 50%;
}
```

#### Problem 2
Stop the text from overflowing by not giving the height a fixed size. Hence, the original height of 300px was commented out.
