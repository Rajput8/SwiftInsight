const qaData = [
  {
    id: 1,
    question: "What is Swift and why was it created?",
    answer: "Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It was introduced in 2014 as a modern replacement for Objective-C, offering improved safety, performance, and expressiveness. Swift was designed to be easier to learn while maintaining the power needed for complex app development.",
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
    answer: "Swift continues to evolve with regular updates. Recent Swift versions have introduced features like async/await for better concurrency, actors for safe shared mutable state, result builders for declarative syntax (used by SwiftUI), improved string handling, better debugging and error handling, and enhanced performance. The language is becoming more stable while still adding powerful features to improve developer productivity.",
    category: "Interview Insights",
    code: `// Async/await example (Swift 5.5+)
func fetchUserData() async throws -> User {
    let (data, response) = try await URLSession.shared.data(from: userURL)
    guard let httpResponse = response as? HTTPURLResponse,
  httpResponse.statusCode == 200 else {
    throw FetchError.badResponse
    }
    return try JSONDecoder().decode(User.self, from: data)
}

// Usage
Task {
    do {
    let user = try await fetchUserData()
    updateUI(with: user)
    } catch {
    handleError(error)
    }
}

// Actor example (Swift 5.5+)
actor UserManager {
    private var users: [String: User] = [:]
    
    func user(id: String) -> User? {
    return users[id]
    }
    
    func addUser(_ user: User, id: String) {
    users[id] = user
    }
}

// Using the actor
let manager = UserManager()
Task {
    await manager.addUser(newUser, id: "123")
    if let user = await manager.user(id: "123") {
    print("Found user: \\(user.name)")
    }
}`,
    resources: [
  {
    title: "Swift.org - Swift 5.5 Released",
    url: "https://swift.org/blog/swift-5-5-released/"
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
    category: "Interview Insights",
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
    category: "Interview Insights",
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
     
    }

];

export default qaData;
