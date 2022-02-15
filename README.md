# Training-Session
## JAVASCRIPT – Overview
### What is JavaScript?
    JavaScript is  scripting language used for web pages
### Client-Side JavaScript
    Script should be included in or referenced by an HTML document to interepret code by browser
### Advantages of JavaScript
    - Increased interactivity
    - Rich in interfaces
    - Fast
    - Less server side interaction
### Limitations of JavaScript
    - Client-side doesn't allow file reading or writing
    - Doesn't have multi processing
    - No used for networking
### JavaScript Development Tools
    - Microsoft Frontpage
    - Macromedia Dreamweaver MX
    - Macromedia Homesite 5
### Where is JavaScript Today?
    - 8th Edition is the current version of Javascript

## JAVASCRIPT – Variables
### JavaScript Data Types
    - Numeric
    - Boolean
    - String
### JavaScript Variables
    - JS variables declared by 'Var'
### JavaScript Variable Scope
    - Local Scope
    - Global Scope
    --> Added code example in body tag for locaal nd global variables
### JavaScript Variable Names
    - Names are case-sensitive in JS
    - Name cannot be start with number
    - Cannot use reserved words as a variable name
### JavaScript Reserved Words
    - There are many reserved words in JS mentioning few below:
        - enum
        - break
        - if
        - else
        - switch, etc...

## JAVASCRIPT – Operator
### What is an Operator?
    There are 6 types of operators in JS which are mentioned below
### -Arithmetic Operators
        1) + (Addition)
            Adds two operands
            Ex: A + B will give 30
        2) - (Subtraction)
            Subtracts the second operand from the first
            Ex: A - B will give -10
        3) * (Multiplication)
            Multiply both operands
            Ex: A * B will give 200
        4) / (Division)
            Divide the numerator by the denominator
            Ex: B / A will give 2
        5) % (Modulus)
            Outputs the remainder of an integer division
            Ex: B % A will give 0
        6) ++ (Increment)
            Increases an integer value by one
            Ex: A++ will give 11
        7) -- (Decrement)
            Decreases an integer value by one
            Ex: A-- will give 9
### -Comparison Operators
    1) = = (Equal)
        Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
        Ex: (A == B) is not true.
    2) != (Not Equal)
        Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
        Ex: (A != B) is true.
    3) > (Greater than)
        Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
        Ex: (A > B) is not true.
    4) < (Less than)
        Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
        Ex: (A < B) is true.
    5) >= (Greater than or Equal to)
        Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
        Ex: (A >= B) is not true.
    6) <= (Less than or Equal to)
        Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
        Ex: (A <= B) is true.
### -Logical Operators
    1) && (Logical AND)
        If both the operands are non-zero, then the condition becomes true.
        Ex: (A && B) is true.
    2)  || (Logical OR)
        If any of the two operands are non-zero, then the condition becomes true.
        Ex: (A || B) is true.
    3) ! (Logical NOT)
        Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
        Ex: ! (A && B) is false.
### -Bitwise Operators
    1) & (Bitwise AND)
        It performs a Boolean AND operation on each bit of its integer arguments.
        Ex: (A & B) is 2.
    2) | (BitWise OR)
        It performs a Boolean OR operation on each bit of its integer arguments.
        Ex: (A | B) is 3.
    3) ^ (Bitwise XOR)
        It performs a Boolean exclusive OR operation on each bit of its integer arguments. Exclusive OR means that either operand one is true or operand two is true, but not both.
        Ex: (A ^ B) is 1.
    4) ~ (Bitwise Not)
        It is a unary operator and operates by reversing all the bits in the operand.
        Ex: (~B) is -4.
    5) << (Left Shift)
        It moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros. Shifting a value left by one position is equivalent to multiplying it by 2, shifting two positions is equivalent to multiplying by 4, and so on.
        Ex: (A << 1) is 4.
    6) >> (Right Shift)
        Binary Right Shift Operator. The left operand’s value is moved right by the number of bits specified by the right operand.
        Ex: (A >> 1) is 1.
    7) >>> (Right shift with Zero)
        This operator is just like the >> operator, except that the bits shifted in on the left are always zero.
        Ex: (A >>> 1) is 1.
