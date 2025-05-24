const qaData = [
  {
    id: 1,
    question: "What is Swift and why was it created?",
    answer: "Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It was introduced in 2014 as a modern replacement for Objective-C, offering improved safety, performance, and expressiveness. Swift was designed to be easier to learn while maintaining the power needed for complex app development.",
    category: "foundation",
    resources: [
  {
    title: "Swift.org - About Swift",
    url: "https://swift.org/about/"
  },
  {
    title: "Apple Developer - Swift",
    url: "https://developer.apple.com/swift/"
  }
    ]
  },
  {
    id: 2,
    question: "What are the key features of Swift?",
    answer: "Swift offers many modern features that make it powerful yet easy to use. Key features include: type safety, optionals for handling nil values, automatic memory management with ARC, powerful generics, pattern matching, first-class functions, and protocol-oriented programming. Swift also emphasizes performance, safety, and modern syntax.",
    category: "foundation",
    resources: [
  {
    title: "Swift Features - Apple Developer",
    url: "https://developer.apple.com/swift/features/"
  }
    ]
  },
  {
    id: 3,
    question: "What are Optionals in Swift?",
    answer: "Optionals are a powerful feature in Swift that handle the absence of a value. An optional represents two possibilities: either there is a value of a specified type, or there is no value at all (nil). Optionals are written by appending a question mark (?) to the type declaration. This helps prevent null pointer exceptions that are common in other languages.",
    category: "foundation",
    code: `// Declaring an optional String
let possibleName: String? = "John"

// Safely unwrapping with if let
if let name = possibleName {
    print("Hello, \\(name)!")
} else {
    print("No name provided")
}

// Using optional chaining
let length = possibleName?.count

// Using nil coalescing operator
let defaultName = possibleName ?? "Anonymous"`,
    resources: [
  {
    title: "Swift Documentation - Optionals",
    url: "https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330"
  }
    ]
  },
  {
    id: 4,
    question: "What is the difference between structs and classes in Swift?",
    answer: "Both structs and classes are building blocks for organizing code in Swift, but they have key differences. Structs are value types (copied when passed), while classes are reference types (passed by reference). Structs don't support inheritance, while classes do. Structs have automatic memberwise initializers, while classes require explicit initializers. Memory management is simpler with structs as they don't participate in ARC.",
    category: "foundation",
    code: `// Struct example
struct Point {
    var x: Double
    var y: Double
}

// Class example
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
    self.name = name
    self.age = age
    }
}

// Value semantics with struct
var point1 = Point(x: 10, y: 20)
var point2 = point1
point2.x = 15
print(point1.x) // Still 10
print(point2.x) // 15

// Reference semantics with class
let person1 = Person(name: "Alice", age: 30)
let person2 = person1
person2.age = 31
print(person1.age) // 31
print(person2.age) // 31`,
    resources: [
  {
    title: "Swift Documentation - Classes and Structures",
    url: "https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html"
  }
    ]
  },
  {
    id: 5,
    question: "What is Swift's closure syntax?",
    answer: "Closures in Swift are self-contained blocks of functionality that can be passed around and used in your code. They are similar to blocks in Objective-C and lambdas in other languages. Swift's closure syntax is highly optimized with features like inferring parameter and return types, implicit returns for single-expression closures, shorthand argument names, and trailing closure syntax.",
    category: "foundation",
    code: `// Full closure syntax
let fullClosure = { (numbers: [Int]) -> Int in
    var sum = 0
    for number in numbers {
    sum += number
    }
    return sum
}

// With type inference
let inferredClosure = { (numbers: [Int]) in
    return numbers.reduce(0, +)
}

// Implicit return for single expression
let implicitClosure = { (numbers: [Int]) in numbers.reduce(0, +) }

// Shorthand argument names
let shorthandClosure: ([Int]) -> Int = { $0.reduce(0, +) }

// Using a closure with a function
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(0) { $0 + $1 }

// Trailing closure syntax
let sortedNumbers = numbers.sorted { $0 > $1 }`,
    resources: [
  {
    title: "Swift Documentation - Closures",
    url: "https://docs.swift.org/swift-book/LanguageGuide/Closures.html"
  }
    ]
  },
  {
    id: 6,
    question: "How does memory management work in Swift?",
    answer: "Swift uses Automatic Reference Counting (ARC) to manage memory for class instances. ARC automatically tracks and manages your app's memory usage by freeing up memory used by class instances when they are no longer needed. This happens without requiring manual memory management, but developers still need to understand and prevent reference cycles by using weak or unowned references when appropriate.",
    category: "foundation",
    code: `class Person {
    let name: String
    var apartment: Apartment?
    
    init(name: String) {
    self.name = name
    }
    
    deinit {
    print("\\(name) is being deinitialized")
    }
}

class Apartment {
    let number: Int
    weak var tenant: Person? // Using weak to prevent reference cycle
    
    init(number: Int) {
    self.number = number
    }
    
    deinit {
    print("Apartment #\\(number) is being deinitialized")
    }
}

// Create and link instances
var john: Person? = Person(name: "John")
var apt101: Apartment? = Apartment(number: 101)

john?.apartment = apt101
apt101?.tenant = john

// Breaking the cycle
john = nil
apt101 = nil // Both will be deinitialized`,
    resources: [
  {
    title: "Swift Documentation - Automatic Reference Counting",
    url: "https://docs.swift.org/swift-book/LanguageGuide/AutomaticReferenceCounting.html"
  }
    ]
  },
  {
    id: 7,
    question: "What is SwiftUI and how does it compare to UIKit?",
    answer: "SwiftUI is Apple's modern UI framework introduced in 2019 for building user interfaces across all Apple platforms. It uses a declarative syntax, allowing developers to state what the UI should do rather than how to do it. SwiftUI offers automatic support for Dark Mode, Dynamic Type, and localization. While UIKit is imperative and uses a delegate pattern with more manual layout, SwiftUI is more concise, reactive, and handles state management more elegantly. SwiftUI works alongside UIKit, allowing gradual adoption.",
    category: "foundation",
    code: `// Basic SwiftUI view
import SwiftUI

struct ContentView: View {
    @State private var name = ""
    
    var body: some View {
    VStack {
    Text("Hello, Swift!")
    .font(.largeTitle)
    .foregroundColor(.blue)
    
    TextField("Enter your name", text: $name)
    .padding()
    .textFieldStyle(RoundedBorderTextFieldStyle())
    
    if !name.isEmpty {
    Text("Hello, \\(name)!")
    .font(.title)
    .padding()
    }
    
    Button("Clear") {
    name = ""
    }
    .padding()
    .background(Color.red)
    .foregroundColor(.white)
    .cornerRadius(8)
    }
    .padding()
    }
}`,
    resources: [
  {
    title: "Apple Developer - SwiftUI",
    url: "https://developer.apple.com/xcode/swiftui/"
  },
  {
    title: "Apple Developer - UIKit",
    url: "https://developer.apple.com/documentation/uikit"
  }
    ]
  },
  {
    id: 8,
    question: "What is Swift Package Manager?",
    answer: "Swift Package Manager (SPM) is a tool for managing the distribution of Swift code. It's integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies. Similar to other dependency managers like CocoaPods or Carthage, SPM allows you to specify external libraries your project depends on and ensures they're downloaded and built when needed.",
    category: "foundation",
    code: `// Package.swift example
// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "MyLibrary",
    platforms: [
    .iOS(.v13),
    .macOS(.v10_15)
    ],
    products: [
    .library(
    name: "MyLibrary",
    targets: ["MyLibrary"]),
    ],
    dependencies: [
    .package(url: "https://github.com/Alamofire/Alamofire.git", .upToNextMajor(from: "5.4.0")),
    ],
    targets: [
    .target(
    name: "MyLibrary",
    dependencies: ["Alamofire"]),
    .testTarget(
    name: "MyLibraryTests",
    dependencies: ["MyLibrary"]),
    ]
)`,
    resources: [
  {
    title: "Swift.org - Swift Package Manager",
    url: "https://swift.org/package-manager/"
  }
    ]
  },
  {
    id: 9,
    question: "What are Swift Protocols and Protocol-Oriented Programming?",
    answer: "Protocols in Swift define a blueprint of methods, properties, and other requirements that a type can adopt. Protocol-Oriented Programming (POP) is a programming paradigm that focuses on designing code around protocols and protocol extensions rather than inheritance from base classes. This approach offers more flexibility and composition compared to traditional object-oriented programming. With protocol extensions, you can provide default implementations for protocol requirements.",
    category: "weekly",
    code: `// Protocol definition
protocol Vehicle {
    var numberOfWheels: Int { get }
    var description: String { get }
    func makeNoise()
}

// Protocol extension with default implementation
extension Vehicle {
    var description: String {
    return "A vehicle with \\(numberOfWheels) wheels"
    }
    
    func makeNoise() {
    print("Generic vehicle noise")
    }
}

// Struct conforming to protocol
struct Bicycle: Vehicle {
    var numberOfWheels: Int = 2
    
    func makeNoise() {
    print("Ring ring!")
    }
}

// Using protocol as a type
func describeVehicle(_ vehicle: Vehicle) {
    print(vehicle.description)
    vehicle.makeNoise()
}

let bike = Bicycle()
describeVehicle(bike)`,
    resources: [
  {
    title: "Swift Documentation - Protocols",
    url: "https://docs.swift.org/swift-book/LanguageGuide/Protocols.html"
  },
  {
    title: "WWDC 2015 - Protocol-Oriented Programming",
    url: "https://developer.apple.com/videos/play/wwdc2015/408/"
  }
    ]
  },
  {
    id: 10,
    question: "What's new in the latest version of Swift?",
    answer: "Swift’s concurrency model allows writing nonisolated on properties and functions to indicate that an API is safe to call from any concurrent context. Swift 6.1 extends nonisolated to types and extensions. This allows you to write nonisolated to prevent @MainActor inference on a type, or to apply nonisolated to all methods in an extension without having to annotate every method.",
    category: "updates",
    code: `@MainActor
struct S {
  let id: Int
  let name: String

  // mutable state and MainActor methods
}

nonisolated extension S: CustomStringConvertible, Equatable {
  var description: String {
    "id: \(id), name: \(name)"
  }

  static func ==(lhs: S, rhs: S) -> Bool {
    lhs.id == rhs.id
  }
}`,
    resources: [
  {
    title: "Swift.org - Swift 6.1 Released",
    url: "https://www.swift.org/blog/swift-6.1-released/"
  },
  {
    title: "What's new in Swift",
    url: "https://www.swift.org/blog/"
  }
    ]
  },

  {
    id: 11,
    question: "How does the Swift language reduce potential verbosity?",
    answer: "Swift reduces verbosity through features like type inference, closures with shorthand syntax, synthesized initializers, and memberwise initializers. It also minimizes boilerplate by eliminating the need for header files and reducing redundant syntax.",
    category: "interview",
    code: `// Type inference example
let message = "Hello, Swift!" // Swift infers the type as String

// Closure shorthand syntax
let numbers = [1, 2, 3, 4]
let squared = numbers.map { $0 * $0 } // No need for explicit parameter names`
  },
  {
    id: 12,
    question: "Which Swift feature helps in situations where the type might be cumbersome to write?",
    answer: "Type inference helps when dealing with complex types, reducing the need for explicit type annotations, especially with generics and closures.",
    category: "interview",
    code: `// Swift infers the type of the dictionary
let user: [String: Any] = ["name": "Alice", "age": 25]

// Inferring closure return type
let doubledNumbers = [1, 2, 3].map { $0 * 2 }`
  },
    {
  "id": 13,
  question: "Which statement provides the early return pattern?",
  answer: "The `guard` statement allows early exit from a function if a condition isn't met, improving code readability and reducing nesting.",
  "category": "interview",
  code: `func validate(age: Int) {
  guard age >= 18 else {
  print("Underage, access denied!")
  return
  }
  print("Access granted!")
  }`
     
  },
    {
  "id": 14,
  question: "What is a lightweight data structure that groups multiple values into a single compound value?",
  answer: "Tuples in Swift allow grouping multiple values without defining a separate type. They are useful for returning multiple values from a function.",
  "category": "interview",
  code: `let person = (name: "Alice", age: 25)
  print(person.name) // Output: Alice`
     
  },
    {
  "id": 15,
  question: "In what scenarios should we use Float and Double?",
  answer: "Use `Float` for lower precision (32-bit) and `Double` for higher precision (64-bit). `Double` is preferred for accuracy in most cases.",
  "category": "interview",
  code: `let piFloat: Float = 3.1415927
  let piDouble: Double = 3.141592653589793`
     
  },
    {
  "id": 16,
  question: "Which operator is known as the 'identity' operator?",
  answer: "The `===` operator checks if two references point to the same object in memory.",
  "category": "interview",
  code: `class Example {}
  let obj1 = Example()
  let obj2 = obj1
  print(obj1 === obj2) // Output: true`
  
  },
    {
  "id": 17,
  question: "Which collection types are ordered and unordered?",
  answer: "Arrays are ordered collections, while sets and dictionaries are unordered.",
  "category": "interview",
  code: `let orderedArray = [1, 2, 3] // Maintains order
  let unorderedSet: Set = [3, 1, 2] // Order not guaranteed`
     
  },
    {
  "id": 18,
  question: "Which keyword allows the code flow to continue to the next case after the matching case?",
  answer: "The `fallthrough` keyword allows execution to continue to the next case in a switch statement.",
  "category": "interview",
  code: `let number = 2
  switch number {
  case 1:
  print("One")
  case 2:
  print("Two")
  fallthrough
  case 3:
  print("Three")
  default:
  print("Other")
  }`
  
  },
    {
  "id": 19,
  question: "Which transfer statements contribute to flexible loop control?",
  answer: "`break`, `continue`, and `return` control loop execution. `break` exits, `continue` skips an iteration, and `return` exits a function.",
  "category": "interview",
  code: `for i in 1...5 {
  if i == 3 { continue }
  print(i)
  } // Output: 1, 2, 4, 5`
     
  },
    {
  "id": 20,
  question: "Which type of range should I use when including the first value but excluding the last value?",
  answer: "A half-open range (`..<`) includes the first value but excludes the last.",
  "category": "interview",
  code: `for i in 1..<5 {
  print(i)
  } // Output: 1, 2, 3, 4`
  
  },
  
   
     {
   "id": 21,
   question: "Which function should I use to create a sequence of evenly spaced values within a specified range?",
   answer: "The `stride` function allows you to create a sequence of evenly spaced values between a start and end value.",
   "category": "interview",
   code: `// Example of stride in Swift
   for value in stride(from: 0, to: 10, by: 2) {
   print(value) // Output: 0, 2, 4, 6, 8
   }`
   
   },
     {
   "id": 22,
   question: "Which clause serves as a powerful conditional extension to various control flow and type declaration statements?",
   answer: "The `where` clause is used to add conditions in loops, generics, and pattern matching.",
   "category": "interview",
   code: `// Example of where in a for loop
   for number in 1...10 where number.isMultiple(of: 2) {
   print(number) // Output: 2, 4, 6, 8, 10
   }`
   
   },
     {
   "id": 23,
   question: "By which tool can an asynchronous task be handled in Swift?",
   answer: "Swift provides multiple tools to handle asynchronous tasks, including `async/await`, `Task`, and `GCD`.",
   "category": "interview",
   code: `// Example using async/await
   func fetchData() async throws -> String {
   return try await URLSession.shared.data(from: URL(string: "https://example.com")!).0.description
   }`
  
   },
     {
   "id": 24,
   question: "Which statement should I use to execute code just before transferring program control outside the scope in which the statement appears?",
   answer: "The `defer` statement is used to schedule code execution just before exiting the current scope.",
   "category": "interview",
   code: `// Example of defer in Swift
   func testDefer() {
   defer { print("This runs last") }
   print("This runs first")
   }
   testDefer()
   // Output:
   // This runs first
   // This runs last`
  
   },
     {
   "id": 25,
   question: "Which Swift feature allows you to attach additional data to enum cases? Mention any one native option available for this.",
   answer: "Swift enums support **associated values** to attach additional data to cases. A native example is `Result<Success, Failure>`.",
   "category": "interview",
   code: `// Example of associated values in an enum
   enum NetworkResponse {
   case success(data: String)
   case failure(error: Error)
   }

   let response = NetworkResponse.success(data: "Fetched data successfully")`
   
   },
     {
   "id": 26,
   question: "Which method allows us to create a new collection containing only the elements that meet a specified condition?",
   answer: "The `filter` method allows you to create a new collection containing only elements that satisfy a given condition.",
   "category": "interview",
   code: `// Example of filter in Swift
   let numbers = [1, 2, 3, 4, 5, 6]
   let evenNumbers = numbers.filter { $0.isMultiple(of: 2) }
   print(evenNumbers) // Output: [2, 4, 6]`
  
   },
     {
   "id": 27,
   question: "Which Swift feature allows you to write flexible and reusable functions, types, and classes that work with multiple data types while maintaining type safety?",
   answer: "Generics allow you to write reusable functions, types, and classes that work with any data type while ensuring type safety.",
   "category": "interview",
   code: `// Example of a generic function
   func swapValues<T>(_ a: inout T, _ b: inout T) {
   let temp = a
   a = b
   b = temp
   }`
   
   },
     {
   "id": 28,
   question: "Which function should I use to transform each element in a collection using a given closure?",
   answer: "The `map` function is used to transform each element in a collection using a closure.",
   "category": "interview",
   code: `// Example of map in Swift
   let numbers = [1, 2, 3, 4, 5]
   let squaredNumbers = numbers.map { $0 * $0 }
   print(squaredNumbers) // Output: [1, 4, 9, 16, 25]`
  
   },
     {
   "id": 29,
   question: "Which function is helpful when combining elements in a collection into a single value using a sequential combining closure?",
   answer: "The `reduce` function is used to combine all elements of a collection into a single value using a closure.",
   "category": "interview",
   code: `// Example of reduce in Swift
   let numbers = [1, 2, 3, 4, 5]
   let sum = numbers.reduce(0, +)
   print(sum) // Output: 15`
  
   },
     {
   "id": 30,
   question: "Which approach is commonly used in functional programming to break down complex functions into simpler, more manageable pieces?",
   answer: "Currying and function composition are commonly used in functional programming to simplify complex functions.",
   "category": "interview",
   code: `// Example of currying in Swift
   func add(_ a: Int) -> (Int) -> Int {
   return { b in a + b }
   }

   let addFive = add(5)
   print(addFive(10)) // Output: 15`
  
   },
   
    {
  "id": 31,
  question: "Which design pattern in Swift defers the instantiation of an object until it is first needed?",
  answer: "The `lazy` keyword in Swift defers the instantiation of an object until it is first accessed.",
  "category": "interview",
  code: "class Example { lazy var expensiveObject = ExpensiveClass() }"
  
  },
    {
  "id": 32,
  question: "Which keywords should I use to prevent memory leaks in Swift?",
  answer: "The `weak` and `unowned` keywords help prevent memory leaks by avoiding strong reference cycles.",
  "category": "interview",
  code: "class Person { weak var friend: Person? }"
     
  },
    {
  "id": 33,
  question: "Which Swift component is helpful for implementing dependency injection?",
  answer: "Property wrappers (`@propertyWrapper`) can be used to manage dependency injection by abstracting initialization logic.",
  "category": "interview",
  code: "@propertyWrapper struct Injected<T> { var wrappedValue: T }"
    
  },
    {
  "id": 34,
  question: "Which design pattern enables a publish-subscribe form of communication between different parts of an application?",
  answer: "The `NotificationCenter` pattern allows different parts of an app to communicate in a decoupled way.",
  "category": "interview",
  code: "NotificationCenter.default.post(name: .customNotification, object: nil)"
     
  },
    {
  "id": 35,
  question: "Which protocol should an enum conform to in Swift to enable iteration over its cases?",
  answer: "The `CaseIterable` protocol allows iteration over all cases in an enum.",
  "category": "interview",
  code: "enum Direction: CaseIterable { case north, south, east, west }"
     
  },
    {
  "id": 36,
  question: "Which Swift component has the ability to retain access to captured values and manipulate them even after the original scope of the variables has ended?",
  answer: "Closures capture values and can retain access to them beyond their original scope.",
  "category": "interview",
  code: "let closure = { (x: Int) -> Int in return x * 2 }"
    
  },
    {
  "id": 37,
  question: "Which Swift feature provides a seamless way to navigate optional hierarchies without the risk of unwrapping a nil value while avoiding cumbersome and deeply nested conditionals?",
  answer: "Optional chaining allows safe access to optional values without deep nesting.",
  "category": "interview",
  code: "let name = user?.profile?.displayName"
     
  },
    {
  "id": 38,
  question: "Which memory optimization technique does Swift use to efficiently manage value types like arrays and dictionaries?",
  answer: "Swift uses **Copy-On-Write (COW)** to optimize memory usage for value types.",
  "category": "interview",
  code: "var array1 = [1, 2, 3]; var array2 = array1; array1.append(4)"
     
  },
    {
  "id": 39,
  question: "Which property wrapper automatically ensures a numeric property stays within a specified range, enhancing readability and reducing error-prone manual range checks throughout the code?",
  answer: "The `@Clamped` property wrapper ensures a numeric property stays within a specified range.",
  "category": "interview",
  code: "@propertyWrapper struct Clamped<T: Comparable> { var value: T }"
    
  },
    {
  "id": 40,
  question: "Which technique is useful for returning a value that conforms to a protocol without exposing its exact type, enhancing encapsulation and reducing coupling between components?",
  answer: "Opaque types (`some Protocol`) hide the exact return type while ensuring protocol conformance.",
  "category": "interview",
  code: "func makeShape() -> some Shape { return Circle() }"
     
  },

    {
  "id": 41,
  question: "Which type represents the path to a property or subscript of a type without accessing its value?",
  answer: "KeyPath",
  "category": "interview",
  code: "let nameKeyPath = \\Person.name"
     
  },
    {
  "id": 42,
  question: "Which syntax feature in Swift allows you to move a closure expression outside the parentheses of a function call when the closure is the last argument?",
  answer: "Trailing Closure",
  "category": "interview",
  code: "someFunction { print('Trailing closure') }"
     
  },
    {
  "id": 43,
  question: "In Swift, errors are represented by values of types that conform to which protocol?",
  answer: "Error Protocol",
  "category": "interview",
  code: "enum MyError: Error { case invalidInput }"
     
  },
    {
  "id": 44,
  question: "Swift's Set conforms to which protocol, enabling it to efficiently manage uniqueness and perform operations like insertion, deletion, and membership checking in constant time on average?",
  answer: "Hashable, SetAlgebra",
  "category": "interview",
  code: "var mySet: Set<Int> = [1, 2, 3]"
     
  },
    {
  "id": 45,
  question: "Which attributes in Swift serve as annotations to indicate the lifecycle of certain functionalities, specifying the iOS, macOS, watchOS, or tvOS versions a piece of code can be used with?",
  answer: "@available",
  "category": "interview",
  code: "@available(iOS 14.0, *) func newFeature() { }"
     
  },
    {
  "id": 46,
  question: "In Swift, what are the first-class citizens?",
  answer: "Functions, Closures",
  "category": "interview",
  code: "let add: (Int, Int) -> Int = { $0 + $1 }"
     
  },
    {
  "id": 47,
  question: "Which approach is useful for performance optimization, as it prevents unnecessary work until the value is needed, especially in cases of expensive computations and resource-intensive operations?",
  answer: "Lazy Initialization",
  "category": "interview",
  code: "lazy var expensiveData: Data = loadData()"
     
  },
    {
  "id": 48,
  question: "What is an expressive and powerful feature in Swift that enables you to check for matches against specific patterns?",
  answer: "Pattern Matching",
  "category": "interview",
  code: "switch value { case let x where x > 0: print('Positive') }"
     
  },
    {
  "id": 49,
  question: "Which property in Swift does not store a value directly but instead calculates (computes) a value when accessed?",
  answer: "Computed Property",
  "category": "interview",
  code: "var square: Int { return side * side }"
     
  },
    {
  "id": 50,
  question: "In Swift, when a method in a value type needs to modify the instance, what keyword must be used to mark the method?",
  answer: "mutating",
  "category": "interview",
  code: "struct Counter { mutating func increment() { count += 1 } }"
     
    },

  
  
      {
        "id": 51,
        "question": "Which keyword is used when you have a reference that will never become nil during its lifetime?",
        "answer": "The 'unowned' keyword is used for references that will never become nil after being initialized. It helps avoid retain cycles in closures and object references.",
        "category": "weekly",
        "code": `class Owner {
        var name: String
        init(name: String) { self.name = name }
    }

    class Pet {
        unowned var owner: Owner // No strong reference, avoids retain cycle
        init(owner: Owner) { self.owner = owner }
    }

    // Example Usage
    let owner = Owner(name: "John")
    let pet = Pet(owner: owner)`
      },
      {
        "id": 52,
        "question": "What is used in Swift to enable a DSL-like (domain-specific language) syntax for creating complex structures such as SwiftUI views or Combine publishers?",
        "answer": "Function builders like '@ViewBuilder' allow Swift to build complex structures declaratively, often seen in SwiftUI and Combine.",
        "category": "weekly",
        "code": `@ViewBuilder
    func myView() -> some View {
        VStack {
            Text("Hello")
            Text("World")
        }
    }

    // Example Usage in SwiftUI
    struct ContentView: View {
        var body: some View {
            myView()
        }
    }`
      },
      {
        "id": 53,
        "question": "Which pattern allows an object to be notified when a property of another object changes?",
        "answer": "The observer pattern notifies objects when a property changes. In Swift, Key-Value Observing (KVO) and Combine's @Published are commonly used.",
        "category": "weekly",
        "code": `import Combine

    class User: ObservableObject {
        @Published var name: String = "John"
    }

    // Example Usage
    let user = User()
    let cancellable = user.$name.sink { newName in
        print("User's name changed to: \\(newName)")
    }
    user.name = "Alice" // Triggers the observer`
      },
      {
        "id": 54,
        "question": "Which types don't hold any data but are used to enforce specific type constraints during compilation?",
        "answer": "Phantom types are generic types that do not store values but enforce type constraints at compile time.",
        "category": "weekly",
        "code": `struct Phantom<T> {}

    func example<T>(param: Phantom<T>) {
        print("Function restricted by phantom type")
    }

    // Example Usage
    let phantomInstance = Phantom<Int>()
    example(param: phantomInstance)`
      },
      {
        "id": 55,
        "question": "Which keyword is used when you want to indicate that a method or property should be dynamically dispatched using Objective-C runtime mechanisms?",
        "answer": "The 'dynamic' keyword forces a property or method to be dispatched dynamically using the Objective-C runtime.",
        "category": "weekly",
        "code": `import Foundation

    class Example {
        @objc dynamic var counter: Int = 0
    }

    // Example Usage
    let obj = Example()
    obj.counter = 5`
      },
      {
        "id": 56,
        "question": "Which statement supports various patterns for matching values?",
        "answer": "The 'switch' statement in Swift allows for value matching using value patterns, tuple patterns, and type-casting patterns.",
        "category": "weekly",
        "code": `let value = 10

    switch value {
    case 0:
        print("Zero")
    case 1...10:
        print("Between 1 and 10")
    default:
        print("Other value")
    }

    // Example with Enum
    enum Status {
        case success, failure, unknown
    }

    let currentStatus = Status.success

    switch currentStatus {
    case .success:
        print("Success")
    case .failure:
        print("Failure")
    case .unknown:
        print("Unknown status")
    }`
      },
      {
        "id": 57,
        "question": "How can you achieve thread safety in Swift to ensure that only one thread accesses a particular resource at a time?",
        "answer": "Thread safety can be achieved using serial dispatch queues or DispatchSemaphore to ensure synchronized access to shared resources.",
        "category": "weekly",
        "code": `let queue = DispatchQueue(label: "com.example.serialQueue")

    queue.sync {
        print("Executing safely on a single thread")
    }

    // Using DispatchSemaphore
    let semaphore = DispatchSemaphore(value: 1)

    DispatchQueue.global().async {
        semaphore.wait()
        print("Critical section")
        semaphore.signal()
    }`
      },
      {
        "id": 58,
        "question": "What are two key types of initializers in Swift?",
        "answer": "Swift has designated initializers (which fully initialize an object) and convenience initializers (which delegate to designated initializers).",
        "category": "weekly",
        "code": `class Vehicle {
        var make: String

        // Designated Initializer
        init(make: String) {
            self.make = make
        }
    }

    // Convenience Initializer
    class Car: Vehicle {
        var model: String

        init(make: String, model: String) {
            self.model = model
            super.init(make: make)
        }

        convenience init(model: String) {
            self.init(make: "Default", model: model)
        }
    }

    // Example Usage
    let car1 = Car(make: "Toyota", model: "Camry")
    let car2 = Car(model: "Civic")`
      },
      {
        "id": 59,
        "question": "Which operators are supported by Swift?",
        "answer": "Swift supports prefix, infix, and postfix operators for arithmetic, logical, and bitwise operations.",
        "category": "weekly",
        "code": `// Prefix Operator
    prefix func - (value: Int) -> Int {
        return value * -1
    }
    let negValue = -5 // Uses prefix operator

    // Infix Operator
    infix operator **

    func ** (left: Int, right: Int) -> Int {
        return Int(pow(Double(left), Double(right)))
    }
    let power = 2 ** 3 // 2 raised to the power 3

    // Postfix Operator
    postfix operator ++

    postfix func ++ (value: inout Int) {
        value += 1
    }

    var num = 5
    num++ // Increments num`
      },
      {
        "id": 60,
        "question": "Which Swift feature allows developers to combine multiple protocols into a single type requirement?",
        "answer": "Protocol composition in Swift allows multiple protocols to be combined using '&' to define a type requirement.",
        "category": "weekly",
        "code": `protocol Drivable {
        func drive()
    }

    protocol Flyable {
        func fly()
    }

    // Combining protocols
    typealias FlyingCar = Drivable & Flyable

    struct Airplane: FlyingCar {
        func drive() { print("Driving on runway") }
        func fly() { print("Flying in the sky") }
    }

    // Example Usage
    let airplane = Airplane()
    airplane.drive()
    airplane.fly()`
      },
    
   
  
    {
      "id": 61,
      "question": "Which types are used in protocols to define a placeholder type that can be specified later by any conforming type?",
      "answer": "Associated Type",
      "category": "weekly",
      "code": `protocol Example {
          associatedtype Item
          func configure(with item: Item)
      }`
    },
    {
      "id": 62,
      "question": "Which approach becomes useful when working with closures that may or may not throw errors?",
      "answer": "rethrows",
      "category": "weekly",
      "code": `func performTask(_ task: () throws -> Void) rethrows {
          try task()
      }`
    },
    {
      "id": 63,
      "question": "Which technique is used to hide the specific underlying type of a value while still conforming to a protocol?",
      "answer": "Type Erasure",
      "category": "weekly",
      "code": `class AnyShape: Shape {
          private let _draw: () -> Void
          init<S: Shape>(_ shape: S) {
              _draw = shape.draw
          }
          func draw() { _draw() }
      }`
    },
    {
      "id": 64,
      "question": "How does Swift handle multiple optional bindings in a single if-let statement?",
      "answer": "commas (,)",
      "category": "weekly",
      "code": `if let a = optionalA, let b = optionalB {
          print(a, b)
      }`
    },
    {
      "id": 65,
      "question": "Which Swift type supports inheritance: class or struct?",
      "answer": "class",
      "category": "weekly",
      "code": `class Animal {}
      class Dog: Animal {}`
    },
    {
      "id": 66,
      "question": "Which Swift type is a reference type: class or struct?",
      "answer": "class",
      "category": "weekly",
      "code": `class ReferenceTypeExample {
          var value: Int = 0
      }`
    },
    {
      "id": 67,
      "question": "In Swift, are struct properties mutable by default when the struct is assigned to a constant?",
      "answer": "No",
      "category": "weekly",
      "code": `struct Example {
          var value: Int
      }

      let example = Example(value: 10)
      // example.value = 20 // Error: Cannot modify property of a let struct`
    },
    {
      "id": 68,
      "question": "Which Swift type supports deinitializers: class or struct?",
      "answer": "class",
      "category": "weekly",
      "code": `class Example {
          deinit {
              print("Instance is being deallocated")
          }
      }`
    },
    {
      "id": 69,
      "question": "Why can't structs inherit from other structs in Swift?",
      "answer": "Structs are value types in Swift, and inheritance is primarily designed for reference types to share behavior. Since structs are intended to provide independent copies of data, inheritance would contradict this design principle.",
      "category": "weekly",
      "code": `struct Base {
          var value: Int
      }

      // struct Derived: Base {} // Error: Structs cannot inherit`
    },
    {
      "id": 70,
      "question": "How can a class prevent itself from being inherited in Swift?",
      "answer": "By marking the class as final.",
      "category": "weekly",
      "code": `final class Example {}`
    },
    {
      "id": 71,
      "question": "What happens when you assign a struct instance to another variable?",
      "answer": "The struct is copied, meaning both variables hold separate instances with their own data.",
      "category": "weekly",
      "code": `struct Example {
          var value: Int
      }

      var a = Example(value: 10)
      var b = a // Copy occurs
      b.value = 20

      print(a.value) // 10
      print(b.value) // 20`
    },
    {
      "id": 72,
      "question": "Why are class properties mutable even when the class instance is assigned to a constant?",
      "answer": "Classes are reference types, let only protects the reference from being reassigned. It doesn’t lock the internal state of the object. If you want to prevent property changes as well, mark the property itself as let inside the class.",
      "category": "weekly",
      "code": `class Example {
          var value: Int = 0
      }

      let instance = Example()
      instance.value = 10 // Allowed, as instance is a reference type`
    },
    {
      "id": 73,
      "question": "When is a class’s deinit method called?",
      "answer": "The deinit method is called when the last reference to a class instance is removed, and the instance is about to be deallocated from memory.",
      "category": "weekly",
      "code": `class Example {
          deinit {
              print("Instance deallocated")
          }
      }`
    },
  

  
    {
      "id": 74,
      "question": "Which property observers are special blocks of code that monitor changes to a property’s value?",
      "answer": "willSet and didSet",
      "category": "weekly",
      "code": `var value: Int = 0 {
          willSet { print("Will set to \\(newValue)") }
          didSet { print("Did set from \\(oldValue)") }
      }`
    },
    {
      "id": 75,
      "question": "In a class hierarchy, what type is returned when using Self in a static method?",
      "answer": "Concrete type (the actual type of the class that invoked the method)",
      "category": "weekly",
      "code": `class Base {
          static func create() -> Self { return self.init() }
          required init() {}
      }`
    },
    {
      "id": 76,
      "question": "Which keyword should you use when implementing a method in a protocol that must return the conforming type?",
      "answer": "Self",
      "category": "weekly",
      "code": `protocol Example {
          func createInstance() -> Self
      }`
    },
    {
      "id": 77,
      "question": "Which function in Swift is a debug-only tool used to verify assumptions during development?",
      "answer": "assert()",
      "category": "weekly",
      "code": `let age = -3
      assert(age >= 0, "Age cannot be negative")`
    },
    {
      "id": 78,
      "question": "What is escape analysis in Swift, and what role does it play in memory management?",
      "answer": "Escape analysis is a compiler optimization technique that determines whether a closure will escape (be stored or executed later) or not escape (executed immediately within the function’s scope).",
      "category": "weekly",
      "code": `func example(_ closure: @escaping () -> Void) {
          DispatchQueue.global().async { closure() }
      }`
    },
    {
      "id": 79,
      "question": "What are some features that Swift classes can support but Swift structs cannot?",
      "answer": "Inheritance, Deinitializers, Reference Semantics, Multiple References to a Single Instance",
      "category": "weekly",
      "code": `class Animal {}
      class Dog: Animal {}`
    },
    {
      "id": 80,
      "question": "Name various steps (or execution states) involved in the development of an iOS Swift application.",
      "answer": "Idea/Concept, Design, Development, Testing, Debugging, Deployment, Maintenance/Updates",
      "category": "weekly",
      "code": `// Steps for iOS Development
      // 1. Idea/Concept
      // 2. Design
      // 3. Development
      // 4. Testing
      // 5. Debugging
      // 6. Deployment
      // 7. Maintenance/Updates`
    },
    {
      "id": 81,
      "question": "Name the JSON framework which is supported by iOS.",
      "answer": "The primary JSON framework supported by iOS is Codable (introduced in Swift 4). Use SBJson only for maintaining legacy Objective-C projects.",
      "category": "weekly",
      "code": `struct User: Codable {
          let name: String
          let age: Int
      }`
    },
    {
      "id": 82,
      "question": "What is the use of the 'mutating' keyword in iOS Swift?",
      "answer": "The mutating keyword allows methods inside value types (like struct or enum) to modify their own properties or change their instance state.",
      "category": "weekly",
      "code": `struct Example {
          var value: Int
          mutating func updateValue(newValue: Int) {
              value = newValue
          }
      }`
    },
    {
      "id": 83,
      "question": "Name a low-level API for controlling several operations at the same time.",
      "answer": "Grand Central Dispatch (GCD) is the low-level API in Swift for managing concurrent tasks and improving performance.",
      "category": "weekly",
      "code": `DispatchQueue.global().async {
          print("Executing task in background")
      }`
    },

  // Next week updates: 07.04.2025

    {
      "id": 84,
      "question": "Which SOLID principle advises splitting large interfaces into smaller, more focused ones to prevent forcing clients to implement unnecessary methods?",
      "answer": "Interface Segregation Principle (ISP)",
      "category": "weekly",
      "code": `protocol Printer {
          func printDocument()
      }

      protocol Scanner {
          func scanDocument()
      }`
    },
    {
      "id": 85,
      "question": "Which SOLID principle encourages extending functionality without modifying existing code?",
      "answer": "Open/Closed Principle (OCP)",
      "category": "weekly",
      "code": `protocol Shape {
          func area() -> Double
      }

      class Circle: Shape {
          let radius: Double
          init(radius: Double) { self.radius = radius }
          func area() -> Double { return Double.pi * radius * radius }
      }`
    },
    {
      "id": 86,
      "question": "Which SOLID principle emphasizes that a class should have only one reason to change?",
      "answer": "Single Responsibility Principle (SRP)",
      "category": "weekly",
      "code": `class ReportGenerator {
          func generateReport() { print("Generating report") }
      }

      class ReportSaver {
          func saveReport() { print("Saving report") }
      }`
    },
    {
      "id": 87,
      "question": "Which SOLID principle encourages high-level modules to depend on abstractions rather than concrete implementations?",
      "answer": "Dependency Inversion Principle (DIP)",
      "category": "weekly",
      "code": `protocol DataSource {
          func fetchData() -> String
      }

      class APIService: DataSource {
          func fetchData() -> String { return "Data from API" }
      }

      class DataManager {
          let dataSource: DataSource
          init(dataSource: DataSource) { self.dataSource = dataSource }
      }`
    },
    {
      "id": 88,
      "question": "In the context of SOLID, which principle ensures that derived classes should be substitutable for their base classes without breaking functionality?",
      "answer": "Liskov Substitution Principle (LSP)",
      "category": "weekly",
      "code": `class Bird {
          func fly() { print("Flying") }
      }

      class Sparrow: Bird {} // Can still fly`
    },
    {
      "id": 89,
      "question": "Which GCD method is used to execute a task asynchronously on a background thread?",
      "answer": "DispatchQueue.global().async",
      "category": "weekly",
      "code": `DispatchQueue.global().async {
          print("Running in background")
      }`
    },
    {
      "id": 90,
      "question": "What is the primary purpose of DispatchQueue.main.async in Swift?",
      "answer": "To execute UI updates on the main thread.",
      "category": "weekly",
      "code": `DispatchQueue.main.async {
          print("Updating UI on main thread")
      }`
    },
    {
      "id": 91,
      "question": "Which GCD function is ideal for delaying task execution by a specified time interval?",
      "answer": "asyncAfter",
      "category": "weekly",
      "code": `DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
          print("Executed after delay")
      }`
    },
    {
      "id": 92,
      "question": "What is the difference between .async and .sync in GCD?",
      "answer": ".async (non-blocking) vs .sync (blocking) for better performance.",
      "category": "weekly",
      "code": `DispatchQueue.global().async {
          print("Runs in background (non-blocking)")
      }

      DispatchQueue.global().sync {
          print("Runs in background (blocking)")
      }`
    },
    {
      "id": 93,
      "question": "Which GCD construct is used to manage concurrent execution of multiple tasks efficiently?",
      "answer": "DispatchGroup",
      "category": "weekly",
      "code": `let group = DispatchGroup()

      DispatchQueue.global().async(group: group) {
          print("Task 1")
      }

      DispatchQueue.global().async(group: group) {
          print("Task 2")
      }

      group.notify(queue: DispatchQueue.main) {
          print("All tasks completed")
      }`
    },
  
    {
      "id": 94,
      "question": "How does DispatchSemaphore help in synchronizing concurrent tasks?",
      "answer": "DispatchSemaphore is useful for locking and controlling access to tasks in a concurrent environment. It ensures that only a limited number of threads can execute a critical section at the same time, preventing race conditions and resource conflicts.",
      "category": "weekly",
      "code": `let semaphore = DispatchSemaphore(value: 1)

      DispatchQueue.global().async {
          semaphore.wait()
          print("Executing task safely")
          semaphore.signal()
      }`
    },
    {
      "id": 95,
      "question": "What is the purpose of DispatchWorkItem in GCD? Can it be cancelled?",
      "answer": "A DispatchWorkItem is a block of code that can be executed asynchronously or synchronously on a GCD queue. You can cancel a DispatchWorkItem, but cancellation doesn’t stop execution if it has already started. Instead, you need to check workItem.isCancelled inside the task.",
      "category": "weekly",
      "code": `let workItem = DispatchWorkItem {
          if !workItem.isCancelled {
              print("Executing work item")
          }
      }

      DispatchQueue.global().async(execute: workItem)
      workItem.cancel()`
    },
    {
      "id": 96,
      "question": "Explain the difference between .concurrent and .serial queues in GCD.",
      "answer": "Serial Queue: Tasks execute one after another in order. Concurrent Queue: Tasks start simultaneously but finish independently.",
      "category": "weekly",
      "code": `let serialQueue = DispatchQueue(label: "com.example.serial")
      let concurrentQueue = DispatchQueue(label: "com.example.concurrent", attributes: .concurrent)

      serialQueue.async {
          print("Task 1 in serial queue")
      }

      concurrentQueue.async {
          print("Task 1 in concurrent queue")
      }`
    },
    {
      "id": 97,
      "question": "How can you prevent race conditions using GCD in Swift?",
      "answer": "By: Serial Queue, DispatchBarrier for thread-safe writes, DispatchSemaphore to control access",
      "category": "weekly",
      "code": `let queue = DispatchQueue(label: "com.example.serialQueue")

      queue.sync {
          print("Executing safely")
      }`
    },
    {
      "id": 98,
      "question": "How does OperationQueue differ from GCD queues?",
      "answer": "Use GCD for lightweight, performance-oriented tasks. Use OperationQueue when you need task dependencies, cancellation, and priority handling.",
      "category": "weekly",
      "code": `let operationQueue = OperationQueue()
      operationQueue.maxConcurrentOperationCount = 2

      let operation1 = BlockOperation {
          print("Task 1")
      }

      operationQueue.addOperation(operation1)`
    },
    {
      "id": 99,
      "question": "What is the purpose of the maxConcurrentOperationCount property in OperationQueue?",
      "answer": "maxConcurrentOperationCount controls the number of operations that can execute at the same time in an OperationQueue.",
      "category": "weekly",
      "code": `let queue = OperationQueue()
      queue.maxConcurrentOperationCount = 2`
    },
    {
      "id": 100,
      "question": "Explain how dependencies work in Operation objects.",
      "answer": "Dependencies in Operation ensure that one operation waits for another before executing.",
      "category": "weekly",
      "code": `let operation1 = BlockOperation { print("Task 1") }
      let operation2 = BlockOperation { print("Task 2 after Task 1") }

      operation2.addDependency(operation1)

      let queue = OperationQueue()
      queue.addOperations([operation1, operation2], waitUntilFinished: false)`
    },
    {
      "id": 101,
      "question": "How can you cancel an operation in OperationQueue?",
      "answer": "You can cancel an operation using the cancel() method, but you must check isCancelled inside the operation to stop execution early.",
      "category": "weekly",
      "code": `let operation = BlockOperation {
          if !operation.isCancelled {
              print("Executing operation")
          }
      }

      operation.cancel()`
    },
    {
      "id": 102,
      "question": "What is the advantage of using OperationQueue over GCD for complex task management?",
      "answer": `Advantages of OperationQueue Over GCD for Complex Task Management: 
      1️⃣ Task Dependencies 
      2️⃣ Task Cancellation 
      3️⃣ Task Priorities 
      4️⃣ Observability 
      5️⃣ Reusability & Reconfiguration`,
      "category": "weekly",
      "code": `let queue = OperationQueue()
      queue.maxConcurrentOperationCount = 3`
    },
    {
      "id": 103,
      "question": "What is BlockOperation in Swift, and how is it used?",
      "answer": "BlockOperation allows adding multiple execution blocks, and they run concurrently if system resources allow.",
      "category": "weekly",
      "code": `let operation = BlockOperation {
          print("Executing block operation")
      }

      let queue = OperationQueue()
      queue.addOperation(operation)`
    },

    {
      "id": 104,
      "question": "How can you add multiple execution blocks in a BlockOperation?",
      "answer": "Via the addExecutionBlock method. This allows executing multiple blocks concurrently within the same operation.",
      "category": "weekly",
      "code": `let blockOperation = BlockOperation()

      blockOperation.addExecutionBlock { 
          print("Task 1") 
      }

      blockOperation.addExecutionBlock { 
          print("Task 2") 
      }

      blockOperation.start()`
    },
    {
      "id": 105,
      "question": "What happens if a BlockOperation is cancelled before all blocks finish execution?",
      "answer": "If a BlockOperation is cancelled, any remaining execution blocks do not start. However, blocks that are already executing will continue unless explicitly checking for isCancelled.",
      "category": "weekly",
      "code": `let blockOperation = BlockOperation()

      blockOperation.addExecutionBlock {
          if !blockOperation.isCancelled {
              print("Executing Task")
          }
      }

      blockOperation.cancel()`
    },
    {
      "id": 106,
      "question": "How does BlockOperation handle concurrency?",
      "answer": "BlockOperation executes its blocks concurrently on different threads, improving performance when multiple execution blocks are added.",
      "category": "weekly",
      "code": `let blockOperation = BlockOperation()

      blockOperation.addExecutionBlock { print("Task 1") }
      blockOperation.addExecutionBlock { print("Task 2") }
      blockOperation.addExecutionBlock { print("Task 3") }

      let operationQueue = OperationQueue()
      operationQueue.addOperation(blockOperation)`
    },
    {
      "id": 107,
      "question": "How can you observe the completion state of a BlockOperation?",
      "answer": "Via completionBlock property of BlockOperation to execute a task after all blocks have finished executing.",
      "category": "weekly",
      "code": `let blockOperation = BlockOperation()

      blockOperation.addExecutionBlock { print("Task 1") }
      blockOperation.addExecutionBlock { print("Task 2") }

      blockOperation.completionBlock = {
          print("All tasks completed")
      }

      let operationQueue = OperationQueue()
      operationQueue.addOperation(blockOperation)`
    },
    {
      "id": 108,
      "question": "What is the purpose of the NSObject class in Swift?",
      "answer": "NSObject is the root class of most Objective-C classes. It provides basic functionalities such as KVO (Key-Value Observing), NSCoding for encoding/decoding objects, and selector-based messaging.",
      "category": "weekly",
      "code": `class MyClass: NSObject {
          @objc dynamic var name: String = "Default"
      }

      let myObject = MyClass()
      myObject.name = "Updated Name"`
    },

    {
      "id": 109,
      "question": "How is NSObject different from Swift’s native classes?",
      "answer": "NSObject is the base class for most Objective-C classes, providing runtime features like KVO, NSCoding, and selector-based messaging. Swift’s native classes don’t inherit from NSObject but can use modern Swift features like structs, enums, and protocols.",
      "category": "weekly",
      "code": `class MyNSObjectClass: NSObject {
          @objc dynamic var value: String = "Hello"
      }

      class MySwiftClass {
          var value: String = "Hello"
      }

      let obj1 = MyNSObjectClass()
      let obj2 = MySwiftClass()`
    },
    {
      "id": 110,
      "question": "What is isEqual(_:) in NSObject, and when should it be overridden?",
      "answer": "isEqual(_:) is used to compare two instances of an NSObject subclass. It should be overridden to define custom equality logic for your objects.",
      "category": "weekly",
      "code": `class MyClass: NSObject {
          var id: Int

          init(id: Int) {
              self.id = id
          }

          override func isEqual(_ object: Any?) -> Bool {
              guard let other = object as? MyClass else { return false }
              return self.id == other.id
          }
      }

      let obj1 = MyClass(id: 1)
      let obj2 = MyClass(id: 1)

      print(obj1.isEqual(obj2)) // true`
    },
    {
      "id": 111,
      "question": "How can you use KVO (Key-Value Observing) with NSObject in Swift?",
      "answer": "KVO (Key-Value Observing) allows observing property changes. The class must inherit from NSObject and use @objc dynamic for properties.",
      "category": "weekly",
      "code": `class MyObservableClass: NSObject {
          @objc dynamic var count: Int = 0
      }

      let myObject = MyObservableClass()
      let observer = myObject.observe(\\MyObservableClass.count, options: [.new]) { object, change in
          print("New value: \(change.newValue ?? 0)")
      }

      myObject.count = 5 // New value: 5`
    },
    {
      "id": 112,
      "question": "What is the role of NSCoding in data persistence, and how is it implemented in Swift?",
      "answer": "NSCoding is a protocol for encoding and decoding objects for persistence. It is typically used with NSKeyedArchiver and NSKeyedUnarchiver.",
      "category": "weekly",
      "code": `class User: NSObject, NSCoding {
          var name: String

          init(name: String) {
              self.name = name
          }

          func encode(with coder: NSCoder) {
              coder.encode(name, forKey: "name")
          }

          required init?(coder: NSCoder) {
              self.name = coder.decodeObject(forKey: "name") as? String ?? ""
          }
      }

      let user = User(name: "Alice")
      let data = try? NSKeyedArchiver.archivedData(withRootObject: user, requiringSecureCoding: false)

      if let data = data,
         let decodedUser = try? NSKeyedUnarchiver.unarchiveTopLevelObjectWithData(data) as? User {
          print(decodedUser.name) // Alice
      }`
    },
    {
      "id": 113,
      "question": "How does NSObject help in conforming to Objective-C protocols in Swift?",
      "answer": "NSObject enables Swift classes to conform to Objective-C protocols (e.g., UITableViewDelegate) by inheriting Objective-C runtime features.",
      "category": "weekly",
      "code": `class MyTableViewDelegate: NSObject, UITableViewDelegate {
          func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
              print("Row \(indexPath.row) selected")
          }
      }

      let delegate = MyTableViewDelegate()
      let tableView = UITableView()
      tableView.delegate = delegate`
    },

  
    {
      "id": 114,
      "question": "How does DispatchBarrier improve thread safety in concurrent queues?",
      "answer": "A Dispatch Barrier ensures that read tasks run concurrently, but write tasks execute exclusively, preventing race conditions in concurrent queues.",
      "category": "concurrency",
      "code": `let concurrentQueue = DispatchQueue(label: "com.example.concurrent", attributes: .concurrent)

  concurrentQueue.async {
      print("Reading data")
  }

  concurrentQueue.async(flags: .barrier) {
      print("Writing data exclusively")
  }`
    },
    {
      "id": 115,
      "question": "What is DispatchSource, and when would you use it?",
      "answer": "DispatchSource is a low-level GCD API for handling system-level events like timers, signals, file system monitoring, or process events.",
      "category": "concurrency",
      "code": `let timer = DispatchSource.makeTimerSource()

  timer.schedule(deadline: .now(), repeating: 5)
  timer.setEventHandler {
      print("Timer fired!")
  }
  timer.resume()`
    },
    {
      "id": 116,
      "question": "How do @synchronized and NSLock differ in Swift concurrency control?",
      "answer": "@synchronized (Objective-C) automatically manages locks around a code block. NSLock (Swift) is a manual locking mechanism, offering more control but requiring explicit lock and unlock calls.",
      "category": "concurrency",
      "code": `let lock = NSLock()

  lock.lock()
  print("Critical section protected by NSLock")
  lock.unlock()`
    },
    {
      "id": 117,
      "question": "How can you efficiently manage UI updates after performing background tasks?",
      "answer": "After background processing, you can use DispatchQueue.main.async to update the UI on the main thread safely.",
      "category": "concurrency",
      "code": `DispatchQueue.global().async {
      // Background work
      let result = heavyComputation()

      DispatchQueue.main.async {
          // UI update
          self.label.text = result
      }
  }`
    },
    {
      "id": 118,
      "question": "Explain the purpose and use of performSelector(inBackground:) in Objective-C and how it translates in Swift",
      "answer": "performSelector(inBackground:) in Objective-C runs a method in a background thread. In Swift, DispatchQueue.global().async achieves similar behavior.",
      "category": "concurrency",
      "code": `DispatchQueue.global().async {
      self.doBackgroundTask()
  }`
    },
  
  
    {
      "id": 119,
      "question": "How does the system determine the number of threads to allocate for concurrent queues in GCD?",
      "answer": "GCD uses a dynamic thread pool managed by the system. It adjusts the number of threads based on system load (CPU & memory availability), number of cores in the device, current workload of the app, and thread contention & priority levels.",
      "category": "concurrency",
      "code": `// No direct code example; GCD manages this automatically.
  let queue = DispatchQueue.global(qos: .default)

  queue.async {
      // GCD automatically manages the thread allocation
      print("Running in background")
  }`
    },
    {
      "id": 120,
      "question": "What are the potential risks of using GCD for long-running tasks?",
      "answer": "Using GCD for long-running tasks can cause thread starvation (delaying other tasks), memory pressure (too many threads alive), and thread explosion if too many tasks are dispatched simultaneously without control.",
      "category": "concurrency",
      "code": `let queue = DispatchQueue.global(qos: .background)

  queue.async {
      while true {
          // Simulate a long-running infinite task
          print("Running forever, risking starvation")
      }
  }`
    },
    {
      "id": 121,
      "question": "How does GCD handle thread explosion, and how can you prevent it?",
      "answer": "GCD manages a thread pool to limit active threads. To prevent thread explosion, use fewer concurrent tasks, semaphores, DispatchWorkItem cancellation, or OperationQueue with maxConcurrentOperationCount.",
      "category": "concurrency",
      "code": `let semaphore = DispatchSemaphore(value: 2)

  for _ in 0..<10 {
      DispatchQueue.global().async {
          semaphore.wait()
          print("Controlled task started")
          sleep(2)
          semaphore.signal()
      }
  }`
    },
    {
      "id": 122,
      "question": "Why is GCD considered more efficient than manually creating threads?",
      "answer": "GCD reuses threads from a pool, reducing the overhead of creating/destroying threads. It dynamically adjusts to system resources, improves battery life, and reduces context-switching compared to manual thread management.",
      "category": "concurrency",
      "code": `let queue = DispatchQueue.global()

  queue.async {
      print("Task 1 executed efficiently")
  }

  queue.async {
      print("Task 2 executed efficiently")
  }`
    },
    {
      "id": 123,
      "question": "Can you use DispatchQueue.main.async inside a background thread? What happens?",
      "answer": "Yes, you can use DispatchQueue.main.async inside a background thread. It schedules the task back to the main queue, ensuring UI updates or main-thread operations happen safely.",
      "category": "concurrency",
      "code": `DispatchQueue.global().async {
      // Background thread
      print("Doing background work")

      DispatchQueue.main.async {
          // Back to the main thread
          print("Updating UI on the main thread")
      }
  }`
    },
  
  
    {
      "id": 124,
      "question": "How does GCD handle autorelease pools in background threads?",
      "answer": "In the main thread, an autorelease pool is automatically created and drained at the end of each run loop cycle. In background queues, GCD does not automatically create an autorelease pool, so you should manually create one if you are using Objective-C objects that rely on autorelease.",
      "category": "concurrency",
      "code": `DispatchQueue.global().async {
      autoreleasepool {
          // Your background task
          let object = SomeObjectiveCClass()
          object.doSomething()
      }
  }`
    },
    {
      "id": 125,
      "question": "What are the memory implications of using DispatchQueue.global() excessively?",
      "answer": "Excessive use of DispatchQueue.global() can lead to thread explosion, memory leaks, and increased power consumption because each task might create more system threads than necessary, overwhelming system resources.",
      "category": "concurrency",
      "code": `// Good practice: Use a custom queue if needed
  let customQueue = DispatchQueue(label: "com.example.customQueue", attributes: .concurrent)

  customQueue.async {
      // Perform background work
  }`
    },
    {
      "id": 126,
      "question": "What happens if a DispatchWorkItem is executed but the reference to it is lost?",
      "answer": "If a DispatchWorkItem is scheduled and its reference is lost, it will still execute if it has already been submitted to a queue. Losing the reference mainly means you can no longer cancel or observe its completion.",
      "category": "concurrency",
      "code": `let workItem = DispatchWorkItem {
      print("Task executed")
  }

  DispatchQueue.global().async(execute: workItem)

  // workItem reference lost after this point, but task still executes`
    },
    {
      "id": 127,
      "question": "How does DispatchQueue.concurrentPerform(iterations:_:) work, and when should it be used?",
      "answer": "DispatchQueue.concurrentPerform executes a block of code multiple times in parallel using a pool of threads. It's useful for parallelizing simple, independent computations across multiple cores.",
      "category": "concurrency",
      "code": `DispatchQueue.concurrentPerform(iterations: 5) { index in
      print("Running task \\(index)")
  }`
    },
    {
      "id": 128,
      "question": "Explain why a strong reference cycle might occur when using self inside a DispatchQueue.async block.",
      "answer": "A strong reference cycle occurs if self is strongly captured inside an async closure, causing the object to never get deallocated. Always use [weak self] or [unowned self] to avoid memory leaks.",
      "category": "concurrency",
      "code": `DispatchQueue.global().async { [weak self] in
      self?.performTask()
  }`
    },
  
    {
      "id": 129,
      "question": "What happens if DispatchQueue.asyncAfter(deadline:) is called inside a synchronous block?",
      "answer": "If DispatchQueue.asyncAfter(deadline:) is called inside a synchronous block, it does not block the current execution. The synchronous block will continue executing immediately, while the delayed task will be scheduled independently on the specified queue.",
      "category": "concurrency",
      "code": `DispatchQueue.global().sync {
      DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
          print("Executed after 2 seconds")
      }
      print("Synchronous block completed")
  }`
    },
    {
      "id": 130,
      "question": "How can you cancel a delayed execution scheduled via DispatchQueue.asyncAfter(deadline:)?",
      "answer": "DispatchQueue.asyncAfter(deadline:) itself cannot be directly canceled. To enable cancellation, wrap the delayed task in a DispatchWorkItem and call cancel() on it before it executes.",
      "category": "concurrency",
      "code": `let workItem = DispatchWorkItem {
      print("This might be canceled")
  }

  DispatchQueue.main.asyncAfter(deadline: .now() + 5, execute: workItem)

  // To cancel
  workItem.cancel()`
    },
    {
      "id": 131,
      "question": "What is the difference between DispatchSourceTimer and DispatchQueue.asyncAfter?",
      "answer": "DispatchQueue.asyncAfter schedules a single task to run after a delay. DispatchSourceTimer, on the other hand, provides more precise control, supports repeated executions, and can be resumed or suspended.",
      "category": "concurrency",
      "code": `let timer = DispatchSource.makeTimerSource()

  timer.schedule(deadline: .now(), repeating: 5)
  timer.setEventHandler {
      print("Timer fired")
  }
  timer.resume()`
    },
    {
      "id": 132,
      "question": "How do you implement periodic tasks in GCD?",
      "answer": "You can use DispatchSourceTimer to implement periodic tasks efficiently by scheduling it with a repeating interval.",
      "category": "concurrency",
      "code": `let timer = DispatchSource.makeTimerSource(queue: DispatchQueue.global())

  timer.schedule(deadline: .now(), repeating: 10)
  timer.setEventHandler {
      print("Repeating task executed")
  }
  timer.resume()`
    },
    {
      "id": 133,
      "question": "Why should you avoid using sleep() inside a GCD queue?",
      "answer": "Using sleep() inside a GCD queue blocks the thread entirely, wasting system resources. It prevents other tasks from running efficiently, leading to poor performance. Instead, prefer non-blocking delays like DispatchQueue.asyncAfter or timers.",
      "category": "concurrency",
      "code": `// Bad practice
  DispatchQueue.global().async {
      sleep(5)
      print("This blocks the thread")
  }

  // Good practice i.e. Non-blocking delay
  DispatchQueue.global().asyncAfter(deadline: .now() + 5) {
      print("Non-blocking delay")
  }`
    },
  
   // SWIFT 6 QUESTIONS & ANSWERS
    {
      id: 134,
      question: "What new features were introduced in Swift 6 for concurrency?",
      answer:
        "Swift 6 introduces further improvements to structured concurrency, building on the async/await model. New async let syntax allows for concurrent asynchronous tasks and task groups for parallel execution.",
      category: "updates",
      code: `async let task1 = fetchData()
      async let task2 = fetchData()
      let results = await [task1, task2]`,
    },
    {
      id: 135,
      question:
        "How does Swift 6 improve the use of Result type with async/await?",
      answer:
        "Swift 6 enhances the integration of Result with async/await, making it easier to handle success and failure cases directly in async functions, reducing the need for manual error handling.",
      category: "updates",
      code: `func fetchData() async -> Result<String, Error> {
          do {
              let data = try await someNetworkCall()
              return .success(data)
          } catch {
              return .failure(error)
          }
      }

      async let result = fetchData()`,
    },
    {
      id: 136,
      question:
        "What new syntax changes in Swift 6 make error handling more concise?",
      answer:
        "Swift 6 allows you to directly use try within async closures, reducing boilerplate code when handling errors and making async error handling more streamlined.",
      category: "updates",
      code: `func fetchData() async throws -> String {
          let data = try await someNetworkCall()
          return data
      }

      async {
          do {
              let data = try await fetchData()
              print(data)
          } catch {
              print("Error: \(error)")
          }
      }`,
    },
    {
      id: 137,
      question:
        "How does Swift 6 enhance type safety and flexibility with enum types?",
      answer:
        "Swift 6 introduces improvements to enums, allowing them to support associated values in protocols and better pattern matching for more flexible and type-safe code.",
      category: "updates",
      code: `protocol Shape {
          var area: Double { get }
      }

      enum ShapeType: Shape {
          case rectangle(width: Double, height: Double)
          case circle(radius: Double)

          var area: Double {
              switch self {
              case .rectangle(let width, let height):
                  return width * height
              case .circle(let radius):
                  return .pi * radius * radius
              }
          }
      }`,
    },
    {
      id: 138,
      question: "What are the updates in Swift 6 regarding property wrappers?",
      answer:
        "Swift 6 enhances property wrappers by adding automatic keypath-based initialization and better support for protocols, improving their reusability and efficiency.",
      category: "updates",
      code: `@propertyWrapper
      struct Clamped<Value: Comparable> {
          var value: Value
          var range: ClosedRange<Value>

          init(wrappedValue: Value, range: ClosedRange<Value>) {
              self.value = wrappedValue
              self.range = range
          }

          var wrappedValue: Value {
              get { return value }
              set { value = min(max(newValue, range.lowerBound), range.upperBound) }
          }
      }

      struct Settings {
          @Clamped(range: 0...10) var brightness: Int
      }

      var settings = Settings(brightness: 15)
      print(settings.brightness)  // Output: 10`,
    },
    {
      id: 139,
      question: "What improvements to generics have been introduced in Swift 6?",
      answer:
        "Swift 6 introduces more powerful generic constraints, improved support for existential types, and efficient type inference, making generics more flexible and error-proof.",
      category: "updates",
      code: `func printData<T: CustomStringConvertible>(data: T) {
          print(data.description)
      }

      struct MyStruct: CustomStringConvertible {
          var description: String { "MyStruct data" }
      }

      printData(data: MyStruct())  // Output: MyStruct data`,
    },
    {
      id: 140,
      question:
        "How has Swift 6 improved the use of async/await with structured concurrency?",
      answer:
        "Swift 6 refines the structured concurrency model, allowing better handling of task groups and cancellation propagation. Async let enables concurrent tasks to run more efficiently.",
      category: "updates",
      code: `async let task1 = fetchData()
      async let task2 = fetchData()
      await [task1, task2]`,
    },
    {
      id: 141,
      question:
        "What new features related to memory management have been introduced in Swift 6?",
      answer:
        "Swift 6 improves memory management with better support for weak and strong references, making memory handling more predictable and error-resistant in high-performance applications.",
      category: "updates",
      code: `class MyClass {
          weak var delegate: SomeDelegate?
          var strongReference: SomeDelegate?
      }`,
    },
    {
      id: 142,
      question: "What are the new enhancements to defer in Swift 6?",
      answer:
        "Swift 6 enhances the defer statement by allowing multiple defer statements within a scope and ensuring that they are executed in the reverse order, providing better control over cleanup tasks.",
      category: "updates",
      code: `func testDefer() {
          defer { print("First defer") }
          defer { print("Second defer") }
          print("Code executed before defer")
      }

      testDefer() 
      // Output:
      // Code executed before defer
      // Second defer
      // First defer`,
    },

    {
      id: 143,
      question: "How has Swift 6 improved support for regular expressions?",
      answer:
        "Swift 6 introduces native support for regular expressions with a new syntax and API, making it easier and more efficient to work with regular expressions in Swift code.",
      category: "updates",
      code: `let regex = try! NSRegularExpression(pattern: "\\d{3}-\\d{2}-\\d{4}", options: [])
    let testString = "123-45-6789"
    let range = NSRange(testString.startIndex..., in: testString)
    let match = regex.firstMatch(in: testString, options: [], range: range)

    if let match = match {
        print("Match found: \(testString[Range(match.range, in: testString)!])")
    } else {
        print("No match found")
    }`,
    },

    // CORE DATA QUESTIONS & ANSWERS

    {
      id: 144,
      question:
        "What is Core Data, and how does it differ from an SQLite database?",
      code: `KeyPoints:
        • Core Data is an object graph and persistence framework from Apple.
        • While it can use SQLite as a persistent store, it’s more than a simple database.
        • Core Data manages object lifecycles, relationships, change tracking, undo/redo, and faulting.
        • SQLite is just a database engine; Core Data is a higher-level abstraction.`,
      category: "coredata",
    },
    {
      id: 145,
      question: "Describe the Core Data stack and its main components.",
      code: `KeyPoints:
        • NSManagedObjectModel – Defines the schema of entities and relationships.
        • NSPersistentStoreCoordinator – Coordinates between model and physical store.
        • NSManagedObjectContext – Handles object life cycle and changes.
        • NSPersistentContainer – High-level abstraction that encapsulates the full stack.`,
      category: "coredata",
    },
    {
      id: 146,
      question: "What is the significance of data migrations in Core Data?",
      code: `KeyPoints:
      • Data migrations are necessary when the schema of the Core Data model changes.
      • Core Data supports lightweight migration, but custom mapping models can be used for complex migrations.
      • Migration ensures that the data remains compatible with the new version of the model.`,
      category: "coredata",
    },
    {
      id: 147,
      question:
        "Explain the difference between .mainQueueConcurrencyType and .privateQueueConcurrencyType.",
      code: `KeyPoints:
        • .mainQueueConcurrencyType: MOC is tied to the main thread, suitable for UI-related tasks.
        • .privateQueueConcurrencyType: MOC uses its own queue, used for background processing.
        • Accessing objects outside their queue leads to undefined behavior.`,
      category: "coredata",
    },
    {
      id: 148,
      question:
        "What are the different persistent store types available in Core Data?",
      code: `KeyPoints:
        • SQLite – default and most commonly used.
        • Binary – stores as a binary file.
        • In-memory – does not persist between app launches.
        • CloudKit-backed store – introduced in iOS 13 for syncing with iCloud.`,
      category: "coredata",
    },
    {
      id: 149,
      question: "What is faulting in Core Data?",
      code: `KeyPoints:
        • Faulting is a mechanism for lazy loading.
        • Placeholder objects are returned until data is needed.
        • Reduces memory footprint and improves performance.`,
      category: "coredata",
    },
    {
      id: 150,
      question: "How do you pass a Core Data object between threads?",
      code: `KeyPoints:
        • Managed objects are not thread-safe.
        • Use NSManagedObjectID to pass references.
        • Re-fetch the object using the destination context.`,
      category: "coredata",
    },
    {
      id: 151,
      question: "What is an NSFetchedResultsController?",
      code: `KeyPoints:
        • Designed to efficiently manage table/collection view data.
        • Monitors changes in the managed object context.
        • Automatically notifies delegate of insertions, deletions, and updates.`,
      category: "coredata",
    },
    {
      id: 152,
      question: "What is lightweight migration in Core Data?",
      code: `KeyPoints:
        • Used for simple model changes.
        • No need for a custom mapping model.
        • Requires setting options on the persistent store coordinator.
        • Uses inferred mapping by comparing old and new models.`,
      category: "coredata",
    },
    {
      id: 153,
      question: "How does Core Data differ from Realm or SQLite directly?",
      code: `KeyPoints:
        • Core Data is an object graph framework with rich features.
        • Realm is a modern, mobile-first database with its own engine.
        • SQLite is a raw relational database.
        • Core Data supports undo, versioning, and relationships out of the box.`,
      category: "coredata",
    },
    {
      id: 154,
      question: "What is an NSManagedObject?",
      code: `KeyPoints:
        • NSManagedObject is a generic class that implements all Core Data model objects.
        • It represents a single object stored in Core Data.
        • It is dynamically created based on the model and can be customized.`,
      category: "coredata",
    },
    {
      id: 155,
      question: "What is a managed object model version?",
      code: `KeyPoints:
        • A versioned model allows you to evolve your data schema.
        • It is required for lightweight and manual migrations.
        • Each version defines a snapshot of your model.`,
      category: "coredata",
    },
    {
      id: 156,
      question: "What is a transformable attribute in Core Data?",
      code: `KeyPoints:
        • Used for storing custom types not natively supported by Core Data.
        • NSValueTransformer is used to convert between stored and runtime formats.
        • Can lead to issues with data migration if not managed carefully.`,
      category: "coredata",
    },
    {
      id: 157,
      question: "How does Core Data handle relationships?",
      code: `KeyPoints:
        • Supports to-one and to-many relationships.
        • Relationships can be optional or required.
        • You can define inverse relationships to maintain consistency.
        • Supports delete rules like nullify, cascade, deny, and no action.`,
      category: "coredata",
    },
    {
      id: 158,
      question: "What are fetched properties in Core Data?",
      code: `KeyPoints:
        • A fetched property is a dynamic relationship.
        • It does not persist and is evaluated using a fetch request.
        • Useful for expressing queries based on criteria rather than fixed links.`,
      category: "coredata",
    },
    {
      id: 159,
      question: "How does undo and redo work in Core Data?",
      code: `KeyPoints:
        • NSManagedObjectContext provides built-in undo/redo support.
        • You need to register undo operations explicitly.
        • Works best when integrated with the undo manager.`,
      category: "coredata",
    },
    {
      id: 160,
      question: "What are merge policies in Core Data?",
      code: `KeyPoints:
        • Used when saving conflicting changes in different contexts.
        • Options include error, property store trump, property object trump, overwrite, and rollback.
        • Important in multithreaded and syncing environments.`,
      category: "coredata",
    },
    {
      id: 161,
      question: "What is an NSManagedObjectID?",
      code: `KeyPoints:
        • NSManagedObjectID uniquely identifies an object within Core Data.
        • It’s useful for passing references between contexts.
        • Essential for managing objects across multiple threads.`,
      category: "coredata",
    },
    {
      id: 162,
      question: "Explain the concept of object lifecycle in Core Data.",
      code: `KeyPoints:
        • Core Data manages objects’ lifecycle from creation to deletion.
        • Managed objects can be inserted, updated, or deleted from the context.
        • Objects can be saved, discarded, or invalidated based on lifecycle events.`,
      category: "coredata",
    },
    {
      id: 163,
      question: "What is a context in Core Data?",
      code: `KeyPoints:
        • An NSManagedObjectContext is an in-memory representation of managed objects.
        • It acts as a temporary workspace for managing objects.
        • Changes are committed to the persistent store when saved.`,
      category: "coredata",
    },
    {
      id: 164,
      question: "What are validation rules in Core Data?",
      code: `KeyPoints:
        • Validation rules ensure data consistency.
        • Can be added to model attributes to enforce data constraints.
        • Core Data provides automatic validation, but custom validation can be implemented.`,
      category: "coredata",
    },
    {
      id: 165,
      question:
        "What is the difference between NSManagedObject and NSManagedObjectModel?",
      code: `KeyPoints:
        • NSManagedObject represents an instance of an entity.
        • NSManagedObjectModel is the blueprint that defines the structure of entities in the data model.
        • NSManagedObjectModel is used to configure the persistent store.`,
      category: "coredata",
    },
    {
      id: 166,
      question: "How do you handle versioned data models in Core Data?",
      code: `KeyPoints:
        • You use lightweight migrations to handle schema changes.
        • You can add new entities, attributes, or relationships in new versions.
        • The system automatically performs the migration based on the model versions.`,
      category: "coredata",
    },
    {
      id: 167,
      question: "What is the purpose of the NSFetchedResultsController delegate?",
      code: `KeyPoints:
        • The delegate responds to changes in fetched results.
        • It notifies of changes like insertions, deletions, and updates.
        • Useful for integrating with UITableView or UICollectionView.`,
      category: "coredata",
    },
    {
      id: 168,
      question: "What is the use of NSBatchDeleteRequest in Core Data?",
      code: `KeyPoints:
      • NSBatchDeleteRequest allows you to delete objects in a batch.
      • It is a more efficient way to delete multiple objects than deleting them individually.
      • It can be used with a fetch request to delete specific objects.`,
      category: "coredata",
    },
    {
      id: 169,
      question: "How can you manage relationships in Core Data?",
      code: `KeyPoints:
      • Use NSSet or NSArray for to-many relationships.
      • Use NSManagedObject for to-one relationships.
      • Inverse relationships must be defined to maintain consistency.
      • Core Data automatically manages the integrity of relationships when saving.`,
      category: "coredata",
    },
    {
      id: 170,
      question: "How do you handle complex queries in Core Data?",
      code: `KeyPoints:
      • Use NSFetchRequest to define complex queries.
      • Predicate is used to filter objects based on specific conditions.
      • Sorting can be added with NSSortDescriptor to control the result order.`,
      category: "coredata",
    },
    {
      id: 171,
      question: "What are batch operations in Core Data?",
      code: `KeyPoints:
      • Batch operations allow you to efficiently perform insert, update, or delete operations on large numbers of objects.
      • NSBatchUpdateRequest and NSBatchDeleteRequest are used for batch operations.
      • Batch operations improve performance by bypassing the need to load objects into memory.`,
      category: "coredata",
    },
    {
      id: 172,
      question: "What is the role of NSPersistentStoreCoordinator?",
      code: `KeyPoints:
      • It is responsible for managing the interaction between the model layer and the persistent store.
      • It loads the store, manages its connection, and coordinates reading and writing operations.
      • It handles data consistency and conflict resolution during save operations.`,
      category: "coredata",
    },
    {
      id: 173,
      question:
        "What is the difference between a fetched property and a relationship in Core Data?",
      code: `KeyPoints:
      • A fetched property is dynamic, calculated at runtime using a fetch request.
      • A relationship is a persistent reference to another object.
      • Fetched properties are not stored in the persistent store, while relationships are.`,
      category: "coredata",
    },
    {
      id: 174,
      question: "How do you optimize performance when using Core Data?",
      code: `KeyPoints:
      • Fetch only the required data using NSFetchRequest with predicates and sorting.
      • Use faulting to reduce memory consumption by loading data lazily.
      • Perform background operations in a separate queue to keep the UI responsive.`,
      category: "coredata",
    },
    {
      id: 175,
      question: "What is the difference between Core Data and UserDefaults?",
      code: `KeyPoints:
      • Core Data is used for complex, relational data storage with support for relationships, undo/redo, and migration.
      • UserDefaults is a simple key-value store for storing small amounts of data like user settings or preferences.
      • Core Data can handle large datasets, while UserDefaults is not intended for large data storage.`,
      category: "coredata",
    },
    {
      id: 176,
      question: "What is the role of NSPersistentContainer in Core Data?",
      code: `KeyPoints:
      • NSPersistentContainer is a high-level API that simplifies Core Data stack setup.
      • It manages the persistent store coordinator, managed object model, and managed object context.
      • It simplifies the integration of Core Data with the app lifecycle.`,
      category: "coredata",
    },
    {
      id: 177,
      question: "How can you perform batch updates in Core Data?",
      code: `KeyPoints:
      • Use NSBatchUpdateRequest to modify multiple objects in a batch.
      • It reduces memory consumption by performing updates on the store directly.
      • It allows for more efficient updates compared to loading objects into memory and modifying them.`,
      category: "coredata",
    },
    {
      id: 178,
      question: "What is NSBatchInsertRequest in Core Data?",
      code: `KeyPoints:
      • NSBatchInsertRequest allows you to insert multiple objects in a batch.
      • It is more efficient than inserting objects one by one.
      • It reduces memory usage and improves performance during large insert operations.`,
      category: "coredata",
    },
    {
      id: 179,
      question: "What are the advantages of using Core Data?",
      code: `KeyPoints:
      • Provides built-in support for object graph management, data persistence, and relationships.
      • Supports undo/redo, change tracking, and data migrations.
      • Optimized for mobile applications, offering efficient memory management and performance.`,
      category: "coredata",
    },
    {
      id: 180,
      question: "What is a migration in Core Data?",
      code: `KeyPoints:
      • Migration is the process of updating the data model when the schema changes.
      • Core Data provides lightweight and manual migration options.
      • Migrations ensure that the data remains compatible with the new model version.`,
      category: "coredata",
    },
    {
      id: 181,
      question: "What is the purpose of NSValueTransformer in Core Data?",
      code: `KeyPoints:
      • NSValueTransformer is used to transform custom data types to and from the persistent store format.
      • It allows Core Data to store non-native types like images or custom objects.
      • It is used in conjunction with transformable attributes in the data model.`,
      category: "coredata",
    },
    {
      id: 182,
      question: "How do you perform a migration with a custom mapping model?",
      code: `KeyPoints:
      • Use NSMappingModel to map old attributes and relationships to new ones.
      • A custom mapping model allows for complex transformations during the migration.
      • You can create a manual migration that specifies exactly how to migrate each attribute and relationship.`,
      category: "coredata",
    },
    {
      id: 183,
      question: "What is the use of NSFetchRequest in Core Data?",
      code: `KeyPoints:
      • NSFetchRequest is used to retrieve data from the persistent store.
      • It allows you to define predicates, sort descriptors, and fetch limits.
      • It is a core component for querying managed objects in Core Data.`,
      category: "coredata",
    },
    {
      id: 184,
      question: "What is a Core Data predicate?",
      code: `KeyPoints:
      • A predicate is used to filter objects based on conditions.
      • It is used in conjunction with NSFetchRequest to limit the results.
      • Predicates can be built using format strings or using NSPredicate methods.`,
      category: "coredata",
    },
    {
      id: 185,
      question: "What is a sort descriptor in Core Data?",
      code: `KeyPoints:
      • A sort descriptor defines the sorting order of fetched results.
      • It is used in conjunction with NSFetchRequest to specify how to order the data.
      • You can sort data by one or more attributes.`,
      category: "coredata",
    },
    {
      id: 186,
      question: "How can you track changes in Core Data?",
      code: `KeyPoints:
      • Core Data automatically tracks changes to managed objects.
      • You can manually register undo operations to track changes.
      • The NSManagedObjectContext tracks changes at the object level, and these changes can be persisted upon save.`,
      category: "coredata",
    },
    {
      id: 187,
      question: "What is a managed object in Core Data?",
      code: `KeyPoints:
      • A managed object represents an instance of an entity in the data model.
      • It is an instance of the NSManagedObject class or its subclasses.
      • Managed objects are automatically managed by the NSManagedObjectContext.`,
      category: "coredata",
    },
    {
      id: 188,
      question: "What is a versioned store in Core Data?",
      code: `KeyPoints:
      • A versioned store allows you to manage different schema versions of the same data.
      • It is used when migrating from one data model version to another.
      • Core Data automatically handles store versioning during migrations.`,
      category: "coredata",
    },
    {
      id: 189,
      question: "What is Core Data’s relationship to SwiftUI?",
      code: `KeyPoints:
      • Core Data integrates seamlessly with SwiftUI via @FetchRequest and @ObservedObject.
      • It allows for data-driven UI updates in SwiftUI applications.
      • Changes to Core Data entities automatically reflect in the UI.`,
      category: "coredata",
    },
    {
      id: 190,
      question: "What is the purpose of NSPersistentStore in Core Data?",
      code: `KeyPoints:
      • NSPersistentStore is responsible for connecting the managed object context to the underlying data store.
      • It supports multiple storage options such as SQLite, binary, or in-memory.
      • The store ensures data persistence and synchronization between memory and disk.`,
      category: "coredata",
    },
    {
      id: 191,
      question:
        "What are the different types of persistent stores supported by Core Data?",
      code: `KeyPoints:
      • SQLite – Default and widely used store type.
      • Binary – Stores data in a binary format, suitable for macOS use cases.
      • In-memory – Data exists only in RAM, lost on app termination.
      • CloudKit – Syncs data across devices using iCloud, available from iOS 13+.`,
      category: "coredata-new",
    },
    {
      id: 192,
      question: 'What is a "context merge", and when would you use it?',
      code: `KeyPoints:
      • A context merge combines changes from one NSManagedObjectContext into another.
      • Used when multiple contexts work on the same persistent store.
      • Essential in background-to-main context syncs.
      • Avoids data inconsistency and ensures latest data is reflected across contexts.`,
      category: "coredata-new",
    },
    {
      id: 193,
      question: "Explain the difference between main and private queue contexts.",
      code: `KeyPoints:
      • Main queue context is bound to the main thread and used for UI work.
      • Private queue context operates on its own background thread.
      • Main queue is convenient but less performant for heavy tasks.
      • Private queue is used for background saving, parsing, importing.`,
      category: "coredata-new",
    },
    {
      id: 194,
      question: "How do you ensure thread safety in Core Data?",
      code: `KeyPoints:
      • Use separate NSManagedObjectContexts for each thread or queue.
      • Never pass NSManagedObject directly across threads.
      • Use perform or performAndWait for context operations.
      • Share object identity using NSManagedObjectID between contexts.`,
      category: "coredata-new",
    },
    {
      id: 195,
      question:
        "What are batch updates and how are they different from regular updates?",
      code: `KeyPoints:
      • Batch updates modify multiple records directly in the persistent store.
      • Regular updates load objects into memory and modify them.
      • Batch updates are more performant for large datasets.
      • They bypass the context and do not update in-memory objects automatically.`,
      category: "coredata-new",
    },
    {
      id: 196,
      question: "What are transient properties in Core Data?",
      code: `KeyPoints:
      • Transient properties are not persisted to the data store.
      • Used to hold temporary or computed values during runtime.
      • Useful for UI state or derived calculations.
      • Declared in the model editor by unchecking “Transient” box.`,
      category: "coredata-new",
    },
    {
      id: 197,
      question: "What is the difference between save() and performAndWait?",
      code: `KeyPoints:
      • save() commits changes in a context to the persistent store.
      • performAndWait(_:) is used to safely perform context operations on its queue.
      • performAndWait ensures thread safety for synchronous code execution.
      • They are often used together to ensure safe and correct saves.`,
      category: "coredata-new",
    },
    {
      id: 198,
      question: "What is the role of NSMappingModel?",
      code: `KeyPoints:
      • NSMappingModel defines how data maps between old and new models during migration.
      • Used for custom migrations when automatic mapping isn't sufficient.
      • Can be created manually or inferred if models are simple.
      • Works with NSMigrationManager to process data transformations.`,
      category: "coredata-new",
    },
    {
      id: 199,
      question: "How would you implement undo/redo with Core Data?",
      code: `KeyPoints:
      • Enable undo support on NSManagedObjectContext by assigning an NSUndoManager.
      • Changes can be grouped with processPendingChanges().
      • Use undoManager?.undo() and redo() to trigger actions.
      • Useful for text editing, drawing apps, or complex form flows.`,
      category: "coredata-new",
    },
    {
      id: 200,
      question: "What is a fetched property?",
      code: `KeyPoints:
      • A fetched property is a dynamic, read-only relationship.
      • It runs a fetch request instead of maintaining a static link.
      • Not persisted, and evaluated when accessed.
      • Useful for loosely-coupled or filtered relationships.`,
      category: "coredata-new",
    },
    {
      id: 201,
      question: "Can Core Data work with Swift structs?",
      code: `KeyPoints:
      • Core Data is designed for reference types, specifically NSManagedObject subclasses.
      • Structs are value types and not directly compatible with Core Data.
      • To use structs, data must be mapped to/from managed objects manually.
      • SwiftData (iOS 17+) introduces more support for value types, but Core Data itself remains class-based.`,
      category: "coredata-new",
    },
    {
      id: 202,
      question: "What is Core Data's role in app architecture (MVC, MVVM, etc.)?",
      code: `KeyPoints:
      • In MVC, Core Data acts as the Model layer, managing persistence and relationships.
      • In MVVM, Core Data is often wrapped by repositories or use case layers to abstract complexity.
      • ViewModels should not directly access NSManagedObject for better separation.
      • Use fetched results controllers or publishers to drive the UI reactively.`,
      category: "coredata-new",
    },
    {
      id: 203,
      question: "Explain parent-child context pattern.",
      code: `KeyPoints:
      • A child context inherits its parent’s persistent store coordinator.
      • Changes in child context remain local until saved to parent.
      • Promotes isolated editing sessions and controlled saving.
      • Often used for background imports or editing workflows.`,
      category: "coredata-new",
    },
    {
      id: 204,
      question: "How do you deal with merge conflicts in Core Data?",
      code: `KeyPoints:
      • Merge conflicts occur when multiple contexts modify the same object.
      • Use merge policies like .mergeByPropertyObjectTrump or .mergeByPropertyStoreTrump.
      • NSMergePolicy resolves data conflicts based on defined strategy.
      • Always merge changes from background contexts properly into the main context.`,
      category: "coredata-new",
    },
    {
      id: 205,
      question: "What is the purpose of automaticallyMergesChangesFromParent?",
      code: `KeyPoints:
      • Enables a context to automatically merge changes saved in its parent.
      • Avoids manual notifications or fetch refreshes.
      • Commonly used in UI contexts to reflect background updates.
      • Helps maintain data consistency across the stack.`,
      category: "coredata-new",
    },
    {
      id: 206,
      question: "What is NSPersistentCloudKitContainer?",
      code: `KeyPoints:
      • A subclass of NSPersistentContainer introduced to integrate Core Data with CloudKit.
      • Automatically syncs local Core Data changes to iCloud.
      • Handles conflict resolution and remote change tracking.
      • Requires correct entitlements, container setup, and iCloud capabilities.`,
      category: "coredata-new",
    },
    {
      id: 207,
      question: "How does indexing in Core Data work?",
      code: `KeyPoints:
      • Indexes improve fetch performance by reducing lookup times.
      • Can be enabled in the model editor for specific attributes.
      • Especially useful for frequently queried or sorted fields.
      • Core Data handles the underlying index generation in the persistent store.`,
      category: "coredata-new",
    },
    {
      id: 208,
      question: "When would you prefer manual migration over lightweight?",
      code: `KeyPoints:
      • Use manual migration when structural changes are complex.
      • Required when renaming entities, transforming data, or adding custom logic.
      • Involves creating NSMappingModel and custom migration code.
      • Offers full control over how data moves between versions.`,
      category: "coredata-new",
    },
    {
      id: 209,
      question: "How do you profile Core Data performance?",
      code: `KeyPoints:
      • Use Instruments with the Core Data template for real-time tracking.
      • Monitor fetch time, faulting, memory usage, and save latency.
      • Look for fetch frequency and batch size effectiveness.
      • Use SQL Debug logging to inspect underlying queries.`,
      category: "coredata-new",
    },
    {
      id: 210,
      question: "How do you store binary data efficiently?",
      code: `KeyPoints:
      • Use the “Allows External Storage” option for Binary Data attributes.
      • Core Data decides whether to store the blob in the store or in a separate file.
      • Prevents bloating the database file with large media.
      • Ideal for images, videos, or large documents.`,
      category: "coredata-new",
    },
    {
      id: 211,
      question: "How do faults help with memory usage?",
      code: `KeyPoints:
      • Faults are lightweight stand-ins for real data objects.
      • They delay data loading until it's explicitly accessed.
      • This avoids loading the entire object graph into memory.
      • Reduces memory footprint and speeds up initial fetches.`,
      category: "coredata-new",
    },
    {
      id: 212,
      question: "What is the difference between delete and batch delete?",
      code: `KeyPoints:
      • Standard delete loads objects into memory before deleting.
      • Batch delete performs deletion directly at the store level.
      • Batch delete is faster and more efficient for large datasets.
      • Batch deletes bypass the context, so changes must be merged manually.`,
      category: "coredata-new",
    },
    {
      id: 213,
      question: "Can you have multiple stores in one Core Data stack?",
      code: `KeyPoints:
      • Yes, Core Data supports multiple persistent stores in a single stack.
      • Each store can be of a different type (e.g., SQLite, in-memory).
      • Entities can be confined to specific stores using configurations.
      • Useful for modular storage strategies and data separation.`,
      category: "coredata-new",
    },
    {
      id: 214,
      question: "What’s the impact of relationship cardinality on performance?",
      code: `KeyPoints:
      • To-One relationships are lightweight and easy to traverse.
      • To-Many relationships can impact fetch performance if not optimized.
      • Use fetched properties or batch fetching for large collections.
      • Proper indexing and faulting help mitigate performance issues.`,
      category: "coredata-new",
    },
    {
      id: 215,
      question: "How do you enforce uniqueness in Core Data?",
      code: `KeyPoints:
      • Set constraints on entity attributes in the data model.
      • Use constraint validation or merge policies during save.
      • Constraints are enforced at the store level, not just in-memory.
      • Helps prevent duplication and maintain data integrity.`,
      category: "coredata-new",
    },
    {
      id: 216,
      question: "How can you debug Core Data issues?",
      code: `KeyPoints:
      • Enable SQL debugging with -com.apple.CoreData.SQLDebug.
      • Use Instruments with the Core Data and Allocations templates.
      • Inspect NSManagedObjectContext save failures and merge conflicts.
      • Log context changes and use breakpoints to trace faulty logic.`,
      category: "coredata-new",
    },
    {
      id: 217,
      question: "What is derived attribute and when do you use it?",
      code: `KeyPoints:
      • Derived attributes are computed based on other attribute values.
      • Added in Core Data model editor for automatic computation.
      • Reduce redundancy and prevent manual updates across fields.
      • Ideal for maintaining calculated fields like totalPrice = unitPrice * quantity.`,
      category: "coredata-new",
    },
    {
      id: 218,
      question: "What are Core Data migrations pitfalls?",
      code: `KeyPoints:
      • Data loss if mappings are misconfigured or incomplete.
      • Migration errors when changing relationship cardinality or constraints.
      • Issues when working with multiple versions or renaming entities.
      • Manual testing and backup before deployment are crucial.`,
      category: "coredata-new",
    },
    {
      id: 219,
      question: "How does NSMergePolicy affect data integrity?",
      code: `KeyPoints:
      • Controls how conflicts between contexts are resolved.
      • Options include error, object trump, store trump, etc.
      • Inappropriate policy can overwrite valid data silently.
      • Choose policies based on use-case: last-write-wins or strict consistency.`,
      category: "coredata-new",
    },
    {
      id: 220,
      question: "How do you handle version control for Core Data models?",
      code: `KeyPoints:
      • Add new model versions in Xcode using Data Model Versioning.
      • Never modify the existing model directly once in use.
      • Use Lightweight or Manual Migration to transition between versions.
      • Keep .xcdatamodeld under source control for traceability.`,
      category: "coredata-new",
    },
    {
      id: 221,
      question: "How do you validate data in Core Data?",
      code: `KeyPoints:
      • Use validation methods like validateForInsert and validateForUpdate.
      • Add constraints in the data model for attributes and relationships.
      • Implement custom validation logic in managed object subclasses.
      • Return NSError with userInfo describing the validation failure.`,
      category: "coredata-new",
    },
    {
      id: 222,
      question: "How do you test Core Data logic in unit tests?",
      code: `KeyPoints:
      • Use an in-memory store type for isolation and speed.
      • Create a separate NSPersistentContainer for test targets.
      • Insert mock data to simulate real-world scenarios.
      • Clean up the context between tests to avoid state leaks.`,
      category: "coredata-new",
    },
    {
      id: 223,
      question: "When should you use Core Data over UserDefaults?",
      code: `KeyPoints:
      • Use Core Data for complex models, relationships, and querying.
      • UserDefaults is better suited for simple key-value storage.
      • Core Data provides undo/redo, validation, and object lifecycle management.
      • Core Data scales better for large datasets and persistence requirements.`,
      category: "coredata-new",
    },
    {
      id: 224,
      question: "Can Core Data store encrypted data?",
      code: `KeyPoints:
      • Core Data does not offer encryption out of the box.
      • Encrypt sensitive data before storing in attributes.
      • Use iOS’s Data Protection APIs to secure the SQLite file.
      • Consider using encrypted SQLite libraries if needed.`,
      category: "coredata-new",
    },
    {
      id: 225,
      question: "What’s a good Core Data design for syncing with a remote API?",
      code: `KeyPoints:
      • Use a background context for API operations.
      • Map JSON to Core Data using decodable or custom logic.
      • Mark dirty flags for objects needing sync.
      • Resolve conflicts with merge policies or timestamps.
      • Use persistent history tracking for incremental sync.`,
      category: "coredata-new",
    },
    {
      id: 226,
      question:
        "How would you handle schema evolution in a large production app?",
      code: `KeyPoints:
      • Use model versioning with proper naming and documentation.
      • Prefer lightweight migration for additive changes.
      • Use mapping models and tests for complex or destructive changes.
      • Communicate changes with the team and ensure proper QA coverage.`,
      category: "coredata-new",
    },
    {
      id: 227,
      question: "Can Core Data manage schema-less data like JSON blobs?",
      code: `KeyPoints:
      • Core Data is schema-driven by nature.
      • You can store raw JSON blobs using Binary Data or Transformable types.
      • Avoid querying inside the blob—consider using Realm or NoSQL if querying is required.
      • Use schema-less storage for caching or third-party payloads only.`,
      category: "coredata-new",
    },
    {
      id: 228,
      question: "What are some antipatterns in Core Data usage?",
      code: `KeyPoints:
      • Using the main context for heavy background tasks.
      • Passing NSManagedObject across threads.
      • Saving too frequently or not enough.
      • Not handling errors or merge conflicts properly.
      • Overusing fetch requests without batching or predicates.`,
      category: "coredata-new",
    },
    {
      id: 229,
      question: "When should you avoid using Core Data?",
      code: `KeyPoints:
      • For simple key-value or small config storage.
      • When your app doesn’t require persistence or object graph management.
      • If data is mostly transient or fetched from server on demand.
      • When schema flexibility or high write performance is critical.`,
      category: "coredata-new",
    },
    {
      id: 230,
      question:
        "How would you architect Core Data for modular or multi-feature iOS app?",
      code: `KeyPoints:
      • Encapsulate Core Data stack inside a dedicated persistence layer.
      • Use protocols to abstract entity access and persistence logic.
      • Separate managed object models per module using different .xcdatamodeld.
      • Share one persistent container or coordinator with scoped contexts.
      • Keep contexts isolated for each feature to reduce coupling.`,
      category: "coredata-new",
    },
];

export default qaData;
