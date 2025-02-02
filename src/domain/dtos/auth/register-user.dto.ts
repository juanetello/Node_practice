import { Validators } from "../../../config";

export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string,
    ) { }

    static create(object: { [key: string]: any; }): [string?, RegisterUserDto?] {

        const { name, email, password } = object;

        if (!name) return ['Missing name'];
        if (!email) return ['Missing email'];
        if (!Validators.email.test(email)) return ['Invalid email'];
        if (!password) return ['Invalid password'];
        if (password.length < 6) return ['Password too short'];

        return [
            undefined,
            new RegisterUserDto(name, email.toLowerCase(), password)
        ];
    }
}