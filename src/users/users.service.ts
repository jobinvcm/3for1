import { Injectable } from '@nestjs/common';

<<<<<<< HEAD
=======
// This should be a real class/interface representing a user entity
>>>>>>> 3d64bed690f0aca8b006fbd764d424a5ef3b06e8
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'jobin',
      password: 'test',
    },
    {
      userId: 2,
      username: 'jobinvcm',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username == username);
  }
}
