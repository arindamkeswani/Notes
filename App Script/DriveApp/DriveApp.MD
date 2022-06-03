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