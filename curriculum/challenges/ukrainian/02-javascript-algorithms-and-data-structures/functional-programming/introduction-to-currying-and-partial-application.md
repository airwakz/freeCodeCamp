---
id: 587d7dab367417b2b2512b70
title: Вступ до каррування та часткового застосування функції
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>Арність</dfn> функції – це кількість необхідних їй аргументів. <dfn>Каррування</dfn> функції означає перетворення функції з арністю N на функції N з арністю 1.

Інакше кажучи, каррування реструктурує функцію так, що вона бере один аргумент, потім повертає іншу функцію, яка бере наступний аргумент, і так далі.

Наприклад:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` перетвориться на `3`.

Це знадобиться у вашій програмі, якщо ви не можете надати всі аргументи до функції одночасно. Ви можете зберегти кожен виклик функції в змінну, яка матиме посилання на повернуту функцію, що візьме наступний аргумент, коли він буде доступним. Ось приклад використання згаданої вище функції каррування:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Аналогічно <dfn>часткове застосування</dfn> можна описати як застосування декількох аргументів до функції одночасно і повернення іншої функції, яка застосовується до більшої кількості аргументів. Наприклад:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Заповніть тіло функції `add` так, щоб використовувалось каррування для додавання параметрів `x`, `y` та `z`.

# --hints--

`add(10)(20)(30)` потрібно повернути `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` потрібно повернути `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` потрібно повернути `66`.

```js
assert(add(11)(22)(33) === 66);
```

Ваш код має містити остаточне твердження, яке повертає до `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```