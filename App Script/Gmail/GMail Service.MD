<details>

<summary>

# Introduction

</summary>

To give the script access to your emails:

![](20220603112413.png)  


</details>

___

<details>

<summary>

# Automatically Send Emails Using Code

</summary>

The parent class is `GmailApp`

To send an email:

![](20220603112841.png)  

E.g.:

![](20220603112953.png)  

For multiple recepients:

![](20220603113054.png)  

Some available parameters for the optional arguments are:

![](20220603113508.png)  

Usage:

![](20220603113819.png)  

Note: The `name` key will change the displayed name of the sender

</details>

___

<details>

<summary>

# Get Threads

</summary>

What are threads?

Each row in the below image is a thread, consisting of more or more mails:

![](20220603120316.png)  

A thread with multiple mails is as follows:

![](20220603120410.png)  

---

![](20220603120724.png)  

Each function from lines 3 to 8 returns a Gmail thread in the form of an array

Output:

![](20220603120846.png)  

There are optional parameters that we can work with to get a sub-section of emails. If we wish to get first 2 mails:

![](20220603121225.png)  


</details>

---

<details>

<summary>

# Getting Data From Emails

</summary>

To get messages from the first thread from our inbox:

![](20220603123231.png)  

Output:

![](20220603123419.png)  

To get the details of the first mail of the 3rd (latest) thread:

![](20220603124214.png)  

Output:

![](20220603124335.png)  

</details>

---

<details>

<summary>

# Scanning Your Inbox

</summary>

To search for mails containing the keyword "YouTube" (similar to how we use the search functionality on Gmail)

![](20220603125540.png)  

Output:

![](20220603125633.png)

This will get mails containing "YouTube" anywhere in the mail, including the attachments. So it is very generalized.

To implement more advanced search functionalities as follows:

![](20220603130538.png)  

Do the following:

![](20220603130700.png)  

Output:

![](20220603130818.png)  

---

To get a sub-section of the mails:

![](20220603131122.png)  

This will get the first mail sent by Youtube. 

![](20220603131253.png)  

Similarly, to get the first 2 mails, we can put `("from Youtube", 0, 2)` instead.


</details>

---

<details>

<summary>

# Automatically Reply To & Forward Emails

</summary>

There are 2 ways to reply to a mail:
1. Reply to the thread itself (i.e. replying to the last message)
2. Reply to a specific mail in the thread


The following snippet will reply to the 2nd thread from a certain specified person:

![](20220603132453.png)  

Note: This will only reply to the sender, and not everyone in the thread.

To reply to everyone in the thread (just like the "Reply All") option, do the following:

![](20220603132800.png)  

---

Forwarding mails:

Say we wish to forward the last mail of the 2nd thread from a certain sender, we will do the following:

![](20220603133019.png)

</details>

___

<details>

<summary>

# Acknowledging Emails

</summary>

Objective: Perform operations such as marking the mails as Read, Unread, Important, Unimportant, and starring them or un-starring them.

In the following snippet, all the mails from the last 24 hours will be marked as Unread:

![](20220603141250.png)  

To mark them as read, simply change the method that is used:

![](20220603141520.png)  

Similarly to mark Important or Unimportant:

![](20220603141616.png)  

![](20220603141638.png)  

To Star and Un-Star, we will have to target individual messages.

To star the first message of each thread in the last 24 hours:

![](20220603141905.png)  

Same format for Un-Starring:



![](20220603141944.png)  

</details>
