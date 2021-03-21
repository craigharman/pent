import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '@prisma/client';
import userService from '../services/users.service';
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa';

@Route('/users')
export class UsersController extends Controller {
  public userService = new userService();

  @Get('/')
  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  @Get('{userId}')
  public async getUser(@Path() userId: number): Promise<User> {
    return this.userService.findUserById(userId);
  }

  @Post('/')
  public async createUser(@Body() userData: CreateUserDto): Promise<User> {
     return this.userService.createUser(userData);
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: User = req.body;
      const updateUserData: User = await this.userService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: User = await this.userService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
