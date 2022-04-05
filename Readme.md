# Interview Question Bank
1. [Open ended question](#open-ended-qustions)
2. [Web question](#web-questions)
3. [CSS question](#css-questions)

### Open ended qustions
### 1. What are some new things happening in the web?
### 2. Explain a project that you have built?
### 3. Whats something exciting that you have built?
### 4. What are you most excited about?
### 5. Why do coding standards matter? What are some patterns you follow?
### 6. How do you go about managing responsive websites?
### 7. What do you care about the most when you write software?

### Web questions
### 1. What happens when we hit a url? What is DNS?
    => DNS - Domain Name System,
        1. We hit a url,
        2. Browser fetches the IP address via. DNS,
        3. Browser will establish a connection with server,
        4. Browser will send a request to server,
        5. Server will serve the information,
        6. Browser will render to the web page.

### 2. What is URL? Parts of URL?
    => URL - Uniform Resource Locater
        1. Protocol,
        2. Host name / Domain name,
        3. Path / Location,
        4. Arguments / Parameters,

### 3. What is Protocol? Types of Protocol?
    => A protocol is system of rule that defines how the data is exchanged between computers.
        1. HTTP  - for fetching resources such as HTML document(plain text),
        2. HTTPS - encrypted version of HTTP,
        3. TCP   - connect and exchange data streams,

### 4. Explain HTTP methods?
    => Request methods - GET, POST, PUT, PATCH, DELETE, etc.

### 5. Explain HTTP headers?
    => HTTP header are about passing additional information with an request or response.abs

### 6. HTTP response codes?
    1. Informational    : starts with 1xx
    2. Successfull      : starts with 2xx
    3. Redirectional    : starts with 3xx
    4. Client error     : starts with 4xx
    5. Server error     : starts with 5xx

### 7. Cache-Control HTTP response?
    => It holds instructions that control caching in browser and shared caches.

### 8. Polling & long polling?
    => Polling       : basically AJAX(Asynchronous Javascript And XML) using XmlHttpRequest
    => Long Polling  : AJAX, but server holds the request open until data is available then sends to the client. After that another request can be made and process goes repeated.

### 9. What are Web Sockets?
    => A object which creates and manages a connection to server, as well as sending and recieving data.

### 10. Difference between Web Sockets and HTTP?
    => HTTP        : Stateless - independent                    | Unidirectional
    => Web Sockets : Statefull - dependent (waits for response) | Bidirectional

### 11. What is CORS? Why do we need it?
    => CORS - Cross Origin Resource Sharing. Normally request made to other domain from one domain is not allowed, so to allowing server to indicate any origin other than its own browser should permit loading resource. To happen this we need CORS.

### 12. What does Access-Control-Allow-Origin header do?
    => It gives permission access to the domains to access other domain.

### 13. What is clickjacking? How do you fix it?
    => Clickjacking (interface-based attack) : Attacker's embed a malicious link to a legitimate page, hence privacy is compromised.

    It can be prevented using Content-Security-Policy(CSP) which adds a layer of security.

### 14. What are some performance metrics for your website?
    => Time to first byte   : time take to get very first byte of information,
       Page load time       : time taken to load content to web page, etc.
       
### 15. What is CDN? Why do we need them?
    => CDN - Content Delivery Networks. A group of servers spread out over many locations. 

    These server stores duplicate copies of data so that server can fulfill the request by sending through closest server to the respective-user.

    Uses - improves load time, handles high traffic, reduce bandwidth, secure application.

### 16. Client Side Renderring and Server Side Renderring?
    => Server side rendering    : dynamically displaying data as required.
    => Client side rendering    : modern framework & library have only root element in html and all the other is sent in js files, which renders the web page dynamically on client side.

### 17. What is Progressive Renderring?
    => Progressive rendering means loading the most important or needed code first.

### 18. Preloading and Prefetching resources?
    => Preloading   : loading something as soon as possible.
    => Prefetching  : fetching something to decrease the waiting time, when user actually want that content.

### 19. What are service workers?
    => Service workers  : background service that handles network requests. Ideal for dealing with offline situations and serving the data when user gets online.

### CSS questions
### 1. how to add comments on css?
### 2. Why do we use pseudo-class?
### 3. How is specificity applied?
### 4. What method allows an element to be moved from its current position?
### 5. what properties does flex model have?
### 6. What is the difference between flex and grids?
### 7. Give an example where we have to use grids and where you have to use flexbox?
### 8. Give an example where you cannot use flexbox, and you can only use grids?
### 9. What are combinators? give examples of how you can use them
### 10. What does object-fit do?
### 11. What does rotate do?
### 12. What rule can be used to define animations
### 13. When working with attribute selectors, how can you select elements which contain a particular attribute value?
### 14. What does @media do?
### 15. What can be used to override properties of an element
### 16. How can you select every alternate elements in a list of elements using css?
### 17. What is the ranking of selectors with respect to specificity
### 18. how can we apply same styles to multiple selectors?
### 19. how to add comments on css?
### 20. Why do we use pseudo-class?
### 21. How is specificity applied?
### 22. What method allows an element to be moved from its current position?
### 23. what properties does flex model have?
### 24. What are combinators? give examples of how you can use them
### 25. What does object-fit do?
### 26. What does rotate do?
### 27. What rule can be used to define animations
### 28. When working with attribute selectors, how can you select elements which contain a particular attribute value?
### 29. What does @media do?
### 30. What can be used to override properties of an element
### 31. How can you select every alternate elements in a list of elements using css?
### 32. What is the ranking of selectors with respect to specificity
### 33. how can we apply same styles to multiple selectors?
### 34. What are the differences between relative and absolute in CSS?