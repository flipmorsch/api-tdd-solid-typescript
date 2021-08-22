import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided', () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'nan44aocw',
        passwordConfirmation: 'nan44aocw',
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: name'));
  });

  test('should return 400 if no email is provided', () => {
    const sut = new SignUpController();

    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'nan44aocw',
        passwordConfirmation: 'nan44aocw',
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error('Missing param: email'));
  });
});
