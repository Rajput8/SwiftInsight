const qaData = [
  {
    id: 1,
    question: "What is Swift and why was it created?",
    answer: "Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It was introduced in 2014 as a modern replacement for Objective-C, offering improved safety, performance, and expressiveness. Swift was designed to be easier to learn while maintaining the power needed for complex app development.",
    category: "basics",
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
    category: "basics",
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
    category: "basics",
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
    category: "advanced",
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
    category: "advanced",
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
    category: "advanced",
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
    category: "frameworks",
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
    category: "tools",
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
    category: "advanced",
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
    category: "updates",
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
          "id": 11,
          "question": "How does the Swift language reduce potential verbosity?",
          "answer": "Swift reduces verbosity through features like type inference, closures with shorthand syntax, synthesized initializers, and memberwise initializers. It also minimizes boilerplate by eliminating the need for header files and reducing redundant syntax.",
          "category": "Interview Insights",
          "code": `// Type inference example
      let message = "Hello, Swift!" // Swift infers the type as String

      // Closure shorthand syntax
      let numbers = [1, 2, 3, 4]
      let squared = numbers.map { $0 * $0 } // No need for explicit parameter names`,
          "resources": [
            {
              "title": "Swift.org - The Swift Programming Language",
              "url": "https://swift.org/documentation/"
            }
          ]
        },
        {
          "id": 12,
          "question": "Which Swift feature helps in situations where the type might be cumbersome to write?",
          "answer": "Type inference helps when dealing with complex types, reducing the need for explicit type annotations, especially with generics and closures.",
          "category": "Interview Insights",
          "code": `// Swift infers the type of the dictionary
      let user: [String: Any] = ["name": "Alice", "age": 25]

      // Inferring closure return type
      let doubledNumbers = [1, 2, 3].map { $0 * 2 }`,
          "resources": [
            {
              "title": "Apple Developer - Swift Type Inference",
              "url": "https://developer.apple.com/documentation/swift/type_inference"
            }
          ]
        },
        {
          "id": 13,
          "question": "Which statement provides the early return pattern?",
          "answer": "The `guard` statement allows early exit from a function if a condition isn't met, improving code readability and reducing nesting.",
          "category": "Interview Insights",
          "code": `func validate(age: Int) {
          guard age >= 18 else {
              print("Underage, access denied!")
              return
          }
          print("Access granted!")
      }`,
          "resources": [
            {
              "title": "Apple Developer - Control Flow in Swift",
              "url": "https://developer.apple.com/documentation/swift/control_flow"
            }
          ]
        },
        {
          "id": 14,
          "question": "What is a lightweight data structure that groups multiple values into a single compound value?",
          "answer": "Tuples in Swift allow grouping multiple values without defining a separate type. They are useful for returning multiple values from a function.",
          "category": "Interview Insights",
          "code": `let person = (name: "Alice", age: 25)
      print(person.name) // Output: Alice`,
          "resources": [
            {
              "title": "Apple Developer - Tuples in Swift",
              "url": "https://developer.apple.com/documentation/swift/tuples"
            }
          ]
        },
        {
          "id": 15,
          "question": "In what scenarios should we use Float and Double?",
          "answer": "Use `Float` for lower precision (32-bit) and `Double` for higher precision (64-bit). `Double` is preferred for accuracy in most cases.",
          "category": "Interview Insights",
          "code": `let piFloat: Float = 3.1415927
      let piDouble: Double = 3.141592653589793`,
          "resources": [
            {
              "title": "Swift.org - Numeric Types",
              "url": "https://swift.org/documentation/api-design-guidelines/"
            }
          ]
        },
        {
          "id": 16,
          "question": "Which operator is known as the 'identity' operator?",
          "answer": "The `===` operator checks if two references point to the same object in memory.",
          "category": "Interview Insights",
          "code": `class Example {}
      let obj1 = Example()
      let obj2 = obj1
      print(obj1 === obj2) // Output: true`,
          "resources": [
            {
              "title": "Apple Developer - Swift Operators",
              "url": "https://developer.apple.com/documentation/swift/swift_standard_library/operators"
            }
          ]
        },
        {
          "id": 17,
          "question": "Which collection types are ordered and unordered?",
          "answer": "Arrays are ordered collections, while sets and dictionaries are unordered.",
          "category": "Interview Insights",
          "code": `let orderedArray = [1, 2, 3] // Maintains order
      let unorderedSet: Set = [3, 1, 2] // Order not guaranteed`,
          "resources": [
            {
              "title": "Apple Developer - Swift Collections",
              "url": "https://developer.apple.com/documentation/swift/collection"
            }
          ]
        },
        {
          "id": 18,
          "question": "Which keyword allows the code flow to continue to the next case after the matching case?",
          "answer": "The `fallthrough` keyword allows execution to continue to the next case in a switch statement.",
          "category": "Interview Insights",
          "code": `let number = 2
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
      }`,
          "resources": [
            {
              "title": "Apple Developer - Swift Switch Statements",
              "url": "https://developer.apple.com/documentation/swift/control_flow"
            }
          ]
        },
        {
          "id": 19,
          "question": "Which transfer statements contribute to flexible loop control?",
          "answer": "`break`, `continue`, and `return` control loop execution. `break` exits, `continue` skips an iteration, and `return` exits a function.",
          "category": "Interview Insights",
          "code": `for i in 1...5 {
          if i == 3 { continue }
          print(i)
      } // Output: 1, 2, 4, 5`,
          "resources": [
            {
              "title": "Apple Developer - Swift Control Flow",
              "url": "https://developer.apple.com/documentation/swift/control_flow"
            }
          ]
        },
        {
          "id": 20,
          "question": "Which type of range should I use when including the first value but excluding the last value?",
          "answer": "A half-open range (`..<`) includes the first value but excludes the last.",
          "category": "Interview Insights",
          "code": `for i in 1..<5 {
          print(i)
      } // Output: 1, 2, 3, 4`,
          "resources": [
            {
              "title": "Apple Developer - Ranges in Swift",
              "url": "https://developer.apple.com/documentation/swift/range"
            }
          ]
        }
];

export default qaData;
