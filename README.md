# tithi.js (3.69 KB)
Tithi.js is a compact  bikram sambat date converter (nepali date converter, AD to BS &amp; vice-versa) with less than 4KB footprint and with a range of BS 1970 - 2100 and AD 1913 - 2043. It has a lowest footprint of less than 4KB which can be compressed even further and optimized by your contribution. Years of data is compressed to binary which makes it suitable for use in your application like Date picker, Calendar, BSDate validation or Node js or any Web applications.

## Features:
- Lowest footprint : Less than 4KB in Size (3.69 After minification)
- No Dependencies : It is purely written in vanilla Javascript only without jquery or any other javascript api. 
- Range 1970 BS - 2100BS & 1913 AD - 2043 AD.
- Standard date format is available in string or JSON format. Can easily be modified according to need.
- Data compressed to Binary.
- Range can be extended.
- Hackable : Readable codes
- Suitable for heavy date convertion like date column in a table etc.

## Minification:
- Minify the code from https://jscompress.com/ or any other tools like minifyjs etc.

## How to use:
### In Web application
1) Download the tithi.min.js or tithi.js
2) include below code in <head> element of your web application
  <script src="path_to_javascript/tithi.min.js"></script>
3) Call required function like toBs(new Date), toAd(d,m,y) etc.

or,
### In nodejs application
1) Download the tithi.min.js
2) Run code in your nodejs app.

Example:
    > node tithi.min.js
    ---
     output: 
     30 Baisakh, 2077

# ENJOY CODING ;) 
