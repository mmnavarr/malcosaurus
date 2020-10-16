---
id: solid_principles
title: S.O.L.I.D Principles
---

S.O.L.I.D is an acronym for the first five object-oriented design(OOD) **principles** by Robert C. Martin, popularly known as Uncle Bob.

These principles, when combined together, make it easy for a programmer to develop software that are easy to maintain and extend. They also make it easy for developers to avoid code smells, easily refactor code, and are also a part of the agile or adaptive software development.

#### S - Single-responsiblity principle
#### O - Open-closed principle
#### L - Liskov substitution principle
#### I - Interface segregation principle
#### D - Dependency Inversion Principle

Let's dive into what each principle is individually!

### Single-responsibility Principle
S.R.P for short - this principle states that:
>
A class should have one and only one reason to change, meaning that a class should have only one job.

### Open-closed Principle
>
Objects or entities should be open for extension, but closed for modification.

### Liskov Substitution Principle
>
Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

All this is stating is that every subclass/derived class should be substitutable for their base/parent class.

### Interface Segregation Principle
>
A client should never be forced to implement an interface that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

This is essentially an all-or-none principle for interface implementation. Either the class implements the interface in its entireity, without additions, otherwise, a new interface should be created. Any more or any less than the interface declares should require a new interface.

### Dependency Inversion (DI) Principle
>
Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.

This principle allows for the decoupling of dependencies.

```typescript
class Repository {
  dbConnection: MySQLConnection;

  constructor(dbConnection: MySQLConnection) {
    this.dbConnection = dbConnection;
  }
}
```
In the example above the Repository class is directly dependent on the MySQLConnect. But what if we want to use a different database connection? You would have to change the Repository class and violate the `Open-closed Principle`. This class should not have to case what database is being used. To fix this and not violate the DI principle the class should look like this:

```typescript
interface IDatabaseConnection {
  connect(): string;
}
class MySQLConnection implements IDatabaseConnection {
  public connect() {
    return "Connection successful";
  }
}

class Repository {
  private dbConnection: IDatabaseConnection;

  constructor(dbConnection: IDatabaseConnection) {
    this.dbConnection = dbConnection;
  }
}
```

 According to the little snippet above, you can now see that both the high level and low level modules depend on abstraction. One could easily swap out the MySQLConnection for a different database connection class without effecting the Repository class.