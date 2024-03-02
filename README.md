## `async/await`

### Легенда

Вы устали от бесконечной цепочки `.then().then().catch()` и решили перейти на `async/await`.

### Описание

Перепишите предыдущую задачу с использованием `async/await`. Не забудьте про `try-catch` для отлова ошибок. Для этого используйте async IIFE (модуль `app.js`):
```javascript
(async () => {
  // Your code here with await
})();
```

---

## Testing Async code (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Асинхронный код - это здорово, но заглушки, которые были в предыдущих задачах всегда resolv'ятся, а в реальной жизни так бывает не всегда.

### Описание

Используя механизмы Jest, замокайте функции-заглушку `read`, чтобы у вас была возможность протестировать как `resolve`, так и `reject` на выходе из этой функции.

Должно обеспечиваться 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.

**Подсказка**: чтобы было удобно замокать эту функцию, вынесите её в отдельный модуль.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете. Обратите внимание, что вы тестируете асинхронный код.