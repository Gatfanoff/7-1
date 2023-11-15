import Validator from "../index";

describe('Validator', () => {
    const validator = new Validator();

    test('Валидное имя пользователя', () => {
        const username = 'user123_example';
        expect(validator.validateUsername(username)).toBe(true);
    });

    test('Имя пользователя слишком короткое', () => {
        const username = '';
        expect(validator.validateUsername(username)).toBe(false);
    });

    test('Имя пользователя слишком длинное', () => {
        const username = 'very_long_username_that_exceeds_maximum_length';
        expect(validator.validateUsername(username)).toBe(false);
    });

    test('Имя пользователя содержит запрещенные символы', () => {
        const username = 'user@name';
        expect(validator.validateUsername(username)).toBe(false);
    });

    test('Имя пользователя содержит более трех цифр подряд', () => {
        const username = 'user1234_example';
        expect(validator.validateUsername(username)).toBe(false);
    });

    test('Имя пользователя начинается цифрами', () => {
        const username = '123user_example';
        expect(validator.validateUsername(username)).toBe(false);
    });

    test('Имя пользователя заканчивается цифрами', () => {
        const username = 'user_example123';
        expect(validator.validateUsername(username)).toBe(false);
    });
});






