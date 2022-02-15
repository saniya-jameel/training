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