### -Assignment Operators
    1) = (Simple Assignment )
        Assigns values from the right side operand to the left side operand
        Ex: C = A + B will assign the value of A + B into C
    2) += (Add and Assignment)
        It adds the right operand to the left operand and assigns the result to the left operand.
        Ex: C += A is equivalent to C = C + A
    3) −= (Subtract and Assignment)
        It subtracts the right operand from the left operand and assigns the result to the left operand.
        Ex: C -= A is equivalent to C = C - A
    4) *= (Multiply and Assignment)
        It multiplies the right operand with the left operand and assigns the result to the left operand.
        Ex: C *= A is equivalent to C = C * A
    5) /= (Divide and Assignment)
        It divides the left operand with the right operand and assigns the result to the left operand.
        Ex: C /= A is equivalent to C = C / A
    6) %= (Modules and Assignment)
        It takes modulus using two operands and assigns the result to the left operand.
        Ex: C %= A is equivalent to C = C % A
### -Miscellaneous Operators
    1) ? : (Conditional )
        If Condition is true? Then value X : Otherwise value Y

## JAVASCRIPT – If-Else
### if Statement
    if statement ias the conditional statement used to make decisions
    syntax: if (expression) {
                Statement(s) to be executed if expression is true
            }
### if...else Statement
    its a the next form of control statement for having more controlled statements
    syntax: if (expression) {
                Statement(s) to be executed if expression is true
            } else {
                Statement(s) to be executed if expression is false
            }
### if...else if... Statement
    its a advanced form of if else statement used for multiple conditions
    syntax : if (expression 1) {
                Statement(s) to be executed if expression 1 is true
            } else if (expression 2) {
                Statement(s) to be executed if expression 2 is true
            } else if (expression 3) {
                Statement(s) to be executed if expression 3 is true
            } else {
                Statement(s) to be executed if no expression is true
            }

## JAVASCRIPT – Switch-Case
    Switch statement is to give an expression to evaluate and several different statements to execute based 
    on the value of the expression. The interpreter checks each case against the value of the expression until 
    a match is found. If nothing matches, a default condition will be used.
    syntax: switch (expression) {
                case condition 1: statement(s)
                break;
                case condition 2: statement(s)
                break;
                ...
                case condition n: statement(s)
                break;
                default: statement(s)
            }

## JAVASCRIPT – While Loop
### The while Loop
    while loop is to execute a statement or code block repeatedly as long as an expression is true. 
    Once the expression becomes false, the loop terminates.
    syntax: while (expression) {
                Statement(s) to be executed if expression is true
            }
### The do...while Loop
    The do...while loop is similar to the while loop except that the condition check happens at 
    the end of the loop. This means that the loop will always be executed at least once, even if the condition is false.
    syntax: do {
                Statement(s) to be executed;
            } while (expression);

## JAVASCRIPT – For Loop
### The for Loop
    The 'for' loop is the most compact form of looping. It includes the following three important parts −
    1) The loop initialization where we initialize our counter to a starting value. The initialization 
        statement is executed before the loop begins.
    2) The test statement which will test if a given condition is true or not. If the condition is true, 
        then the code given inside the loop will be executed, otherwise the control will come out of the loop.
    3) The iteration statement where you can increase or decrease your counter.
    syntax: for (initialization; test condition; iteration statement) {
                Statement(s) to be executed if test condition is true
            }
## JAVASCRIPT – For-in Loop
    The for...in loop is used to loop through an object's properties. As we have not discussed Objects yet, 
    you may not feel comfortable with this loop. But once you understand how objects behave in JavaScript, 
    you will find this loop very useful.
    syntax: for (variablename in object) {
                statement or block to execute
            }

