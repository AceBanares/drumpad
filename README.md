# Midterm Question

#### How would the following code be written using *ternary operator*?

```javascript
if(value = 100)
  console.log("Perfect!");
else if(value > 75)
  console.log("Passed!");
else
  console.log("Failed!");
```

1.     console.log(value = 100 : "Perfect" ? > 75 : "Passed" : "Failed");
1.     console.log(value ? = 100 : "Perfect" ? > 75 : "Passed" : "Failed");
1.     console.log(value = 100 ? "Perfect" : value > 75 ? "Passed" : "Failed");
1.     console.log(value ? 100 : "Perfect" ? value > 75 : "Passed" ? : "Failed");
