# Interview Question Bank
1. [Open ended question](#open-ended-qustions)
2. [Web question](#web-questions)
3. [CSS question](#css-questions)
4. [Javascript question](#javascript-question)

### Open ended qustions
### 1. What are some new things happening in the web?
    => Because this era is full of building startup which are growing very rapidly. Due to which people are excited to join the technology and build a career in it. 
    Apart from this in every 60 seconds: 
        - 200 million emails are sent,
        - 70 million messages are sent on facebook and whatsapp,
        - 500 hours of content is released on youtube,
        - 200,000 thousand people are tweeting,
        - People are scrolling through their phones.

    So, overall technology is booming in the web.

### 2. Explain a project that you have built?
    => After every 6 weeks unit, we are given a task to clone a website. So, after knowing about the project and respective teams we gathered right after 15 min of presentation meet of construct week.

    We went through the website that how we are gonna build the website, every member got their task to collaborate in the project. The very first thing I did is made a basic structure of code that every team member needed and pushed to github, and every team member got started with cloning the repo. And the very next day I waked up and got started making the project. We also had a daily-standup that if any team-member is facing issue and the progress of the project. 

    We faced many challenges in the path to build the project, also we got many issues when merging the code. But as a team we handled every issue make sure that the project will be completed on time.

    The result came very fruitful that we were ready with the project, which is responsive, good looking website.

### 3. Whats something exciting that you have built?
    => The sudoku is most exciting thing I have build just after getting understanding of DSA, I always wondered about making games application that how things happens. And sudoku was the most brain using game, so I have made use of backtracking concepts and build the first game containing all the functionalities of a normal sudoku. You can solve a puzzle, undoing, redoing, checking solution, auto solve and reseting the puzzle.
    
### 4. What are you most excited about?
    => I am excited about the world of technology where everything is built upon codes that developer writes. Buy something wonders me most is how a code can build such a application and that feeling make me excited about technology.
### 5. Why do coding standards matter? What are some patterns you follow?
    => Coding standards matter a lot when it comes to writing code, because using some simple standard makes your code easy to read, debug and also useful when it is actually used. It reduces risk of project failures.

    Some patterns I follow are: 
        - Naming conventions for variable's, functions and classes. Should describe the reason of use,
        - Limiting global variables's and making use of const and let accordingly,
        - Indentation which increases readability of code,
        - Avoid use of if-else instead use functions,
        - functions should be small.

### 6. How do you go about managing responsive websites?
    => Points for making a website responsive: 
        - Observer the foundation of website,
        - writing layout for foundation,
        - then using proper css styling.

### 7. What do you care about the most when you write software?
    => Things I care about:
        - 1
        - Making use of data structure & algorithms.

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
    => Any thing which comes between /* and */ is a CSS comment, it can be mutliline as well.

### 2. Why do we use pseudo-class?
    => Let's take an example, if we want to add some style to the first paragraph in a article like bold or color(yellow) we either use a class in that element. But on latter if somebody adds a new paragraph, then we have to add that class to that paragraph. Which can be tricky to do.
    So, here comes the pseudo class :first-child. There are many more example like adding a line without using another tag(::after, ::before) pseudo classes.

### 3. How is specificity applied?
    => Specificity is the weight applied to CSS declaration, when multideclaration have same weight then the last declaration found in CSS is applied. 
    The specificity goes like   : inline-style  > id  > class  > tag/element  > universal tag

### 4. What method allows an element to be moved from its current position?
    => The translate() method moves the element from its current position with respect to x-axis, y-axis and z-axis.

### 5. what properties does flex model have?
    => flex: flex-grow flex-shrink flex-basis;

### 6. What is the difference between flex and grids?
    => Flex : 1-dimensional layouts | content-first |
    => Grid : 2-dimensional layouts | layout-first  |

### 7. Give an example where we have to use grids and where you have to use flexbox?
    => Flex : small-scale layout    | performance issue
    => Grid : larger-scale layout   | fast performance

### 8. Give an example where you cannot use flexbox, and you can only use grids?
    => Like in e-commerce websites for showing product, we should use grid instead of flexbox.

### 9. What are combinators? give examples of how you can use them?
    => Combinator combines the other selector to make a useful relationship. 
       i.e. child-selector, descendant-selector, adjacent-sibling, general-sibling(all after).

### 10. What does object-fit do?
    => It fit's the element in the container like a image or video.
### 11. What does rotate do?
    => It rotates the element according to axis.

### 12. What rule can be used to define animations?
    => @keyframes rule defines the animations. 

### 13. When working with attribute selectors, how can you select elements which contain a particular attribute value?
    => Attribute selector : [attrname="value"].

### 14. What does @media do?
    => @media is used to apply different styles on different screen-sizes.

### 15. What can be used to override properties of an element?
    => To override properties of an element !important can be used.

### 16. How can you select every alternate elements in a list of elements using css?
    => The :nth-child() or :nth-of-type() pseudo class can be used to select alternate element.

### 17. What is the ranking of selectors with respect to specificity
    => Inline-style     : 1000
    => Ids              :  100
    => class            :   10
    => tag              :    1
    => universal        :    0

### 18. how can we apply same styles to multiple selectors?
    => By using comma(,) we can apply same style to mutiple selectors.

### 19. What are the differences between relative and absolute in CSS?
    => Relative position    : adjust according to original position
    => Absolute position    : adjust according to parent position

### Javascript question
### 1. What is hoisting?
    => Hoisting is referred to that the interpreter moves all the declaration of variables, functions and classes to the top of their scope.

    - Function, classes and variables declared using var are hoisted,
    - Let and const are also hoisted(but unlike var, they are not initialized with default value undefined), but if used before initialization will throw a :ReferenceError -> value is not defined.

### 2. What is scoping?
    => Scope is the environment in which code is executed aka execution context.

       Meaning to which variables and function the code has access to.

### 3. How are var, let const different?
    =>              var             |               let             |           const
        - Global or function scope. | Block scope.                  | Block scope.
        - can be re-declared.       | can not be re-declared.       | can not be re-declared.
        - can be re-assigned.       | can be re-assigned.           | can be re-assigned. 

### 4. What are the two main differences in arrow functions?
    => Main difference in arrow functions:
        - Arrow function don't have keyword: this, if accessed will taken from outside(parent).
        - Arrow function can't be called with keyword: new.
        - Arrow function don't have arguments, if accessed will give ReferenceError: arguments is not defined.

### 5. Does Call apply bind work for arrow functions?
    => Call, apply and bind is not suitable for arrow functions. Because they were designed for executing in different scopes, but arrow function use scope of parent.

### 6. What does call apply bind do?
    => They invokes a function in a specified context, in other word they tie up a function in a object(as it belongs to that object).

    There is a little difference between them: call and apply invokes immediatly, but bind can be used to invoke on latter time.

### 7. What are closures?
    => Closure means giving access to an outer function's scope from an inner functions. All functions in javascript are closures.

    When a function runs, a new lexical environment is created automatically to store local variables and parameters of call.

### 8. Write a program to debounce a search bar?
    => Debounce : limiting the rate of function calls.

### 9. Write a program to throttle a search bar?
    => Throttle : executing after every X milliseconds, only first event is executed immediately.

### 10. create a custom method for an array called myMap, use prototype chain to achieve this
    =>  const arr = [];
        arr.__proto__.myMap = function(arr, func) {    
            const mapArr = []; 
            for(let i=0; i<arr.length; i++) {        
                const result = func(arr[i], i, arr);        
                mapArr.push(result);    
            }    
            return mapArr;
        }
        arr.myMap([1,2,3,4,5], (item) => item * 5);
        // output: [5, 10, 15, 20, 25];
        
### 11. What is event bubbling?
    => When an event happens on an element, it first runs the handler on it, then on its parent, then all the way up on the ancestors.

    Almost all events bubble(the word is almost), means event 'focus' does not bubble which is an exception.

### 12. What is event loop?
    => The event loop concept is simple. There's a endless loop, where javascript engine waits for tasks, executes them and waits for more tasks.

    Algorithm for event loop: 
            1. while (tasks) {
                   executeThem();  // starting from the oldest task
               }
               // completed
               more tasks appearing, go to line 1.
            
### 13. Explain promises to a 5 year old, with simple examples
    => Let's assume there is a teacher and student. Now teacher told the student to complete the homework in one week of time and student promised the teacher that homework will be completed in the given deadline. 

    So, after one week if the homework is completed by student => then the promise made is resolved, else if homework is not completed then the promise made by student is broken(rejected).

    But in either case there is the responsibility of student to inform the teacher.

### 14. Write a function called sleep that will return a promise, if you do not provide a number to the function, then it will return an error and goto the catch block
    =>  const sleep = function(time) {
            return new Promise((resolve, reject) => {
                if(typeof(time)==='number') resolve(`success`);
                else  reject(`invalid argument, promise accepts only valid numbers`);
            });
        }1
        sleep(500)
            .then(res => console.log(`slept for ${res} milli seconds`))
            .then(err => console.log(err));
            
### 15. what does async await mean?
    => Async-await is the better way than using .then().catch(). The word async means that a promise will be returned, and await means waiting until the promise gets fulfilled or rejected.

### 16. What does the this keyword mean?
    => this keyword is referred to the object, which is executing that scope. And the value of this evaluated at run-time.

### 17. What are classes? what are getters and setters?
    => Classes are template for creating object, which contains properties and methods.
        getters => they help in getting/accessing the properties,
        setters => they help in changing/setting the values.

### 18. How do you declare private and static variables in classes
    => static   : using keyword: static before variable or function declaration,
       private  : using keyword: # with variable or function declaration.

### 19. Create a Calculator class, it should be able to add, reduce multiply and divide. it should have a value getter, and that should return final output. keep the history of changes made as well, and keep that private, and a user should be able to see previous changes made to the value
    =>  class Calculator {
            #history;
            constructor(a, b) {
                this.a = a;
                this.b = b;
                this.#history = [];
            }

            add() {
                this.#history.push('add');
                return this.a + this.b;
            }
            reduce() {
                this.#history.push('reduce');
                return this.a - this.b;
            }
            multiply() {
                this.#history.push('multiply');
                return this.a * this.b;
            }
            divide() {
                this.#history.push('divide');
                return this.a / this.b;
            }
            showHistory() {
                return this.#history;
            }
        }

### 20. What is currying?
    => Currying is a advanced technique of working with functions, it basically transforms the function calling from multiple argument passing to a sequence of function with single argument.

### 21. Write a program to flatten an array
    =>  const flatternArray = (arr) => {
            const ans = [];
            if (Array.isArray(arr)) {
                for (let x = 0; x < arr.length; x++) {
                ans.push(...flatternArray(arr[x]));
                }
                return ans;
            }
            return [arr];
        };
        console.log(flatternArray([1, [2, 3], [3], [[[5]], 6]]));