## JAVASCRIPT – Loop Control
### The break Statement
    The break statement, which was briefly introduced with the switch statement, is used to exit a loop early, 
    breaking out of the enclosing curly braces.
    Ex: while (x < num) {
            if (x == anyNum) {
               break;   // breaks out of loop completely
            }
            x = x + 1;
            document.write( x + "<br />");
         }  
### The continue Statement
    The continue statement tells the interpreter to immediately start the next iteration of the loop and skip the 
    remaining code block. When a continue statement is encountered, the program flow moves to the loop check 
    expression immediately and if the condition remains true, then it starts the next iteration, otherwise the 
    control comes out of the loop.
    Ex: while (x < num) {
               x = x + 1;
               if (x == anyNum) {
                  continue;   // skip rest of the loop body
               }
               document.write( x + "<br />");
            } 
### Using Labels to Control the Flow
    Starting from JavaScript 1.2, a label can be used with break and continue to control the flow more precisely. 
    A label is simply an identifier followed by a colon (:) that is applied to a statement or a block of code. 
    We will see two different examples to understand how to use labels with break and continue.

    Note − Line breaks are not allowed between the ‘continue’ or ‘break’ statement and its label name. 
    Also, there should not be any other statement in between a label name and associated loop
    Ex: outerloop:        // This is the label name         
            for (var i = 0; i < 5; i++) {
               document.write("Outerloop: " + i + "<br />");
               innerloop:
               for (var j = 0; j < 5; j++) {
                  if (j > 3 ) break ;           // Quit the innermost loop
                  if (i == 2) break innerloop;  // Do the same thing
                  if (i == 4) break outerloop;  // Quit the outer loop
                  document.write("Innerloop: " + j + " <br />");
               }
            }

## JAVASCRIPT – Functions
### Function Definition
    Before we use a function, we need to define it. The most common way to define a function 
    in JavaScript is by using the function keyword, followed by a unique function name, 
    a list of parameters (that might be empty), and a statement block surrounded by curly braces.
    syntax: <script type = "text/javascript">
              function functionname(parameter-list) {
                 statements
              }
            </script>
### Calling a Function
    To invoke a function somewhere later in the script, you would simply need to write the name 
    of that function as shown in the following code
    Ex: 
        <html>
           <head>   
              <script type = "text/javascript">
                 function sayHello() {
                    document.write ("Hello there!");
                 }
              </script>
           </head>
           <body>
              <p>Click the following button to call the function</p>      
              <form>
                 <input type = "button" onclick = "sayHello()" value = "Say Hello"> //function calling
              </form>      
              <p>Use different text in write method and then try...</p>
           </body>
        </html>
### Function Parameters
    Variables declared in the function's round bracats are called function params
    Ex:
        function sayHello(name, age) {
            document.write (name + " is " + age + " years old.");
        }
### The return Statement
    A JavaScript function can have an optional return statement. This is required if you 
    want to return a value from a function. This statement should be the last statement in a function.
    Ex: function concatenate(first, last) {
            var full;
            full = first + last;
            return full;
         }
### Nested Functions
    Function within the function is called nested function
    Ex: 
        function func1() {
            function func2(){
                //some statement
            }
        }
### Function () Constructor
    The function constructor creates a new function object. Function constructor creates function that only
    execute in global scope.
    syntax: new function (function body)
            new function (arg1, function body)
            new function (arg1, ... argN, function body)
### Function Literals
    A function literal is just an expression that defines un-named function in javascript.
    Ex: var myFunction = function () {
            alert('myFunction is a name to my function');
        }

## JAVASCRIPT – Events
### What is an Event?
    JS interacts with HTML through events when user or browser manipulates page.
### onclick Event Type
    This is the most frequently used event type which occurs when a user clicks the 
    left button of his mouse. You can put your validation, warning etc., against this event type.
    Ex: <input type = "button" onclick = "func()" value = "Click here" />
### onsubmit Event Type
    onsubmit is an event that occurs when you try to submit a form. You can put 
    your form validation against this event type.
    Ex: <form method = "POST" action = "t.cgi" onsubmit = "return validate()">
             .......
             <input type = "submit" value = "Submit" />
          </form>   
