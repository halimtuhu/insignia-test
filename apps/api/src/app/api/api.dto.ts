export class ApiResponse<T> {
  constructor(public message: string, public data: T) {}

  static success<T>(data: T, message = 'success') {
    return new ApiResponse(message, data);
  }
}
