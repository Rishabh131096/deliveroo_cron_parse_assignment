const generateField = require("../fieldGenerators/index");

test("Simple *", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "*",
    })
  ).toStrictEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59,
  ]);

  expect(
    generateField({
      type: "hour",
      expr: "*",
    })
  ).toStrictEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ]);

  expect(
    generateField({
      type: "day",
      expr: "*",
    })
  ).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]);

  expect(
    generateField({
      type: "month",
      expr: "*",
    })
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  expect(
    generateField({
      type: "dayOfWeek",
      expr: "*",
    })
  ).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("range", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "0-29",
    })
  ).toStrictEqual([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
  ]);

  expect(
    generateField({
      type: "hour",
      expr: "1-12",
    })
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  expect(
    generateField({
      type: "day",
      expr: "5-19",
    })
  ).toStrictEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

  expect(
    generateField({
      type: "month",
      expr: "1-12",
    })
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  expect(
    generateField({
      type: "dayOfWeek",
      expr: "0-3",
    })
  ).toStrictEqual([0, 1, 2, 3]);
});

test("comma", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "0,10,20",
    })
  ).toStrictEqual([0, 10, 20]);

  expect(
    generateField({
      type: "hour",
      expr: "1",
    })
  ).toStrictEqual([1]);

  expect(
    generateField({
      type: "day",
      expr: "5,12",
    })
  ).toStrictEqual([5, 12]);

  expect(
    generateField({
      type: "month",
      expr: "1,6",
    })
  ).toStrictEqual([1, 6]);

  expect(
    generateField({
      type: "dayOfWeek",
      expr: "0,1,2,3,4,5,6",
    })
  ).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("/", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "*/3",
    })
  ).toStrictEqual([
    0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
  ]);

  expect(
    generateField({
      type: "hour",
      expr: "*/4",
    })
  ).toStrictEqual([0, 4, 8, 12, 16, 20]);

  expect(
    generateField({
      type: "day",
      expr: "*/5",
    })
  ).toStrictEqual([1, 6, 11, 16, 21, 26, 31]);

  expect(
    generateField({
      type: "month",
      expr: "*/6",
    })
  ).toStrictEqual([1, 7]);

  expect(
    generateField({
      type: "dayOfWeek",
      expr: "*/1",
    })
  ).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
});

test("range + /", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "0-55/3",
    })
  ).toStrictEqual([
    0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
  ]);

  expect(
    generateField({
      type: "hour",
      expr: "0-12/4",
    })
  ).toStrictEqual([0, 4, 8, 12]);

  expect(
    generateField({
      type: "day",
      expr: "4-24/5",
    })
  ).toStrictEqual([4, 9, 14, 19, 24]);

  expect(
    generateField({
      type: "month",
      expr: "1-12/6",
    })
  ).toStrictEqual([1, 7]);

  expect(
    generateField({
      type: "dayOfWeek",
      expr: "4-4/1",
    })
  ).toStrictEqual([4]);
});

test("range + / + comma", async () => {
  expect(
    generateField({
      type: "minute",
      expr: "10,9,13-50/4",
    })
  ).toStrictEqual([9, 10, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49]);

});
