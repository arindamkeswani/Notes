<details>

<summary>

# Important Formulas

</summary>


<details>

<summary>

## 1.  SUM()

</summary>


Allows us to add values in a range

![](20220606105510.png)  

</details>

---

<details>

<summary>

## 2. SUMIF(), SUMIFS()

</summary>

Add values in a range based on criteria

![](20220606105701.png)  

Add the numbers in the given range if they are greater than 10

![](20220606105841.png)  

---

Observe the following data:

![](20220606151654.png)  

For this data, we want a visit summary as follows:

![](20220606151803.png)  

We use SUMIFS() for this as we are dealing with more than one conditions:

![](20220606152126.png)  

`sum_range` : The values which we wish to add based on conditions.

`criterion_range1` : The range that the first condition will be tested on.

`criterion1` : The value on which `criterion_range1` will be tested.

![](20220606152434.png)  



</details>

---
<details>

<summary>

## 3. CONCATENATE(), JOIN(), TEXTJOIN()

</summary>

These are used to join strings/text together.

![](20220606110142.png)  

---

In Join(), we specify the delimiter first, which will be used to separate each cell's string in the specified range.

![](20220606110445.png)  

So the formula ![](20220606110636.png)   will produce the result:

![](20220606110659.png)  

---

Textjoin(), like Join() takes the delimiter first, but we also have to specify whether we would like to skip empty cells or not.

![](20220606110834.png)  

![](20220606110916.png)  

</details>

---
<details>

<summary>

## 4. COUNT()

</summary>


To check the number of numeric values in a range. E.g. in a column, we can use COUNT() to check how many numeric values have been entered.

![](20220606111623.png)  

Output is 4


![](20220606111717.png)  

Output is 0 as the values are not numeric

</details>

---

<details>

<summary>

## 5. COUNTA()

</summary>

Count All.

It will consider all values, not just numeric when returning the final count.

![](20220606112026.png)  



</details>

---

<details>
<summary>

## 6. COUNTIF()

</summary>

Count the values in the given range if they fit the criteria.

![](20220606112557.png)  

E.g. use case: To see how many students have scored above a threshold.

---

Similar to SUMIFS(), COUNTIFS() is used to count cells based on multiple conditions/criteria.

![](20220606152716.png)  

For the following data:

![](20220606152856.png)  

Objective : To find out the number of employees with an MBA specialization in finance, and have completed at least five projects.

Name the ranges for convenience:

![](20220606153156.png)  


![](20220606153454.png)  

Output: `2`


</details>

---

<details>

<summary>

## 7. AVERAGE()

</summary>

Gives the average of the numeric values in the given range

![](20220606113049.png)  


</details>


---

<details>

<summary>

## 8. TODAY()

</summary>

Gives today's date.

![](20220606113339.png)  

</details>

---

<details>

<summary>

## 9. DATE()

</summary>

It is advisable to use the DATE() function to manage dates

![](20220606113618.png)  

---

In F9 and F12 we have the dates for a new test and an old test defined using TODAY() and DATE() functions respectively:

![](20220606113815.png)  

To get the difference between the two dates:

![](20220606113930.png)  



</details>


---

<details>

<summary>

## 10. VLOOKUP()

</summary>

It stands for Vertical Lookup.

It searches for a value in the first column of the range.


![](20220606114210.png)  

`search_key` is the value that we wish to look for (in the first column)

`index` is the column in our range, the value of which is to be retrieved (1-indexed).

![](20220606114637.png)  


</details>

---

<details>

<summary>

## 11. SPARKLINE()

</summary>

Gives a mini-chart linked to the cells

![](20220606115405.png)  

Output (for each row):

![](20220606115430.png)  


</details>

---

<details>

<summary>

## 12. GOOGLETRANSLATE()

</summary>

Take a string value from a specified cell, translates it, returns the value.

Languages can be specified using language codes.

![](20220606144957.png)  

Output:
![](20220606145024.png)  

Like other formulas, this can be dragged and adjusted to other cells to maintain uniformity in the same row/column.



</details>


---

<details>

<summary>

## 13. CHAR()

</summary>

Used to get unicode characters.

E.g.: To get a bullet point - 

![](20220606145337.png)  

---

![](20220606145517.png)  

Output:

![](20220606145534.png)  




</details>

---

<details>

<summary>

## 14. UNIQUE()

</summary>

In a range, this function returns all the unique values and discards all the duplicates.

![](20220606150115.png)  

Output:

![](20220606150145.png)  

</details>

---

<details>

<summary>

## 15. RANDBETWEEN()

</summary>

Takes the lower and upper limit as parameters and returns a random number between them (both included).

![](20220606150331.png)  

</details>

---

<details>

<summary>

## 16. IMPORTRANGE()

</summary>

Used to pool data from other google sheets to current google sheet

Steps to import data:

1. Copy the URL of the sheet from which we wish to copy data

2. 

![](20220606154102.png)  

Note: If we don't mention the sheet from which we want to import data, it will be retrieved from the first sheet by default.

![](20220606154240.png)  

3. Give access if necessary.

![](20220606154310.png)  

To get all data, remove the number from the end range specification.

![](20220606154453.png)  

---

To show data of multiple sheets, write the 2 formulas as follows:

![](20220606155036.png)  

Note: We are hard-coding the ranges. We should use queries to prevent extra empty spaces.

![](20220606155412.png)  

---

To create a dropdown so that we can view sheets as we want:

![](20220606155738.png)  

We can then use dynamic formulas based on this dropdown to show the relevant sheet.

---


</details>

---

</details>



<details>

<summary>


# Custom Functions

</summary>

![](20220606173824.png)  

Write your custom function script

![](20220606172143.png)  

Use it in the sheet

![](20220606172220.png)  

But it will not be showed as a suggested function yet.
To make auto-complete recognize it, add documentation as follows:

![](20220606172629.png)  

It is possible to add multiple functions in the same script as follows:

![](20220606173901.png)  


We can also define the role of each parameter as follows:

---

In case of ranges, arrays are passed as parameters (1-D or 2-D) which are treated accordingly.

They can be received in the function using rest operator `fn(...args)`

</details>