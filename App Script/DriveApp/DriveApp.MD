<details>

<summary>

# Introduction

</summary>

To authorize your script to access your Drive, simply run a script with the DriveApp class:

![](20220603145427.png)  


</details>

---

<details>

<summary>

# Iterators

</summary>

While Arrays can be accessed completely and are allocated in their entirety, iterators are consumed one by one on demand i.e. only as necessary. This enables us to store a large collection of items. So we don't get all files in Google Drive at once, and instead of getting all files in an Array we get the files in an Iterable, and we use an Iterator to iterate through that.

To access a folder in our Drive:

![](20220603154125.png)  

Note: The return type of the `getFolders()` method is a FolderIterator. So indexing will not work on the returned value.

So to access the next folder in the sequence, we use `.next()` method, which returns a Folder, the properties of which can then be accessed

![](20220603154512.png)  


Output:

![](20220603154533.png)  

Iterators store states, so if we call this function again, it will give us the next folder

![](20220603155056.png)  

Output:

![](20220603155114.png)  


If we call the `.next()` function more times than the number of existent folders, it will throw an error.

To resolve this, we need to check whether there is another folder to be accessed or have we reached the end.

![](20220603155501.png)  

The output will be same as before.

In case we wish to terminate the iterations for now and want to continue them later, we can use a continuation token.

![](20220603155916.png)  



</details>

---

<details>

<summary>

# Folders

</summary>

To access the Root folder of Google Drive (and print its name):

![](20220603161541.png)  

Output:

![](20220603161621.png)  

But whenever we use `DriveApp` class, we start out from the root folder by default.

To get folders inside the Root folder (or any folder), we have 3 methods:

![](20220603161857.png)  

Notice where an iterator is being returned vs when a Folder is being returned.

Usage:

![](20220603163444.png)  

---

To create a folder called "Users" and to create a folder inside "Users" called "Profile Data", do the following:

![](20220603163708.png)  

Note: `createFolder` returns the folder that was just created, so to create another folder in this new folder, we can chain the two `createFolder` methods.

We can get all folders inside our Drive which have the same name (say "Example"), and then changing their name to something else as follows:

![](20220603164753.png)


</details>

---

<details>

<summary>

# Drive Access & Permissions

</summary>

When we create a file, say a Google Sheets spreadsheet, it is private (only accessible by us) by default.

If a different account had the URL of our spreadsheet and tried to access it, they would see a message similar to the one below:

![](20220604132523.png)  

To grant access to a user via code, we have the following methods based on different access levels:

![](20220604132714.png)  

E.g.: Giving Editor access to an ID

Even here, there are multiple ways of doing so

![](20220604143059.png)  

Using Email ID as a string, using User class as a parameter, or adding multiple users as the same time:


E.g.:
![](20220604142850.png)  

To get the list of Editors (or Viewers/Commenters w/ their respective functions) as an Array of Users:

![](20220604143734.png)  

The User class has the following methods:

![](20220604143836.png)  

To make the file un-shareable by other Editors (i.e. they can give access of the document to other people):

![](20220604144014.png)  

Similar to giving access to people, we can revoke it too:

![](20220604144224.png)  

To change general file access:

![](20220604144432.png)  

Similarly, for permissions:

![](20220604144526.png)  

So if someone wishes to enable everyone with the link to view the document:

![](20220604144700.png)  


</details>