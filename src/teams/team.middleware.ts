import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TeamMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // You can perform any necessary operations here before passing the request to the route handler.
    // For example, you can log the incoming request, validate request parameters, or perform authentication checks.

    // Example: Log the incoming request method and URL
    console.log(`Incoming request: ${req.method} ${req.originalUrl}`);

    // Example: Perform authentication check
    // if (!req.headers.authorization) {
    //   return res.status(401).json({ message: 'Unauthorized' });
    // }

    // If everything is okay, pass the request to the next middleware or route handler
    next();
  }
}
