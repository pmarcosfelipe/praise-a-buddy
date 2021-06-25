import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepository } from '../repositories/UsersRepository';

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if (!user) throw new Error('E-mail/Password incorrect!');

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error('E-mail/Password incorrect!');

    const token = sign(
      {
        email: user.email,
      },
      '5430bd1c46c832f34785e4f45801035f',
      { subject: user.id, expiresIn: '1d' }
    );

    return token;
  }
}

export { AuthenticateUserService };
