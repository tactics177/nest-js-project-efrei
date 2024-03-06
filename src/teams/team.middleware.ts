import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TeamMiddleware implements NestMiddleware {
  private requestCounter = 0;

  use(req: Request, res: Response, next: NextFunction) {
    // Increment the request counter
    this.requestCounter++;

    // Log the incoming request method, URL, and request number
    console.log(`Incoming request ${this.requestCounter}: ${req.method} ${req.originalUrl}`);

    // Perform any other necessary operations

    // Pass the request to the next middleware or route handler
    next();
  }
}
