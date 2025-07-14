// ❌ Bad Interface Segregation Principle
// interface CounterService {
//   increment(): void;
//   decrement(): void;
//   reset(): void;
//   setCount(value: number): void;
//   getCount(): number;
// }

// ✅ Good Interface Segregation Principle
// interface Incrementable {
//   increment(): void;
// }

// interface Decrementable {
//   decrement(): void;
// }

// interface Resettable {
//   reset(): void;
// }

// interface Settable {
//   setCount(value: number): void;
// }

// interface Gettable {
//   getCount(): number;
// }

const InterfaceSegregation = () => {
  return <>CHECK THE CODE!!!!!!!!</>;
};

export default InterfaceSegregation;
