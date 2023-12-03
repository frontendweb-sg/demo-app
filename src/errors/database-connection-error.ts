import { CustomError } from "./custom-error";

/**
 * Database error
 */
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  constructor(public message: string = "Database connection error") {
    super(message);
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  renderError() {
    return [
      { message: this.message, status: this.statusCode, field: this.name },
    ];
  }
}