### onmouseover and onmouseout
    These two event types will help you create nice effects with images or even with text as well. 
    The onmouseover event triggers when you bring your mouse over any element and the onmouseout 
    triggers when you move your mouse out from that element.
### HTML 5 Standard Events
    There are several standard events that HTML 5 already provided. for example onBlur, onFocus, onWaiting, etc.

## JAVASCRIPT – Cookies
### What are Cookies?
    Cookies is the most efficient method of remembering and tracking preferences, purchases, commissions, 
    and other information required for better visitor experience or site statistics.
### How Does It Work?
    Your server sends some data to the visitor's browser in the form of a cookie. The browser may accept the cookie. 
    If it does, it is stored as a plain text record on the visitor's hard drive. Now, when the visitor arrives at 
    another page on your site, the browser sends the same cookie to the server for retrieval. Once retrieved, 
    your server knows/remembers what was stored earlier.
    The data contained in a cookie is automatically transmitted between the web browser and the web server, 
    so CGI scripts on the server can read and write cookie values that are stored on the client.
### Storing Cookies
    document.cookie = "key1 = value1;key2 = value2;expires = date";
### Reading Cookies
    var allcookies = document.cookie;
    document.write ("All Cookies : " + allcookies );
### Setting Cookies Expiry Date
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );
    cookievalue = escape(document.myform.customer.value) + ";"
               
    document.cookie = "name=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
### Deleting a Cookie
    To do this, you just need to set the expiry date to a time in the past.
    Ex: var now = new Date();
        now.setMonth( now.getMonth() - 1 );
        cookievalue = escape(document.myform.customer.value) + ";"
                   
        document.cookie = "name=" + cookievalue;
        document.cookie = "expires=" + now.toUTCString() + ";"

## JAVASCRIPT – Page Redirect
### What is Page Redirection?
    Page redirect is like you click on URL to open page X but internally it opens page Y. For example, 
    you want to change your current domain to new domain but want to keep all the old pages so you just 
    need to create a redirecting page which will redirect your visitors to new domain.
### JavaScript Page Refresh
    In JS we refresh the page by below statement:
    document.location.reload() 
### Auto Refresh
    There are 2 ways to auto refresh the page:
    i) using meta tag in your head tag
        <meta http-equiv='refresh' content'30'>
    ii) using set timeout in JS
        window.settimeout(function () {
            window.location.reload()},
        30000);
### How Page Redirection Works?
    Ex. function Redirect() {
            window.location = "https://www.newdomain.com";
        }
        <form>
             <input type = "button" value = "Redirect Me" onclick = "Redirect();" />
        </form>

## JAVASCRIPT – Dialog Box
### Alert Dialog Box
    An alert dialog box is mostly used to give a warning message to the users. For example, 
    if one input field requires to enter some text but the user does not provide any input, 
    then as a part of validation, you can use an alert box to give a warning message.
    syntax: alert ("message!");
### Confirmation Dialog Box
    A confirmation dialog box is mostly used to take user's consent on any option. 
    It displays a dialog box with two buttons: OK and Cancel.
    If the user clicks on the OK button, the window method confirm() will return true. 
    If the user clicks on the Cancel button, then confirm() returns false. 
    You can use a confirmation dialog box as follows.
    synyax: windows.confirm()
### Prompt Dialog Box
    The prompt dialog box is very useful when you want to pop-up a text box to get user input.
    syntax: prompt('label', 'default string'); 
    it takes 2 params (i) a label which you want to display in the text box and 
    (ii) a default string to display in the text box.

## JAVASCRIPT – Void Keyword
    void is an important keyword in JavaScript which can be used as a unary operator that 
    appears before its single operand, which may be of any type. This operator specifies an expression 
    to be evaluated without returning a value.
    2 syntax:
        i) void func()
            javascript:void func()
         or:
         ii) void(func())
            javascript:void(func())

## JAVASCRIPT – Page Printing
### How to Print a Page? 
    By the following statement you can print a page:
    syntax: window.print()

