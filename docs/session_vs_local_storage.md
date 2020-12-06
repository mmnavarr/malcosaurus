---
id: solid_principles
title: S.O.L.I.D Principles
---

The `localStorage` and `sessionStorage` are objects that extend `Storage` and are part of the web storage API found ini modern browsers. They are two great tools for saving key/value pairs locally. Using `localStorage` and `sessionStorage` for storage is an alternative to using cookies and there are some advantages:

- The data is saved locally only and can’t be read by the server, which eliminates the security issue that cookies present.
- It allows for much more data to be saved (10mb for most browsers).

Data stored in `localStorage` persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

For `sessionStorage`, changes are only available per tab. Changes made are saved and available for the current page in that tab until it is closed. Once it is closed, the stored data is deleted.

Both are supported in all modern browsers, so you can use it today without an issue. Cookies are still useful, especially when it comes to authentication, but there are times when using localStorage or sessionStorage may be a better alternative.

## Storage Sizes
