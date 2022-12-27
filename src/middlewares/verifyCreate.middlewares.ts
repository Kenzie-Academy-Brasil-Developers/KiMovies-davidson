import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const verifyCreateMiddlewares =
  (schemas: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const infoUser = req.body;
    let userId = req.authId;

    if (userId) {
      userId = userId.sub;
    }

    const validatedUser = await schemas.validate(
      { ...infoUser, userId: userId },
      {
        stripUnknown: true,
        abortEarly: false,
      }
    );

    req.newSchedules = validatedUser;
    req.newSessions = validatedUser;
    req.newInfoUser = validatedUser;
    req.newInfoCategory = validatedUser;
    req.newInfoPropery = validatedUser;

    return next();
  };

export default verifyCreateMiddlewares;