## JAVASCRIPT – Objects
    Objects are composed of attributes.
    Object properties are as follow : objectName.objectProperty (Ex: myObj.title)
    Object methods are the functions and are as follow: objectName.objectMethod (Ex: window.write()) 
    User defined objects can be created by the new operator. Ex: var Employee = new Object(); here
    employee is object. we can also define array object like this var books = new Array("a", "b");
    Object constructor is "object()" it is a function that declares and initialise the object.
    Assigning method functions to the object properties is called defining methods to the object

## JAVASCRIPT – Number
    The Number object represents numerical date, either integers or floating-point numbers.
    syntax: var val = new Number(number);
    There are several properties for number object like: MAX_VALUE, MIN_VALUE, etc
    There are several methods for number object like: toFixed(), toString(), valueOf(), etc

## JAVASCRIPT – Boolean
    The Boolean object represents two values, either "true" or "false". If value parameter is omitted 
    or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false.
    syntax: var val = new Boolean(value);
    There are 2 properties for boolean object like: prototype, constructor
    There are 3 methods for boolean object like: toSource(), toString(), valueOf()

## JAVASCRIPT – String
    The String object lets you work with a series of characters; it wraps Javascript's string 
    primitive data type with a number of helper methods. As JavaScript automatically converts 
    `between string primitives and String objects, you can call any of the helper methods of 
    the String object on a string primitive.
    syntax: var val = new String(string);
    There are 3 properties for string object like: prototype, constructor, length
    There are several methods for string object like: toUppercase(), toLowerCase(), valueOf(), etc

## JAVASCRIPT – Arrays
    The Array object lets you store multiple values in a single variable. It stores a fixed-size 
    sequential collection of elements of the same type. An array is used to store a collection 
    of data, but it is often more useful to think of an array as a collection of variables of the same type.
    syntax: var fruits = new Array( "apple", "orange", "mango" );
    There are 5 properties for arrays object like: prototype, constructor, length, input, index
    There are several methods for arrays object like: indexOf(), forEach(), concat(), push(), pop(), etc

## JAVASCRIPT – Date 
    The Date object is a datatype built into the JavaScript language. Date objects are created 
    with the new Date( ) as shown below.
    There are 2 properties for date object like: prototype, constructor
    There are several methods for date object like: getYear(), setMonth(), setDate(), etc

## JAVASCRIPT – Math
    The math object provides you properties and methods for mathematical constants and functions. 
    Unlike other global objects, Math is not a constructor. All the properties and methods of 
    Math are static and can be called by using Math as an object without creating it.
    syntax: calling property and method example: 
        var pi_val = Math.PI; //property
        var sine_val = Math.sin(30); //method

## JAVASCRIPT – RegExp
    A regular expression is an object that describes a pattern of characters.
    syntax: i) var pattern = new RegExp(pattern, attributes);
            or simply
            ii) var pattern = /pattern/attributes;
    Brackets ([]) have a special meaning when used in the context of regular expressions. 
    They are used to find a range of characters.
    Quantifiers: The frequency or position of bracketed character sequences and single characters 
    can be denoted by a special character. Each special character has a specific connotation. 
    The +, *, ?, and $ flags all follow a character sequence.
    RegExp also consists of Literal characters, modifiers, metacharacters
    *Note: there are few examples are added in the index.html of Regexp
 
## JAVASCRIPT – DOM
    A Document object represents the HTML document that is displayed in that window. 
    The Document object has various properties that refer to other objects which allow 
    access to and modification of document content. The way a document content is accessed 
    and modified is called the Document Object Model, or DOM. The Objects are organized in 
    a hierarchy. This hierarchical structure applies to the organization of objects in a Web document.

## JAVASCRIPT – Errors and Exceptions
### Syntax Errors
    Syntax errors, also called parsing errors, occur at compile time in traditional programming languages 
    and at interpret time in JavaScript.
    Ex: window.print(;
### Runtime Errors
    Runtime errors, also called exceptions, occur during execution (after compilation/interpretation).
    Ex: window.printme();
### Logical Errors
    Logic errors can be the most difficult type of errors to track down. These errors are not the 
    result of a syntax or runtime error. Instead, they occur when you make a mistake in the logic that 
    drives your script and you do not get the result you expected. You cannot catch those errors, because 
    it depends on your business requirement what type of logic you want to put in your program.
    Ex: you want to check if X is smaller than Y but you accidently wrote wrong condition 'if X > Y then' instead 
        of 'if X < Y then'
### The try...catch...finally Statement
    The latest versions of JavaScript added exception handling capabilities. JavaScript implements the 
    try...catch...finally construct as well as the throw operator to handle exceptions. You can catch 
    programmer-generated and runtime exceptions, but you cannot catch JavaScript syntax errors.
    syntax: try {
                 // Code to run
                 [break;]
              }
              catch ( e ) {
                 // Code to run if an exception occurs
                 [break;]
              }
### The throw Statement
    You can use throw statement to raise your built-in exceptions or your customized exceptions. Later these 
    exceptions can be captured and you can take an appropriate action.
    Ex:
        var a = 100;
        var b = 0;
        try {
             if ( b == 0 ) {
                throw( "Divide by zero error." ); 
             } else {
                var c = a / b;
             }
        }
        catch ( e ) {
            alert("Error: " + e );
        }
### The onerror( ) Method
    The onerror event handler was the first feature to facilitate error handling in JavaScript. The error event 
    is fired on the window object whenever an exception occurs on the page.
    Ex: window.onerror = function () {
            alert("An error occurred.");
        }

## JAVASCRIPT – Form Validation
### Basic Form Validation
    First of all, the form must be checked to make sure all the mandatory fields are filled in. It would require 
    just a loop through each field in the form and check for data.
    *Note: example added in index.html file
### Data Format Validation
    Secondly, the data that is entered must be checked for correct form and value. Your code must include 
    appropriate logic to test correctness of data.
    *Note: example added in index.html file

## JAVASCRIPT – Animation
### Manual Animation
    *Note: Implementation added in index.js & index.html
### Automated Animation
    *Note: Implementation added in index.js & index.html
### Rollover with a Mouse Event
    *Note: Implementation added in index.js & index.html

## JAVASCRIPT – Multimedia
### Checking for Plug-Ins
    Each plug-in has an entry in the array. Each entry has the following properties −
        name − is the name of the plug-in.
        filename − is the executable file that was loaded to install the plug-in.
        description − is a description of the plug-in, supplied by the developer.
        mimeTypes − is an array with one entry for each MIME type supported by the plug-in.
    You can use these properties in a script to find out the installed plug-ins, and then 
    using JavaScript, you can play appropriate multimedia file.
    *Note: Implementation added in index.html
### Controlling Multimedia
    *Note: Implementation added in index.html

## JAVASCRIPT – Debugging
### Error Messages in IE
    The most basic way to track down errors is by turning on error information in your browser. 
    By default, Internet Explorer shows an error icon in the status bar when an error occurs on the page.
    Double-clicking this icon takes you to a dialog box showing information about the specific error that occurred.
    Since this icon is easy to overlook, Internet Explorer gives you the option to automatically show the 
    Error dialog box whenever an error occurs. To enable this option, select Tools → Internet Options → Advanced tab. 
    and then finally check the "Display a Notification About Every Script Error" box option
### Error Messages in Firefox or Mozilla
    Other browsers like Firefox, Netscape, and Mozilla send error messages to a special window called the 
    JavaScript Console or Error Consol. To view the console, select Tools → Error Consol or Web Development.
    Unfortunately, since these browsers give no visual indication when an error occurs, you must keep the 
    Console open and watch for errors as your script executes.
### Error Notifications
    Error notifications that show up on Console or through Internet Explorer dialog boxes are the result of 
    both syntax and runtime errors. These error notification include the line number at which the error occurred.
    If you are using Firefox, then you can click on the error available in the error console to go to the exact 
    line in the script having error.
### How to Debug a Script
    There are various ways to debug your JavaScript −
    Use a JavaScript Validator
    One way to check your JavaScript code for strange bugs is to run it through a program that checks it to make 
    sure it is valid and that it follows the official syntax rules of the language. These programs are called 
    validating parsers or just validators for short, and often come with commercial HTML and JavaScript editors.

    The most convenient validator for JavaScript is Douglas Crockford's JavaScript Lint, which is available for 
    free at Douglas Crockford's JavaScript Lint.

    Simply visit that web page, paste your JavaScript (Only JavaScript) code into the text area provided, 
    and click the jslint button. This program will parse through your JavaScript code, ensuring that all 
    the variable and function definitions follow the correct syntax. It will also check JavaScript statements, 
    such as if and while, to ensure they too follow the correct format
### Useful Tips for Developers
    - Use plenty of comments. Comments enable you to explain why you wrote the script the way you did and to 
      explain particularly difficult sections of code.
    - Always use indentation to make your code easy to read. Indenting statements also makes it easier for 
      you to match up beginning and ending tags, curly braces, and other HTML and script elements.
    - Write modular code. Whenever possible, group your statements into functions. Functions let you group 
      related statements, and test and reuse portions of code with minimal effort.
    - Be consistent in the way you name your variables and functions. Try using names that are long enough 
      to be meaningful and that describe the contents of the variable or the purpose of the function.
    - Use consistent syntax when naming variables and functions. In other words, keep them all lowercase 
      or all uppercase; if you prefer Camel-Back notation, use it consistently.
    - Test long scripts in a modular fashion. In other words, do not try to write the entire script before 
      testing any portion of it. Write a piece and get it to work before adding the next portion of code.
    - Use descriptive variable and function names and avoid using single-character names.
    - Watch your quotation marks. Remember that quotation marks are used in pairs around strings and 
      that both quotation marks must be of the same style (either single or double).
    - Watch your equal signs. You should not used a single = for comparison purpose.
    - Declare variables explicitly using the var keyword.

## JAVASCRIPT – Image Map
    You can use JavaScript to create client-side image map. Client-side image maps are enabled by the usemap 
    attribute for the <img /> tag and defined by special <map> and <area> extension tags.
    *Note: Implementation added in index.html & index.js

## JAVASCRIPT – Browsers
### Navigator Properties
    There are several properties, few are as follow: user[], plugins[], platform[], etc
### Navigator Methods
    There are multiple methods few are as follow: javaEnabled(), taintEnabled(), etc
### Browser Detection
    To detect the browser and its version we use below statements:
    var userAgent   = navigator.userAgent;
    var opera       = (userAgent.indexOf('Opera') != -1);
    var ie          = (userAgent.indexOf('MSIE') != -1);
    var gecko       = (userAgent.indexOf('Gecko') != -1);
    var netscape    = (userAgent.indexOf('Mozilla') != -1);
    var version     = navigator.appVersion;

## JAVASCRIPT – Classes
    keyword to create a class is 'class'. Below is example:
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
    }
### Inheritance
    To create a class inheritance, use the extends keyword.
    Ex:
        class Car {
            constructor(brand) {
                this.carname = brand;
            }
            present() {
                return 'I have a ' + this.carname;
            }
        }
        class Model extends Car {
            constructor(brand, mod) {
                super(brand);
                this.model = mod;
            }
            show() {
                return this.present() + ', it is a ' + this.model;
            }
        }
### Static
    Static methods are often utility functions, such as functions to create or clone objects, 
    whereas static properties are useful for caches, fixed-configuration, or any other data 
    you don't need to be replicated across instances.
    'static' keyword is used create static variable or function

## JAVASCRIPT – ES6 (Features)
    1. let and const keywords :
        The keyword "let" enables the users to define variables and on the other hand, "const" 
        enables the users to define constants. Variables were previously declared using "var" 
        which had function scope and were hoisted to the top. It means that a variable can be used 
        before declaration. But, the "let" variables and constants have block scope which is surrounded 
        by curly-braces "{}" and cannot be used before declaration.
        
        let i = 10;
        console.log(i);   //Output 10

        const PI = 3.14;
        console.log(PI);  //Output 3.14
    2. Arrow Functions
        ES6 provides feature known as Arrow Functions. It provides a more concise syntax for writing 
        function expressions by removing out the "function" and "return" keywords.
        Arrow functions are defined using the fat arrow (=>) notation.

        // Arrow function
        let sumOfTwoNumbers = (a, b) => a + b;
        console.log(sum(10, 20)); // Output 30
        It is evident that, there is no "return" or "function" keyword in the arrow function declaration.

        We can also skip the parenthesis in the case when there is exactly one parameter, but will always 
        need to use it when you have zero or more than one parameter.
        
        But, if there are multiple expressions in the function body, then we need to wrap it with curly 
        braces ("{}"). We also need to use the "return" statement to return the required value.

    3. Multi-line Strings
        ES6 also provides Multi-line Strings. Users can create multi-line strings by using back-ticks(`).
        It can be done as shown below :
            let greeting = `Hello World,     
            Greetings to all,
            Keep Learning and Practicing!`

    4. Default Parameters
        In ES6, users can provide the default values right in the signature of the functions. But, in ES5, 
        OR operator had to be used.
        //ES6
        let calculateArea = function(height = 100, width = 50) {  
            // logic
        }
        //ES5
        var calculateArea = function(height, width) {  
            height =  height || 50;
            width = width || 80;
            // logic
        }

    5. Template Literals
        ES6 introduces very simple string templates along with placeholders for the variables. The syntax 
        for using the string template is ${PARAMETER} and is used inside of the back-ticked string.
        let name = `My name is ${firstName} ${lastName}`

    6.Destructuring Assignment
        Destructuring is one of the most popular features of ES6. The destructuring assignment is an expression 
        that makes it easy to extract values from arrays, or properties from objects, into distinct variables.
        There are two types of destructuring assignment expressions, namely, Array Destructuring and Object 
        Destructuring. It can be used in the following manner :
        //Array Destructuring
        let fruits = ["Apple", "Banana"];
        let [a, b] = fruits; // Array destructuring assignment
        console.log(a, b);
        //Object Destructuring
        let person = {name: "Peter", age: 28};
        let {name, age} = person; // Object destructuring assignment
        console.log(name, age);

    7. Enhanced Object Literals
        ES6 provides enhanced object literals which make it easy to quickly create objects with properties 
        inside the curly braces.
        function getMobile(manufacturer, model, year) {
            return {
                manufacturer,
                model,
                year
            }
        }
        getMobile("Samsung", "Galaxy", "2020");

    8. Promises
        In ES6, Promises are used for asynchronous execution. We can use promise with the arrow function 
        as demonstrated below.
        var asyncCall =  new Promise((resolve, reject) => {
            // do something
            resolve();
        }).then(()=> {   
            console.log('DON!');
        })

    9. Classes
        Previously, classes never existed in JavaScript. Classes are introduced in ES6 which looks similar to 
        classes in other object-oriented languages, such as C++, Java, PHP, etc. But, they do not work exactly 
        the same way. ES6 classes make it simpler to create objects, implement inheritance by using the "extends" 
        keyword and also reuse the code efficiently.
        In ES6, we can declare a class using the new "class" keyword followed by the name of the class.
        
        class UserProfile {   
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;     
            }
        
            getName() {       
                console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
            }
        }
        let obj = new UserProfile('John', 'Smith');
        obj.getName(); // output: The Full-Name is John Smith

    10. Modules
        Previously, there was no native support for modules in JavaScript. ES6 introduced a new feature called 
        modules, in which each module is represented by a separate ".js" file. We can use the "import" or 
        "export" statement in a module to import or export variables, functions, classes or any other component 
        from/to different files and modules.
        export var num = 50;
        export function getName(fullName) {   
            //data
        };
        import {num, getName} from 'module';
        console.log(num); // 50

