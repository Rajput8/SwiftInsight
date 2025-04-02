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
    }
];

export default qaData;
