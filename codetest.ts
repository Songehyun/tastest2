function isIntegerCheck(value: number): boolean {
  let checkValue: boolean = Number.isInteger(value);
  return checkValue;
}

function add(a: number, b: number): number {
  if (isIntegerCheck(a) === false || isIntegerCheck(b) === false) {
    throw new Error("매개변수 둘중 하나라도 정수가 아니라면 에러를 발생시키기");
  }
  let result: number = a + b;
  return result;
}

try {
  const result: number = add(2, 3);
  console.log(result);

  const resultWithFloadt: number = add(2.5, 3);
  console.log(resultWithFloadt);
} catch (Error) {}
