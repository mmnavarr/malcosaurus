---
id: session_vs_local_storage
title: Session vs. Local Storage
---

The `localStorage` and `sessionStorage` are objects that extend `Storage` and are part of the web storage API found ini modern browsers. They are two great tools for saving key/value pairs locally. Using `localStorage` and `sessionStorage` for storage is an alternative to using cookies and there are some advantages. Data for both session and local storage is only saved locally  and can’t be read by the server, which eliminates the security issue that cookies present. Since data is stored locally, it is near-instantaneous to fetch data from the browser, whereas the data stored remotely takes time to make its way from a server to your computer.

Local Storage
-  Data is persisted until explicitly deleted. Changes made are saved and available for all current and future visits to the site.
- Storage limit is larger than session storage and cookies (not discussed here)

Session Storage
- The `sessionStorage` object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- Data is never transferred to the server.
- Storage limit is larger than a cookie (at least 5MB).

Both are supported in all modern browsers so you can use it today without an issue. Cookies are still useful, especially when it comes to authentication, but there are times when using localStorage or sessionStorage may be a better alternative.

## Storage Sizes (Desktop)
These are the common browsers and the available storage space for each:
| Browser   | Local Storage   | Session Storage   |
| --------- | --------------- | ----------------- |
| Chrome    | 10MB            | 10MB              |
| Safari    | 5MB             | Unlimited         |
| Firefox   | 10MB            | 10MB              |
| Edge      | 10MB            | 10MB              |

## Usage
It's important to note that both session and local storage store key/value pairs where both can only be of type `string`. If we specify any other type, like a `number`, or an `object`, it will automatically gets converted to a `string`.

### Get, Set & Update
You can create entries for the `localStorage` object by using the `setItem()` method. The `setItem()` method takes two arguments, the key and corresponding value:

```javascript
let key = 'theme';
localStorage.setItem(key, 'DARK_THEME');
```
To read entries, use the getItem() method. The getItem() method takes one argument which must be the key. This function will return the corresponding value as a string:

```javascript
let value = localStorage.getItem(key);
```

Updating an entry is done with the `setItem()` method as well. The key argument would then be the existing key of the value that is to be updated.

```javascript
localStorage.setItem(key, 'LIGHT_THEME');
```

Now, the localStorage value for key is `LIGHT_THEME` instead of `DARK_THEME`.

### Delete & Clear
You can delete an entry with the `removeItem()` method. The `removeItem()` method takes one argument which will be a key of the localStorage object:

```javascript
localStorage.removeItem(key);
```

To clear all items in localStorage use the `clear()` method:

```javascript
localStorage.clear();
```