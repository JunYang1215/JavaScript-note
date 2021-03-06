/**
 * SOLID原则
 *
 * Single Responsibility Principle：单一职责原则
 * Open Closed Principle：开闭原则
 * Liskov Substitution Principle：里氏替换原则
 * Law of Demeter：迪米特法则
 * Interface Segregation Principle：接口隔离原则
 * Dependence Inversion Principle：依赖倒置原则
 *
 *
 * 把这六个原则的首字母联合起来（两个 L 算做一个）就是 SOLID （solid，稳定的），
 * 其代表的含义就是这六个原则结合使用的好处：建立稳定、灵活、健壮的设计。
 */


// 单一职责原则（SRP）
// 指的是一个类或者一个方法只做一件事。如果一个类承担的职责过多，
// 就等于把这些职责耦合在一起，一个职责的变化就可能抑制或者削弱这个类完成其他职责的能力


// 开闭原则 (OCP)
// 对扩展开放，对修改关闭。意为一个类独立之后就不应该去修改它，而是以扩展的方式适应新需求


// 里氏替换原则 (LSP)
// 所有基类出现的地方都可以用派生类替换而不会程序产生错误。子类可以扩展父类的功能，但不能改变父类原有的功能。

// 接口隔离原则 (ISP)
// 类不应该依赖不需要的接口，知道越少越好。

// 依赖倒置原则 (DIP)
// 指的是高级模块不应该依赖低级模块，而是依赖抽象。抽象不能依赖细节，细节要依赖抽象。
// 比如类A内有类B对象，称为类A依赖类B，但是不应该这样做，而是选择类A去依赖抽象。




