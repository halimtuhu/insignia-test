import { User } from '@prisma/client';

export class JwtTokenPayloadDTO {
  constructor(public sub: string, public email: string, public role: string) {}

  static mapFromUser(user: User) {
    return new JwtTokenPayloadDTO(user.id, user.email, user.role);
  }
}
